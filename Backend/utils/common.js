const jwt = require("jsonwebtoken");

module.exports.randomKey = (len) => {
  var buf = [];
  var chars = "123456789";
  var charlen = chars.length;

  for (var i = 0; i < len; ++i) {
    buf.push(chars[getRandomInt(0, charlen - 1)]);
  }

  return buf.join("");
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports.CurrentTimePlusHour =
  function get_current_date_time_plus_hours() {
    var current_time = new Date();
    current_time.setHours(current_time.getHours() + 1);
    return current_time;
  };

module.exports.generateUserToken = async function generateJwtToken(user) {
  if (user) {
    // user data from model object
    const { fullName, email, createdAt } = user;

    // genereate jwt token of user
    const userToken = await jwt.sign(
      { fullName, email, createdAt },
      process.env.JWT_SECRET
    );

    return userToken;
  } else {
    throw new Error("User not found");
  }
};
