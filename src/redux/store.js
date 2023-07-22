import { homeReducer, dataReducer, ipReducer,searchReducer } from "./slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    home: homeReducer,
    singleData: dataReducer,
    ipAddress: ipReducer,
    search: searchReducer,
  },
});

export default store;
