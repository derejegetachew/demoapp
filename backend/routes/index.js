const express = require("express");
const router = express.Router();
const loginRoutes = require("./login.routes");
const employeeRoutes = require("./employee.routes");
router.use(loginRoutes);
router.use(employeeRoutes);
const installRoutes = require("./install.routes");
router.use(installRoutes);
module.exports = router;
