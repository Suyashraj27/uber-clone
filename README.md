
```markdown
# Uber Clone

This is a full-stack Uber clone application built using Node.js, Express, MongoDB for the backend, and React with Vite for the frontend.

## Project Structure

### Backend

```
Backend/
├── controllers/
│   ├── captain.controller.js
│   ├── map.controller.js
│   ├── ride.controller.js
│   └── user.controller.js
├── db/
│   └── db.js
├── middlewares/
│   └── auth.middleware.js
├── models/
│   ├── blacklistToken.model.js
│   ├── captain.model.js
│   ├── ride.model.js
│   └── user.model.js
├── routes/
│   ├── captain.routes.js
│   ├── maps.routes.js
│   ├── ride.routes.js
│   └── user.routes.js
├── services/
│   ├── captain.service.js
│   ├── maps.service.js
│   ├── ride.service.js
│   └── user.service.js
├── socket.js
├── .env
├── app.js
├── package.json
├── server.js
└── README.md
```

### Frontend

```
frontend/
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── public/
├── README.md
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── assets/
│   ├── components/
│   │   ├── CaptainDetails.jsx
│   │   ├── ConfirmRide.jsx
│   │   ├── ConfirmRidePopUp.jsx
│   │   ├── FinishRide.jsx
│   │   ├── LiveTracking.jsx
│   │   ├── LocationSearchPanel.jsx
│   │   ├── LookingForDriver.jsx
│   │   ├── RidePopUp.jsx
│   │   ├── VehiclePanel.jsx
│   │   └── WaitingForDriver.jsx
│   ├── context/
│   │   ├── CContext.jsx
│   │   ├── SocketContext.jsx
│   │   └── UserContext.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── pages/
│   │   ├── CaptainHome.jsx
│   │   ├── CaptainLogin.jsx
│   │   ├── CaptainLogout.jsx
│   │   ├── CaptainProtectWrapper.jsx
│   │   ├── CaptainRiding.jsx
│   │   ├── CaptainSignup.jsx
│   │   ├── 

Home.jsx


│   │   ├── Riding.jsx
│   │   ├── Start.jsx
│   │   ├── UserLogin.jsx
│   │   ├── UserLogout.jsx
│   │   ├── UserProtectWrapper.jsx
│   │   └── UserSignup.jsx
├── tailwind.config.js
└── vite.config.js
```

## Setup

### Backend

1. Navigate to the `Backend` directory.
2. Install the dependencies:

```sh
npm install
```

3. Create a `.env` file in the 

Backend

 directory with the following content:

```
PORT=4000
DB_CONNECT=mongodb://0.0.0.0/uber-clone
JWT_SECRET=gX8#2P$lE!kX&94Bq@LmZ$T#Nv*AyVz8R1$Kd5F@Jo9&L#Xp$Q
GOOGLE_MAPS_API=YOUR_GOOGLE_MAPS_API_KEY
```

4. Start the server:

```sh
node server.js
```

### Frontend

1. Navigate to the 

frontend

 directory.
2. Install the dependencies:

```sh
npm install
```

3. Create a `.env` file in the 

frontend

 directory with the following content:

```
VITE_BASE_URL=http://localhost:4000
VITE_GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY
```

4. Start the development server:

```sh
npm run dev
```

## API Endpoints

### User Registration

- **URL:** `/users/register`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```
- **Responses:**
  - `201 Created`: Returns the created user and a JWT token.
  - `400 Bad Request`: Returns validation errors or if the user already exists.

### User Login

- **URL:** `/users/login`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```
- **Responses:**
  - `200 OK`: Returns the JWT token and user details.
  - `400 Bad Request`: Returns validation errors.
  - `401 Unauthorized`: Returns if the email or password is incorrect.

### Get User Profile

- **URL:** `/users/profile`
- **Method:** `GET`
- **Headers:**
  - `Authorization: Bearer <token>`
- **Responses:**
  - `200 OK`: Returns the user profile.
  - `401 Unauthorized`: Returns if the token is invalid or missing.

### User Logout

- **URL:** `/users/logout`
- **Method:** `GET`
- **Headers:**
  - `Authorization: Bearer <token>`
- **Responses:**
  - `200 OK`: Returns a logout message.
  - `401 Unauthorized`: Returns if the token is invalid or missing.

## Files

### Backend

- **app.js**: Sets up the Express application, connects to the database, and defines the routes.
- **server.js**: Creates and starts the HTTP server.
- **db/db.js**: Contains the function to connect to the MongoDB database.
- **models/user.model.js**: Defines the user schema and model, including methods for generating auth tokens and hashing passwords.
- **models/blacklistToken.model.js**: Defines the schema and model for blacklisted tokens.
- **services/user.service.js**: Contains the service function to create a new user.
- **routes/user.routes.js**: Defines the user registration, login, profile, and logout routes with validation.
- **controllers/user.controller.js**: Handles the user registration, login, profile retrieval, and logout logic, including validation, checking for existing users, hashing passwords, and creating new users.
- **middlewares/auth.middleware.js**: Contains the middleware to authenticate users by verifying JWT tokens and checking for blacklisted tokens.

### Frontend

- **src/App.jsx**: Main application component with route definitions.
- **src/pages/**: Contains the different pages of the application.
- **src/components/**: Contains reusable components.
- **src/context/**: Contains context providers for managing global state.
- **src/index.css**: Global CSS styles.
- **src/main.jsx**: Entry point for the React application.
- **vite.config.js**: Configuration file for Vite.
- **tailwind.config.js**: Configuration file for Tailwind CSS.

## License

This project is licensed under the MIT License.
```

Save this content in a file named `README.md` in the `uber-clone` folder.
Save this content in a file named `README.md` in the `uber-clone` folder.
