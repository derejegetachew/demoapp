const employeService = require("../services/employee.service");
async function addEmployee(req, res) {
  try {
    console.log(req.body);
    const employeeAdded = await employeService.addEmployee(req.body);
    if (employeeAdded) {
      const response = {
        status: "success",
        message: "Employee added successfully",
      };
      res.status(200).json(response);
    } else {
      const response = {
        status: "failure",
        message: "Failed to add employee",
      };
      res.status(403).json(response);
    }
  } catch (error) {
    console.error("Error adding employee:", error);
    res.status(500).json({
      status: "error",
      message: "Failed to add employee",
    });
  }
}
module.exports = { addEmployee };
