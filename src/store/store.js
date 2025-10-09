import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './features/bookLibrarySlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;
