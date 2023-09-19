import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { id, title, body } = post;
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h4>Post id: {id}</h4>
      <h3>Title: {title}</h3>
      <p>
        <small>{body}</small>
      </p>
      <button onClick={handleBack}>Go Back</button>
    </div>
  );
};

export default PostDetails;
