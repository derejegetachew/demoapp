const express = require("express");
const mysql2 = require("mysql2");
// require cors
const cors = require("cors");
const app = express();
//
app.use(cors());
//all specific cors
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from this origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allowed methods
    credentials: true, // Allow credentials
  })
);

// allow  CORS to all
// app.use(cors());
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
//   next();
// });
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
// connection.end();
app.use(express.json());
app.post("/add_employee", (req, res) => {
  console.log(req.body);
  //   res.send({ message: 'JSON received', data: req.body })
  const sql = `insert into employee_test(first_name,last_name,email,password) 
values('${req.body.first_name}','${req.body.last_name}','${req.body.email}',
'${req.body.password}')`;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("one recore is insered to the database ");
  });
  const response = {
    status: "success",
    message: "employe added success",
  };
  res.status(200).json(response);
});
app.post("/login", (req, res) => {
  console.log(req.body);
  const sql = `SELECT * FROM employee_test WHERE email = ? AND password = ?`;
  connection.query(
    sql,
    [req.body.email, req.body.password],
    function (err, result) {
      if (err) throw err;
      console.log(result);
      if (result.length > 0) {
        const response = {
          status: "success",
          message: " login is success",
        };
        res.status(200).json(response);
      } else {
        const response = {
          status: "failure",
          message: " login is failed",
        };
        res.status(200).json(response);
      }
    }
  );
});
app.get("/", (req, res) => {
  res.send("Hello, World! Your Express server is running.");
});

const port = 4000;
app.listen(port, () => console.log(`listening on port ${port}`));
