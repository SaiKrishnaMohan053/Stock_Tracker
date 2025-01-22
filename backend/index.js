const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/user.route');
const stockRoutes = require('./routes/stock.route');
const portfolioRoutes = require('./routes/portfolio.route');
const watchlistRoutes = require('./routes/watchlist.route');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => console.log('Connected to MongoDB')).catch(err => console.error(err));

app.use('/stockTracker/user', userRoutes);
app.use('/stockTracker/stocks', stockRoutes);
app.use('/stockTracker/portfolio', portfolioRoutes);
app.use('/stockTracker/watchlist', watchlistRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));