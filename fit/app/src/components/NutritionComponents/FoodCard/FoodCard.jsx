"use client";

import React from "react";
import styles from "./style.module.css";
import Favorite from "../Favorite/Favorite";

const FoodCard = ({
  name,
  calories,
  image,
  url,
  mealType,
  onGoToRecipe,
  onClick,
}) => {
  return (
    <div
      className={styles.foodCard}
      onClick={onClick}
      style={{ cursor: "pointer" }} // kartın tıklanabilir olduğunu belirtmek için
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <img src={image} alt={name} className={styles.foodCardImage} />
        <h4>{name}</h4>
      </div>
      <p>Kalori: {calories} kcal</p>
      <p>Öğün: {mealType}</p>
      <div className={styles.favorite}>
        <button
          className={styles.foodCardButton}
          onClick={(e) => {
            e.stopPropagation(); // butona tıklayınca kartın onClick'i tetiklenmesin
            onGoToRecipe();
          }}
        >
          Tarife Git
        </button>
        <Favorite recipeId={name} />
      </div>
    </div>
  );
};

export default FoodCard;
