import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const find = useLocation();
  return (
    <>
      <nav className="navbar navbar-expand-lg p-4 shadow-lg sticky-top">
        <div className="container">
          <Link className="navbar-brand ms-4" to="/"><img id="logo-img" src="/logo-spice-savvy2.png" alt="" /></Link>
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon bg-light"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className={`nav-link ${(find.pathname === `/`) ? `fw-bold active` : ``}`}>HOME </Link>
              </li>
              <li className="nav-item">
                <Link to="/recipepage" className={`nav-link ${(find.pathname === `/recipepage`) ? `fw-bold active` : ``}`}>RECIPE</Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className={`nav-link ${(find.pathname === `/aboutus`) ? `fw-bold active` : ``}`}>ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link to="/contactus" className={`nav-link ${(find.pathname === `/contactus`) ? `fw-bold active` : ``}`}>CONTACT</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
