import axios from "axios";
import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/user")
      .then((res) => {
        setUsers( res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  const handleCreate = () => {
    window.location.href = "/user/add"; // thiết lập giá trị url mới
  };
  return(
      <div>
        <h1>Users</h1>
        {users.map(user => (
          <div key={user.id}>
            <a href={`/user/${user.id}`}> {user.name} </a>
          </div>
        ))}
        <button type="button" onClick={handleCreate}>
          Create
        </button>
      </div>
  )
   
  
}

export default Users;
