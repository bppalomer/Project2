import RecipePage from "./Recipepage"

function Home() {
    
    return (
        <>
            {/* Hero Section */}
            <section id="hero-section" className="container-fluid p-5 shadow-lg">
                <div className="container-fluid d-flex">
                <div className="row d-flex justify-content-start align-items-center">
                    <div className="col-md-4">
                        <img className="plate-2" src="/Plate2.png" alt="image" 
                            data-aos="fade-right" 
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="1000"/>
                    </div>
                </div>

                    <div className="row d-flex justify-content-start align-items-center">
                        <div className="col-md-5">
                            <h1 className="fw-bold text-white display-4 mt-5" 
                                data-aos="zoom-in" 
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="1000">
                                Discover
                                <br />
                                Delicious Recipes,
                                <br />
                                Just for You!
                            </h1>
                            <h4 className="text-white" data-aos="zoom-in" 
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="1000">
                                Unleash your creativity in the kitchen 
                                <br/>
                                with unique and mouthwatering recipes.
                            </h4>
                            <a href={<RecipePage />} id="hero-btn" className="btn ps-5 pe-5 p-4 mt-4 shadow-sm fw-semibold" 
                                data-aos="zoom-in" 
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="1000">
                                Explore Recipes
                            </a>
                        </div>
                        <div className="col-md-7 ps-5">
                            <img className="ms-5 ps-3 plate-1" src="/Plate1.png" alt="image" 
                                data-aos="fade-left" 
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="1000"/>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home