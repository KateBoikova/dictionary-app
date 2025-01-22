import { createSlice } from '@reduxjs/toolkit';

export const saverSlice = createSlice({
  name: 'saver',
  initialState: { saved: [] },
  reducers: {
    save: (state, action) => {
      state.saved = [...state.saved, ...action.payload];
      console.log('action:', action);
      console.log('state', state);
    },
    del: state => {
      console.log('state', state);
      // const { id } = action;
      // state.saved.splice(
      //   state.saved.findIndex(item => item.id === id),
      //   1
      // );
      // return state.saved;
    },
  },
});

export const { save, del } = saverSlice.actions;
export default saverSlice.reducer;
