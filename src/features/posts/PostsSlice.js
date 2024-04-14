import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPostsforSub = createAsyncThunk(
  "posts/getPostsforSub",
  async (sub) => {
    // Accepts a reddit sub and provides a list of posts for that sub.
    const response = await fetch(`https://api.reddit.com/${sub}`);
    const json = await response.json();
    const data = json.data.children.map((post) => {
      return {
        subreddit: post.data.subreddit_name_prefixed,
        author: post.data.author_fullname,
        title: post.data.title,
        upvotes: post.data.ups,
        key: post.data.name,
        text: post.data.selftext,
        url: post.data.url,
      };
    });
    return data;
  }
);

const PostsSlice = createSlice({
  name: "posts",
  initialState: {
    postsList: [],
    postsLoading: false,
    postsFailed: false,
  },
  reducers: {},
  extraReducers: {
    [getPostsforSub.pending]: (state) => {
      state.postsLoading = true;
      state.postsFailed = false;
    },
    [getPostsforSub.fulfilled]: (state, action) => {
      state.postsLoading = false;
      state.postsFailed = false;
      state.postsList = action.payload;
    },
    [getPostsforSub.rejected]: (state) => {
      state.postsLoading = false;
      state.postsFailed = true;
    },
  },
});

export const selectPosts = (state) => state.posts.postsList;
export default PostsSlice.reducer;
