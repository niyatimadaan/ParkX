require("dotenv").config();
const mongoose = require("mongoose");
const parkingLot = require("../model/parkingLot");
const user = require("../model/user");
var pdf = require("pdf-creator-node");
var fs = require("fs");

const generatePdf = async (data, bill) => {
  const html = fs.readFileSync(
    path.join(__dirname, "/utils/template.html"),
    "utf-8"
  );
  const filename = Math.random() + "_doc" + ".pdf";
  const prod = {
    name: data.user_name,
    contact: data.contact,
    car_no: data.car_no,
    entry_time: data.entry_time,
    exit_time: data.exit_time,
    parkId: data.parkId,
    slot_no: data.slot_no,
    bill: bill,
  };

  const document = {
    html: html,
    data: {
      products: prod,
    },
    path: "./docs/" + filename,
  };
  pdf
    .create(document, options)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
  const filepath = `http://localhost:${process.env.PORT}/docs/` + filename;

  res.render("download", {
    path: filepath,
  });
};

module.exports.getAll = async () => {
  try {
    let data = await parkingLot.find();
    return data;
  } catch (err) {
    return { error: "All Data" };
  }
};

module.exports.getById = async (parkId) => {
  try {
    let data = await parkingLot.findOne({ parkId: parkId });
    return data;
  } catch (err) {
    return { error: "All Data" };
  }
};

module.exports.enter = async (content, parkId) => {
  try {
    let data = new user({
      user_name: content.name,
      contact: content.phone,
      car_no: content.carno,
      slot_no: content.slotno,
      parkId: parkId,
      entry_time: Date.now(),
    });
    await data.save();
    return { message: true };
  } catch (err) {
    return { error: "Wrong details" };
  }
};

module.exports.exit = async (slotNo, parkId) => {
  try {
    let data = await user.findOne({ parkId: parkId, slot_no: slotNo });
    let exit_time = Date.now();
    let entry_time = data.entry_time;
    let cost = parkingLot.findOne({ parkId: parkId }).cost;
    let bill = ((exit_time - entry_time) / 1000 / 3600) * cost;
    generatePdf(data, bill);
    return { message: true };
  } catch (err) {
    return { error: "All Data" };
  }
};
