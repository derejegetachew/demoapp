import React from "react";
import { useState } from "react";
//import tostcontainer from react-toastify
import { ToastContainer, toast } from "react-toastify";
const showSuccess = () => {
  toast.success("Employee added successfully!", {
    position: "top-right",
    autoClose: 3000, // Closes in 3 seconds
  });
};

const showError = () => {
  toast.error("Error adding employee. Please try again.", {
    position: "top-right",
    autoClose: 3000,
  });
};
function AddEmployee(props) {
  // wirte a function to handle the form submission
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
    };
    console.log(data);
    const apiurl = "http://13.50.241.225:4000/add_employee";
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch(apiurl, requestOptions)
      .then((response) => response.json()) //convert the response to json
      .then((data) => {
        //log the data
        console.log(data);
        if (data.status === "success") {
          //check the status
          showSuccess(); //show the success message
          setFirst_name("");
          setLast_name("");
          setEmail("");
          setPassword("");
        } else {
          showError();
        }
      })
      .catch((error) => {
        console.error("Error adding employee:", error);
        showError();
      });
  };
  return (
    <div>
      <h1>Add employee</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First name:</label>
        <br />
        <input
          type="text"
          id="fname"
          name="fname"
          value={first_name}
          onChange={(event) => setFirst_name(event.target.value)}
        />
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input
          type="text"
          id="lname"
          name="lname"
          value={last_name}
          onChange={(event) => setLast_name(event.target.value)}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="text"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
      <ToastContainer />
    </div>
  );
}
export default AddEmployee;
