import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../store";
import colours from "./colours.json";
import Colour from "./Colour";

const purgeDelay = 150;

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

export const purgeSelection = (): AppThunk => async (dispatch, getState) => {
  setTimeout(() => {
    const selected = getState().colours.selected;
    if (selected.length > 0) {
      dispatch(removeFromSelection(selected[selected.length - 1]));
      dispatch(purgeSelection());
    }
  }, purgeDelay);
};

export const selectColours: (s: RootState) => ColoursSlice = (state) =>
  state.colours;

export default coloursSlice.reducer;
