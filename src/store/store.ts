import { configureStore } from '@reduxjs/toolkit';
import saverReducer from '../features/saver/saverSlice';

const store = configureStore({
  reducer: {
    saver: saverReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
