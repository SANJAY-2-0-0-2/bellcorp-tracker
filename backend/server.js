const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Initialize the Express app
const app = express();

// 1. MIDDLEWARE
app.use(cors()); 
app.use(express.json()); 

// 2. DATABASE CONNECTION
// I used a fallback URL if the .env file is missing, but .env is for security
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/bellcorp_tracker';

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('------------------------------------');
        console.log('MongoDB Connected Successfully');
        console.log('------------------------------------');
    })
    .catch((err) => {
        console.error('MongoDB Connection Failed:', err.message);
    });

// 3. ROUTES
// Importing the modular routes i created earlier
const transactionRoutes = require('./routes/transactionRoutes');

// Defining the base URL for API
app.use('/api/transactions', transactionRoutes);

// Simple Health Check route to verify the server is alive
app.get('/', (req, res) => {
    res.send('BellCorp Backend API is running...');
});

// 4. SERVER STARTUP
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is live on: http://localhost:${PORT}`);
    console.log(`Waiting for requests from Frontend...`);
});