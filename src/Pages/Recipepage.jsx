import React, { useState, useEffect } from "react";

function Recipepage() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [isSearching, setIsSearching] = useState(false); // New state for tracking search status

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      let response;
      if (selectedFilters.length === 0) {
        response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );
      } else {
        const query = selectedFilters
          .map((filter) => `&${filter.category}=${filter.value}`)
          .join("");
        response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?${query}`
        );
      }
      const data = await response.json();
      setRecipes(data.meals);
      setIsLoading(false);
    };

    fetchData();
  }, [selectedFilters]);

  useEffect(() => {
    // Filter recipes based on search query
    const filtered = recipes.filter((recipe) =>
      recipe.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredRecipes(filtered);
  }, [recipes, searchQuery]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery("");
    setIsSearching(true);
  };

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    const category = e.target.getAttribute("data-category");
    if (e.target.checked) {
      setSelectedFilters((prevFilters) => [...prevFilters, { category, value }]);
    } else {
      setSelectedFilters((prevFilters) =>
        prevFilters.filter(
          (filter) => !(filter.category === category && filter.value === value)
        )
      );
    }
  };

  return (
    <>
      <section className="container-fluid p-0">
        <div className="search_section p-5 d-flex flex-column align-items-center">
          <div className="input-group justify-content-center mt-4">
            <form action="" method="GET" className="form" onSubmit={handleSearch}>
              <input
                type="search"
                placeholder="Search recipe ..."
                className="search-field"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="search-button">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
          <div className="mt-3 mb-4">
            <span
              className={`arrow ${isOpen ? "rotate" : ""} text-light`}
              onClick={toggleDropdown}
            >
              {isOpen ? "Filter by category ▼" : "Filter by category ▶"}
            </span>
          </div>
        </div>
        <div>
          {isOpen && (
            <div className="dropdown-content">
              <div className="row mx-auto justify-content-center">
                <div className="filter_section col-md-2 p-3 m-4 border rounded">
                  <div>
                    <h3 className="text-light">Meat</h3>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Beef"
                      data-category="c"
                      id="flexCheckDefault1"
                      onChange={handleCheckboxChange}
                    />
                    <label
                      className="form-check-label text-light"
                      htmlFor="flexCheckDefault1"
                    >
                      Beef
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Chicken"
                      data-category="c"
                      id="flexCheckDefault2"
                      onChange={handleCheckboxChange}
                    />
                    <label
                      className="form-check-label text-light"
                      htmlFor="flexCheckDefault2"
                    >
                      Chicken
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Seafood"
                      data-category="c"
                      id="flexCheckDefault3"
                      onChange={handleCheckboxChange}
                    />
                    <label
                      className="form-check-label text-light"
                      htmlFor="flexCheckDefault3"
                    >
                      Seafood
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Pork"
                      data-category="c"
                      id="flexCheckDefault4"
                      onChange={handleCheckboxChange}
                    />
                    <label
                      className="form-check-label text-light"
                      htmlFor="flexCheckDefault4"
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
                      value="Canadian"
                      data-category="a"
                      id="flexCheckDefault5"
                      onChange={handleCheckboxChange}
                    />
                    <label
                      className="form-check-label text-light"
                      htmlFor="flexCheckDefault5"
                    >
                      Canadian
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="British"
                      data-category="a"
                      id="flexCheckDefault6"
                      onChange={handleCheckboxChange}
                    />
                    <label
                      className="form-check-label text-light"
                      htmlFor="flexCheckDefault6"
                    >
                      British
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="American"
                      data-category="a"
                      id="flexCheckDefault7"
                      onChange={handleCheckboxChange}
                    />
                    <label
                      className="form-check-label text-light"
                      htmlFor="flexCheckDefault7"
                    >
                      American
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Japanese"
                      data-category="a"
                      id="flexCheckDefault8"
                      onChange={handleCheckboxChange}
                    />
                    <label
                      className="form-check-label text-light"
                      htmlFor="flexCheckDefault8"
                    >
                      Japanese
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {isSearching && filteredRecipes.length === 0 ? (
          <p className="text-light">No recipes found.</p>
        ) : (
          filteredRecipes.length > 0 && (
            <div className="food_items">
              {filteredRecipes.map((recipe, index) => (
                <div key={index} className="card foodies m-3">
                  <img
                    src={recipe.strMealThumb}
                    className="card-img-top p-2"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {isLoading ? (
                        <div
                          className="spinner-border text-dark"
                          role="status"
                        ></div>
                      ) : (
                        recipe.strMeal
                      )}
                    </h5>
                    <a href="#" className="btn btn-primary">
                      View Recipe
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )
        )}
      </section>
    </>
  );
}

export default Recipepage;
