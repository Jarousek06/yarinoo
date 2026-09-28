// =============================================================
//  HLAVNI STRANKA — sklada vsechny sekce dohromady.
//  Poradi sekci muzes zmenit pretazenim radku nize.
// =============================================================
import MotionProvider from "@/components/MotionProvider";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Sport from "@/components/Sport";
import Stats from "@/components/Stats";
import GhostText from "@/components/GhostText";
import Socials from "@/components/Socials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <MotionProvider>
      {/* nacitaci obrazovka + vlastni kurzor (jen desktop) */}
      <Loader />
      <CustomCursor />
      {/* akcentni linka nahore = prubeh scrollu */}
      <ScrollProgress />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Journey />
        <Services />
        {/* obri outline napis jedouci na scroll (dekorace) */}
        <GhostText text="PORTFOLIO" direction={1} />
        <Portfolio />
        <Sport />
        {/* pas se statistikami (cisla se napocitaji) */}
        <Stats />
        <Socials />
        <GhostText text="POJĎME NA TO" direction={-1} accent />
        <Contact />
      </main>

      <Footer />
    </MotionProvider>
  );
}
