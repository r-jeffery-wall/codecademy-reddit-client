import { createSlice } from '@reduxjs/toolkit';

const PopularSubsSlice = createSlice({
    name: 'PopularSubs',
    initialState: [{name: 'Front Page', url: '#'}, {name: 'News', url: '#'}, {name: 'Funny', url: '#'}, {name: 'Advice Animals', url: '#'}, {name: 'Gaming', url: '#'}],
    reducers: {
        getPopularSubs: (state, action) => {
            return action.payload;
        }
    }
})

export const selectPopularSubs = (state) => state.header;
export const { getPopularSubs } = PopularSubsSlice.actions;
export default PopularSubsSlice.reducer;