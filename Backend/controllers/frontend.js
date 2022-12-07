import service from "../service/service.js";

const Joi = require("joi");

const schemaEnter = new Joi.object({
  name: Joi.string().optional(),
  carno: Joi.string(),
  slotno: Joi.date(),
  phone: Joi.string().optional(),
});

async function getAll(req, res) {
  try {
    res.json(service.getAll());
  } catch (err) {
    res.json(err);
  }
}

async function getById(req, res) {
  try {
    let parkId = req.params.parkId;
    res.json(service.getById(parkId));
  } catch (err) {
    res.json({ error: "Id not provided" });
  }
}

async function enter(req, res) {
  try {
    let parkId = req.params.parkId;
    let content = await schemaEnter.validateAsync(req.body);
    res.json(service.getById(content, parkId));
  } catch (err) {
    res.json(err);
  }
}

async function exit(req, res) {
  try {
    let parkId = req.params.parkId;
    let slotNo = req.params.slotNo;
    res.json(service.getById(slotNo, parkId));
  } catch (err) {
    res.json({ error: "Wrong details" });
  }
}

export default {
  getAll,
  getById,
  enter,
  exit,
};
