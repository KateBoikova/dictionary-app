import { createSlice } from '@reduxjs/toolkit';

export const saverSlice = createSlice({
  name: 'saver',
  initialState: { saved: [], snackbarMessage: '', snackbarStatus: false },

  reducers: {
    save: (state, action) => {
      state.saved = [...state.saved, action.payload.result];
      state.snackbarMessage = 'Saved!';
      state.snackbarStatus = true;
      // let newSaved = new Map(state.saved.entries());
      // newSaved.set(action.payload.id, action.payload.result);
      // state.saved = newSaved;
    },
    del: (state, action) => {
      const id = action.payload;
      let newSaved = [];
      state.saved.forEach(item => {
        if (item[0].word !== id) {
          newSaved.push(item);
        }
      });
      state.saved = newSaved;
      state.snackbarMessage = 'Deleted!';
      state.snackbarStatus = true;
    },
  },
});

export const { save, del } = saverSlice.actions;
export default saverSlice.reducer;
