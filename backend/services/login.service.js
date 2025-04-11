const connection = require("../config/db.config");
async function login(employeeData) {
  try {
    console.log(employeeData);
    const sql = `SELECT * FROM employee_test WHERE email = ? AND password = ?`;
    const rows = await connection.query(sql, [
      employeeData.email,
      employeeData.password,
    ]);
    if (rows.length > 0) {
      return rows;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}
module.exports = { login };
