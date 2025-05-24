import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Hero4 from "./components/Hero4";
import Hero5 from "./components/Hero5";

function App() {
  return (
    <div style={{ backgroundColor: "#28293E" }} className="h-full text-white">
      {/* Wrapping Components */}
      <Hero />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Hero5 />
      <Footer />
    </div>
  );
}

export default App;
