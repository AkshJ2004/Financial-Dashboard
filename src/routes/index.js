const express = require('express');
const router = express.Router();
const supplyController = require('../controllers/supplyController');
const paymentController = require('../controllers/paymentController');
const authController = require('../controllers/authController');

router.get('/supplies', supplyController.getAllSupplies);
router.get('/supplies/:id', supplyController.getSupplyById);
router.post('/supplies', supplyController.createSupply);
router.put('/supplies/:id', supplyController.updateSupply);
router.delete('/supplies/:id', supplyController.deleteSupply);

// Payment routes
router.get('/payments', paymentController.getPayments);
router.get('/payments/:id', paymentController.getPayment);
router.post('/payments', paymentController.createPayment);
router.put('/payments/:id', paymentController.updatePayment);
router.delete('/payments/:id', paymentController.deletePayment);

// Auth routes
router.post('/auth/signup', authController.registerUser);
router.post('/auth/login', authController.loginUser);
router.post('/auth/logout', authController.logout);
router.get('/auth/users', authController.getAllUsers);

module.exports = router;
