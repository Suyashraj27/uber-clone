import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import CaptainDetails from '../components/CaptainDetails';
import RidePopUp from '../components/RidePopUp';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';
import { useEffect, useContext } from 'react'
import { SocketContext } from '../context/SocketContext'
import { CaptainDataContext } from '../context/CContext'
import axios from 'axios';
import LiveTracking from '../components/LiveTracking';
const CaptainHome = () => {
    const [ridePopUpPanel, setRidePopUpPanel] = useState(false);
    const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);
    const [ ride, setRide ] = useState(null)
    const ridePopUpPanelRef = useRef(null);
    const confirmRidePopUpPanelRef = useRef(null);

    const { socket } = useContext(SocketContext)
    const { captain } = useContext(CaptainDataContext)

    useEffect(() => {
        socket.emit('join', {
            userId: captain._id,
            userType: 'captain'
        })

        const updateLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {

                    socket.emit('update-location-captain', {
                        userId: captain._id,
                        location: {
                            ltd: position.coords.latitude,
                            lng: position.coords.longitude
                        }
                    })
                })
            }
            
        }

        const locationInterval = setInterval(updateLocation, 10000)
        updateLocation()
        // return () => clearInterval(locationInterval)

    }, [])

    socket.on('new-ride', (data) => {
        
        setRide(data)
        setRidePopUpPanel(true)

    })
    // GSAP animation for RidePopUp
    useGSAP(function () {
        if (ridePopUpPanel) {
            gsap.to(ridePopUpPanelRef.current, {
                transform: 'translateY(0)',
            });
        } else {
            gsap.to(ridePopUpPanelRef.current, {
                transform: 'translateY(100%)',
            });
        }
    }, [ridePopUpPanel]);

    async function confirmRide() {

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/confirm`, {

            rideId: ride._id,
            captainId: captain._id,


        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        setRidePopUpPanel(false)
        setConfirmRidePopUpPanel(true)

    }
    useGSAP(function () {
        if (confirmRidePopUpPanel) {
            gsap.to(confirmRidePopUpPanelRef.current, {
                transform: 'translateY(0)',
            });
        } else {
            gsap.to(confirmRidePopUpPanelRef.current, {
                transform: 'translateY(100%)',
            });
        }
    }, [confirmRidePopUpPanel]);

    return (
        <div className="h-screen">
            <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
                <img className="w-16" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <Link to="/captain-home" className="h-10 w-10 bg-white flex items-center justify-center rounded-full">
                    <i className="text-lg font-medium ri-logout-box-r-line"></i>
                </Link>
            </div>

            <div className="h-3/5">
                <LiveTracking/>
            </div>

            <div className="h-2/5 p-6">
                <CaptainDetails />
            </div>

            
            <div ref={ridePopUpPanelRef} className="fixed w-full z-10 space-y-2 bottom-0 translate-y-full bg-white px-3 py-8">
                <RidePopUp
                    ride={ride}
                    setRidePopUpPanel={setRidePopUpPanel}
                    setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}
                    confirmRide={confirmRide}
                />
            </div>

            {/* ConfirmRidePopUp */}
            <div ref={confirmRidePopUpPanelRef} className="fixed w-full h-screen z-10 space-y-2 bottom-0 ConfirmRidePopUp bg-white px-3 py-8">
                <ConfirmRidePopUp
                    ride = {ride}
                    setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}
                    setRidePopUpPanel={setRidePopUpPanel}
                />
            </div>
        </div>
    );
};

export default CaptainHome;
