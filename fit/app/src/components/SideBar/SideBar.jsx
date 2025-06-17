"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearUser } from "@/redux/slices/userSlice";

import {
  Home,
  User,
  Dumbbell,
  Utensils,
  CircleHelp,
  LogOut,
  Menu,
  X,
} from "lucide-react";

import styles from "./style.module.css";

import { auth } from "@/firebase"; // firebase init edilen dosyandan auth export etmelisin
import { signOut } from "firebase/auth";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsOpen(false);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(clearUser());
      router.push("/");
    } catch (error) {
      console.error("Çıkış hatası:", error);
    }
  };

  const menuItems = [
    { name: "Anasayfa", href: "/anasayfa", icon: <Home size={20} /> },
    { name: "Antremanlar", href: "/antreman", icon: <Dumbbell size={20} /> },
    { name: "Beslenme", href: "/beslenme", icon: <Utensils size={20} /> },
    { name: "Hakkımızda", href: "/hakkinda", icon: <CircleHelp size={20} /> },
    { name: "Profil", href: "/profil", icon: <User size={20} /> },
  ];

  return (
    <>
      {isMobile && !isOpen && (
        <button
          className={styles.menuButton}
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      )}

      {isMobile && isOpen && (
        <>
          <div
            className={styles.overlay}
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <aside className={`${styles.sidebar} ${styles.open}`}>
            <button
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>

            <h2 className={styles.title}>FitRehber</h2>

            <nav className={styles.nav}>
              {menuItems.map(({ name, href, icon }) => (
                <Link
                  key={href}
                  href={href}
                  className={`${styles.link} ${
                    pathname === href ? styles.active : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className={styles.icon}>{icon}</span>
                  <span className={styles.label}>{name}</span>
                </Link>
              ))}
              <button
                className={`${styles.link} ${styles.closeButton}`}
                onClick={async (e) => {
                  e.preventDefault();
                  await handleLogout();
                  setIsOpen(false);
                }}
              >
                <span className={styles.closeButton}>
                  <LogOut size={20} />
                </span>
                <span className={styles.label}>Çıkış</span>
              </button>
            </nav>
          </aside>
        </>
      )}

      {!isMobile && (
        <aside className={styles.sidebar}>
          <h2 className={styles.title}>FitRehber</h2>
          <nav className={styles.nav}>
            {menuItems.map(({ name, href, icon }) => (
              <Link
                key={href}
                href={href}
                className={`${styles.link} ${
                  pathname === href ? styles.active : ""
                }`}
              >
                <span className={styles.icon}>{icon}</span>
                <span className={styles.label}>{name}</span>
              </Link>
            ))}
            <button
              className={styles.closeButton}
              onClick={async (e) => {
                e.preventDefault();
                await handleLogout();
              }}
            >
              <span className={styles.icon}>
                <LogOut size={20} />
              </span>
              <span className={styles.label}>Çıkış</span>
            </button>
          </nav>
        </aside>
      )}
    </>
  );
}
