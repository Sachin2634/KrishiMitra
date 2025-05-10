const jwt = require('jsonwebtoken');
const user = require('../models/User');
exports.authorize = (...roles) => (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Forbidden' });
    }
    console.log('Request Headers:', req.headers);
    next();
  };
  