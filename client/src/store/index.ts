import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./search-slice";
import authReducer from "./auth-slice";
export const store = configureStore({
  reducer: {
    search: searchReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
