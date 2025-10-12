import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import booksReducer from './features/booksSlice';
import filterReducer from './features/filterSlice';
import errorReducer from './features/errorSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['isLoadingViaAPI'],
};

const persistedBooksReducer = persistReducer(persistConfig, booksReducer);

const store = configureStore({
  reducer: {
    books: persistedBooksReducer,
    filter: filterReducer,
    error: errorReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
