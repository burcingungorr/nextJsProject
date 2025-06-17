import Image from "next/image";
import styles from "./page.module.css";
import BlogCard from "./components/blogCard";

async function getPost() {
  const res = await fetch("https://dummyjson.com/posts?limit=10");
  return res.json();
}
export default async function Home() {
  const { posts } = await getPost();
  console.log(posts);
  return (
    <div className={styles.blogsContainer}>
      {posts.map((post) => (
        <BlogCard key={post.id} {...post} />
      ))}
    </div>
  );
}
