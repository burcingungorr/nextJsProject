"use client";
import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import { UserIcon, PencilIcon } from "lucide-react";
import { useSelector } from "react-redux";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";

const User = () => {
  const { name, surname, uid } = useSelector((state) => state.user);

  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  const calculateBMI = (weight, heightCm) => {
    if (weight <= 0 || heightCm <= 0) return 0;
    const heightM = heightCm / 100;
    return (weight / (heightM * heightM)).toFixed(1);
  };
  const bmi = calculateBMI(weight, height);

  // Kullanıcı verilerini veritabanından çek
  useEffect(() => {
    if (!uid) return;

    const fetchUserData = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setAge(data.age || "");
          setWeight(data.weight || "");
          setHeight(data.height || "");
        } else {
          setAge("");
          setWeight("");
          setHeight("");
        }
      } catch (error) {
        console.error("Firestore'dan veri çekme hatası:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [uid]);

  // Verileri kaydet (düzenleme kapandığında)
  useEffect(() => {
    if (!uid) return;
    if (loading) return;
    if (isEditing) return;

    const saveUserData = async () => {
      try {
        await setDoc(
          doc(db, "users", uid),
          {
            age: age || null,
            weight: weight || null,
            height: height || null,
          },
          { merge: true }
        );
      } catch (error) {
        console.error("Firestore kaydetme hatası:", error);
      }
    };
    saveUserData();
  }, [age, weight, height, isEditing, uid, loading]);

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <div className={styles.userContainer}>
      <div className={styles.profileIcon}>
        <UserIcon />
      </div>
      <div className={styles.userInfo}>
        <p>
          <strong>
            {name} {surname}
          </strong>
        </p>
        <p>
          Yaş:{" "}
          {isEditing ? (
            <input
              type="number"
              min={0}
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className={styles.input}
            />
          ) : age ? (
            age
          ) : (
            "-"
          )}
          <PencilIcon className={styles.editIcon} onClick={handleEditToggle} />
        </p>
        <p>
          Kilo:{" "}
          {isEditing ? (
            <input
              type="number"
              min={0}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className={styles.input}
            />
          ) : weight ? (
            `${weight} kg`
          ) : (
            "-"
          )}
          <PencilIcon className={styles.editIcon} onClick={handleEditToggle} />
        </p>
        <p>
          Boy:{" "}
          {isEditing ? (
            <input
              type="number"
              min={0}
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className={styles.input}
            />
          ) : height ? (
            `${height} cm`
          ) : (
            "-"
          )}
          <PencilIcon className={styles.editIcon} onClick={handleEditToggle} />
        </p>
        <div>
          <strong>Vücut Kitle İndeksi: {bmi > 0 ? bmi : "-"}</strong>
        </div>
      </div>
    </div>
  );
};

export default User;
