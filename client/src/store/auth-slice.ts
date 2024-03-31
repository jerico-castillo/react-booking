import { createSlice } from "@reduxjs/toolkit";
import { UserData, loginUser } from "./auth-action";
import type { PayloadAction } from "@reduxjs/toolkit";

type User = {
  _id: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

type SliceState = {
  user: User | null;
  loading: boolean;
  error: string | null;
};

const initialState: SliceState = {
  user: null,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<UserData>) => {
          state.user = action.payload;
          state.loading = false;
        }
      )
      .addCase(loginUser.rejected, (state, action) => {
        if (action.payload) {
          state.loading = false;
          state.error = action.payload.errorMessage;
        }
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
