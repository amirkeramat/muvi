import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  loading: "idle",
  data: {},
  error: null,
};

export const getLocation = createAsyncThunk("ip/getLocation", async () => {
  return await axios
    .get(`https://api.db-ip.com/v2/free/self?timestamp=${new Date().getTime()}`)
    .then((res) => res.data)
    .catch((err) => err.message);
});

const ipSlice = createSlice({
  name: "ip",
  initialState,
  reducers: {
    reset: (state) => {
      state.data = {};
      state.loading = "idle";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLocation.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getLocation.fulfilled, (state, action) => {
      (state.loading = "fulfilled"), (state.data = action.payload);
    });
    builder.addCase(getLocation.rejected, (state, action) => {
      (state.loading = "rejected"), (state.error = action.error);
    });
  },
});

export default ipSlice.reducer;
export const resetAction = ipSlice.actions.reset;
