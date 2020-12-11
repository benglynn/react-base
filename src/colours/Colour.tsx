import { FC } from "react";
import CSS from "csstype";

interface Data {
  name: string;
  hex: string;
}

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

const squareStyle = (colour: Data): CSS.Properties => ({
  backgroundColor: `#${colour.hex}`,
  border: "1px solid #ccc",
  borderRadius: "2px",
  height: "2em",
  width: "2em",
});

interface Props {
  colour: Data;
}

const Colour: FC<Props> = ({ colour }) => (
  <div style={colourStyle}>
    <div style={squareStyle(colour)}></div>
    <h2>{colour.name}</h2>
    <button>Add</button>
  </div>
);

export default Colour;
