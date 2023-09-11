import React, { useState } from "react";
// import UserList from "./Userlist";
import UserDashboard from "./Userdashboard";
// import { useHistory } from "react-router-dom";

// Import the UserList component

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [users, setUsers] = useState([]);
  // const [history, setHistory] = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new user object
    const newUser = { ...formData };

    // Add the new user to the array of users
    setUsers([...users, newUser]);

    // Clear the form fields
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
    // history.push("/Userdashboard");
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <button type="submit">Add User</button>
      </form>
      {users.length > 0 && <UserDashboard users={users} />}
      {/* Pass users data to UserList component */}
    </div>
  );
}

export default RegistrationForm;
