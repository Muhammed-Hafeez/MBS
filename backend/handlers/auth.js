const jwt = require("jsonwebtoken");
const { captureErr } = require("../error/CatchAsyncErr");


const login = captureErr((req, res, next) => {
  const { email, password } = req.body;
  if (email !== process.env.SECRET_EMAIL && password !== process.env.ADMIN_PASSWORD) {
    res.status(401).json({ success: false, message: "Invalid credentials" });
    return;
  }
  const token = jwt.sign({ email }, process.env.SECRET, { expiresIn: "2d" });
  res.cookie("auth_token", token, {
    httpOnly: true,
    secure: process.env.MODE === "production", // Use secure cookies in production
    sameSite: "strict", // Helps prevent CSRF attacks
  });
  res.json({ message: "Logged in successfully" });
});

const logout = captureErr((req, res) => {
  res.clearCookie("auth_token");
  res.json({ message: "Logged out successfully" });
});
module.exports = { login, logout };
