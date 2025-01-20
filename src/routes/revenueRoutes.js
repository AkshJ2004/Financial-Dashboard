const express = require('express');
const router = express.Router();
const revenueController = require('../controllers/revenueController');

router.get('/', revenueController.getAllRevenues);
router.get('/:month', revenueController.getRevenueByMonth);
router.post('/', revenueController.addRevenue);

module.exports = router;