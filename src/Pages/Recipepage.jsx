import React, { useState, useEffect } from "react";

function Recipepage() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMeat, setSelectedMeat] = useState([]);
  const [selectedArea, setSelectedArea] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    const meatQuery = selectedMeat.length > 0 ? `&c=${selectedMeat.join(",")}` : "";
    const areaQuery = selectedArea.length > 0 ? `&a=${selectedArea.join(",")}` : "";
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?${meatQuery}${areaQuery}`);
    const json = await response.json();
    setRecipes(json.meals.slice(0, 10));
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [selectedMeat, selectedArea]);

  useEffect(() => {
    setFilteredRecipes(recipes);
  }, [recipes, selectedMeat, selectedArea]);

  const handleMeatChange = (value) => {
    if (selectedMeat.includes(value)) {
      setSelectedMeat(selectedMeat.filter((item) => item !== value));
    } else {
      setSelectedMeat([...selectedMeat, value]);
    }
  };

  const handleAreaChange = (value) => {
    if (selectedArea.includes(value)) {
      setSelectedArea(selectedArea.filter((item) => item !== value));
    } else {
      setSelectedArea([...selectedArea, value]);
    }
  };

  return (
    <>
      <section className="container-fluid">
        <div className="row">
          <div className="col-md-3 p-5">
            <div className="filter_section border rounded p-3">
              <div>
                <h3 className="text-light">Meat Recipe</h3>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  checked={selectedMeat.includes("beef")}
                  onChange={() => handleMeatChange("beef")}
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
                  checked={selectedMeat.includes("chicken")}
                  onChange={() => handleMeatChange("chicken")}
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
                  checked={selectedMeat.includes("seafood")}
                  onChange={() => handleMeatChange("seafood")}
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
                  checked={selectedMeat.includes("pork")}
                  onChange={() => handleMeatChange("pork")}
                />
                <label
                  className="form-check-label text-light"
                  htmlFor="flexCheckDefault"
                >
                  Pork
                </label>
              </div>
            </div>
            <div className="filter_section border rounded p-3 mt-3">
              <div>
                <h3 className="text-light">Area</h3>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  checked={selectedArea.includes("Asian")}
                  onChange={() => handleAreaChange("Asian")}
                />
                <label
                  className="form-check-label text-light"
                  htmlFor="flexCheckDefault"
                >
                  Asian
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked={selectedArea.includes("Europe")}
                  onChange={() => handleAreaChange("Europe")}
                />
                <label
                  className="form-check-label text-light"
                  htmlFor="flexCheckChecked"
                >
                  European
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  checked={selectedArea.includes("American")}
                  onChange={() => handleAreaChange("American")}
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
                  checked={selectedArea.includes("Japanese")}
                  onChange={() => handleAreaChange("Japanese")}
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
          <div className="col-md-9 p-5">
            <div className="recipe_pages">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link text-dark" href="#">
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link  text-dark" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link text-dark" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link text-dark" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link text-dark" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
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
                      `${recipe.strMeal}`
                    )}
                  </h5>
                  <a href="#" className="btn btn-primary">
                    View Recipe
                  </a>
                </div>
              </div>
            ))}
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default Recipepage;
