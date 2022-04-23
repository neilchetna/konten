const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const TransactionSchema = new Schema({
  amount: {
    type: Number,
    required: [true, "Please add an amount"],
  },
  type: {
    type: String,
    trim: true,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    // required: true,
  },
});

module.exports = model("Transaction", TransactionSchema);
