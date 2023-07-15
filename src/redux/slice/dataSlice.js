import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, API_KEY } from "../../api/index";
const initialState = {
  loading: "idle",
  data: {},
  error: null,
};

const options = (type, id) => {
  return {
    method: "GET",
    url: `${BASE_URL}/${type}/${id}`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
};

export const getData = createAsyncThunk("dataSlice/getData", async (arg) => {
  const { type, id } = arg;
  return await axios
    .request(options(type, id))
    .then((res) => res.data)
    .catch((err) => err.message);
});
const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
    reset: (state) => {
      state.data = {};
      state.loading = "idle";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      state.data[action.meta.arg.type] = action.payload;
      state.data[action.meta.arg.type].type = action.meta.arg.type;
      state.data[action.meta.arg.type].loading = "fulfilled";
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.loading = "rejected";
      state.error = action.error.message;
    });
  },
});

export default dataSlice.reducer;
export const resetAction = dataSlice.actions.reset;
