const express = require("express");
const { login, logout } = require("../handlers/auth");
const authorize = require("../middleware/verify");

const authRouter = express.Router();

authRouter.route("/login").post(login);
authRouter.post("/logout", authorize, logout);

module.exports = { authRouter };
