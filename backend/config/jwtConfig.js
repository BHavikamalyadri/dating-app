module.exports = {
  jwtSecret: process.env.JWT_SECRET || 'super_secret_key',
  jwtExpire: '7d'
};