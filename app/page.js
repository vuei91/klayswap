import Description from "@/components/Description";
import Ticket from "@/components/Ticket";
import React from "react";
import { container, bg } from "./page.module.css";

const Home = () => {
  return (
    <div className={bg}>
      <div className={container}>
        <Description />
        <Ticket />
      </div>
    </div>
  );
};

export default Home;
