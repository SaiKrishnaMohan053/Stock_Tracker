const Portfolio = require('../models/portfolio.models');
const axios = require('axios');
const API_KEY = process.env.FMP_API_KEY;

async function addStock(userId, symbol, quantity, boughtPrice) {
    const portfolioItem = new Portfolio({ userId, symbol, quantity, boughtPrice });
    await portfolioItem.save();
    return portfolioItem;
}

async function getPortfolio(userId) {
    const portfolio = await Portfolio.find({ userId });
    const portfolioWithCurrentValue = await Promise.all(portfolio.map(async (item) => {
        const response = await axios.get(`https://financialmodelingprep.com/api/v3/quote/${item.symbol}?apikey=${API_KEY}`);
        const currentPrice = response.data[0]?.price || 0;
        return {
            ...item._doc,
            currentValue: currentPrice * item.quantity,
            investedValue: item.boughtPrice * item.quantity
        };
    }));
    return portfolioWithCurrentValue;
}

module.exports = { addStock, getPortfolio };