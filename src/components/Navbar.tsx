import logo from "../assets/logos/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand">
      <div className="container-lg">
        <a href="/" className="navbar-brand">
          <img src={logo} width={200} alt="Company logo" />
        </a>
        <button
          type="button"
          className="btn btn-outline-secondary"
          aria-label="Client Space"
        >
          <i className="fa-solid fa-circle-user"></i>
          <span className="d-none d-sm-inline m-sm-1"> Espace Client</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
