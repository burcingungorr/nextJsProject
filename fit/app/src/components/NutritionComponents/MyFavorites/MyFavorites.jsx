import { Heart } from "lucide-react";
import React from "react";
import styles from "./style.module.css";

const MyFavorites = () => {
  return (
    <div className={styles.myFavoritesContainer}>
      <Heart />
    </div>
  );
};

export default MyFavorites;
