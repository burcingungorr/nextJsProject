import Title from "@/components/Title/Title";
import React from "react";
import "../globals.css";
import Food from "@/components/NutritionComponents/Foods/Food";
import Input from "@/components/NutritionComponents/Input/Input";
import MyFavorites from "@/components/NutritionComponents/MyFavorites/MyFavorites";

const Nutrition = () => {
  return (
    <div className="container">
      <Title text="Beslenme" />
      <Input />

      <div className="divcontainer">
        <MyFavorites />
      </div>

      <Food />
    </div>
  );
};

export default Nutrition;
