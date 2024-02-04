
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions/postActions'; 
import PostList from './PostList';

const Home = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className='home'>
        <h1>Social Media For Travellers</h1>
        <input className='search_input' type='text' placeholder='🔍 search here' />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {posts.length > 0 && <PostList posts={posts} />}
    </div>
  );
};

export default Home;
