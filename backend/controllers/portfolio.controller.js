const portfolioService = require('../services/portfolio.service');
const userService = require('../services/user.service');

async function addStock(req, res) {
    try {
        const { symbol, quantity, boughtPrice, email } = req.body;
        const user = await userService.findOrCreateUser(email);
        const portfolioItem = await portfolioService.addStock(user._id, symbol, quantity, boughtPrice);
        res.status(201).json(portfolioItem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function getPortfolio(req, res) {
    try {
        const { email } = req.body;
        const user = await userService.findOrCreateUser(email);
        const portfolio = await portfolioService.getPortfolio(user._id);
        res.status(200).json(portfolio);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = { addStock, getPortfolio };