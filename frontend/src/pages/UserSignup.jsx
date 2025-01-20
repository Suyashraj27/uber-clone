import React, { useState ,useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {UserDataContext} from '../context/UserContext.jsx';
const UserSignup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState({})

    const navigate = useNavigate()
    const {user, setUser}  = React.useContext(UserDataContext)

    const submitHandler = async (e) => {
        e.preventDefault();
        const newUser = {
            fullname: {
                firstname: firstName,
                lastname: lastName
            },
            email: email,
            password: password
        }

        const response  = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

        if(response.status == 201){
            const data = response.data
            setUser(data)
            localStorage.setItem('token', data.token)
            navigate('/home')
        }

        setPassword('')
        setEmail('')
        setFirstName(' ')
        setLastName(' ')
    }
    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-16 mb-6' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png" alt="" />
                <form onSubmit={(e) => {
                    submitHandler(e)
                }}>
                    <h3 className='text-lg font-medium mb-2'>What's your Name</h3>
                    <div className='flex gap-4 mb-5' >
                        <input
                            required
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value)
                            }}
                            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-sm'
                            type="text"
                            placeholder="First name" />
                        <input
                            required
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value)
                            }}
                            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
                            type="text"
                            placeholder="Last name" />
                    </div>
                    <h3 className='text-lg font-medium mb-2'>What's your Email</h3>
                    <input
                        required
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        type="email"
                        placeholder="email@example.com" />

                    <h3 className='text-lg font-medium mb-2' >Enter Password </h3>

                    <input
                        required
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}

                        className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        type="password"
                        placeholder="password" />
                    <button className='bg-[#111]  font-semibold text-white mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' >Create Account</button>
                    <p className='text-center mb-1'>Already Have a account? <Link to='/login' className='text-blue-600'>Login here</Link> </p>
                </form>
            </div>
            <div>
                <p className='text-[10px] leading-tight' >This site is protected by reCAPTCHA and the <span className='underline'> Google Privacy Policy</span> and <span className='underline'>Terms of Service apply </span></p>
            </div>
        </div>
    )
}
export default UserSignup