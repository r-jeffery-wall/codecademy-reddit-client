import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const auth = {
	grant_type: 'client_credentials',
	client_id: process.env.REACT_APP_CLIENT_ID,
	client_secret: process.env.REACTR_APP_CLIENT_SECRET
}

export const authenticate = createAsyncThunk('auth/authenticate', async () => {
	const response = await fetch('https://www.reddit.com/api/v1/access_token', {
		method: "POST",
		requestBody: auth
	})

	const json = await response.json();

	return json;
})

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		accessToken: '',
		authPending: false,
		authFailed: false
	},
	reducers: {

	},
	extraReducers: {
		[authenticate.pending]: (state) => {
			state.authPending = true;
			state.authFailed = false;
		},
		[authenticate.fulfilled]: (state, action) => {
			state.authPending = false;
			state.authFailed = false;
			state.accessToken = action.payload;
		},
		[authenticate.rejected]: (state) => {
			state.authPending = false;
			state.authFailed = true;
		}
	}
})

export const selectAccessToken = (state) => state.auth.accessToken;
export default authSlice.reducer;
