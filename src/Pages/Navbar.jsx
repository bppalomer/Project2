import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const find = useLocation();
  return (
    <>
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span id="logo1">Sp<img src="/Chili_logo.png" alt="" className="logo_image"/>ce </span><span id="logo2">Savvy</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link to="/" className={`nav-link ${ (find.pathname === `/`) ? `fw-bold active`: ``}`}>Home</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Recipe
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Pork</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Chicken</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Beef</a></li>
          </ul>
        </li>
        <li className="nav-item">
        <Link to="/aboutus" className={`nav-link ${ (find.pathname === `/aboutus`) ? `fw-bold active`: ``}`}>About</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}

export default Navbar;
