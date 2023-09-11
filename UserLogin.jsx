import React, { useState } from "react";
import UserDasboard from "./Userdashboard";
import RegistrationForm from "./Registration";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Ulogin, setUlogin] = useState("");
  const [error, setError] = useState("");
  const [Sig, setSig] = useState("");
  const navigate = useNavigate();
  // const history = useHistory();

  const Handelemail = (event) => {
    setEmail(event.target.value);
  };

  const Handelpassword = (event) => {
    setPassword(event.target.value);
  };

  const Handelsubmit = (event) => {
    event.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem("users"));

    if (storedUsers) {
      const index = storedUsers.findIndex(
        (users) => users.email === Email && users.password === Password
      );

      if (index !== -1) {
        // Successful login
        setError("");
        navigate("/userdash");
      } else {
        // Invalid credentials
        setError(alert("Invalid email or password"));
      }
    } else {
      // No stored users
      setError (alert("No registered accounts found"));
    }
  };
  // const Handelsubmit = (event) => {
  //   event.preventDefault();

  //   const storedemail = JSON.parse(localStorage.getItem("emails"));
  //   console.log(storedemail, "rayu");
  //   const storedpassword = JSON.parse(localStorage.getItem("passwords"));
  //   console.log(storedpassword, "vbewy8");

  //   if (storedemail && storedpassword) {
  //     const index = storedemail.indexOf(Email);
  //     if (index !== -1 && storedpassword[index] === Password) {
  //       // Successful login
  //       // setError("");
  //       // Do something here, like redirecting to a dashboard
  //       navigate("/userdash")
  //     } else {
  //       // Invalid credentials
  //       setError("Invalid email or password");
  //     }
  //   } else {
  //     // No stored emails or passwords
  //     setError("No registered accounts found");
  //   }
  // };

  // if (Email === storedemail && Password === storedpassword) {
  //   // Perform login logic here
  //   return navigate("/userdash");
  // } else {
  //   // Handle incorrect login credentials
  //   console.log("Invalid username or password");
  // }

  const sigsubmit = (event) => {
    event.preventDefault();

    if (Email === "" && Password === "") {
      setSig(true);
    } else {
      setError(alert("first clear all and  signin"));
    }
    if (Sig) {
      return (
        
          navigate("/user")
     
      );
    }
  };

  return (
    <div className="formpar">
      <form className="logform">
        <h2>User Login</h2>
        <br />
        <label>User Email ID</label>
        <input
          type="email"
          placeholder="Enter your  Email ID"
          value={Email}
          onChange={Handelemail}
          className="emailbox"
        />
        <br /> <br />
        <label>User Password</label>
        <input
          type="password"
          placeholder="Enter your Password"
          value={Password}
          onChange={Handelpassword}
          className="Passwordbox"
        />
        <br /> <br />
        {/* <p>{error}</p> */}
        <button className="Usubmitbox" type="submit" onClick={Handelsubmit}>
          Login
        </button>
        <button className="Usubmitbox" type="submit" onClick={sigsubmit}>
          Signin
        </button>
        <br /> <br />
      </form>
    </div>
  );
};
export default LoginForm;
