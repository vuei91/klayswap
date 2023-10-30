import React from "react";
import SwapBtn from "./SwapBtn";
import SwapContent from "./SwapContent";
import { ticket, blurBg } from "./ticket.module.css";

const Ticket = () => {
  return (
    <div className={ticket}>
      <div className={blurBg}></div>
      <SwapContent />
      <SwapBtn />
    </div>
  );
};

export default Ticket;
