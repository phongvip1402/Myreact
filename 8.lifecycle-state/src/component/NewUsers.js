import { useState } from "react";
import Users from "./ListUser";

const NewUser = (props) => {
  const [ users, setUser] = useState([]);

  const [newUser, setNewUser] = useState("");

  return (
    <div>
      <input value={newUser} onChange={(e) => setNewUser(e.target.value)} />
      <button
        onClick={() => {
          setUser([...users, newUser]);
          setNewUser("");
          console.log(users);
        }}
      >
        submit
      </button>
      <hr></hr>
        <Users users={users}/>
    </div>
  );
};

export default NewUser;
