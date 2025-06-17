// components/LoginForm/LoginForm.jsx

"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./style.module.css";
import ToggleButtons from "./ToggleButtons";
import LoginSection from "./LoginSection";
import RegisterSection from "./RegisterSection";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/slices/userSlice";

const LoginForm = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginData;

    if (!email || !password) {
      alert("Lütfen email ve şifre girin.");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const uid = userCredential.user.uid;

      const userDocRef = doc(db, "users", uid);
      const userSnap = await getDoc(userDocRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();
        dispatch(
          setUser({
            uid,
            name: userData.name,
            surname: userData.surname,
            email: email,
          })
        );

        router.push("/anasayfa");
      } else {
        alert("Kullanıcı verisi bulunamadı.");
      }
    } catch (error) {
      console.error("Giriş hatası:", error);
      alert("Giriş başarısız: " + error.message);
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    const { name, surname, email, password } = registerData;

    if (!name || !surname || !email || !password) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name,
        surname,
        email,
        createdAt: new Date(),
      });

      alert("Kayıt başarılı! Giriş ekranına yönlendiriliyorsunuz.");
      setIsLogin(true);
      setRegisterData({ name: "", surname: "", email: "", password: "" });
    } catch (error) {
      console.error("Kayıt sırasında hata:", error);
      alert("Kayıt başarısız: " + error.message);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>FitRehber</h1>
      <ToggleButtons isLogin={isLogin} setIsLogin={setIsLogin} />
      <div className={styles.formsWrapper}>
        {isLogin ? (
          <LoginSection
            data={loginData}
            setData={setLoginData}
            onSubmit={handleLogin}
          />
        ) : (
          <RegisterSection
            data={registerData}
            setData={setRegisterData}
            onSubmit={handleRegister}
          />
        )}
      </div>
    </div>
  );
};

export default LoginForm;
