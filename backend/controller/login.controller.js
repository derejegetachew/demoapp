// functinon  to handle login request
//import the login service

const loginService = require("../services/login.service");
async function login(req, res, next) {
  try {
    console.log("hhhhh", req.body);
    const employee = await loginService.login(req.body);
    console.log("logininininni=======>", employee);
    if (employee) {
      const response = {
        status: "success",
        message: "Login is successful",
      };
      return res.status(200).json(response); // ✅ return here
    } else {
      const response = {
        status: "failure",
        message: "Login failed",
      };
      return res.status(403).json(response); // ✅ return here
    }
  } catch (error) {
    console.error("Login error:", error);

    // Only send this response if headers haven't been sent
    // if (!res.headersSent) {
    //   return res.status(401).json({ message: "Invalid email or password" });
    // }

    // Optional: if headers are already sent, call next with the error
    next(error);
  }
}

module.exports = { login };
