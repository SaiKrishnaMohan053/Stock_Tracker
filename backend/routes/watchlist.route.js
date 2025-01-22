const express = require('express');
const watchlistController = require('../controllers/watchlist.controller');
const router = express.Router();

router.post('/addToWatchlist', watchlistController.addToWatchlist);
router.get('/getWatchlist', watchlistController.getWatchlist);

module.exports = router;