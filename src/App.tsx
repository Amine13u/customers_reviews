import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TestimonialCard from "./components/TestimonialCard";

function App() {
  return (
    <>
      <Navbar />
      <main className="mt-3 mt-md-5">
        <HeroSection />
        <TestimonialCard />
      </main>
    </>
  );
}

export default App;
