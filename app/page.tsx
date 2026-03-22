import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import SceneBackground from "./components/SceneBackground";
import Marquee from "./components/Marquee";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <main>
      <Cursor />
      <SceneBackground />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Marquee />
      <Services />
      <Contact />
    </main>
  );
}