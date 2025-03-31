import React from "react";
//import the app.css file
import "./../App.css";
//import the toast container
import { ToastContainer, toast } from "react-toastify";
//import the usestate hook
import { useState } from "react";
// add the function to show the sucess message and error message
const showSuccess = () => {
  toast.success("Login successful!");
};
const showError = () => {
  toast.error("Login failed. Please try again.");
};
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");
  //function to handle the form submission

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    console.log(data);
    const apiurl = "http://13.50.241.225:4000/login";
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
        setResponse(data.message); // Set the response message
        console.log(data);
        if (data.status === "success") {
          //check the status
          showSuccess(); //show the success message
          setEmail("");
          setPassword("");
        } else {
          showError(); //show the error message
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error);
      });
  };
  return (
    <div>
      <h1>Login</h1>
      <h4>{response}</h4> {/* Display the response message */}
      <form onSubmit={handleSubmit}>
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
        <input type="submit" value="Submit" />
      </form>
      <ToastContainer /> {/* Add the ToastContainer component */}
    </div>
  );
}
export default Login;
