// components/LoginForm/RegisterSection.jsx

import React from "react";
import styles from "./style.module.css";

const RegisterSection = ({ data, setData, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <label>İsim</label>
      <input
        type="text"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
        required
      />
      <label>Soyisim</label>
      <input
        type="text"
        value={data.surname}
        onChange={(e) => setData({ ...data, surname: e.target.value })}
        required
      />
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
        Kayıt Ol
      </button>
    </form>
  );
};

export default RegisterSection;
