const jwt = require('jsonwebtoken');
const { users } = require('../data/mockDb');
const { jwtSecret, jwtExpire } = require('../config/jwtConfig');

exports.loginUser = (req, res) => {
  const { id } = req.body;
  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).json({ error: 'User not found' });

  const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: jwtExpire });
  res.json({ token, user });
};
