"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./style.module.css";
import FoodCard from "../FoodCard/FoodCard";
import { fetchRecipes } from "@/redux/slices/recipesSlice";

const Food = () => {
  const dispatch = useDispatch();

  // recipesSlice: tüm tarifler
  const {
    list: recipeList,
    loading,
    error,
  } = useSelector((state) => state.recipes);

  // searchSlice: arama sonuçları
  const { searchResults } = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const handleGoToRecipe = (url) => {
    if (url) window.open(url, "_blank");
  };

  const displayedList = searchResults?.length > 0 ? searchResults : recipeList;

  return (
    <div className={styles.foodContainer}>
      {loading && <p>Yükleniyor...</p>}
      {error && <p>Hata: {error}</p>}
      {!loading && displayedList?.length === 0 && <p>Tarif bulunamadı.</p>}
      {!loading &&
        displayedList?.map((recipe, index) => (
          <FoodCard
            key={recipe.uri || index}
            name={recipe.label}
            calories={
              typeof recipe.calories === "number"
                ? Math.round(recipe.calories)
                : "N/A"
            }
            mealType={
              recipe.mealType ? recipe.mealType.join(", ") : "Uncategorized"
            }
            image={recipe.image}
            url={recipe.url}
            onGoToRecipe={() => handleGoToRecipe(recipe.url)}
          />
        ))}
    </div>
  );
};

export default Food;
