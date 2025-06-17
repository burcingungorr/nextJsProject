import React from "react";
import styles from "./style.module.css";

const Motivation = () => {
  const quotes = [
    "Başlamak için mükemmel olmak zorunda değilsin, ama mükemmel olmak için başlamak zorundasın.",
    "Vücudun dayanır, pes eden zihnindir.",
    "Bugün ter dök, yarın gurur duy.",
    "Zorlandığın yer geliştiğin yerdir.",
    "Asla pes etme. Büyük işler zaman alır.",
    "Her gün bir adım daha ileri.",
    "Bahaneler seni değil, sonuçlar konuşur.",
    "Kendine inan, yapabilirsin!",
    "Gücün sınırlarını zorlamadan büyüyemezsin.",
    "Ter başarıya giden yoldaki mücevherdir.",
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  return (
    <div className={styles.textContainer}>
      <p className={styles.italicText}> "{randomQuote}"</p>
    </div>
  );
};

export default Motivation;
