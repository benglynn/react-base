import { FC } from "react";
import CSS from "csstype";
import Colour from "./Colour";

const colourStyle: CSS.Properties = {
  alignItems: "center",
  border: "1px solid #ccc",
  borderRadius: "2px",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: ".5em",
  marginRight: ".5em",
  minWidth: "15em",
  padding: ".5em",
};

const squareStyle = (colour: Colour): CSS.Properties => ({
  backgroundColor: `#${colour.hex}`,
  border: "1px solid #ccc",
  borderRadius: "2px",
  height: "2em",
  width: "2em",
});

interface Props {
  colour: Colour;
  actionLabel: string;
  action: (colour: Colour) => void;
}

const Swatch: FC<Props> = ({ colour, actionLabel, action }) => (
  <div style={colourStyle}>
    <div style={squareStyle(colour)}></div>
    <h2>{colour.name}</h2>
    <button onClick={() => action(colour)}>{actionLabel}</button>
  </div>
);

export default Swatch;
