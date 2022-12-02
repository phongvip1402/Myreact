import React, {useEffect, useState } from "react";
import axios from "axios";

function ListUser() {
  const[users,setUser] = useState([]);
   
useEffect( () => {
    axios
      .get("http://localhost:3000/user")
      .then(res => {
        setUser(res.data);
        // this.setState({ users: res.data });
      })
      .catch(err => {
        throw err;
      });
    }
)
    return (
      <div>
        <h1>Users</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}> {user.name} </li>
          ))}
        </ul>
      </div>
    );
}

export default ListUser