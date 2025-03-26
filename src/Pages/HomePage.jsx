import About from "../Components/About";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import NeedHelp from "../Components/NeedHelp";
import ServicesSection from "../Components/ServicesSection";
import TopProducts from "../Components/TopProducts";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";
function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <TopProducts />
      <ServicesSection />
      <NeedHelp />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default HomePage;
