import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, API_KEY } from "../../api/index";
const initialState = {
  loading: "idle",
  movie: {
    now_playing: {},
    popular: {},
    top_rated: {},
    upcoming: {},
  },
  tv: {
    airing_today: {},
    on_the_air: {},
    popular: {},
    top_rated: {}
  },
  error: null,
};

const options = (type, list, page) => {
  return {
    method: "GET",
    url: `${BASE_URL}/${type}/${list}/?page=${page}`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
};

export const getData = createAsyncThunk("home/getData", async (arg) => {
  const { type, list, page } = arg;
  return await axios
    .request(options(type, list, page))
    .then((res) => ({ ...res.data, type, list }))
    .catch((err) => err.message);
});

export const getPushData = createAsyncThunk("home/getPushData", async (arg) => {
  const { type, list, page } = arg;
  return await axios
    .request(options(type, list, page))
    .then((res) => ({ ...res.data, type, list }))
    .catch((err) => err.message);
});

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
    builder.addCase(getData.pending, (state, action) => {
      if (action.meta.arg.type === "movie") {
        state.movie[action.meta.arg.list].loading = "pending";
        state.loading = "pending";
      } else {
        state.tv[action.meta.arg.list].loading = "pending";
        state.loading = "pending";
      }
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      if (action.payload.type === "movie") {
        state.loading = "fulfilled";
        state.movie[action.payload.list] = action.payload;
        state.movie[action.payload.list].loading = "fulfilled";
      } else {
        state.loading = "fulfilled";
        state.tv[action.payload.list] = action.payload;
        state.tv[action.payload.list].loading = "fulfilled";
      }
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.loading = "rejected";
      state.error = action.error.message;
    });

    builder.addCase(getPushData.pending, (state, action) => {
      if (action.meta.arg.type === "movie") {
        state.movie[action.meta.arg.list].moreLoading = "pending";
      } else {
        state.tv[action.meta.arg.list].moreLoading = "pending";
      }
    });
    builder.addCase(getPushData.fulfilled, (state, action) => {
      if (action.payload.type === "movie") {
        state.movie[action.meta.arg.list].moreLoading = "fulfilled";
        state.movie[action.meta.arg.list].results.push(
          ...action.payload.results
        );
        state.movie[action.meta.arg.list].page = action.payload.page;
      } else {
        state.tv[action.meta.arg.list].moreLoading = "fulfilled";
        state.tv[action.meta.arg.list].results.push(...action.payload.results);
        state.tv[action.meta.arg.list].page = action.payload.page;
      }
    });
    builder.addCase(getPushData.rejected, (state, action) => {
      state.movie[action.meta.arg.list].moreLoading = "rejected";
      state.movie[action.meta.arg.list].error = action.error.message;
    });
  },
});

export default homeSlice.reducer;
export const resetAction = homeSlice.actions.reset;
