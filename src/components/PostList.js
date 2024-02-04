
import React, { useState } from "react";
import { Link } from "react-router-dom";

const PostList = ({ posts }) => {
  const [readmoreMap, setReadMoreMap] = useState({});

  const toggleReadMore = (postId) => {
    setReadMoreMap((prevMap) => ({
      ...prevMap,
      [postId]: !prevMap[postId]
    }));
  };

  return (
    <ul className="all_cards">
      {posts.map((post) => (
        <li key={post.id} className="post_card">
          <img className="post_img" src={post.imgSrc} alt={`Post ${post.id}`} />
          <h3 className="post_heading">{post.title}</h3>
          <p className="post_body">
            {readmoreMap[post.id] ? post.body : post.body.slice(0, 100)}...
          </p>
          <div className="read_more_go">
            <span
              onClick={() => toggleReadMore(post.id)}
              className="read_more"
            >
              {readmoreMap[post.id] ? "read less" : "read more"}
            </span>
            <Link className="go" to={`/item/${post.id}`}>
              GO
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PostList;

