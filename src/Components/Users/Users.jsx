import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import "./Users.css";

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <h2>Our Users: {users.length}</h2>
      <p>Fantastic and vodro users</p>
      <div className="container">
        {users.map((user) => (
          <User key={user.id} users={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
