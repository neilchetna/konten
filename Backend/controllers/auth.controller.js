const userModel = require("../models/User");
const bcrypt = require("bcrypt");
const { generateUserToken } = require("../utils/common");

module.exports.register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const user = await userModel.findOne({ email: email });
    if (user) {
      return res
        .status(422)
        .json({ success: false, error: { message: "User Already Exist" } });
    }

    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);
    const userData = {
      fullName,
      email,
      password: hashedPassword,
    };
    let newUser = await userModel.create(userData);
    const userToken = await generateUserToken(newUser);
    return res.status(200).json({ success: true, data: { userToken } });
  } catch (error) {
    return res.status(500).json({ success: false, data: error });
  }
};

module.exports.login = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userModel.findOne({ email });
    const userToken = await generateUserToken(user);
    return res.status(200).json({ success: true, data: { userToken } });
  } catch (error) {
    return res.status(500).json({ success: false, data: error });
  }
};
