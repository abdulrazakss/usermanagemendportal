import React from "react";
import { useState } from "react";
import "./AdminLogin.css";
import Dasboard from "./Dashboard";

const Adminlogin = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Adlogin, setAdlogin] = useState("");
  const [error, setError] = useState("");

  const Handelemail = (event) => {
    setEmail(event.target.value);
  };

  const Handelpassword = (event) => {
    setPassword(event.target.value);
  };

  const Handelsubmit = (event) => {
    event.preventDefault();

    if (Email === "razak@gmail.com" && Password === "www.123") {
      setAdlogin(true);
    } else {
      setError(alert("Incorrect Email Or Password"));
    }
  };
  if (Adlogin) {
    return (
      <>
        <Dasboard />
        {/* <h1>welcome</h1> */}
      </>
    );
  }

  // console.log("Email:",Email);
  // console.log("Password:",Password);

  return (
    // <div className="mainbox">
      <div className="formpar">
      <form className="logform" onSubmit={Handelsubmit}>
          <h2>Admin Login</h2>
          <br />
          <label>Email ID</label>
          <input
            type="email"
            placeholder="Enter your Email ID"
            value={Email}
            onChange={Handelemail}
            className="emailbox"
          />
          <br /> <br />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your Password"
            value={Password}
            onChange={Handelpassword}
            className="Passwordbox"
          />
          <br /> <br />
          {/* <p>{error}</p> */}
          <button className="submitbox" type="submit">
            Admin Login
          </button>
          <br /> <br />
       
      </form>
      </div>
    // </div>
  );
};

export default Adminlogin;
