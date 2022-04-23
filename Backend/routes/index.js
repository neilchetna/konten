var express = require("express");
var router = express.Router();

router.use("/user", require("./users"));
router.use("/transaction", require("./transactions"));
router.use("/auth", require("./auth"));

module.exports = router;
