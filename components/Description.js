"use client";
import React from "react";
import { main, strong } from "./description.module.css";

const Description = () => {
  return (
    <div className={main}>
      원하는 자산으로 바로 <span className={strong}>교환(스왑)</span>하세요
    </div>
  );
};

export default Description;
