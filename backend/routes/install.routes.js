const express = require("express");
const router = express.Router();
const installController = require("../controller/install.controller");
router.get("/install", installController.installDirectFromApi);
module.exports = router;
