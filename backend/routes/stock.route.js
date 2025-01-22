const express = require('express');
const stockController = require('../controllers/stock.controller');
const router = express.Router();

router.get('/live/:symbol', stockController.getLiveStock);

module.exports = router;