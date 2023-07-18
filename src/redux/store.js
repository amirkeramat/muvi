import { homeReducer,dataReducer,ipReducer } from "./slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    home: homeReducer,
    singleData: dataReducer,
    ipAddress: ipReducer,
  },
});

export default store