import About from "../Components/About";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import NeedHelp from "../Components/NeedHelp";
import ServicesSection from "../Components/ServicesSection";
import TopProducts from "../Components/TopProducts";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";
import { useRef } from "react";
import HeaderTopBar from "../Components/HeaderTopBar";

function HomePage({ windowWidth }) {
  const servicesRef = useRef(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behaviour: "smooth" });
  };

  return (
    <div>
      <HeaderTopBar />
      <Header windowWidth={windowWidth} />
      <Hero scrollToServices={scrollToServices} />
      <About />
      <TopProducts />
      <ServicesSection servicesRef={servicesRef} />
      <NeedHelp />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default HomePage;
