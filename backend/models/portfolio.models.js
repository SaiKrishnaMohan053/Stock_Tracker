const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    symbol: { type: String, required: true },
    quantity: { type: Number, required: true },
    boughtPrice: { type: Number, required: true } // Added bought price
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);