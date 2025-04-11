//import  exprss module
const express = require("express");
const router = express.Router();
//require the login controller
const loginController = require("../controller/login.controller");
//pass the login request to the login controller
router.post("/login", loginController.login);
//module export
module.exports = router;
