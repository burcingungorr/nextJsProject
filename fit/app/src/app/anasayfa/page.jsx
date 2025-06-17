import Title from "@/components/Title/Title";
import React from "react";
import "../globals.css";
import Hello from "@/components/HomeComponents/Hello/Hello";
import Motivation from "@/components/HomeComponents/Motivation/Motivation";
import InfoCard from "@/components/HomeComponents/InfoCard/InfoCard";
import Incoming from "@/components/HomeComponents/Incoming/Incoming";
import Gone from "@/components/HomeComponents/Gone/Gone";

const HomePage = () => {
  return (
    <div className="container">
      <Title text="Anasayfa" />
      <Hello />
      <Motivation />
      <div className="cal">
        <Incoming />
        <Gone />
      </div>
      <InfoCard />
    </div>
  );
};

export default HomePage;
