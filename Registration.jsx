import React, { useState } from "react";
import "./AdminLogin.css";
import UserDashboard from "./Userdashboard";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // localStorage.setItem("name", JSON.stringify(name));
    // localStorage.setItem("email", JSON.stringify(email));
    // localStorage.setItem("phoneNumber", JSON.stringify(phoneNumber));
    // localStorage.setItem("password", JSON.stringify(password));
    // localStorage.setItem("image", JSON.stringify(image));
    const newUser = {
      name: name,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      image: image,
    };

    // Retrieve existing users array from localStorage or create an empty array
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Add the new user to the array
    users.push(newUser);

    // Store the updated array in localStorage
    localStorage.setItem("users", JSON.stringify(users));
    // Clear form inputs
    setName("");
    setEmail("");
    setPhoneNumber("");
    setPassword("");
    setImage("");

    navigate("/Reg");
  };

  return (
    <body className="Regbody">
      <div className="formpar">
        <form onSubmit={handleSubmit} className="Regform">
          <br />
          <h1>Registration</h1>
          <br />
          <hr />
          <br />
          <label>
            User Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="namebox"
              required
            />
          </label>
          <br />
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="emailbox"
              required
            />
          </label>
          <br />
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="Passwordbox"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              required
            />
          </label>
          <br />
          <br />
          <label>
            Phone Number:
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="phonebox"
              required
            />
          </label>
          <br />
          <br />
          <label>
            Image:
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </label>
          <br />
          <br />
          <button type="submit" className="submitbox">
            Sign In
          </button>
        </form>
      </div>
    </body>
  );
}

export default RegistrationForm;
