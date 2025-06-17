"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import { useSelector } from "react-redux";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/firebase";

const Gone = () => {
  const [goal, setGoal] = useState("");
  const uid = useSelector((state) => state.user.uid);

  const getTodayDateString = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleGoalSubmit = async (e) => {
    e.preventDefault();

    if (!uid) {
      alert("Lütfen giriş yapınız.");
      return;
    }

    if (!goal || isNaN(goal) || Number(goal) <= 0) {
      alert("Lütfen geçerli bir kalori miktarı girin.");
      return;
    }

    try {
      const goneRef = collection(db, "users", uid, "gone");
      const todayStr = getTodayDateString();

      const q = query(goneRef, where("dateString", "==", todayStr));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        // Yeni kayıt ekle
        await addDoc(goneRef, {
          yakilanKalori: Number(goal),
          tarih: serverTimestamp(),
          dateString: todayStr,
        });
      } else {
        // Mevcut kaydı güncelle (toplam yakılan kalori üzerine ekle)
        const docRef = querySnapshot.docs[0].ref;
        const existingKalori = querySnapshot.docs[0].data().yakilanKalori || 0;
        const yeniKalori = existingKalori + Number(goal);

        await updateDoc(docRef, {
          yakilanKalori: yeniKalori,
          tarih: serverTimestamp(),
        });
      }

      alert(`${goal} kcal eklendi. Günlük toplam yakılan kalori güncellendi.`);
      setGoal("");
    } catch (error) {
      console.error("Yakılan kalori kaydedilemedi:", error);
      alert("Kalori kaydedilirken hata oluştu.");
    }
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Yakılan Kalori</h2>
      <form onSubmit={handleGoalSubmit} className={styles.form}>
        <label className={styles.label}>
          Kaç Kalori Yaktın ? (kcal):
          <input
            type="number"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className={styles.input}
            placeholder="Kalori miktarını girin"
            min={1}
          />
        </label>
        <button type="submit" className={styles.button}>
          Ekle
        </button>
      </form>
    </div>
  );
};

export default Gone;
