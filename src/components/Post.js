import React from "react";
import { Link } from "react-router-dom";

const Post = ({ id, img, title, lorem }) => {
  return (
    <div>
      <img src={img} alt="lorem ipsum" height="100" width="100" />
      <Link to={`/post/${id}`}>{title}</Link>
      <p>{lorem}</p>
    </div>
  );
};

export default Post;
