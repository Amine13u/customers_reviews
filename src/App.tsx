import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <main className="mt-3 mt-md-5">
        <HeroSection />
        <Testimonials />
      </main>
    </>
  );
}

export default App;
