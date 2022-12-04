import React, { useEffect, useState } from "react";
import { axios } from "axios";

export default function GetUserByAxios() {
  const [users, setUsers] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3001/user")
      .then((res) => {
       setUsers({ users: res.data });
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}> {user.name} </li>
        ))}
      </ul>
    </div>
  );
}
