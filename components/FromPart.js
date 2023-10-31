import React from "react";
import {
  fromLabel,
  fromAmount,
  fromContainer,
  fromIcon,
  fromImage,
  fromInput,
} from "./fromPart.module.css";

const FromPart = () => {
  return (
    <div className={fromContainer}>
      <div className={fromLabel}>From</div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <input
            type="number"
            placeholder="0"
            className={fromInput}
            inputMode="decimal"
          />
        </div>
        <div className={fromIcon}>
          <img
            className={fromImage}
            src="https://ss.klayswap.com/data/img/token/0x0000000000000000000000000000000000000000/icon.svg?v=1647939876203"
            alt=""
          />
        </div>
      </div>
      <div className={fromAmount}>
        <div>
          보유 <span>0</span>
        </div>
        <div>KLAY</div>
      </div>
    </div>
  );
};

export default FromPart;
