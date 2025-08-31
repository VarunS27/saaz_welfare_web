const express = require('express');
const { getDashboardStats } = require('../controllers/userControllers');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

// Protect all routes
router.use(protect);

// Dashboard stats route
router.get('/stats', authorize('admin'), getDashboardStats);

module.exports = router;