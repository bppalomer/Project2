function Home() {
    return (
        <>
            {/* Hero Section */}
            <section id="hero-section" className="container-fluid p-5 shadow-lg">
                <div className="container">
                    <div className="row d-flex justify-content-start align-items-center mt-5 p-5">
                        <div className="col-md-8 p-5">
                            <h1 className="fw-bold text-white display-3 mt-5">
                                Discover
                                <br />
                                Delicious Recipes,
                                <br />
                                Just for You!
                            </h1>
                            <h4 className="text-white">
                                Unleash your creativity in the kitchen with 
                                <br />
                                unique and mouthwatering recipes.
                            </h4>
                            <button id="hero-btn" className="btn ps-5 pe-5 p-4 mt-4 shadow-lg fw-semibold">Explore Recipes</button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home