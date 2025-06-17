import React from "react";
import styles from "./style.module.css";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.contactTitle}>İletişim</h2>
      <p className={styles.contactText}>
        Her türlü soru, öneri veya geri bildiriminiz için bizimle iletişime
        geçebilirsiniz.
      </p>
      <ul className={styles.contactList}>
        <li>
          <strong>Telefon:</strong> 05555 555 5555
        </li>
        <li>
          <strong>E-posta:</strong> destek@fituygulama.com
        </li>
        <li>
          <strong>Instagram:</strong>{" "}
          <a
            href="https://instagram.com/fituygulama"
            target="_blank"
            rel="noopener noreferrer"
          >
            @fituygulama
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
