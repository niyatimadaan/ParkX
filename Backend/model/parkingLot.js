const mongoose = require("mongoose");

const parkingSchema = new mongoose.Schema({
  parkId: {
    type: number,
    required: true,
  },
  cost: {
    type: number,
    required: true,
    default: 10,
  },
  capacity: {
    type: number,
    required: true,
  },
  free: {
    type: number,
    required: true,
  },
});
module.exports = mongoose.model("parkingLot", parkingSchema);
