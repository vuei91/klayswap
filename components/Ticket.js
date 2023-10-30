import React from "react";
import SwapBtn from "./SwapBtn";
import SwapContent from "./SwapContent";
import { ticket } from "./ticket.module.css";

const Ticket = () => {
  return (
    <div className={ticket}>
      <SwapContent />
      <SwapBtn />
    </div>
  );
};

export default Ticket;
