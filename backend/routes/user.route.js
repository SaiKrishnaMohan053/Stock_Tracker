const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();

router.post('/getUser', userController.getUser);

module.exports = router;