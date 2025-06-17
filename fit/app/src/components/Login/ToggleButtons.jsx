// components/LoginForm/ToggleButtons.jsx

import React from "react";
import styles from "./style.module.css";

const ToggleButtons = ({ isLogin, setIsLogin }) => {
  return (
    <div className={styles.toggleButtons}>
      <button
        onClick={() => setIsLogin(true)}
        className={`${styles.toggleButton} ${isLogin ? styles.active : ""}`}
      >
        Giriş Yap
      </button>
      <button
        onClick={() => setIsLogin(false)}
        className={`${styles.toggleButton} ${!isLogin ? styles.active : ""}`}
      >
        Kayıt Ol
      </button>
    </div>
  );
};

export default ToggleButtons;
