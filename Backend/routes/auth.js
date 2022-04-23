const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth.controller");
const passport = require("passport");
require("../service/passport");

/**
 *  @description to create and signin a user
 *  @route /auth/register
 *  @body { fullName, email, password }
 *  @returns userToken
 */
router.post("/register", AuthController.register);

/**
 *  @description login with email and return jwt token
 *  @route /auth/login
 *  @body { email, password }
 *  @returns userToken
 */
router.post("/login", passport.authenticate("local"), AuthController.login);

module.exports = router;
