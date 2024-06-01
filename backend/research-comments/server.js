const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const commentRoutes = require('./routes/commentRoutes');
require('dotenv').config();
const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());

// connect to MongoDB
connectDB();

// routes
app.use('/api', commentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Research Hub server is running on port ${PORT}`);
});
