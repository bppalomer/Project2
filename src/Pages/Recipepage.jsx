import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

function RecipePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setCurrentPage(1);
      fetchRecipes(searchQuery);
    }
  };

  const fetchRecipes = async (query) => {
    try {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 4000);

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

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const recipesPerPage = 12;
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  const totalPages = Math.ceil(recipes.length / recipesPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Auto scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleViewRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    // Auto scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleGoBack = () => {
    setSelectedRecipe(null);
    // Auto scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  
  return (
    <>
      <Helmet>
        <title>SpiceSavvy - Recipe</title>
      </Helmet>
      <section className="container-fluid p-0">
        {!selectedRecipe && (
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
        )}
        {selectedRecipe ? (
          <div className="recipe-details p-5 m-5 rounded">
            <div className="row">
              <div
                className="recipe-image col-md-6"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
              >
                <img
                  src={selectedRecipe.strMealThumb}
                  alt={selectedRecipe.strMeal}
                />
              </div>
              <div
                className="recipe-content col-md-6"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
              >
                <h1 className="recipe-title text-light fw-bold display-4">
                  {selectedRecipe.strMeal}
                </h1>
                <h3 className=" text-light">Ingredients:</h3>
                <ul className="recipe-ingredients text-light">
                  {Object.entries(selectedRecipe)
                    .filter(
                      ([key, value]) => (key.startsWith("strIngredient")) && value
                    )
                    .map(([key, value]) => {
                      const ingredientIndex = key.replace("strIngredient", "");
                      const measureKey = `strMeasure${ingredientIndex}`;
                      const measureValue = selectedRecipe[measureKey];
                      return <li key={key}>{`${value} ${measureValue}`}</li>;
                    })}
                </ul>
              </div>
              <h3 className=" text-light pt-5">Instructions:</h3>
              <ol className="recipe-instructions text-light p-5">
                {selectedRecipe.strInstructions
                  .split(/\d+\.\s+/)
                  .map(
                    (step, index) => step.trim() && <li key={index}>{step}</li>
                  )}
              </ol>
              <button className="go-back-button fw-bold" onClick={handleGoBack}>
                Go Back
              </button>
            </div>
          </div>
        ) : (
          <>
            {!searchQuery.trim() &&
            !Object.values(searchQuery).some((value) => value) ? (
              <div className="food_items bg-warning mt-3 mb-3">
                <h2 className="text-dark">
                  No recipes found. Please enter a recipe or select a category
                  in the filter option.
                </h2>
              </div>
            ) : error ? (
              <div className="food_items bg-danger mt-3 mb-3">
                <p className="text-light">{error}</p>
              </div>
            ) : (
              <div className="food_items">
                {loading ? (
                  <div className="text-center m-5 p-5">
                    <iframe className="iframe2" src="https://embed.lottiefiles.com/animation/35648"></iframe>
                    <h3>Searching for recipe ...</h3>
                  </div>
                ) : currentRecipes.length === 0 ? (
                  <div className="food_items bg-danger mt-3 mb-3 text-center">
                    <h2 className="text-light">
                      No recipes found using the given search input.
                    </h2>
                  </div>
                ) : (
                  currentRecipes.map((recipe, index) => (
                    <div
                      className="card bg-light foodies m-3 shadow-lg border rounded"
                      key={recipe.idMeal}
                      data-aos={index % 2 === 0 ? "fade-right" : "fade-right"}
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-sine"
                    >
                      <img
                        className="card-img-top img-fluid"
                        src={recipe.strMealThumb}
                        alt={recipe.strMeal}
                      />
                      <div className="card-body foodies">
                        <h5 className="card-title text-dark fw-bold">
                          {recipe.strMeal}
                        </h5>
                        <button
                          className="view-recipe-button fw-bold text-light"
                          onClick={() => handleViewRecipe(recipe)}
                        >
                          View Recipe
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
            {currentRecipes.length > 0 && !loading && (
              <div className="pagination p-3 fw-bold">
                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map((pageNumber) => (
                  <button
                    key={pageNumber}
                    className={`pagination-item ${
                      pageNumber === currentPage ? "active" : ""
                    }`}
                    onClick={() => paginate(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
}

export default RecipePage;
