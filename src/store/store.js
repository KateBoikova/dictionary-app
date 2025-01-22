import { configureStore } from '@reduxjs/toolkit';
import saverReducer from '../features/saver/saverSlice';

export default configureStore({
  reducer: {
    saver: saverReducer,
  },
});
