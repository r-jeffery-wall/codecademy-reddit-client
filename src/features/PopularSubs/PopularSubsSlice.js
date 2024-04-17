import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getPopularSubs = createAsyncThunk('PopularSubs/getPopularSubs', async () => {
    const response = await fetch('https://api.reddit.com/subreddits/popular.json?limit=8');
    const json = await response.json();
    const data = json.data.children.map(sub => {
        return {
        name: sub.data.display_name,
        url: `https://reddit.com/${sub.data.display_name_prefixed}`,
        key: sub.data.display_name
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
export const isPopularSubsLoading = (state) => state.PopularSubs.popularSubsLoading;
export default PopularSubsSlice.reducer;
