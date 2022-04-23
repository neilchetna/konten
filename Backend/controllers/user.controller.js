const UserModel = require("../models/User");

module.exports.create = async (req, res) => {
  try {
    const user = req.body;
    const userRes = await UserModel.create(user);
    return res.status(200).json({ success: true, data: { userRes } });
  } catch (error) {
    res.status(500).json({ success: false, data: error });
  }
};

module.exports.getOne = async (req, res) => {
  try {
    const { query } = req.query;
    const userRes = await UserModel.findOne(query);
    return res.status(200).json({ success: true, data: userRes });
  } catch (error) {
    return res.status(500).json({ success: false, data: error });
  }
};
