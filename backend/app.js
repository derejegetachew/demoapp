// import the express module
const express = require("express");
const mysql2 = require("mysql2");
const app = express();

const dbconfig = {
  host: "localhost", // Database host (usually 'localhost' for local development)
  user: "demoapp", // Database username
  password: "123456", // Database password
  database: "demoapp", // Name of the database to connect to
};
const connection = mysql2.createConnection(dbconfig);

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
    return;
  }
  console.log("Connected to the database as ID:", connection.threadId);
});

// Optional: Query example

// Close the connection
connection.end();

app.get("/", (req, res) => {
  res.send("Hello, World! Your Express server is running.");
});
const port = 4000;
app.listen(port, () => console.log(`listening on port ${port}`));
