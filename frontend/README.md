# Personal Expense Tracker (MERN Stack)

## Project Overview
This is a full-stack expense management application I built to help users track their daily spending. My goal with this project was to create a seamless experience where users can log transactions, categorize their spending, and see their financial data update in real-time.

## Features I Implemented
* **Full CRUD Operations:** Users can add, view, and delete transactions.
* **Dynamic Dashboard:** The UI updates instantly when a transaction is added—no page refresh required.
* **Smart Validation:** I built custom validation on both the frontend (React) and backend (Node/Express) to ensure data integrity (e.g., ensuring amounts are numbers and fields aren't empty).
* **Secure Authentication:** I implemented a sign in page
* **Email:** user@test.com
* **Password:** 123456

Alternatively, you can create a new account via the Register page, and the data will persist in your local MongoDB instance.
* **Protected Routing:** Using React Router, I created a guard component that prevents unauthenticated users from accessing the dashboard.



## How to Run This Locally

### 1. Prerequisites
You’ll need Node.js and MongoDB installed on your machine.

### 2. Backend Setup
1. Navigate to the `/backend` folder.
2. Run `npm install` to grab the dependencies.
3. Create a `.env` file and add your `MONGO_URI` (e.g., `mongodb://127.0.0.1:27017/tracker`).
4. Start the server with `npm start`.

### 3. Frontend Setup
1. Navigate to the `/frontend` folder.
2. Run `npm install`.
3. Start the React app with `npm start`.
4. Open `http://localhost:3000` in your browser.

## Troubleshooting
If you run into a "Failed to save" error, make sure your local MongoDB service is actually running! I also fixed a common issue where the frontend was sending 'text' while the backend expected 'title'—the current code is fully synchronized.

