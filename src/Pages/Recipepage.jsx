import React, {useState, useEffect } from "react";

function Recipepage() {

  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch("www.themealdb.com/api/json/v1/1/random.php")
    const json = await response.json();
    setRecipes(json.results);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);


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
                />
                <label className="form-check-label text-light" for="flexCheckDefault">
                  Beef
                </label>
              </div>
              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label className="form-check-label text-light" for="flexCheckChecked">
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
                <label className="form-check-label text-light" for="flexCheckDefault">
                  Fish
                </label>
              </div>
              <div className="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label text-light" for="flexCheckDefault">
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
                />
                <label className="form-check-label text-light" for="flexCheckDefault">
                  Asian
                </label>
              </div>
              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label className="form-check-label text-light" for="flexCheckChecked">
                  European
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label text-light" for="flexCheckDefault">
                  American
                </label>
              </div>
              <div className="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label text-light" for="flexCheckDefault">
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
            {recipes.map((recipe, index) => (
              <div key={index} className="card foodies m-5">
              <img
                src={recipe.strImageSource}
                className="card-img-top p-2"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  {isLoading ? (
                    <div className="spinner-border text-dark" role="status"></div>
                  ) : (`${recipe.strMeal}`)
                
                }
                </h5>
                <a href="#" className="btn btn-primary">
                  View Recipe
                </a>
              </div>
            </div>

            ))}
            
          </div>
        </div>
      </section>
    </>
  );
}

export default Recipepage;
