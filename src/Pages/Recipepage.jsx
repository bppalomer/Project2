import React, { useState, useEffect } from "react";

function RecipePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [checkboxValues, setCheckboxValues] = useState({
    beef: false,
    chicken: false,
    seafood: false,
    pork: false,
    canadian: false,
    british: false,
    american: false,
    japanese: false,
  });
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchRecipes(searchQuery);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }));

    setIsOpen(false);
  };

  const fetchRecipes = async (query) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await response.json();
      setRecipes(data.meals || []);
      setError(null);
    } catch (error) {
      setRecipes([]);
      setError("Error occurred while fetching recipes.");
    }
  };

  useEffect(() => {
    if (!searchQuery.trim()) {
      setRecipes([]);
      setError(null);
    }
  }, [searchQuery]);

  const recipesPerPage = 10;
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  const totalPages = Math.ceil(recipes.length / recipesPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <section className="container-fluid p-0">
        <div className="search_section p-5 d-flex flex-column align-items-center">
          <div className="input-group justify-content-center">
            <form onSubmit={handleSearch}>
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
        </div>
        {currentRecipes.length > 0 && (
          <div className="pagination p-3">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                className={`pagination-item ${pageNumber === currentPage ? "active" : ""}`}
                onClick={() => paginate(pageNumber)}
              >
                {pageNumber}
              </button>
            ))}
          </div>
        )}
        {!searchQuery.trim() &&
        !Object.values(checkboxValues).some((value) => value) ? (
          <div className="food_items bg-warning mt-3 mb-3">
            <p className="text-dark">
              No recipes found. Please enter a recipe or select a category in
              the filter option.
            </p>
          </div>
        ) : error ? (
          <div className="food_items bg-danger mt-3 mb-3">
            <p className="text-light">{error}</p>
          </div>
        ) : (
          <div className="food_items">
            {currentRecipes.length === 0 ? (
              <div className="food_items bg-warning mt-3 mb-3">
                <p className="text-dark">No recipes found using the given search input.</p>
              </div>
            ) : (
              currentRecipes.map((recipe) => (
                <div className="card foodies m-3" key={recipe.idMeal}>
                  <img
                    className="card-img-top p-2"
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{recipe.strMeal}</h5>
                    <a href={recipe.strSource} className="btn btn-primary">
                      View Recipe
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
        {currentRecipes.length > 0 && (
          <div className="pagination p-3">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                className={`pagination-item ${pageNumber === currentPage ? "active" : ""}`}
                onClick={() => paginate(pageNumber)}
              >
                {pageNumber}
              </button>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default RecipePage;
