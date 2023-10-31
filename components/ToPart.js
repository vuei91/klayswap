"use client";
import React, { useEffect, useState } from "react";
import {
  toLabel,
  toAmount,
  toContainer,
  toIcon,
  toImage,
  toInput,
} from "./toPart.module.css";
import { createPublicClient, custom, getContract } from "viem";
import { klaytn } from "viem/chains";
import TokenABI from "@/abi/TokenABI.json";

const ToPart = ({ oETH }) => {
  useEffect(() => {
    const publicClient = createPublicClient({
      chain: klaytn,
      transport: custom(window.ethereum),
    });
    const OETH = "0x34d21b1e550d73cee41151c77f3c73359527a396";
    const contract = getContract({
      address: OETH,
      abi: TokenABI,
      publicClient,
    });
    contract.read
      .balanceOf([window.ethereum.selectedAddress])
      .then((balance) => {
        setMyToken(parseInt(balance) / 1e18);
      });
  }, []);
  const [myToken, setMyToken] = useState(0);
  return (
    <div className={toContainer}>
      <div className={toLabel}>To</div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <input
            type="text"
            placeholder="0"
            className={toInput}
            value={oETH}
            readOnly
          />
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
          보유 <span>{myToken}</span>
        </div>
        <div>oETH</div>
      </div>
    </div>
  );
};

export default ToPart;
