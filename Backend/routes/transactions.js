const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");

/**
 * @desc get transactions
 * @route "/transaction"
 */

router.get("/", async function (req, res, next) {
  try {
    const transactions = await Transaction.find().sort({ time: -1 });

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "neil you messed up",
    });
  }
});

/**
 * @desc add transactions
 * @route "/transaction"
 */

router.post("/", async function (req, res, next) {
  try {
    // const { type, amount } = req.body;
    const transaction = await Transaction.create(req.body);

    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "neil you messed up",
    });
  }
});

/**
 * @desc delete transactions
 * @route "/transaction/:id"
 */

router.delete("/:id", async function (req, res, next) {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: "No transaction found",
      });
    }

    await transaction.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "server error",
    });
  }
});

module.exports = router;
