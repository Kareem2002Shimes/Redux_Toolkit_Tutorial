import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type User = {
  id: number;
  name: string;
};

type initialStateType = {
  loading: boolean;
  data: User[];
  error: string;
};

const initialState: initialStateType = {
  loading: false,
  data: [],
  error: "",
};
// Generated pending, fulfilled, rejected action types

export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data);
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message || "Something Went Wrong";
    });
  },
});

export default userSlice.reducer;
