const axios = require('axios');
const API_KEY = process.env.FMP_API_KEY;

async function getLiveStock(req, res) {
    try {
        const { symbol } = req.params;
        const response = await axios.get(`https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${API_KEY}`);
        if (response.data.length === 0) return res.status(404).json({ message: 'Stock not found' });
        res.status(200).json(response.data[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = { getLiveStock };