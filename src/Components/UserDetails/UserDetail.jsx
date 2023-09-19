import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetail = () => {
  const user = useLoaderData();
  const { name, website } = user;
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h3>Details about user: {name}</h3>
      <h5>Details about user: {website}</h5>
      <button onClick={handleBack}>Go Back</button>
    </div>
  );
};

export default UserDetail;
