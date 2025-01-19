const Stock = require("../models/stock.models");
const axios = require("axios");

class StockService {
  static async getAllStocks(apiKey) {
    const stocks = await Stock.find();
    const updatedStocks = await Promise.all(
      stocks.map(async (stock) => {
        const response = await axios.get(`https://financialmodelingprep.com/api/v3/quote/${stock.symbol}?apikey=${apiKey}`);
        const currentPrice = response.data[0]?.price || 0;
        return { ...stock.toObject(), currentPrice, totalValue: stock.shares * currentPrice };
      })
    );
    return updatedStocks;
  }

  static async createStock(data) {
    const stock = new Stock(data);
    return await stock.save();
  }

  static async updateStock(id, updates) {
    return await Stock.findByIdAndUpdate(id, updates, { new: true });
  }

  static async deleteStock(id) {
    return await Stock.findByIdAndDelete(id);
  }
}

module.exports = StockService;