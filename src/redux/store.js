import { homeReducer,dataReducer } from "./slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    home: homeReducer,
    singleData: dataReducer,
  },
});

export default store