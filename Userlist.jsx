import React from 'react';

 

function UserList({ users }) {
  return (
<div>
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
</div>
  );
}

 

export default UserList;