const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Ensure this path is correct

exports.protect = async (req, res, next) => {
  let token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    console.error('No token provided');
    return res.status(401).json({ message: 'Not authorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');
    next();
  } catch (err) {
    console.error('Token verification failed', err);
    res.status(401).json({ message: 'Token invalid' });
  }
};