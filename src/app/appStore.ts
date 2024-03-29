import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { postApi } from '../shared/api/posts-api/rtkApi';

const rootReducer = combineReducers({
  [postApi.reducerPath]: postApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(postApi.middleware),
  });
};
