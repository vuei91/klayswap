import React, { useEffect, useState } from "react";
import FromPart from "./FromPart";
import ToPart from "./ToPart";
import ChangePart from "./ChangePart";
import { content } from "./swapContent.module.css";
import { createPublicClient, custom, getContract } from "viem";
import { klaytn } from "viem/chains";
import ExchangeABI from "@/abi/ExchangeABI.json";

const SwapContent = () => {
  useEffect(() => {
    const publicClient = createPublicClient({
      chain: klaytn,
      transport: custom(window.ethereum),
    });
    const _contract = getContract({
      address: "0x27f80731dddb90c51cd934e9bd54bff2d4e99e8a",
      abi: ExchangeABI,
      publicClient,
    });
    setContract(_contract);
  }, []);
  const [myToken, setMyToken] = useState(0);
  const [contract, setContract] = useState();
  const [oETH, setOETH] = useState(0);
  const change = (e) => {
    const klay = e.target.value;
    contract.read.getCurrentPool().then((LP) => {
      const [klayLP, oEthLP] = LP;
      console.log(LP);
      const oETH = (klay * parseInt(oEthLP)) / parseInt(klayLP);
      setOETH(oETH);
    });
  };
  return (
    <div className={content}>
      <FromPart change={change} />
      <ChangePart />
      <ToPart oETH={oETH} />
    </div>
  );
};

export default SwapContent;
