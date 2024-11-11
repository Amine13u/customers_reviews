import user from "../assets/images/estelle.png";

const TestimonialCard = ({ rating = 3, name = "John D.", image = user }) => {
  return (
    <div className="text-center">
      <div className="card border-0 shadow-sm text-center">
        <div className="card-body  my-5 mx-4">
          <blockquote className="card-text">
            « Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque ut elit id mi facilisis posuere. Cras lectus nisi,
            blandit ac ante in, hendrerit commodo odio. Nunc sit amet enim
            sapien. »
          </blockquote>
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
