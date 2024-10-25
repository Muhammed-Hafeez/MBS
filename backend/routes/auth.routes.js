const express = require("express");
const { login, logout, isLoggedIn } = require("../handlers/auth");
const authorize = require("../middleware/verify");

const authRouter = express.Router();

authRouter.route("/login").post(login).get(authorize, isLoggedIn);
authRouter.post("/logout", authorize, logout);

module.exports = { authRouter };
