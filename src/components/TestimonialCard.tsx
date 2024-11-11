import user from "../assets/images/estelle.png";

interface TestimonialCardProps {
  rating: number;
  name: string;
  description: string;
  image?: string;
}

const TestimonialCard = ({
  rating,
  name,
  description,
  image = user,
}: TestimonialCardProps) => {
  return (
    <div className="text-center d-flex flex-column h-100">
      <div className="card border-0 shadow-sm text-center h-100">
        <div className="card-body my-5 mx-4 flex-grow-1 align-content-center">
          <blockquote className="card-text">« {description} »</blockquote>
        </div>
      </div>

      <div className="position-relative mt-n5">
        <img
          src={image}
          alt={`Testimonial from ${name}`}
          className="card-img rounded-circle border-0 bg-white shadow-sm p-1"
          style={{ width: "6rem" }}
        />
      </div>

      <div className="mt-2">
        {[...Array(5)].map((_, index) => (
          <i
            key={index}
            className={`fas fa-star mr-1 ${
              index < rating ? "text-warning" : "text-muted"
            }`}
            aria-hidden="true"
          ></i>
        ))}
      </div>
      <div className="mt-2">{name}</div>
    </div>
  );
};

export default TestimonialCard;
