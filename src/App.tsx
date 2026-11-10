import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Pricing } from "./components/Pricing";
import { Status } from "./components/Status";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Status />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
