import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

function Aboutus() {
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  return (
    
    <section className="container p-5">
      <Helmet>
        <title>SpiceSavvy - About Us </title>
      </Helmet>
      <div className="text-center" data-aos="zoom-in">
        <h1 className="fw-bold">Meet the Developers</h1>
      </div>
      <div className="cards_area">
        <div
          className="card card_developers bg-dark m-3"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <img
            src="/bryan.png"
            className="developers card-img-top p-3 rounded"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text text-light fw-bold">Bryan Paul Palomer</p>
            <p className="card-text text-light fw-bold">
              Full Stack Web Developer
            </p>
            <div className="links">
              <a
                href="https://github.com/bppalomer"
                class="btn btn-light m-3 fw-bold"
              >
                GitHub
              </a>
              <a href="https://linkedin.com/in/iamraiofficial" class="btn btn-light m-3 fw-bold">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div
          className="card card_developers bg-dark m-3"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <img
            src="/eliezer.png"
            className="developers card-img-top p-3 rounded"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text text-light fw-bold">Eliezer Layug</p>
            <p className="card-text text-light fw-bold">
              Full Stack Web Developer
            </p>
            <div className="links">
              <a
                href="https://github.com/xEliezer"
                class="btn btn-light m-3 fw-bold"
              >
                GitHub
              </a>
              <a href="#" class="btn btn-light m-3 fw-bold">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="cards_area">
        <div
          className="card card_developers bg-dark m-3"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <img
            src="/patrick.png"
            className="developers card-img-top p-3 rounded"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text text-light fw-bold">Patrick Laguna</p>
            <p className="card-text text-light fw-bold">
              Full Stack Web Developer
            </p>
            <div className="links">
              <a
                href="https://github.com/dalepatrick"
                class="btn btn-light m-3 fw-bold"
              >
                GitHub
              </a>
              <a href="#" class="btn btn-light m-3 fw-bold">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div
          className="card card_developers bg-dark m-3"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <img
            src="/marjorie.png"
            className="developers card-img-top p-3 rounded"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text text-light fw-bold">Marjorie Mainit</p>
            <p className="card-text text-light fw-bold">
              Full Stack Web Developer
            </p>
            <div className="links">
              <a
                href="https://github.com/Marjmainit"
                class="btn btn-light m-3 fw-bold"
              >
                GitHub
              </a>
              <a href="#" class="btn btn-light m-3 fw-bold">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mission_vision">
        <div
          className="bg-dark p-5 m-5 rounded"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="text-light pb-3">Mission</h1>
          <p className="text-light">
            At Spice Savvy, our mission is to bring the joy of cooking and
            exploring new flavors to food enthusiasts around the world. We
            strive to provide a user-friendly platform that leverages the rich
            database of The Meal DB API to offer a vast collection of recipes,
            culinary inspiration, and personalized cooking experiences. We aim
            to empower individuals to enhance their cooking skills, expand their
            palate, and create delicious meals that bring people together.
          </p>
        </div>
        <div
          className="bg-dark p-5 m-5 rounded"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="text-light p-3">Vision</h1>
          <p className="text-light">
            Our vision is to be the go-to destination for food lovers seeking
            culinary inspiration and knowledge. We envision Spice Savvy as a
            trusted resource that offers a diverse range of recipes, from
            traditional favorites to innovative creations, while embracing the
            cultural diversity and global nature of cuisine. By continually
            improving and expanding our platform, we aspire to foster a vibrant
            community where users can discover, share, and celebrate their
            passion for cooking, ultimately transforming everyday meals into
            extraordinary culinary experiences.
          </p>
        </div>
      </div>
      <button className="scroll-up-button container-fluid" onClick={scrollToTop}>
        Scroll to Top
      </button>
    </section>
  );
}

export default Aboutus;
