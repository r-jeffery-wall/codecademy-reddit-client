const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getCommentsForPost = createAsyncThunk('comments/getCommentsForPost', async (postInfo) => {
	// Accepts a Post id and gets comments for that post.
	const {subreddit, postId} = postInfo;
	const response = await fetch(`https://api.reddit.com/${subreddit}/comments/${postId}`);
	const json = await response.json();
	const data = {
		postId: postId,
		comments: json[1].data.children.map(comment => {
			return {
				author: comment.data.author,
				text: comment.data.body,
				score: comment.data.score,
				timestamp: comment.data.created
			}
		})
	} 
	
	return data;
})

const CommentsSlice = createSlice({
	name: 'comments',
	initialState: {
		commentsForPostId: {},
		commentsLoading: false,
		commentsFailed: false
	},
	reducers: {
	},
	extraReducers: {
		[getCommentsForPost.pending]: (state) => {
			state.commentsLoading = true;
			state.commentsFailed = false;
		},
		[getCommentsForPost.fulfilled]: (state, action) => {
			const {postId, comments} = action.payload;
			state.commentsForPostId[postId] = comments;
			state.commentsLoading = false;
			state.commentsFailed = false;	
		},
		[getCommentsForPost.rejected]: (state) => {
			state.commentsLoading = false;
			state.commentsFailed = true;
		}
	}
})

export const selectCommentsForPostId = (state) => state.comments.commentsForPostId; 
export default CommentsSlice.reducer;
