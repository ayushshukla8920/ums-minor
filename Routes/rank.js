const express = require('express');
const router = express.Router();
const { fetchRank, searchRank } = require('../controllers/rank');

router.get('/',fetchRank);
router.post('/search',searchRank);

module.exports = router;