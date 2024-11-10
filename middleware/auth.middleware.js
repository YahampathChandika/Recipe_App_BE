const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; 

  if (!token) {
    return res.status(403).json({ error: true, payload: "A token is required for authentication" });
  }
  try {
    const decoded = jwt.verify(token, config.JWT_SECRET || "importantsecret"); 
    req.user = decoded;
    next(); 
  } catch (err) {
    return res.status(401).json({ error: true, payload: "Invalid Token" });
  }
};

module.exports = verifyToken;
