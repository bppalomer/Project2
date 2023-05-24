function Beeflists () {
    return (
        <>
      <section>
        <div className="search_section p-5">
        <div class="input-group justify-content-center">
          <form action="" method="GET" class="form">
            <input type="search" placeholder="Search" class="search-field" />
            <button type="submit" class="search-button">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
        </div>
        
      
      <div className="food_category p-5 mt-5 justify-content-center text-center">
        <p className="other_recipe">
          Kids will always love pork! Here are the pork recipes that will surely
          become family favorites
        </p>
      </div>
      <div className="container justify-content-center d-flex">
        <img
          className="pork_img rounded m-4"
          src="./src/assets/pork-img.jpg"
          alt=""
        />
      </div>

      <div class="d-flex mb-3">
        <div class="me-auto p-2">
          <span className="other_recipe">Delicious Recipe</span>
        </div>
        <div class="p-2">
          <a src="#" className="other_recipe">
            Browse All →
          </a>
        </div>
      </div>

      <div className="card-container pb-5">
        <div className="card card_first m-3">
          <img src="./src/assets/pork-img.jpg" class="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card card_first m-3">
          <img src="./src/assets/pork-img.jpg" class="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card card_first m-3">
          <img src="./src/assets/pork-img.jpg" class="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div class="d-flex mb-3">
        <div class="me-auto p-2">
          <span className="other_recipe">Discover More Recipe</span>
        </div>
        <div class="p-2">
          <a src="#" className="other_recipe">
            Browse All →
          </a>
        </div>
      </div>
      <div className="card-container pb-5">
        <div className="card card_second m-3">
          <img src="./src/assets/pork-img.jpg" class="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card card_second m-3">
          <img src="./src/assets/pork-img.jpg" class="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card card_second m-3">
          <img src="./src/assets/pork-img.jpg" class="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card card_second m-3">
          <img src="./src/assets/pork-img.jpg" class="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      </section>
    </>
    )
}

export default Beeflists