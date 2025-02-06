import { createSlice } from '@reduxjs/toolkit';

export const saverSlice = createSlice({
  name: 'saver',
  initialState: { saved: [] },
  reducers: {
    save: (state, action) => {
      state.saved = [...state.saved, action.payload.result];
      // console.log('action', action);
      // let newSaved = new Map(state.saved.entries());
      // newSaved.set(action.payload.id, action.payload.result);
      // state.saved = newSaved;
    },
    del: (state, action) => {
      const id = action.payload;
      // let stateCopy = [...state.saved];
      // console.log('state copy', stateCopy);
      // let newSaved = state.saved.filter(item => item.word !== id);
      // console.log('newSaved', newSaved);
      // return newSaved;
      let newSaved = [];
      state.saved.forEach(item => {
        if (item[0].word !== id) {
          newSaved.push(item);
        }
      });
      state.saved = newSaved;

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
