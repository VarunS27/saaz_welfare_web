const User = require('../models/User');

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    
    res.json({
      status: 'success',
      data: {
        users,
        count: users.length
      }
    });
  } catch (error) {
    console.error('Get users error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Server error'
    });
  }
};

// @desc    Get dashboard stats
// @route   GET /api/dashboard/stats
// @access  Private/Admin
const getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalAdmins = await User.countDocuments({ role: 'admin' });
    const totalVolunteers = await User.countDocuments({ role: 'volunteer' });
    
    // Recent logins (last 7 days)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const recentLogins = await User.countDocuments({
      lastLogin: { $gte: sevenDaysAgo }
    });

    const stats = {
      totalUsers,
      totalAdmins,
      totalVolunteers,
      recentLogins,
      totalPrograms: 25, // Static for now
      activeCommunities: 15, // Static for now
      livesImpacted: 10000 // Static for now
    };

    res.json({
      status: 'success',
      data: {
        stats
      }
    });
  } catch (error) {
    console.error('Dashboard stats error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Server error fetching dashboard stats'
    });
  }
};

module.exports = {
  getUsers,
  getDashboardStats
};