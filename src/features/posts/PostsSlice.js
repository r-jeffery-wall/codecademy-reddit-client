import { createSlice } from '@reduxjs/toolkit';

const PostsSlice = createSlice({
    name: 'posts',
    initialState: [{
        title: 'Test Post',
        imageSrc: './img/5616.avif',
        text: 'Test post text.',
        upvotes: 456,
        comments: [] //TODO
    },
    {
        title: 'Test Post',
        imageSrc: './img/5616.avif',
        text: 'Test post text.',
        upvotes: 456,
        comments: [] //TODO
    }], // Dummy Values.
    reducers: {

    }
})

export const selectPosts = (state) => state.posts; // TODO - expand this to get posts by Sub when API connection is implemented.
export default PostsSlice.reducer;