function Navbar () {
    return (
        <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand mt-2 ms-4" href="test.html"
            ><p id="logo1">
              Sp<img
                src="images/Chili_logo.png"
                alt="chili_image"
                class="logo_image"
              />ce<span id="logo2">Savvy</span>
            </p></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul
              class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style="--bs-scroll-height: 100px"
            >
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Recipe
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Chicken</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Beef</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Pork</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link">About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )    
}

export default Navbar