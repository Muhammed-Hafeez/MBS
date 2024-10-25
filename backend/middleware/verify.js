const jwt = require("jsonwebtoken");

function authorize(req, res, next) {
  const token = req.cookies.auth_token;
  if (!token) {
    return res.redirect("/unauthorized");
  }
  try {
    jwt.verify(token, process.env.SECRET);
    next();
  } catch (err) {
    res.status(401).json({ success: false, message: "Invalid token" });
  }
}
module.exports = authorize;
