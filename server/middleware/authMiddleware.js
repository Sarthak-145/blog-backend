import jwt from 'jsonwebtoken';
const jwtSecret = process.env.JWT_SECRET;

const authentication = (req, res, next) => {
  const token =
    req.headers['authorization'] && req.headers['authorization'].split(' ')[1];

  if (!token) {
    return res.status(401).json({ msg: 'No token provided' });
  }

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      return res
        .status(403)
        .json({ success: false, msg: 'Invalid or expired token' });
    }
    req.user = decoded;
    next();
  });
};

export default authentication;
