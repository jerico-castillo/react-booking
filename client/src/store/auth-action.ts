import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AppDispatch } from "./index";
import type { RootState } from "./index";
import axios from "axios";

export interface UserData {
  _id: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

interface userAttributes {
  username: string;
  password: string;
}

interface MyKnownError {
  errorMessage: string;
}

// const options = {
//   withCredentials: true,
// };

export const loginUser = createAsyncThunk<
  UserData,
  userAttributes,
  {
    dispatch: AppDispatch;
    state: RootState;
    rejectValue: MyKnownError;
  }
>("user/login", async (credentials, thunkApi) => {
  const res = await axios.post(
    "http://localhost:8800/api/auth/login",
    credentials
  );
  if (res.status === 404) {
    return thunkApi.rejectWithValue({
      errorMessage: "에러발생",
    } as MyKnownError);
  }

  if (res.status === 400) {
    return thunkApi.rejectWithValue({
      errorMessage: "에러발생",
    } as MyKnownError);
  }
  return res.data;
});
