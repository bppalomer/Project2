import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";

function Home() {

    const navigate = useNavigate();

    return (
        <>
            {/* Hero Section */}
            <Helmet>
                <title>SpiceSavvy - Home </title>
            </Helmet>
            <section id="hero-section" className="container-fluid p-5 shadow-lg">
                <div id="hero-container" className="container">
                    <div className="row d-flex">
                        <div className="col-md-6">
                            <img id="cooking" className="img-fluid" src="/cooking.png" alt="image"
                                data-aos="fade-right"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="1500" />
                            <h1 className="fw-bold text-white display-4" 
                                data-aos="zoom-in"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="1500">
                                Discover
                                Delicious Recipes,
                                Just for You!
                            </h1>
                            <h4 className="text-white" 
                                data-aos="zoom-in" 
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="1500">
                                Unleash your creativity in the kitchen
                                <br />
                                with unique and mouthwatering recipes.
                            </h4>
                            <button onClick={() => navigate('/recipepage')} id="hero-btn"
                            className="btn ps-5 pe-5 p-4 mt-4 mb-5 shadow-lg fw-semibold"
                                data-aos="fade-up"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="3000">
                                Explore Recipes
                            </button>
                        </div>
                        <div className="col-md-6 d-flex justify-content-start align-items-center">
                            <img className="plate-1" src="/Plate1.png" alt="image"
                                data-aos="fade-left"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="1500" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home