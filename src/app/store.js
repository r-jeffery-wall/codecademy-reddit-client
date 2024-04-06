import { configureStore } from '@reduxjs/toolkit';
import headerReducer from '../features/header/HeaderSlice'

export const store = configureStore({
  reducer: {
    header: headerReducer
  },
});

export default store;