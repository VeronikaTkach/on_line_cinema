import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './UserSlice';
import MoviesSlice from './MoviesSlice';

const store = configureStore({
  reducer: {
    user: UserSlice,
    movies: MoviesSlice,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
