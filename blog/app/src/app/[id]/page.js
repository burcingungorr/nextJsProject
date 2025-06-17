import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getPost(id) {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);

  if (!res.ok) {
    throw new Error("Post verisi alınamadı.");
  }

  return res.json();
}

export default async function Page({ params }) {
  let post;
  try {
    post = await getPost(params.id);
  } catch (error) {
    return notFound();
  }

  const { id, title, body } = post;

  return (
    <div className={styles.blogContainer}>
      <div className={styles.cardImage}>
        <Image
          src={`https://picsum.photos/960/400?random=${id}`}
          alt="blog"
          fill
        />
      </div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.body}>{body}</p>
    </div>
  );
}
