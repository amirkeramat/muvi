import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, API_KEY } from "../../api/index";
const initialState = {
  loading: "idle",
  data: {},
  error: null,
};

const options = (type, list) => {
  return {
    method: "GET",
    url: `${BASE_URL}/${type}/${list}`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
};

export const getNowPlaying = createAsyncThunk(
  "home/getNowPlaying",
  async (arg) => {
    const { type, list } = arg;
    return await axios
      .request(options(type, list))
      .then((res) => res.data)
      .catch((err) => err.message);
  }
);
const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {
    reset: (state) => {
      state.data = {};
      state.loading = "idle";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getNowPlaying.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(getNowPlaying.fulfilled, (state, action) => {
      (state.loading = "fulfilled"),
        (state.data[action.meta.arg.list] = action.payload);
      state.data[action.meta.arg.list].type = action.meta.arg.type;
      state.data[action.meta.arg.list].loading = "fulfilled";
    });
    builder.addCase(getNowPlaying.rejected, (state, action) => {
      state.loading = "rejected";
      state.error = action.error.message;
    });
  },
});

export default homeSlice.reducer;
export const resetAction = homeSlice.actions.reset;
