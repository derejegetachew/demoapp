const connection = require("../config/db.config");
async function addEmployee(employeeData) {
  try {
    console.log(employeeData);
    const sql = `INSERT INTO employee_test (first_name, last_name, email, password) VALUES (?, ?, ?, ?)`;
    const result = await connection.query(sql, [
      employeeData.first_name,
      employeeData.last_name,
      employeeData.email,
      employeeData.password,
    ]);
    console.log(result);
    if (result.insertId) {
      const insertedId = result.insertId;
      return insertedId;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error adding employee to database:", error);
    throw error;
  }
}
module.exports = { addEmployee };
