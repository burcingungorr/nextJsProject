"use client";
import Sidebar from "@/components/SideBar/SideBar";
import "./globals.css";
import { Providers } from "@/redux/store/providers";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const isLoginPage = pathname === "/login";

  return (
    <html lang="tr">
      <body>
        <Providers>
          {!isLoginPage && <Sidebar />}
          <main
            style={{ marginLeft: isLoginPage ? "0" : "240px", padding: "24px" }}
          >
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
