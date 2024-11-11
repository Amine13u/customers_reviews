import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="mt-3 mt-md-5">
        <HeroSection />
      </main>
    </>
  );
}

export default App;
