"use client";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./style.module.css";

const Hello = () => {
  const { name, surname } = useSelector((state) => state.user);

  return (
    <div className={styles.hello}>
      <h2>
        Merhaba {name} {surname}!
      </h2>
    </div>
  );
};

export default Hello;
