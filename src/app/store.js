import { configureStore } from '@reduxjs/toolkit';
import CommentsSlice from '../features/comments/CommentsSlice';
import PopularSubsReducer from '../features/PopularSubs/PopularSubsSlice'
import PostsSlice from '../features/posts/PostsSlice';

export const store = configureStore({
  reducer: {
    header: PopularSubsReducer,
    posts: PostsSlice,
    comments: CommentsSlice
  },
});

export default store;
