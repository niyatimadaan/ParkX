const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: true,
  },
  contact: {
    type: number,
    required: true,
  },
  car_no: {
    type: String,
    required: true,
  },
  entry_time: {
    type: Date(),
    required: true,
  },
  exit_time: {
    type: Date(),
  },
  parkId: {
    type: number,
    required: true,
  },
  slot_no: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("User", userSchema);
