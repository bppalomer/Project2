import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    return (
        <>
            {/* Hero Section */}
            <section id="hero-section" className="container-fluid p-5 shadow-lg">
                <div className="container">
                    <div className="row d-flex justify-content-start align-items-center">
                        <div className="col-md-5">
                            <h1 className="fw-bold text-white display-4 mt-2" 
                                data-aos="zoom-in" 
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="1500">
                                Discover
                                <br />
                                Delicious Recipes,
                                <br />
                                Just for You!
                            </h1>
                            <h4 className="text-white" data-aos="zoom-in" 
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="1500">
                                Unleash your creativity in the kitchen 
                                <br/>
                                with unique and mouthwatering recipes.
                            </h4>
                            <button id="hero-btn" className="btn ps-5 pe-5 p-4 mt-4 shadow-lg fw-semibold" 
                                data-aos="zoom-in" 
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="1500"
                                onClick={() => navigate('/recipepage')}>
                                Explore Recipes
                            </button>
                        </div>
                        <div className="col-md-7 p-4">
                            <img className="plate-1" src="/Plate1.png" alt="image" 
                                data-aos="fade-left" 
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="1500"/>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home