const express = require("express");
const mysql2 = require("mysql2");
//require dotenv
require("dotenv").config();
// require cors
const cors = require("cors");
const app = express();
app.use(express.json());
//import login routes
const routes = require("./routes");
app.use(routes);
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

// Connect to the database

// Optional: Query example
// Close the connection
// connection.end();

// app.post("/add_employee", (req, res) => {
//   console.log(req.body);
//   //   res.send({ message: 'JSON received', data: req.body })
//   const sql = `insert into employee_test(first_name,last_name,email,password)
// values('${req.body.first_name}','${req.body.last_name}','${req.body.email}',
// '${req.body.password}')`;
//   connection.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("one recore is insered to the database ");
//   });
//   const response = {
//     status: "success",
//     message: "employe added success",
//   };
//   res.status(200).json(response);
// });
// app.post("/login", (req, res) => {
//   console.log(req.body);
//   const sql = `SELECT * FROM employee_test WHERE email = ? AND password = ?`;
//   connection.query(
//     sql,
//     [req.body.email, req.body.password],
//     function (err, result) {
//       if (err) throw err;
//       console.log(result);
//       if (result.length > 0) {
//         const response = {
//           status: "success",
//           message: " login is success",
//         };
//         res.status(200).json(response);
//       } else {
//         const response = {
//           status: "failure",
//           message: " login is failed",
//         };
//         res.status(200).json(response);
//       }
//     }
//   );
// });

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port}`));
