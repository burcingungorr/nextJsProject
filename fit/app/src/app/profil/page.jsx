import Title from "@/components/Title/Title";
import React from "react";
import "../globals.css";
import User from "@/components/ProfilComponents/User/User";
import CalChart from "@/components/ProfilComponents/CalChart/CalChart";
import Target from "@/components/ProfilComponents/Target/Target";

const Profile = () => {
  return (
    <div className="container">
      <Title text="Profil" />
      <User />
      <div className="target">
        <Target />
        <CalChart />
      </div>
    </div>
  );
};

export default Profile;
