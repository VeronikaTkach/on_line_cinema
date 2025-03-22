import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './UserSlice';
import ActorsSlice from './ActorsSlice';
const store = configureStore({
  reducer: {
    user: UserSlice,
    actors: ActorsSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
