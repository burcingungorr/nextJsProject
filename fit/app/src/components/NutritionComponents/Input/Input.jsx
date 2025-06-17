"use client";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style.module.css";
import { ChefHat } from "lucide-react";
import {
  fetchRecipesByQuery,
  clearSearchResults,
} from "@/redux/slices/searchSlice";

const Input = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const { searchResults } = useSelector((state) => state.search);

  const handleSearch = async (e) => {
    e.preventDefault();
    const trimmedQuery = input.trim().toLowerCase();

    if (trimmedQuery.length > 0) {
      try {
        await dispatch(fetchRecipesByQuery(trimmedQuery)).unwrap();
        // input'u temizleme! Bırak kullanıcı göstersin ya da isterse temizlesin
        // setInput("");
      } catch (error) {
        console.log("Arama sırasında bir hata oluştu:", error);
      }
    } else {
      // input boş ise arama sonuçlarını temizle
      dispatch(clearSearchResults());
    }
  };

  // Eğer input boş ise ve arama sonuçları doluysa, onları temizle (opsiyonel)
  useEffect(() => {
    if (input.trim() === "") {
      dispatch(clearSearchResults());
    }
  }, [input, dispatch]);

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Tarifler</h4>
      <form
        onSubmit={handleSearch}
        className={styles.inputWrapper}
        style={{ position: "relative" }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tarif Adı"
          className={styles.input}
          style={{ paddingLeft: "2.5rem" }}
        />
        <ChefHat size={20} className={styles.icon} />
      </form>
    </div>
  );
};

export default Input;
