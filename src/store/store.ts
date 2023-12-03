import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postSlice from "./postSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import loginSlice from "./loginSlice";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  post: postSlice,
  login: loginSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
