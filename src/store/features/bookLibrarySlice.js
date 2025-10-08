import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  author: '',
};

const bookSlice = createSlice({
  name: 'bookLibrary',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setAuthor: (state, action) => {
      state.author = action.payload;
    },
    resetForm: () => {
      return initialState;
    },
  },
});

export const { setTitle, setAuthor, resetForm } = bookSlice.actions;

export default bookSlice.reducer;
