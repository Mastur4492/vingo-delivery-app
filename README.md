# Vingo (Food Delivery App)

> A full-stack food delivery platform built with MERN + Firebase + Socket.IO, featuring user/shop/owner flows, real-time delivery tracking, and OTP-based password reset.

## 🌟 Project Summary

Vingo is a modern food delivery web application where:
- Customers can browse shops and items, add to cart, place orders
- Shop owners can manage their shops and menu items
- Delivery agents can track order assignments and real-time location
- Auth includes signup/signin, Google auth, OTP reset, secure JWT cookies

This project shows strong competence in backend API design, frontend state management, authentication workflows, and production-level deployment preparation.

## 🧩 Tech Stack

- **Backend**: Node.js, Express.js, MongoDB (Mongoose), Socket.IO
- **Frontend**: React (Vite), Redux Toolkit, Firebase, Tailwind/CSS
- **Utilities**: Cloudinary image upload, Nodemailer (OTP email), JWT auth
- **Deployment**: Heroku/Vercel/Netlify friendly

## 📁 Repository Structure

- `backend/`
  - `controllers/` API controllers (auth, items, orders, shops, users)
  - `models/` Mongoose schemas
  - `routes/` Express route definitions
  - `middlewares/` auth checks, multer image upload
  - `utils/` tokens, mail, cloudinary
  - `index.js` main server entry

- `frontend/`
  - `src/` React app
  - `components/` reusable UI cards and pages
  - `hooks/` data fetch and location hooks
  - `pages/` main user and owner pages
  - `redux/` state slices (user/owner/map)

## 🚀 Features

- Register/Login/Logout with secure hashed passwords and JWT cookie
- Google sign-in persistency
- Forgot password: OTP email, validation, reset password
- Role-based UI and actions (user, owner, delivery)
- Create/Edit shops/items, order assignment, order status updates
- Real-time delivery tracking with Socket.IO
- City-based item/shop filtering
- Cart checkout with order history views

## ⚙️ Setup Instructions

### Prerequisites

- Node.js 18+
- npm / yarn
- MongoDB (local or Atlas)

### Backend

```bash
cd backend
npm install
```

Create `.env` in `backend/`:

```env
PORT=5000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-secret>
CLOUDINARY_NAME=<cloud-name>
CLOUDINARY_KEY=<key>
CLOUDINARY_SECRET=<secret>
EMAIL_USER=<smtp-email>
EMAIL_PASS=<smtp-password>
```

Run backend:

```bash
npm run dev
```

API runs on `http://localhost:5000`.

### Frontend

```bash
cd frontend
npm install
```

Update `frontend/firebase.js` with your Firebase app config.

Run frontend:

```bash
npm run dev
```

App runs on `http://localhost:5173`.

## 🧪 Testing

- Manually test all flows: register, login, create shop, add items, place order, track delivery
- Use Postman/Insomnia for backend endpoints `api/auth`, `api/item`, `api/order`, etc.

## 📌 Resume Bullet Examples

- Built a full-stack food delivery platform using React, Redux Toolkit, Node.js, Express, and MongoDB with real-time location tracking via Socket.IO.
- Implemented secure authentication with JWT cookies, Google OAuth, OTP-based password recovery, and role-based access control.
- Designed comprehensive CRUD workflows for shop management, order lifecycle, and delivery assignments.

## 👨‍💻 Deployment Notes

- Frontend: Vercel/Netlify
- Backend: Render/Heroku
- Ensure CORS, cookie domain, and secure cookie flags are configured for production.
- Use MongoDB Atlas for production database.

## 📚 Improvements (optional)

- Add unit/integration tests (Jest, Supertest)
- Add pagination and search for shop/items
- Add push notifications for order status changes

## 📝 Acknowledgements

Created as a key portfolio/resume project demonstrating modern SPA and real-time API engineering skills.