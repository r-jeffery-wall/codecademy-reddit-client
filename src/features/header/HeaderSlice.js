import { createSlice } from '@reduxjs/toolkit';

const HeaderSlice = createSlice({
    name: 'header',
    initialState: [{name: 'Front Page', url: '#'}, {name: 'News', url: '#'}, {name: 'Funny', url: '#'}, {name: 'Advice Animals', url: '#'}, {name: 'Gaming', url: '#'}],
    reducers: {
        getPopularSubs: (state, action) => {
            return action.payload;
        }
    }
})

export const selectPopularSubs = (state) => state.header;
export const { getPopularSubs } = HeaderSlice.actions;
export default HeaderSlice.reducer;