"use client";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./style.module.css";

const WorkOuts = () => {
  const { data = [], loading, error } = useSelector((state) => state.calorie);

  return (
    <div className={styles.container}>
      {loading && <p>Yükleniyor...</p>}
      {error && <p>Hata: {error}</p>}

      {data.length > 0
        ? data.map((item, index) => (
            <div key={index} className={styles.card}>
              <h4>{item.name || "Antrenman"}</h4>
              <p>
                <strong>Süre:</strong> {item.duration_minutes || "-"} dk
              </p>

              <p>
                <strong>Kalori:</strong> {item.total_calories || "-"} kcal
              </p>
            </div>
          ))
        : !loading && <p>Henüz veri yok</p>}
    </div>
  );
};

export default WorkOuts;
