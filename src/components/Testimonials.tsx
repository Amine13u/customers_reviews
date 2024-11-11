import TestimonialCard from "./TestimonialCard";
import testimonialImages from "../helpers/testimonialImages";
import avatar from "../assets/images/avatar.png";

interface Testimonial {
  name: string;
  desc: string;
  stars: number;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  loading: boolean;
  error: Error | null;
}

const Testimonials = ({ testimonials, loading, error }: TestimonialsProps) => {
  return (
    <section id="testimonials" className="bg-light py-5 mt-5 px-3">
      <div className="container-lg">
        {loading ? (
          <div className="text-center my-5">
            <div
              className="spinner-border text-primary spinner"
              role="status"
              aria-live="polite"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : error ? (
          <p className="text-center text-danger h3 my-5">
            Une erreur s'est produite lors du chargement des témoignages.
            <br /> Nous vous prions de réessayer ultérieurement.
          </p>
        ) : (
          <div className="row">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col-md-6 mb-5">
                <TestimonialCard
                  rating={testimonial.stars}
                  name={testimonial.name}
                  image={testimonialImages[testimonial.name] || avatar}
                  description={testimonial.desc}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
