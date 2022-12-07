const express = require("express");
const router = express.Router();
const controller = require("../controllers/frontend");

router.get("/parkingAllLot", controller.getAll);
router.get("/parkingLot/:parkId", controller.getById);
router.post("/parkingLot/enter/:parkId", controller.enter);
router.post("/parkingLot/exit/:parkId/:slotNo", controller.exit);
module.exports = router;
