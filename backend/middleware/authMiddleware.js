const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/jwtConfig');
const { users } = require('../data/mockDb');

exports.protect = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ error: 'No token provided' });

    const decoded = jwt.verify(token, jwtSecret);
    const user = users.find(u => u.id === decoded.id);
    if (!user) return res.status(401).json({ error: 'Invalid token' });

    req.user = user; // Attach user to request object
    next();
  } catch (err) {
    res.status(401).json({ error: 'Unauthorized: Invalid or expired token' });
  }
};
