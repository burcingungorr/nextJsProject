import Title from "@/components/Title/Title";
import React from "react";
import "../globals.css";
import WeAbout from "@/components/AboutComponents/WeAbout/WeAbout";
import Contact from "@/components/AboutComponents/Contact/Contact";

const About = () => {
  return (
    <div className="container">
      <Title text="Hakkımızda" />
      <WeAbout />
      <Contact />
    </div>
  );
};

export default About;
