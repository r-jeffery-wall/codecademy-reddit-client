import { configureStore } from '@reduxjs/toolkit';
import PopularSubsReducer from '../features/PopularSubs/PopularSubsSlice'

export const store = configureStore({
  reducer: {
    header: PopularSubsReducer
  },
});

export default store;