// components/Favorite.jsx
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { doc, setDoc, deleteDoc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { Heart } from "lucide-react"; // sadece boş kalp

const Favorite = ({ recipeId }) => {
  const { uid } = useSelector((state) => state.user);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (uid && recipeId) {
      const favRef = doc(db, "users", uid, "favoriterecipe", recipeId);
      getDoc(favRef).then((docSnap) => {
        if (docSnap.exists()) {
          setSelected(true);
        }
      });
    }
  }, [uid, recipeId]);

  const toggleSelected = async () => {
    if (!uid || !recipeId) return;

    const favRef = doc(db, "users", uid, "favoriterecipe", recipeId);

    try {
      if (selected) {
        await deleteDoc(favRef);
        setSelected(false);
        console.log("Favoriden çıkarıldı:", recipeId);
      } else {
        await setDoc(favRef, {
          recipeId,
          favoritedAt: new Date(),
        });
        setSelected(true);
        console.log("Favoriye eklendi:", recipeId);
      }
    } catch (error) {
      console.error("Firestore favori hatası:", error);
    }
  };

  return (
    <div onClick={toggleSelected} style={{ cursor: "pointer" }}>
      {selected ? (
        // dolu kalp (kendi svg kullanıyoruz)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="red"
          viewBox="0 0 24 24"
          stroke="red"
          width="25"
          height="25"
        >
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3
             7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3
             19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
      ) : (
        <Heart color="gray" />
      )}
    </div>
  );
};

export default Favorite;
