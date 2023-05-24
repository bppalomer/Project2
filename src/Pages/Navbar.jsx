import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const find = useLocation();
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand ms-4" href="#"><span className="logo1 fw-bold">Sp<img src="/Chili_logo.png" alt="" className="logo_image" />ce </span><span className="logo2 fw-bold">Savvy</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className={`nav-link ${(find.pathname === `/`) ? `fw-bold active` : ``}`}>Home</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Recipe
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/porklists" className={`nav-link nav_link ${(find.pathname === `/porklists`) ? `fw-bold active` : ``}`}>Pork</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link to="/beeflists" className={`nav-link nav_link ${(find.pathname === `/beeflists`) ? `fw-bold active` : ``}`}>Beef</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link to="/chickenlists" className={`nav-link nav_link ${(find.pathname === `/chickenlists`) ? `fw-bold active` : ``}`}>Chicken</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link to="/fishlists" className={`nav-link nav_link ${(find.pathname === `/fishlists`) ? `fw-bold active` : ``}`}>Fish</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className={`nav-link ${(find.pathname === `/aboutus`) ? `fw-bold active` : ``}`}>About</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
