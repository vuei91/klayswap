import Description from "@/components/Description";
import Ticket from "@/components/Ticket";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="container">
        <Description />
        <Ticket />
      </div>
    </div>
  );
};

export default Home;
