import axios from "axios";
import React, { useEffect, useState } from "react";

function LoadingByAxios() {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get("http://localhost:3001/user")
        .then((res) => {
          setUser(res.data); 
        })
        .catch((err) => {
          throw err;
        })
        .finally(() => {
          setLoading(false);
        });
    }, 3000);
  }, []);

  if (loading) return <p>loading...</p>;
  return (
    <div>
      <h1>Users</h1>
      {console.log(users)}
      <ul>
        {users.map((user) => (
          <li key={user.id}> {user.name} </li>
        ))}
      </ul>
    </div>
  );
}

export default LoadingByAxios;
