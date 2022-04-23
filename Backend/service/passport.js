const passport = require("passport");
const userModel = require("../models/User");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const userObj = await userModel.findOne({ email: email });
        if (!userObj) {
          return done(null, false, { message: "user not found" });
        }

        if (await bcrypt.compare(password, userObj.password)) {
          return done(null, userObj);
        } else {
          return done(null, false);
        }
      } catch (error) {
        throw new Error(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.email);
});

passport.deserializeUser(async (email, done) => {
  try {
    const user = await userModel.findOne({ email });
    if (user) {
      done(null, user._doc);
    } else {
      done(null, false);
    }
  } catch (error) {
    throw new Error("Something went wrong while deserializeUser!", error);
  }
});
