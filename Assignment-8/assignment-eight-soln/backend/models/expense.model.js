const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  description: {
    type: String,
  },
  amount: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  type: {
    type: String,
  },
});
