import { createSlice } from '@reduxjs/toolkit';
import { current } from '@reduxjs/toolkit';

export const saverSlice = createSlice({
  name: 'saver',
  initialState: {
    saved: [],
    savedWordsList: [],
    snackbarMessage: '',
    snackbarStatus: false,
  },

  reducers: {
    save: (state, action) => {
      state.saved = [...state.saved, action.payload.result];
      state.snackbarMessage = 'Saved!';
      state.snackbarStatus = true;
      let newSaved = action.payload.result[0].word;
      state.savedWordsList.push(newSaved);
      let newSavedList = state.savedWordsList;

      // let newSaved = new Map(state.saved.entries());
      // newSaved.set(action.payload.id, action.payload.result);
      // state.saved = newSaved;
    },
    del: (state, action) => {
      const id = action.payload;
      let newSaved = [];
      let newSavedWordsList = [];

      state.savedWordsList.filter((item, id) => {
        if (item !== id) {
          newSavedWordsList.push(item);
        }
      });

      state.saved.forEach(item => {
        if (item[0].word !== id) {
          newSaved.push(item);
        }
      });

      // ((saved, savedWordsList, id) => {
      //   saved.forEach(item => {
      //     if (item[0].word !== id) {

      //     }
      //   });
      // })();

      state.savedWordsList = newSavedWordsList;
      state.saved = newSaved;
      state.snackbarMessage = 'Deleted!';
      state.snackbarStatus = true;
    },
  },
});

export const { save, del } = saverSlice.actions;
export default saverSlice.reducer;
