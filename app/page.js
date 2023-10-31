"use client";
import Description from "@/components/Description";
import Ticket from "@/components/Ticket";
import React, { useEffect, useState } from "react";
import { container } from "./page.module.css";

const Home = () => {
  useEffect(() => {
    window.ethereum.enable().then((accounts) => {});
  }, []);
  return (
    <div>
      <div className={container}>
        <Description />
        <Ticket />
      </div>
    </div>
  );
};

export default Home;
