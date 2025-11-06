# MERN Stack Blogging Website

A full-stack web application built with MongoDB, Express.js, React, and Node.js (MERN stack) that allows users to register, login, create, edit, and delete blog posts, comment on posts, and browse by category & tag.

## Features
- User authentication and authorization (register/login/logout)
- CRUD operations for blog posts
- Comment system for each blog post
- Categories and tags for organizing blog posts
- Responsive UI (desktop & mobile)
- RESTful API backend with Express & Node.js
- React.js frontend with React Router and Axios
- MongoDB database using Mongoose

## Tech Stack
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Frontend:** React.js, React Router
- **Authentication:** JWT
- **Styling:** Tailwind CSS / CSS Modules
- **Deployment:** (Heroku/Vercel/Netlify)

## Folder Structure
/backend/
├─ controllers/
├─ models/
├─ routes/
├─ middleware/
├─ server.js
└─ package.json

/frontend/
├─ src/
├─ components/
├─ pages/
├─ App.js
└─ index.js
└─ package.json
README.md
LICENSE
.env (not committed)


## Setup Instructions
1. Clone the repo:
git clone https://github.com/ac0628334/MERN-STACK-Blogging-Website.git
cd MERN-STACK-Blogging-Website

2.Backend setup:
cd backend
npm install
cp .env.example .env   # create your .env file with required values
npm start

3.Frontend setup (in a new terminal):
cd ../frontend
npm install
npm start


License

This project is licensed under the MIT License
.

Author: Abhishek Chavan

contact me on 
LinkedIn: https://www.linkedin.com/in/abhishek-chavan-593b51305/ 


