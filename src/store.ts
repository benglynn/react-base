import { configureStore } from "@reduxjs/toolkit";
import { Action, combineReducers } from "redux";
import { ThunkAction } from "redux-thunk";
import colours from "./colours/coloursSlice";

export const rootReducer = combineReducers({
  colours,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default configureStore({
  reducer: rootReducer,
});
