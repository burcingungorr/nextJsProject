import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

const BlogCard = ({ title, id, body }) => {
  return (
    <Link href={`/${id}`}>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <Image
            src={`https://picsum.photos/seed/${id}/200/200`}
            alt="blog card image"
            fill
          />
        </div>

        <div className={styles.cardBody}>
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
