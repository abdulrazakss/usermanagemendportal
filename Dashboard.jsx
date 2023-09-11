import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

function Dasboard(userData) {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState([]);
  //   const [history, setHistory] = useHistory();

  //   function HandelLogout() {
  //     setHistory.push("/UserLogin");
  //   }

    useEffect(() => {
      const storedUsers = JSON.parse(localStorage.getItem("users"));
      if (storedUsers) {
        setUsers(storedUsers);
      }
    }, []);

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

        <Link to="/Reg" className="userbut">
          <li>User login</li>
        </Link>

        <Link to="/user" className="right">
          <li>Add User</li>
        </Link>
      </ul>
      <h1>Admin Dashboard</h1>
      <table>
        <thead>
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
        </thead>
        <thead>
          {users.map((user, index) => (
            <tr key={index}>
              <td> {index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td> {user.phoneNumber}</td>
              {/* <td> {user.image}</td> */}
              <td>{/* <button onClick={deleteData}>Delete Data</button> */}</td>
              <td>{/* <button onClick={updateData}>Update Data</button> */}</td>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
}
export default Dasboard;
