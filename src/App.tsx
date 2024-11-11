import { useCallback, useEffect, useMemo, useState } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

interface Testimonial {
  name: string;
  desc: string;
  stars: number;
}

const API_URL = `${import.meta.env.VITE_API_URL}/testimonials.php`;

function App() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchTestimonials = useCallback(async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(
          `Impossible de récupérer les données: ${response.statusText}`
        );
      }
      const data: Testimonial[] = await response.json();

      setTestimonials(data);
    } catch (err) {
      console.error("Erreur de chargement des témoignages: ", err);
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTestimonials();
  }, [fetchTestimonials]);

  const averageRate = useMemo(
    () =>
      testimonials.length
        ? testimonials.reduce((acc, review) => acc + Number(review.stars), 0) /
          testimonials.length
        : 0,
    [testimonials]
  );

  const reviewsCount = testimonials.length;

  return (
    <>
      <Navbar />
      <main className="mt-3 mt-md-5">
        <HeroSection averageRate={averageRate} reviewsCount={reviewsCount} />
        <Testimonials
          testimonials={testimonials}
          loading={loading}
          error={error}
        />
      </main>
    </>
  );
}

export default App;
