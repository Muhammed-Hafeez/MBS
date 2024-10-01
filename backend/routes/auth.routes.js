const express = require("express");
const { login, logout } = require("../handlers/auth");
const authorize = require("../middleware/verify");

const authRouter = express.Router();

authRouter.route("/login").post(login);
authRouter.post("/logout", logout);

//for testing purposes 
// authRouter.get("/protected", authorize, (req, res) => {
//   res.json({ success: true, message: "you are logged in" });
// });

module.exports = { authRouter };
