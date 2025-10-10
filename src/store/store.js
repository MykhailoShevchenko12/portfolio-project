import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './features/booksSlice';
import errorReducer from './features/errorSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    error: errorReducer,
  },
});

export default store;
