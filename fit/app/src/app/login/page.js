"use client";
import { useRouter } from "next/navigation";
import LoginForm from "@/components/Login/Login";

const LoginPage = () => {
  const router = useRouter();

  const handleLoginSuccess = () => {
    router.push("/anasayfa");
  };

  return <LoginForm onLoginSuccess={handleLoginSuccess} />;
};

export default LoginPage;
