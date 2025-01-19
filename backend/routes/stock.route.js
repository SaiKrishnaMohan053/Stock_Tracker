const express = require("express");
const StockController = require("../controllers/stock.controller");

const router = express.Router();

router.get("/getAllStocks", StockController.getAllStocks);
router.post("/createStock", StockController.createStock);
router.put("/updateStock/:id", StockController.updateStock);
router.delete("/deleteStock/:id", StockController.deleteStock);

module.exports = router;