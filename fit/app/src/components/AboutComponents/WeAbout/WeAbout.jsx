import React from "react";
import styles from "./style.module.css";

const WeAbout = () => {
  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.title}>Biz Kimiz?</h2>
      <p className={styles.description}>
        Sağlıklı yaşamı kolaylaştırmak için bir araya gelen bir ekibiz.
        Amacımız, egzersiz ve beslenme önerilerini sade ve erişilebilir bir
        şekilde sunarak kullanıcıların günlük hayatını desteklemek.
      </p>
    </div>
  );
};

export default WeAbout;
