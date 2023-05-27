import React, { useState } from "react";

function Recipepage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <section className="containe-fluid">
        <div className="search_section p-5 d-flex flex-column align-items-center">
          <div className="input-group justify-content-center mt-4">
            <form action="" method="GET" className="form">
              <input
                type="search"
                placeholder="Search recipe ..."
                className="search-field"
              />
              <button type="submit" className="search-button">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
          <div className="mt-3">
          
              <span
                className={`arrow ${isOpen ? "rotate" : ""} text-light`}
                onClick={toggleDropdown}
              >
                {isOpen ? "Filter by category ▶" : "Filter by category ▼"}
              </span>
          </div>
        </div>
        <div>
          {isOpen && (
            <div className="dropdown-content container-fluid">
              <div className="row">
                <div className="filter_section col-md-2 p-3 m-4 border rounded">
                  <div>
                    <h3 className="text-light">Meat Recipe</h3>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label text-light"
                      htmlFor="flexCheckDefault"
                    >
                      Beef
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label text-light"
                      htmlFor="flexCheckChecked"
                    >
                      Chicken
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label text-light"
                      htmlFor="flexCheckDefault"
                    >
                      Seafood
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label text-light"
                      htmlFor="flexCheckDefault"
                    >
                      Pork
                    </label>
                  </div>
                </div>
                <div className="filter_section col-md-2 p-3 m-4 border rounded">
                  <div>
                    <h3 className="text-light">Area</h3>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label text-light"
                      htmlFor="flexCheckDefault"
                    >
                      Korean
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label text-light"
                      htmlFor="flexCheckChecked"
                    >
                      British
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label text-light"
                      htmlFor="flexCheckDefault"
                    >
                      American
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label text-light"
                      htmlFor="flexCheckDefault"
                    >
                      Japanese
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Recipepage;
