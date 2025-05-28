import { useEffect } from "react";
import MainCard from "../components/Elements/Card/Main";
import Footer from "../components/Elements/Footer/Footer";
import { HeaderDashboard } from "../components/Elements/Header/Header";
import { HeroBottom, HeroTop } from "../components/Elements/Hero/Hero";
import { useNavigate } from "react-router";

export default function DashboardPage() {
  const navigate = useNavigate();
  useEffect(() => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    if (!email || !password) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <>
      <HeaderDashboard />
      <HeroTop />
      <MainCard />
      <HeroBottom />
      <Footer />
    </>
  );
}
