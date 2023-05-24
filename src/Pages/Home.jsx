
function Home() {
    return (
        <>
            <header id="hero-section" className="container-fluid p-5">
                <div className="container">
                    <div className="row d-flex justify-content-start align-items-center">
                        <div className="col-md-7 p-5">
                            <h1 className="fw-semibold text-white">Your Daily Cooking Recipe Partner!</h1>
                            <input type="text" placeholder="Search recipe..." className="form-control shadow" />
                        </div>
                        <div className="col-md-5">

                        </div>
                    </div>
                </div>
            </header>

            <section className="container-fluid p-5">
                <div className="container">
                    <h1 className="text-center p-5 mt-5 fw-bold display-4">Featured Recipes</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <div className="card">
                                <div className="card-body text-center">
                                    <img className="img-fluid img-thumbnail text-center mb-3" src="/src/assets/caldereta.png" alt="Caldereta" />
                                    <h5 className="card-title text-center">Beef Caldereta</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" className="btn btn-success d-grid">Full Recipe</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mb-3 mb-sm-0 mx-auto">
                            <div className="card">
                                <div className="card-body text-center">
                                    <img className="img-fluid img-thumbnail text-center mb-3" src="/src/assets/caldereta.png" alt="Caldereta" />
                                    <h5 className="card-title text-center">Beef Caldereta</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" className="btn btn-success d-grid">Full Recipe</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home