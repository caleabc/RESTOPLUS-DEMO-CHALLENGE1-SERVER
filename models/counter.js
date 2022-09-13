const mongoose = require("mongoose");

var counterSchema = new mongoose.Schema({
  value: Number,
});

const Counter = mongoose.model("Counter", counterSchema);

module.exports = Counter;
