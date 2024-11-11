import richardImage from "../assets/images/richard.png";
import estelleImage from "../assets/images/estelle.png";
import johnImage from "../assets/images/john.png";
import ubladImage from "../assets/images/ublad.png";

interface TestimonialImages {
  [key: string]: string;
}

const testimonialImages: TestimonialImages = {
  "Richard B.": richardImage,
  "Estelle L.": estelleImage,
  "John D.": johnImage,
  "Ubald X.": ubladImage,
};

export default testimonialImages;
