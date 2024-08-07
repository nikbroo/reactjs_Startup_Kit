import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../Store/Store";
import {
  instance,
  setAuthToken,
} from "../utils/axiosInstance";

interface userState {
  user: {};
  isAuthenticated: boolean;
  accessToken: null | string;
  loading: boolean;
  error: string;
}

const initialState: userState = {
  user: {},
  isAuthenticated: false,
  accessToken: null,
  loading: false,
  error: "",
};

export const createAccount = createAsyncThunk(
  "createAccount",
  async (data: object, { rejectWithValue }) => {
    try {
      const url = "/user/signup";
      const requestBody = data;
      const response = await instance.post(url, requestBody);
      if (response?.data?.status) {
        console.log(response, "------------response createAccount");
      }
      return response?.data;
    } catch (error: any) {
      console.log("---------->createAccount error", error);
      throw rejectWithValue(error?.response?.data);
    }
  }
);

export const loginAccount = createAsyncThunk(
  "loginAccount",
  async (data: object, { rejectWithValue }) => {
    try {
      const url = "/user/login";
      const requestBody = data;
      const response = await instance.post(url, requestBody);
      if (response?.data?.status) {
        console.log(response, "------------response loginAccount");
        setAuthToken(response?.data?.data?.token);
      }
      return response?.data;
    } catch (error: any) {
      console.log("---------->loginAccount error", error);
      throw rejectWithValue(error?.response?.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin: (state) => {
      return { ...state, isAuthenticated: !state.isAuthenticated };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(createAccount.pending, (state) => {
        return { ...state, loading: true };
      })
      .addCase(createAccount.fulfilled, (state, action) => {
        console.log(action?.payload, "createAccount.fulfilled action?.payload");
        return {
          ...state,
          loading: false,
        };
      })
      .addCase(createAccount.rejected, (state) => {
        return { ...state, loading: false };
      });

    builder
      .addCase(loginAccount.pending, (state) => {
        return { ...state, loading: true };
      })
      .addCase(loginAccount.fulfilled, (state, action) => {
        console.log(action?.payload, "loginAccount.fulfilled action?.payload");
        return {
          ...state,
          loading: false,
          accessToken: action.payload?.data?.token,
          isAuthenticated: true,
          user: action.payload?.data?.user[0],
        };
      })
      .addCase(loginAccount.rejected, (state) => {
        return { ...state, loading: false };
      });
  },
});

export const { userLogin } = userSlice.actions;

export const user = (state: RootState) => state.user;

export default userSlice.reducer;
