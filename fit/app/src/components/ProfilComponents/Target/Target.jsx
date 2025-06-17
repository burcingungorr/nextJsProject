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

const Target = () => {
  const [goal, setGoalInput] = useState("");
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

    if (!goal || isNaN(goal) || Number(goal) <= 0) {
      alert("Lütfen geçerli bir kalori hedefi girin.");
      return;
    }

    try {
      const targetsRef = collection(db, "users", uid, "targets");
      const todayStr = getTodayDateString();

      const q = query(targetsRef, where("dateString", "==", todayStr));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        await addDoc(targetsRef, {
          hedefMiktari: Number(goal),
          tarih: serverTimestamp(),
          dateString: todayStr,
        });
      } else {
        const docRef = querySnapshot.docs[0].ref;
        await updateDoc(docRef, {
          hedefMiktari: Number(goal),
          tarih: serverTimestamp(),
        });
      }

      alert(`Günlük hedef: ${goal} kalori olarak ayarlandı.`);
      setGoalInput("");
    } catch (error) {
      console.error("Hedef kaydedilemedi:", error);
      alert("Hedef kaydedilirken hata oluştu.");
    }
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Hedef Belirleme</h2>
      <form onSubmit={handleGoalSubmit} className={styles.form}>
        <label className={styles.label}>
          Günlük Kalori Hedefi (kcal):
          <input
            type="number"
            value={goal}
            onChange={(e) => setGoalInput(e.target.value)}
            className={styles.input}
            placeholder="Kalori hedefinizi girin"
            min={1}
          />
        </label>
        <button type="submit" className={styles.button}>
          Kaydet
        </button>
      </form>
    </div>
  );
};

export default Target;
