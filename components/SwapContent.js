import React from "react";
import FromPart from "./FromPart";
import ToPart from "./ToPart";
import ChangePart from "./ChangePart";
import { content } from "./swapContent.module.css";

const SwapContent = () => {
  return (
    <div className={content}>
      <FromPart />
      <ChangePart />
      <ToPart />
    </div>
  );
};

export default SwapContent;
