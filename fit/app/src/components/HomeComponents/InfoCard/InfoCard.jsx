import React from "react";
import styles from "./style.module.css";

const cardData = [
  { icon: "💪", title: "Güç", text: "Kendini zorla, gelişmeye başla!" },
  { icon: "🏃‍♂️", title: "Hız", text: "Hedefe koşarak ulaş!" },
  { icon: "🔥", title: "Motivasyon", text: "Her gün daha iyi ol!" },
  { icon: "⏱️", title: "Zaman", text: "Vaktini iyi kullan!" },
  { icon: "🥗", title: "Beslenme", text: "Doğru beslen, iyi yaşa!" },
];

const InfoCard = () => {
  return (
    <div className={styles.cardContainer}>
      {cardData.map((card, index) => (
        <div className={styles.infoCard} key={index}>
          <div className={styles.cardIcon}>{card.icon}</div>
          <h3 className={styles.cardTitle}>{card.title}</h3>
          <p className={styles.cardText}>{card.text}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoCard;
