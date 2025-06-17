import React from "react";
import styles from "./style.module.css";

const Title = ({ text }) => {
  return <p className={styles.title}>{text}</p>;
};

export default Title;
