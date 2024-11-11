import reviews from "../assets/images/reviews.png";

const HeroSection = () => {
  return (
    <section className="mx-4 mx-lg-0">
      <div className="container-lg">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6 text-center text-md-left">
            <h2 className="font-weight-bold">Ils nous font confiance</h2>
            <p className="mx-5 mx-md-0">
              Nous sommes fiers d'avoir obtenu une note moyenne de
              <span className="text-danger font-weight-bolder m-1">N/5</span> au
              travers de X témoigniages.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              aria-label="Lire les avis"
            >
              Lire les avis
            </button>
          </div>
          <div className="col-md-6 d-none d-md-block">
            <img src={reviews} className="img-fluid" alt="Clients reviews" />
          </div>
        </div>
      </div>

      {/* 
      
      <h2 className="responsive-heading font-weight-bold">
              Ils nous font confiance
            </h2>
            <p className="responsive-paragraph">
              Nous sommes fiers d'avoir obtenu une note moyenne de{" "}
              <span className="text-danger font-weight-bolder">N/5</span> au
              travers de X témoigniages.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              aria-label="Lire les avis"
            >
              Lire les avis
            </button>
      
      <div className="col-12 col-sm-6 d-none d-sm-inline">
        <img
          src={reviews}
          className="img-fluid"
          alt="Clients trust us reviews"
        />
      </div> */}
    </section>
  );
};

export default HeroSection;
