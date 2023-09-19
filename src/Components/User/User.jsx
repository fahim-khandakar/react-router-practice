import { Link } from "react-router-dom";

const User = ({ users }) => {
  const { name, email, phone, id } = users;
  const showStyle = {
    border: "2px solid yellow",
    padding: "5px",
    margin: "15px",
    borderRadius: "10px",
  };
  return (
    <div style={showStyle}>
      <h3>{name}</h3>
      <h5>{email}</h5>
      <p>{phone}</p>
      <Link to={`/user/${id}`}>Show Details</Link>
    </div>
  );
};

export default User;
