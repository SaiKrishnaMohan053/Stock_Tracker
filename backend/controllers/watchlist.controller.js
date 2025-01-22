const watchlistService = require('../services/watchlist.service');
const userService = require('../services/user.service');

async function addToWatchlist(req, res) {
    try {
        const { symbol, email } = req.body;
        const user = await userService.findOrCreateUser(email);
        const watchlistItem = await watchlistService.addToWatchlist(user._id, symbol);
        res.status(201).json(watchlistItem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function getWatchlist(req, res) {
    try {
        const { email } = req.body;
        const user = await userService.findOrCreateUser(email);
        const watchlist = await watchlistService.getWatchlist(user._id);
        res.status(200).json(watchlist);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = { addToWatchlist, getWatchlist };