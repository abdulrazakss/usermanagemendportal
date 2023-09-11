import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserDashboard({ userData }) {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch user data from localStorage when the component mounts
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []); // Empty dependency array to run the effect only once

  const deleteData = () => {
    localStorage.removeItem("index");
    setData('');
  };

  const updateData = () => {
    const newData = "New Data";
    localStorage.setItem("data", newData);
    setData(newData);
  };

  return (
    <div className="dashboard">
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#about">conatct</a>
        </li>

        <Link to="/Reg" className="right">
          <li>logout</li>
        </Link>
      </ul>
      <h2>User Dashboard</h2>
      <table>
        <tr>
          <th>ID</th>
          <th>User Name </th>
          <th>Email Id</th>
          <th>Password</th>
          <th>Phone Number</th>
          {/* <th>Images</th> */}
          <th>Delete</th>
          <th>Update</th>
        </tr>

        {users.map((user, index) => (
          <tr key={index}>
            <td> {index + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td> {user.phoneNumber}</td>
            {/* <td> {user.image}</td> */}
            <td>
              <button onClick={deleteData}>Delete Data</button>
            </td>
            <td>
              <button onClick={updateData}>Update Data</button>
            </td>
            <hr />
          </tr>
        ))}
      </table>
      {/* <div>
        <h2>welcome </h2>
        <p>Name:{userData.name}</p>
        <p>Email:{userData.email}</p>
        <p>Phone Number:{userData.phoneNumber}</p>
        <p>password:{userData.password}</p>
        <img src={userData.image} alt="User" />
      </div> */}

      {/* <div>
        <h2>All Users:</h2>
        {users.map((user, index) => (
          <div key={index}>
            <h3>User {index + 1}</h3>
            <p>First Name: {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
            <hr />
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default UserDashboard;
