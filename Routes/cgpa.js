const express = require('express');
const router = express.Router();
const { fetch } = require('../controllers/fetchAreaDialog');

router.get('/',fetch);

module.exports = router;