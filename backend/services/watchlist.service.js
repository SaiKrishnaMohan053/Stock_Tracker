const Watchlist = require('../models/watchlist.model');

async function addToWatchlist(userId, symbol) {
    const watchlistItem = new Watchlist({ userId, symbol });
    await watchlistItem.save();
    return watchlistItem;
}

async function getWatchlist(userId) {
    return Watchlist.find({ userId });
}

module.exports = { addToWatchlist, getWatchlist };