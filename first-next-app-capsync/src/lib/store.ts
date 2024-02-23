import { configureStore } from "@reduxjs/toolkit";
import CounteSlice from "./Sliecs/CounteSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: CounteSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
