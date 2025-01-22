const express = require('express');
const portfolioController = require('../controllers/portfolio.controller');
const router = express.Router();

router.post('/addStock', portfolioController.addStock);
router.get('/getPortfolio', portfolioController.getPortfolio);

module.exports = router;