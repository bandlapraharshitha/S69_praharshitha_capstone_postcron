# SOCIALMEDIA SCHEDULER AND DASHBOARD
# --------POST CRON----------

**Capstone Project Proposal**
📌 Project Name: Social Media Scheduler & Dashboard
 👤 Student Name: PRAHARSHITHA BANDLA
 📅 Squad: SQUAD-69

📖 Idea Brief
For my capstone project, I am building a Social Media Scheduler & Dashboard specifically for Instagram. This tool will allow users to:

🔹 Track Instagram growth – View insights like likes, shares, impressions, comments, and follower changes over time. Data will be displayed in graphs and charts for better analysis.

 🔹 Schedule posts in advance – Users can upload images, write captions, and set a posting time. Even if they are offline, the post will be automatically uploaded at the scheduled time.

 🔹 Save posts as drafts – Users can edit and schedule later as needed.

 🔹 Connect their Instagram account – Allowing seamless integration and management from one place.

 🔹 User Authentication & Account Linking – Users can sign up, log in, and connect their Instagram account securely.

This project will be developed using MERN stack (MongoDB, Express.js, React.js, Node.js), with Tailwind CSS for styling and Cron Jobs for scheduling the posts.

------------------------------------------------------------------------------------------------------------

 🚀 Why This Project?

✅ Solves a real-world problem – Helps businesses and influencers manage their Instagram efficiently.

✅ Covers multiple tech skills – Includes MERN stack, API integrations, OAuth authentication, Cron Jobs, and    data visualization.


✅ Automation Challenge – Handling scheduled posts makes it a great learning experience.

✅ Showcase-Worthy – Highlights both backend automation & frontend UI skills.

--------------------------------------------------------------------------------------------------------


📅 40-Day Capstone Project Plan – MERN Stack



🗓️ Week 1: Planning & Setup

✅ Day 1: Low-Fidelity Wireframing (Figma)
Design basic wireframes for Login, Dashboard, Post Scheduler, Analytics, and Profile pages.

✅ Day 2: High-Fidelity UI Design (Figma)
Convert wireframes into detailed UI designs with colors, fonts, and icons.

✅ Day 3: MERN Project Initialization
Set up MERN stack project with backend (Node.js, Express.js) and frontend (React.js).
Configure MongoDB database (Atlas) for storing user and post data.
Install necessary dependencies (Express, Mongoose, CORS, etc.).

✅ Day 4-5: Database Schema & API Planning (MongoDB + Express.js)
Define MongoDB schema for Users, Posts, Scheduled Posts, and Analytics.
Plan API routes for authentication, scheduling, and fetching analytics.



🗓️ Week 2: User Authentication & OAuth (MERN Stack)

✅ Day 6-7: Implement User Authentication (JWT & MongoDB)
Develop Signup/Login API with hashed passwords using bcrypt.
Implement JWT-based authentication.

✅ Day 8-9: Instagram OAuth Integration (Node.js + Instagram API)
Set up OAuth authentication using Instagram Graph API.
Store user Instagram access tokens securely in MongoDB.

✅ Day 10: Frontend UI for Authentication & Account Linking (React.js)
Build Login, Signup, and Account Linking UI using React.js and Tailwind CSS.



🗓️ Week 3: Post Scheduling & Drafts (Node.js, MongoDB, Cron Jobs)

✅ Day 11-12: Backend – Post Scheduling API (Express + MongoDB + Cron Jobs)
Create API to schedule posts and store them in MongoDB.
Implement Cron Jobs to check scheduled posts and publish them at the correct time.

✅ Day 13-14: Frontend – Post Scheduling UI (React.js + Tailwind CSS)
Build UI for uploading images, writing captions, and setting post schedules.
Implement a “Save as Draft” feature.

✅ Day 15: Instagram Auto-Posting (Node.js + Instagram Graph API)
Integrate Instagram API to publish posts automatically at the scheduled time.
Handle API authentication and error handling.

✅ Day 16: Testing & Debugging Post Scheduling
Test scheduled posts with different time zones.
Debug authentication errors and API rate limits.


🗓️ Week 4: Analytics Dashboard (MongoDB + Node.js + React.js)

✅ Day 17-18: Backend – Fetching Instagram Analytics Data
Use Instagram Graph API to fetch likes, shares, comments, impressions, and followers.
Store historical data in MongoDB for growth tracking.

✅ Day 19-20: Frontend – Analytics Dashboard UI (React.js + Chart.js)
Build a dashboard to display analytics in graphs.
Use Chart.js or Recharts to visualize engagement trends.

✅ Day 21: Backend & Frontend Integration
Connect analytics API with React UI components.


🗓️ Week 5: Profile, Settings & Testing (MERN Stack)

✅ Day 22-23: Profile & Settings Page
Allow users to update profile, connect/disconnect Instagram account, and logout.

✅ Day 24-25: Testing & Debugging (MERN Full Stack)
Test OAuth authentication, scheduling, and analytics across different user accounts.
Fix API response delays and UI bugs.

✅ Day 26-27: UI Enhancements & Mobile Responsiveness
Ensure Tailwind CSS styling is responsive.
Improve UX based on feedback.

✅ Day 28: Final API & Database Optimization
Optimize MongoDB queries and Express.js APIs for better performance.


🗓️ Week 6: Deployment & Final Touches (MERN Stack on Vercel/Netlify)

✅ Day 29-30: Deploy Backend (Node.js + Express on Render/Vercel)
Deploy backend to Render, Vercel, or AWS.

✅ Day 31: Deploy Frontend (React.js on Netlify/Vercel)
Host React.js frontend on Netlify or Vercel.

✅ Day 32-33: Final Testing on Live Server
Test all features on the deployed version.

✅ Day 34-35: Final Debugging & Performance Optimization
Ensure Instagram API rate limits are handled.

✅ Day 36-37: Prepare Documentation & Code Comments
Write detailed documentation for API endpoints and database schemas.

✅ Day 38-39: Prepare Capstone Presentation & Demo Video
Record screen demo of post scheduling, analytics, and UI.

✅ Day 40: Submit Project & Presentation

----------------------------------------------------

backend installation:
npm install express mongoose dotenv bcryptjs jsonwebtoken cors body-parser
npm install nodemon --save-dev


frontend installation:
npm install axios react-router-dom nodemon