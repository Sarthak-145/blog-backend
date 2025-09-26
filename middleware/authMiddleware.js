import jwt from "jsonwebtoken";
const jwtSecret = process.env.JWT_SECRET;

const authentication = (req, res, next) => {
  const token =
    req.headers["authorization"] && res.headers["authorization"].split("")[1];

  if (!token) {
    return res.status(401).json({ msg: "No token provided" });
  }

  jwt.verify(token, jwtSecret, (err, user) => {
    if (err) {
      return res
        .status(404)
        .json({ success: false, msg: "Invalid or expired token" });
    }
    req.user = user;
    next();
  });
};

export default authentication;
