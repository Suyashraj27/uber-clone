# Uber Clone

This is a full-stack Uber clone application built using Node.js, Express, MongoDB for the backend, and React with Vite for the frontend.

## Project Structure

### Backend
Backend/ ├── controllers/ │ ├── captain.controller.js │ ├── map.controller.js │ ├── ride.controller.js │ └── user.controller.js 
├── db/ │ └── db.js ├── middlewares/ │ └── auth.middleware.js ├── models/ │ ├── blacklistToken.model.js │ ├── captain.model.js │ ├── ride.model.js │ └── user.model.js 
├── routes/ │ ├── captain.routes.js │ ├── maps.routes.js │ ├── ride.routes.js │ └── user.routes.js 
├── services/ │ ├── captain.service.js │ ├── maps.service.js │ ├── ride.service.js │ └── user.service.js 
├── socket.js ├── .env ├── app.js ├── package.json ├── server.js └── README.md


### Frontend

frontend/ ├── .env ├── .gitignore ├── eslint.config.js ├── index.html ├── package.json ├── postcss.config.js ├── public/ 
├── README.md ├── src/ │ ├── App.css │ ├── App.jsx │ ├── assets/ │ ├── components/ │ │ ├── CaptainDetails.jsx │ │ ├── ConfirmRide.jsx │ │ ├── ConfirmRidePopUp.jsx │ │ ├── FinishRide.jsx │ │ ├── LiveTracking.jsx │ │ ├── LocationSearchPanel.jsx │ │ ├── LookingForDriver.jsx │ │ ├── RidePopUp.jsx │ │ ├── VehiclePanel.jsx │ │ └── WaitingForDriver.jsx │ 
├── context/ │ │ ├── CContext.jsx │ │ ├── SocketContext.jsx │ │ └── UserContext.jsx │ ├── index.css │ ├── main.jsx │ 
├── pages/ │ │ ├── CaptainHome.jsx │ │ ├── CaptainLogin.jsx │ │ ├── CaptainLogout.jsx │ │ ├── CaptainProtectWrapper.jsx │ │ ├── CaptainRiding.jsx │ │ ├── CaptainSignup.jsx │ │ ├── Home.jsx │ │ ├── Riding.jsx │ │ ├── Start.jsx │ │ ├── UserLogin.jsx │ │ ├── UserLogout.jsx │ │ ├── UserProtectWrapper.jsx │ │ └── UserSignup.jsx
├── tailwind.config.js └── vite.config.js


## Setup

### Backend

1. Navigate to the `Backend` directory.
2. Install the dependencies:

```sh
npm install

Create a .env file in the Backend directory with the following content:
PORT=4000
DB_CONNECT=mongodb://0.0.0.0/uber-clone
JWT_SECRET=gX8#2P$lE!kX&94Bq@LmZ$T#Nv*AyVz8R1$Kd5F@Jo9&L#Xp$Q
GOOGLE_MAPS_API=YOUR_GOOGLE_MAPS_API_KEY

Start the server:
node server.js

### Frontend
1. Navigate to the frontend directory.
2. Install the dependencies:

npm install

