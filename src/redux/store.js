
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk }from 'redux-thunk';
import postReducer from './reducers/postReducer';;

const rootReducer = combineReducers({
  posts: postReducer,
  // Add other reducers if needed
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
