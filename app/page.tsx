import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <main>
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  );
}
