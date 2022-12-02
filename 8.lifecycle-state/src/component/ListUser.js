const Users = (props) => {
  const { users } = props;

  return (
    <div>
      <ul>
        {users.map((user,index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
