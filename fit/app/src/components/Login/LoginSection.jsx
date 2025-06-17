// components/LoginForm/LoginSection.jsx

import React from "react";
import styles from "./style.module.css";

const LoginSection = ({ data, setData, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <label>Email</label>
      <input
        type="email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
        required
      />
      <label>Şifre</label>
      <input
        type="password"
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
        required
      />
      <button type="submit" className={styles.submitButton}>
        Giriş Yap
      </button>
    </form>
  );
};

export default LoginSection;
