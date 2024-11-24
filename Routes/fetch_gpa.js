const express = require('express');
const router = express.Router();
const { handlePostCgpa,handlegetCgpa } = require('../controllers/fetch_gpa');

router.post('/',handlePostCgpa);
router.get('/',handlegetCgpa);

module.exports = router;