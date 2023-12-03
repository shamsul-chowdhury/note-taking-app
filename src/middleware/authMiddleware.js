const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET || 'default-secret-key';

const authenticate = (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, secretKey);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = {
  authenticate,
};
