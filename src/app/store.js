import { configureStore } from '@reduxjs/toolkit';
import PopularSubsReducer from '../features/PopularSubs/PopularSubsSlice'
import PostsSlice from '../features/posts/PostsSlice';

export const store = configureStore({
  reducer: {
    header: PopularSubsReducer,
    posts: PostsSlice
  },
});

export default store;