import styles from "./page.module.css";
import "./globals.css";
import { Roboto } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={roboto.className}>
      <body className={styles.container}>
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
