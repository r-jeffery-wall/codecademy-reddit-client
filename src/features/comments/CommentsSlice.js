const { createSlice } = require("@reduxjs/toolkit");

const CommentsSlice = createSlice({
	name: 'comments',
	initialState: [{user: 'DummyUser123', comment: 'Wow cool!'}, {user: 'DummyUserrr', comment: 'This sucks.'}], // DUMMY DATA
	reducers: {

	}
})

export const selectComments = (state) => state.comments; // This will need to be updated to properly use the API.
export default CommentsSlice.reducer;
