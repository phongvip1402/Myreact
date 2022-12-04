import axios from "axios";
import React, { useEffect, useState } from "react";

function LoadingAsynAwait() {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUsers()
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const  getUsers = async () => {
    await new Promise(resolve => {
      setTimeout(resolve, 3000);
    });
    return await axios.get("http://localhost:3001/user");
  };

  if (loading) return <p>loading...</p>;
  return (
    <div>
      <h1>Users Asyn Await</h1>
      {console.log(users)}
      <ul>
        {users.map((user) => (
          <li key={user.id}> {user.name} </li>
        ))}
      </ul>
    </div>
  );
}

export default LoadingAsynAwait;
