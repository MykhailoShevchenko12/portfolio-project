import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './features/booksSlice';
import filterReducer from './features/filterSlice';
import errorReducer from './features/errorSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    filter: filterReducer,
    error: errorReducer,
  },
});

export default store;
