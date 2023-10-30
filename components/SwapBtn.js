import React from "react";
import { swapBtn, btnName } from "./swapBtn.module.css";

const SwapBtn = () => {
  return (
    <div className={swapBtn}>
      <div className={btnName}>
        <span>Swap</span>
      </div>
    </div>
  );
};

export default SwapBtn;
