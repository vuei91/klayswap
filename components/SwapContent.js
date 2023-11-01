import React, { useEffect, useState } from "react";
import FromPart from "./FromPart";
import ToPart from "./ToPart";
import ChangePart from "./ChangePart";
import { content } from "./swapContent.module.css";
import { createPublicClient, custom, getContract } from "viem";
import { klaytn } from "viem/chains";
import ExchangeABI from "@/abi/ExchangeABI.json";
import useSWR from "swr";

const SwapContent = () => {
  const { mutate: setKlay } = useSWR("klay", null, { fallbackData: 0 });
  useEffect(() => {
    const publicClient = createPublicClient({
      chain: klaytn,
      transport: custom(window.ethereum),
    });
    const KSLP_KLAY_OETH = "0x27f80731dddb90c51cd934e9bd54bff2d4e99e8a";
    const _contract = getContract({
      address: KSLP_KLAY_OETH,
      abi: ExchangeABI,
      publicClient,
    });
    setContract(_contract);
  }, []);
  const [contract, setContract] = useState();
  const [oETH, setOETH] = useState(0);
  const change = (e) => {
    const klay = e.target.value;
    setKlay(klay);
    contract.read.getCurrentPool().then((LP) => {
      const [klayLP, oEthLP] = LP;
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
