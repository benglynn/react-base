import { FC } from "react";
import colours from "./colours.json";
import CSS from "csstype";
import Colour from "./Colour";

const coloursStyle: CSS.Properties = {
  display: "inline-flex",
  flexWrap: "wrap",
};

const Colours: FC = () => {
  return (
    <>
      <h1>Colours</h1>
      <div style={coloursStyle}>
        {colours.map((colour) => (
          <Colour colour={colour}></Colour>
        ))}
      </div>
    </>
  );
};

export default Colours;
