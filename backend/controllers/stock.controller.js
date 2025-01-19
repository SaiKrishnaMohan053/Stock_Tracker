const StockService = require("../services/stock.service");
require("dotenv").config();

class StockController {
  static async getAllStocks(req, res) {
    try {
      const apiKey = process.env.FMP_API_KEY;
      const stocks = await StockService.getAllStocks(apiKey);
      res.json(stocks);
    } catch (error) {
      console.error("Error fetching stocks:", error);
      res.status(500).json({ message: "Error fetching stocks" });
    }
  }

  static async createStock(req, res) {
    try {
      const stock = await StockService.createStock(req.body);
      res.status(201).json(stock);
    } catch (error) {
      console.error("Error creating stock:", error);
      res.status(500).json({ message: "Error creating stock" });
    }
  }

  static async updateStock(req, res) {
    try {
      const { id } = req.params;
      const stock = await StockService.updateStock(id, req.body);
      res.json(stock);
    } catch (error) {
      console.error("Error updating stock:", error);
      res.status(500).json({ message: "Error updating stock" });
    }
  }

  static async deleteStock(req, res) {
    try {
      const { id } = req.params;
      await StockService.deleteStock(id);
      res.json({ message: "Stock deleted" });
    } catch (error) {
      console.error("Error deleting stock:", error);
      res.status(500).json({ message: "Error deleting stock" });
    }
  }
}

module.exports = StockController;