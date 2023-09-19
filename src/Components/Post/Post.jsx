import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const postStyle = {
    border: "2px solid yellow",
    padding: "5px",
    margin: "15px",
    borderRadius: "10px",
  };
  const { id, title } = post;
  return (
    <div style={postStyle}>
      <h3>Post of id: {id}</h3>
      <p>title: {title}</p>
      <Link to={`/post/${id}`}>
        <button>Post Details</button>
      </Link>
    </div>
  );
};

export default Post;
