"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./style.module.css";
import { fetchCategories } from "@/redux/slices/categorisSlice";

const Categoris = ({ onSelect }) => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.categories);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // list yüklendiğinde "running" kategorisini seç
  useEffect(() => {
    if (list && list.length > 0) {
      const runningIndex = list.findIndex(
        (cat) => cat.toLowerCase() === "running"
      );
      const idx = runningIndex !== -1 ? runningIndex : 0;
      setSelected(idx);
      if (onSelect) onSelect(list[idx]);
    }
  }, [list, onSelect]);

  const handleSelect = (idx) => {
    setSelected(idx);
    if (onSelect) onSelect(list[idx]);
  };

  if (loading) return <p>Kategoriler yükleniyor...</p>;
  if (error) return <p>Kategori yüklenirken hata: {error}</p>;

  return (
    <div className={styles.categoriesContainer}>
      {list.map((cat, idx) => (
        <div
          key={cat}
          className={`${styles.categoryBox} ${
            selected === idx ? styles.selected : ""
          }`}
          onClick={() => handleSelect(idx)}
        >
          {cat}
        </div>
      ))}
    </div>
  );
};

export default Categoris;
