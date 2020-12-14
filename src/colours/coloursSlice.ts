import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import colours from "./colours.json";
import Colour from "./Colour";

interface ColoursSlice {
  available: Colour[];
  selected: Colour[];
}

const initialState: ColoursSlice = {
  available: colours,
  selected: [],
};

const coloursSlice = createSlice({
  name: "colours",
  initialState,
  reducers: {
    addToSelection(state, action: PayloadAction<Colour>) {
      const available = state.available.filter(
        (colour) => colour.name !== action.payload.name
      );
      const selected = state.selected.concat(action.payload);
      return { available, selected };
    },
    removeFromSelection(state, action: PayloadAction<Colour>) {
      const available = state.available.concat(action.payload);
      const selected = state.selected.filter(
        (colour) => colour.name !== action.payload.name
      );
      return { available, selected };
    },
  },
});

export const { addToSelection, removeFromSelection } = coloursSlice.actions;

export const selectColours: (s: RootState) => ColoursSlice = (state) =>
  state.colours;

export default coloursSlice.reducer;
