import React, { useEffect, useState } from "react";
import { swapBtn, btnName } from "./swapBtn.module.css";
import { createWalletClient, custom, getContract } from "viem";
import { klaytn } from "viem/chains";
import FactroyABI from "@/abi/FactoryABI.json";
import useSWR from "swr";

const SwapBtn = () => {
  const { data: klay } = useSWR("klay", null, { fallbackData: 0 });
  useEffect(() => {
    const walletClient = createWalletClient({
      chain: klaytn,
      transport: custom(window.ethereum),
      account: window.ethereum.selectedAddress,
    });
    const Factory = "0xc6a2ad8cc6e4a7e08fc37cc5954be07d499e7654";
    const _contract = getContract({
      address: Factory,
      abi: FactroyABI,
      walletClient,
    });
    setContract(_contract);
  }, []);
  const [contract, setContract] = useState();
  const swap = () => {
    const OETH = "0x34d21b1e550d73cee41151c77f3c73359527a396";
    contract.write.exchangeKlayPos({
      value: BigInt(klay) * BigInt(1e18),
      args: [OETH, 1, []],
    });
  };
  return (
    <div className={swapBtn} onClick={swap}>
      <div className={btnName}>
        <span>Swap</span>
      </div>
    </div>
  );
};

export default SwapBtn;
