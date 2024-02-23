import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CounteSlice from "./Sliecs/CounteSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  counter: CounteSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore: any = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(makeStore);

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
