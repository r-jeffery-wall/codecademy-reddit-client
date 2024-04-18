import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const processResponse = async (response) => {
  const json = await response.json();
  const data = json.data.children.map((post) => {
    return {
      subreddit: post.data.subreddit_name_prefixed,
      author: post.data.author,
      timestamp: post.data.created,
      title: post.data.title,
      upvotes: post.data.score,
      key: post.data.id,
      text: post.data.selftext,
      url: post.data.url,
      numComments: post.data.num_comments,
    };
  });
  return data;
};

export const getPostsforSub = createAsyncThunk(
  "posts/getPostsforSub",
  async (sub) => {
    // Accepts a reddit sub and provides a list of posts for that sub.
    const response = await fetch(`https://api.reddit.com/${sub}`);
    return processResponse(response);
  }
);

export const searchPosts = createAsyncThunk(
  "posts/searchPosts",
  async (searchTerm) => {
    const response = await fetch(
      `https://api.reddit.com/search/?q=${searchTerm}&limit=10`
    );
    return processResponse(response);
  }
);

const PostsSlice = createSlice({
  name: "posts",
  initialState: {
    postsList: [],
    postsLoading: false,
    postsFailed: false,
    postsSearchFailed: false,
  },
  reducers: {},
  extraReducers: {
    [getPostsforSub.pending]: (state) => {
      state.postsLoading = true;
      state.postsFailed = false;
      state.postsSearchFailed = false;
    },
    [getPostsforSub.fulfilled]: (state, action) => {
      state.postsLoading = false;
      state.postsFailed = false;
      state.postsList = action.payload;
      state.postsSearchFailed = false;
    },
    [getPostsforSub.rejected]: (state) => {
      state.postsLoading = false;
      state.postsFailed = true;
      state.postsSearchFailed = false;
    },
    [searchPosts.pending]: (state) => {
      state.postsLoading = true;
      state.postsFailed = false;
      state.postsSearchFailed = false;
    },
    [searchPosts.fulfilled]: (state, action) => {
      state.postsLoading = false;
      state.postsFailed = false;
      state.postsList = action.payload;
      state.postsSearchFailed = false;
    },
    [searchPosts.rejected]: (state) => {
      state.postsLoading = false;
      state.postsFailed = false;
      state.postsSearchFailed = true;
    },
  },
});

export const selectPosts = (state) => state.posts.postsList;
export const isPostsLoading = (state) => state.posts.postsLoading;
export const isPostsFailed = (state) => state.posts.postsFailed;
export const isPostsSearchFailed = (state) => state.posts.postsSearchFailed;
export default PostsSlice.reducer;
