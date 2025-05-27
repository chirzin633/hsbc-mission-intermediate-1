import MainCard from "../components/Elements/Card/Main";
import Footer from "../components/Elements/Footer/Footer";
import { HeaderBeranda } from "../components/Elements/Header/Header";
import { HeroBottom, HeroTop } from "../components/Elements/Hero/Hero";

export default function BerandaPage() {
  return (
    <>
      <HeaderBeranda />
      <HeroTop />
      <MainCard />
      <HeroBottom />
      <Footer />
    </>
  );
}
