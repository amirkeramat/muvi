import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, API_KEY } from "../../api/index";
const initialState = {
  data: {
    movie: {},
    tv: {},
    loading: "idle",
    error: null,
  },
  videos: {},
  similar: {},
  error: null,
};

const options = (type, id, detail) => {
  return {
    method: "GET",
    url:
      detail !== ""
        ? `${BASE_URL}/${type}/${id}/${detail}`
        : `${BASE_URL}/${type}/${id}`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
};

export const getData = createAsyncThunk("dataSlice/getData", async (arg) => {
  const { type, id, detail } = arg;
  return await axios
    .request(options(type, id, detail))
    .then((res) => res.data)
    .catch((err) => err.message);
});

const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
    reset: (state) => {
      state.data = {};
      state.similar = {};
      state.videos = {};
      state.loading = "idle";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state, action) => {
      if (action.meta.arg.detail !== "") {
        state[action.meta.arg.detail] = "pending";
      } else {
        state.data.loading = "pending";
      }
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      if (action.meta.arg.detail !== "") {
        state[action.meta.arg.detail] = action.payload;
        state[action.meta.arg.detail].type = action.meta.arg.type;
        state[action.meta.arg.detail].loading = "fulfilled";
      } else {
        state.data.loading = "fulfilled";
        state.data[action.meta.arg.type] = action.payload;
        state.data[action.meta.arg.type].type = action.meta.arg.type;
        state.data[action.meta.arg.type].loading = "fulfilled";
      }
    });
    builder.addCase(getData.rejected, (state, action) => {
      if (action.meta.arg.detail !== "") {
        state[action.meta.arg.detail].loading = "rejected";
        state[action.meta.arg.detail].error = action.error.message;
      } else {
        state.data.loading = "rejected";
        state.data[action.meta.arg.type].loading = "rejected";
        state.data[action.meta.arg.type].error = action.error.message;
      }
    });
  },
});

export default dataSlice.reducer;
export const resetAction = dataSlice.actions.reset;
