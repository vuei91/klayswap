import React from "react";
import FromPart from "./FromPart";
import ToPart from "./ToPart";
import ChangePart from "./ChangePart";

const SwapContent = () => {
  return (
    <div className="swap-content">
      <FromPart />
      <ChangePart />
      <ToPart />
    </div>
  );
};

export default SwapContent;
