// import React from 'react';
// import { useSelector } from 'react-redux';

// const PostDetail = ({ match }) => {
//   const postId = parseInt(match.params.id, 10);
//   const post = useSelector((state) => state.posts.posts.find((p) => p.id === postId));

//   if (!post) {
//     return <p>Post not found</p>;
//   }

//   return (
//     <div>
//       <h2>{post.title}</h2>
//       <p>{post.body}</p>
//       <p>User ID: {post.userId}</p>
//       <img src={post.imgSrc} alt={`Post ${post.id}`} />
//     </div>
//   );
// };

// export default PostDetail;
// PostDetail.js
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams(); // Use useParams hook to get route parameters
  const postId = parseInt(id, 10);

  const post = useSelector((state) =>
    state.posts.posts.find((p) => p.id === postId)
  );

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="post_details">
      <h2 className="post_number">Post Number {post.id}</h2>
      <div className="post_detail">
        <img className="post_detail_img" src={post.imgSrc} alt={`Post ${post.id}`} />
        <div className="post_body_details">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p>Post was Posted By : {post.userId}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
