const express = require('express');
const { addLogin } = require('../controllers/login');

const router = express.Router();

router.route('/').post(addLogin)

module.exports = router