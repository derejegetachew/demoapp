//import the mysql2 module
const mysql2 = require("mysql2/promise");
//define the database configuration
const dbconfig = {
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};
//create a connection pool
const pool = mysql2.createPool(dbconfig);
//create a function to get a connection from the pool
async function query(sql, params) {
  const [rows] = await pool.execute(sql, params);
  return rows;
}
module.exports = { query };
