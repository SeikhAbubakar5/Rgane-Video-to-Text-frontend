# React + Vite

# Video Summarizer Backend (Express.js)

This is the backend API for a MERN stack project that allows users to register, login, submit YouTube video URLs, and get AI-based video summaries.

---

##  Features

- User Authentication (Signup, Login, Logout)
- JWT-based auth with HTTP-only cookies
- Submit YouTube video URLs
- Get user submission history
- ✂Summarize video transcript
- CORS enabled for frontend integration

---

## Folder Structure
/server
│
├── models/
│   ├── User.js
│   └── Summary.js
│
├── controllers/
│   ├── authController.js
│   ├── videoController.js
│   └── paymentController.js
│
├── routes/
│   ├── authRoutes.js
│   ├── videoRoutes.js
│   └── paymentRoutes.js
│
├── middleware/
│   └── authMiddleware.js
│
├── utils/
│   ├── youtube.js
│   └── summarize.js
## 🔧 Setup Instructions

### 1. Clone and Install
npm install
2. Create .env File
PORT=7002
MONGODB_URI=mongodb+srv://seikhabubakar47:Seikh786@cluster25.yz6nwo2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster25
OPENAI_KEY=I remove due to commit issue
STRIPE_SECRET_KEY=I remove due to commit issue
YOUTUBE_API_KEY=AIzaSyDMU1evWnvrq8tzULuRfUOa2NppK5-O51U
JWT_SECRET=SECRET
3. Start Server
bash
npm start
✅ API Endpoints
Auth
POST /api/auth/signup – Create account

POST /api/auth/login – Login

GET /api/auth/logout – Logout

Video
POST /api/video/submit – Submit video URL

GET /api/video/history – Get video submission history

POST /api/video/summary – Get video summary

POST /create-checkout-session'- CreateCheckoutSession

POST/webhook', express.raw({ type: 'application/json' }), -stripeWebhook

🌍 CORS Setup
CORS is configured to allow requests from the frontend with credentials: true.

Update allowedOrigins in index.js:
const allowedOrigins = ["http://localhost:5173", "https://your-frontend-url.vercel.app"];




## Frontend - `README.md`


# Video Summarizer Frontend (React)

This is the React frontend for a MERN app where users can register, login, submit YouTube URLs, and generate AI summaries.

---

## Tech Stack

- React + Vite
- React Router
- Axios + hot-toast
- Material UI (MUI)
- JWT-based authentication (cookie)

---

## Setup Instructions

### 1. Clone and Install

npm install
2. Create config.js
// src/config.js
export const API_BASE_URL = "https://rganevideototextai.onrender.com/api";
3. Start Development Server
npm run dev
 Pages & Routes
Route	Component	Description
/	Signup.jsx	Default route for new users
/login	Login.jsx	Login page
/dashboard	Dashboard.jsx	Main app page after login

 Features
 Secure authentication with cookies

 Submit YouTube video URL

Fetch video submission history

✂ Summarize video with button click

 Toast notifications for feedback

