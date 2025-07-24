import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counters/countersSlice";
import postsReducer from '../features/Card/postsSlice'

export const store = configureStore({
  reducer: {
    counters: counterReducer,
    posts:  postsReducer,
  },
});
export default store;
// RootState এবং AppDispatch টাইপ তৈরি করা
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
