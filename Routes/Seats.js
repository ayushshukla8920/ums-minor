const express = require('express');
const router = express.Router();
const { fetchSeats } = require('../controllers/fetchTotalSeats');

router.get('/',fetchSeats);

module.exports = router;