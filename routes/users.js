const express = require('express');

const router = express.Router();

// ROUTES
router.get('/', (req, res) => {
  res.send('We are at home');
});

module.exports = router;