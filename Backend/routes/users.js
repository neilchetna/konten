var express = require("express");
var router = express.Router();
const userController = require("../controllers/user.controller");

/**
 *  @description create new user
 *  @route /user
 */
router.post("/", userController.create);

/**
 *  @description get one user
 *  @route /user
 *  @query unique values
 */
router.get("/", userController.getOne);

module.exports = router;
