const express = require("express");
const router = express.Router();
const controller = require("../controllers/data");

router.get("/", controller.register);
router.post("/", controller.register);

module.exports = router;
