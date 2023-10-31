import React from "react";
import {
  toLabel,
  toAmount,
  toContainer,
  toIcon,
  toImage,
  toInput,
} from "./toPart.module.css";

const ToPart = () => {
  return (
    <div className={toContainer}>
      <div className={toLabel}>To</div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <input type="text" placeholder="0" className={toInput} />
        </div>
        <div className={toIcon}>
          <img
            className={toImage}
            src="https://ss.klayswap.com/data/img/token/0x34d21b1e550d73cee41151c77f3c73359527a396.svg"
            alt=""
          />
        </div>
      </div>
      <div className={toAmount}>
        <div>
          보유 <span>0</span>
        </div>
        <div>oETH</div>
      </div>
    </div>
  );
};

export default ToPart;
