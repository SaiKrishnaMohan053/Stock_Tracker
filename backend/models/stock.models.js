const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  symbol: { type: String, required: true },
  shares: { type: Number, required: true },
  purchasePrice: { type: Number, required: true },
});

module.exports = mongoose.model("Stock", stockSchema);