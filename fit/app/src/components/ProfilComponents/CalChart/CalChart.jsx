"use client";
import React, { useState, useEffect } from "react";
import { PieChart } from "@mui/x-charts";
import styles from "./style.module.css";
import { useSelector } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

const CalChart = () => {
  const { uid } = useSelector((state) => state.user);

  const [burnedCalorie, setBurnedCalorie] = useState(0);
  const [intakeCalorie, setIntakeCalorie] = useState(0);
  const [dailyGoal, setDailyGoal] = useState(0);
  const [loading, setLoading] = useState(true);

  const today = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    if (!uid) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        // gone koleksiyonundaki tüm kayıtlar (dateString filtresiz)
        const goneRef = collection(db, "users", uid, "gone");
        const goneSnapshot = await getDocs(goneRef);

        let burned = 0;
        goneSnapshot.forEach((doc) => {
          const data = doc.data();
          console.log("Gone doc:", data);
          if (data.dateString === today && data.yakilanKalori) {
            burned += Number(data.yakilanKalori);
          }
        });
        setBurnedCalorie(burned);

        // income koleksiyonundaki tüm kayıtlar (dateString filtresiz)
        const incomeRef = collection(db, "users", uid, "income");
        const incomeSnapshot = await getDocs(incomeRef);

        let intake = 0;
        incomeSnapshot.forEach((doc) => {
          const data = doc.data();
          console.log("Income doc:", data);
          if (data.dateString === today && data.alinanKalori) {
            intake += Number(data.alinanKalori);
          }
        });
        setIntakeCalorie(intake);

        // targets koleksiyonundan hedef miktar (aynı gün için)
        const targetsRef = collection(db, "users", uid, "targets");
        const targetsSnapshot = await getDocs(targetsRef);

        if (!targetsSnapshot.empty) {
          const targetData = targetsSnapshot.docs[0].data();
          if (targetData.dateString === today) {
            setDailyGoal(targetData.hedefMiktari || 0);
          } else {
            setDailyGoal(0);
          }
        } else {
          setDailyGoal(0);
        }
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [uid, today]);

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  const remainingCalorie = Math.max(
    dailyGoal - burnedCalorie + intakeCalorie,
    0
  );

  return (
    <div className={styles.CalChart}>
      <PieChart
        series={[
          {
            data: [
              {
                id: 0,
                value: burnedCalorie,
                label: "Yakılan Kalori",
                color: "#516354",
              },
              {
                id: 1,
                value: intakeCalorie,
                label: "Alınan Kalori",
                color: "#2f3f31",
              },
              {
                id: 2,
                value: remainingCalorie,
                label: "Kalan Kalori",
                color: "#f3eedb",
              },
            ],
          },
        ]}
        width={250}
        height={250}
      />
    </div>
  );
};

export default CalChart;
