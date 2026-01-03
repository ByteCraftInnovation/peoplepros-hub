import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Industries from "@/components/Industries";
import GlobalPresence from "@/components/GlobalPresence";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Industries />
      <GlobalPresence />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;