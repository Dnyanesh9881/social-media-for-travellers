import { FETCH_POSTS_FAILURE, FETCH_POSTS_SUCCESS } from './actionTypes';
import axios from 'axios';



// const api = axios.create({
//   baseURL: 'https://jsonplaceholder.typicode.com',
// });

const getRandomImage = (postId) => `https://picsum.photos/200?random=${postId}`;

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = (error) => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});

export const fetchPosts = () => async (dispatch) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(response.data);
    const postsWithImages = response.data.map((post) => ({
      ...post,
      imgSrc: getRandomImage(post.id),
    }));
    dispatch(fetchPostsSuccess(postsWithImages));
  } catch (error) {
    dispatch(fetchPostsFailure(error));
  }
};
