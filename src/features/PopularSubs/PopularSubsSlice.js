import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getPopularSubs = createAsyncThunk('PopularSubs/getPopularSubs', async () => {
    const response = await fetch('https://api.reddit.com/subreddits/popular.json');
    const json = await response.json();
    const data = json.data.children.map(sub => {
        return {
        title: sub.title,
        url: `https://reddit.com/r/${sub.title}`
        }
    });
    return data;
})

const PopularSubsSlice = createSlice({
    name: 'PopularSubs',
    initialState: {
        popularSubsList: [],
        popularSubsLoading: false,
        popularSubsFailed: false
    },
    reducers: {
    },
    extraReducers: {
        [getPopularSubs.pending]: (state) => {
            state.popularSubsLoading = true;
            state.popularSubsFailed = false;
        },
        [getPopularSubs.fulfilled]: (state, action) => {
            state.popularSubsLoading = false;
            state.popularSubsFailed = false;
            state.popularSubsList = action.payload;
        },
        [getPopularSubs.rejected]: (state) => {
            state.popularSubsLoading = false;
            state.popularSubsFailed = true;
        }
    }
})

export const selectPopularSubs = (state) => state.PopularSubs.popularSubsList;
export default PopularSubsSlice.reducer;
