const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(400).json({ msg: "token not found" });
  }

  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    if (decoded.user) {
      req.user = decoded.user;
      next();
    }else{
        res.status(400).json({ msg: "invalid token" });
    }
  } catch (err) {
    res.status(400).json({ msg: "invalid token" });
  }
};
