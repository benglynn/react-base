import { FC } from "react";
import Swatches from "./colours/Swatches";
import { useSelector } from "react-redux";
import { selectColours } from "./colours/coloursSlice";
import { useDispatch } from "react-redux";
import {
  addToSelection,
  removeFromSelection,
  purgeSelection,
} from "./colours/coloursSlice";
import Colour from "./colours/Colour";

const App: FC = () => {
  const { available, selected } = useSelector(selectColours);
  const dispatch = useDispatch();
  const onAvailableClick = (colour: Colour) => dispatch(addToSelection(colour));
  const onSelectedClick = (colour: Colour) =>
    dispatch(removeFromSelection(colour));
  const onClearSelectionClick = () => dispatch(purgeSelection());
  return (
    <>
      <h1>Available colours</h1>
      <Swatches
        colours={available}
        actionLabel="Add"
        action={onAvailableClick}
      />
      <h1>
        Selection <button onClick={onClearSelectionClick}>clear</button>
      </h1>
      <Swatches
        colours={selected}
        actionLabel="Remove"
        action={onSelectedClick}
      />
    </>
  );
};

export default App;
