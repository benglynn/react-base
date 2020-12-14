import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import colours from "./colours/coloursSlice";

export const rootReducer = combineReducers({
  colours,
});

export type RootState = ReturnType<typeof rootReducer>;

export default configureStore({
  reducer: rootReducer,
});
