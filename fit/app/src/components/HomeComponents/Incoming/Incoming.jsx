"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
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
import { useSelector } from "react-redux";

const Incoming = () => {
  const [income, setIncomeInput] = useState("");
  const uid = useSelector((state) => state.user.uid); // Redux'tan uid al

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

    if (!income || isNaN(income) || Number(income) <= 0) {
      alert("Lütfen geçerli bir kalori miktarı girin.");
      return;
    }

    try {
      const incomeRef = collection(db, "users", uid, "income");
      const todayStr = getTodayDateString();

      // income koleksiyonundan bugünün kaydını sorgula
      const q = query(incomeRef, where("dateString", "==", todayStr));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        // Kayıt yok, yeni ekle
        await addDoc(incomeRef, {
          alinanKalori: Number(income),
          tarih: serverTimestamp(),
          dateString: todayStr,
        });
      } else {
        // Kayıt var, mevcut kaloriye ekle
        const docRef = querySnapshot.docs[0].ref;
        const existingKalori = querySnapshot.docs[0].data().alinanKalori || 0;
        const yeniKalori = existingKalori + Number(income);

        await updateDoc(docRef, {
          alinanKalori: yeniKalori,
          tarih: serverTimestamp(),
        });
      }

      alert(`${income} kcal eklendi. Günlük toplam kalori güncellendi.`);
      setIncomeInput("");
    } catch (error) {
      console.error("Alınan kalori kaydedilemedi:", error);
      alert("Kalori kaydedilirken hata oluştu.");
    }
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Alınan Kalori</h2>
      <form onSubmit={handleGoalSubmit} className={styles.form}>
        <label className={styles.label}>
          Kaç Kalori Aldın ? (kcal):
          <input
            type="number"
            value={income}
            onChange={(e) => setIncomeInput(e.target.value)}
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

export default Incoming;
