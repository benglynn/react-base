import { FC } from "react";
import Colour from "./Colour";
import CSS from "csstype";
import Swatch from "./Swarch";

const coloursStyle: CSS.Properties = {
  display: "inline-flex",
  flexWrap: "wrap",
};

interface Params {
  colours: Colour[];
  actionLabel: string;
  action: (colour: Colour) => void;
}
const Swatches: FC<Params> = ({ colours, actionLabel, action }) => {
  return (
    <div style={coloursStyle}>
      {colours.map((colour) => (
        <Swatch
          colour={colour}
          actionLabel={actionLabel}
          action={action}
          key={colour.name}
        ></Swatch>
      ))}
    </div>
  );
};

export default Swatches;
