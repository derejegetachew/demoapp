const express = require("express");
const router = express.Router();
//require the login controller
const employeeController = require("../controller/employee.controller");
//pass the add employee request to the employee controller
router.post("/add_employee", employeeController.addEmployee);
//module export
module.exports = router;
