const jwt = require("jsonwebtoken");
const UserModel = require("../models/User");

module.exports = async (req, res, next) => {
  try {
    const userToken = req.header("Authorization");
    if (!userToken) {
      return res.status(401).send("Access Denied");
    }
    const checkUserToken = jwt.verify(userToken, process.env.JWT_SECRET);
    const user = await UserModel.findOne({ email: checkUserToken.email });
    req.user = user._doc;
    next();
  } catch (error) {
    return res.status(500).send("Something went wrong");
  }
};
