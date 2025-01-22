import Image from "next/image";
import Header from "./sections/Header";
import AboutUs from "./sections/AboutUs";
import Services from "./sections/Services";
import StatsSection from "./sections/StatsSection";

export default function Home() {
  return (
   
    <>
    <Header />
    <AboutUs />
    <Services />
    <StatsSection />
    </>
  );
}
