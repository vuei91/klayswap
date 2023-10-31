"use client";
import React, { useEffect, useState } from "react";
import {
  fromLabel,
  fromAmount,
  fromContainer,
  fromIcon,
  fromImage,
  fromInput,
} from "./fromPart.module.css";
import { createPublicClient, custom } from "viem";
import { klaytn } from "viem/chains";

const FromPart = () => {
  useEffect(() => {
    const publicClient = createPublicClient({
      chain: klaytn,
      transport: custom(window.ethereum),
    });
    publicClient
      .getBalance({
        address: window.ethereum.selectedAddress,
      })
      .then((amount) => {
        setMyToken(parseInt(amount) / 1e18);
      });
  }, []);
  const [myToken, setMyToken] = useState(0);
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
          보유 <span>{myToken}</span>
        </div>
        <div>KLAY</div>
      </div>
    </div>
  );
};

export default FromPart;
