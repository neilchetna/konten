const mongoose = require("mongoose");
const { randomKey, CurrentTimePlusHour } = require("../utils/common");

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    otp: {
      type: Number,
    },
    otpTimeout: {
      type: Date,
      default: CurrentTimePlusHour(),
    },
  },
  { timestamps: true }
);

UserSchema.methods.generateOtp = async function () {
  this.otp = randomKey(6);
  this.otpTimeout = CurrentTimePlusHour();
  await this.save();
  return this;
};

UserSchema.methods.verifyOtp = async function (otp) {
  if (!otp) {
    throw new Error("OTP not provided");
  }

  if (this.otp === otp && this.otpTimeout > new Date()) {
    this.verified = true;
    await this.save();
    return {
      success: true,
    };
  }

  if (this.otpTimeout < new Date()) {
    throw new Error("OTP timeout");
  }

  throw new Error("OTP incorrect");
};

module.exports = mongoose.model("User", UserSchema);
