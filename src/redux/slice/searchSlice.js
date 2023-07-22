import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, API_KEY } from "../../api/index";

const initialState = {
  loading: "idle",
  error: null,
  data: {},
};

const options = (type, searchValue, page) => {
  return {
    method: "GET",
    url: `${BASE_URL}/search/${type}`,
    params: { query: searchValue, page: String(page) },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
};

export const getData = createAsyncThunk("search/searchData", async (arg) => {
  const { type, searchValue, page } = arg;
  return await axios
    .request(options(type, searchValue, page))
    .then((res) => res.data)
    .catch((err) => err.message);
});

export const getPushData = createAsyncThunk(
  "search/pushSearchData",
  async (arg) => {
    const { type, searchValue, page } = arg;
    return await axios
      .request(options(type, searchValue, page))
      .then((res) => res.data)
      .catch((err) => err.message);
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      state.loading = "pending";
    });
    getData;
    builder.addCase(getData.fulfilled, (state, action) => {
      (state.loading = "fulfilled"), (state.data = action.payload);
      state.type = action.meta.arg.type;
    });

    builder.addCase(getData.rejected, (state, action) => {
      (state.loading = "rejected"), (state.error = action.error.message);
    });

    builder.addCase(getPushData.pending, (state) => {
      state.moreLoading = "pending";
    });
    getData;
    builder.addCase(getPushData.fulfilled, (state, action) => {
      (state.moreLoading = "fulfilled"),
        state.data.result.push(...action.payload.results);
    });

    builder.addCase(getPushData.rejected, (state, action) => {
      (state.moreLoading = "rejected"), (state.error = action.error.message);
    });
  },
});

export default searchSlice.reducer;
