import { configureStore } from "@reduxjs/toolkit";
import { NyTimesApi } from "../services/nyTimesApi";
import articlesReducer from "./articlesSlice";
export const store = configureStore({
  reducer: {
    [NyTimesApi.reducerPath]: NyTimesApi.reducer,
    articles: articlesReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(NyTimesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
