function Footer() {
  return (
    <>
      <footer className="container-fluid">
        <div className="row">
          <div className="col-md-3 p-5">
            <p className="logo1 fw-bold">
              Sp
              <img
                src="/Chili_logo.png"
                alt="chili_image"
                className="logo_image"
              />
              ce<span className="logo2 fw-bold">Savvy</span>
            </p>
            <p>
              Are you tired of the same old recipes and in need of some culinary inspiration? 
              Look no further! Our cutting-edge recipe generator web app is here to revolutionize
              your cooking experience. By subscribing to our newsletter, you will gain access to 
              a world of mouthwatering recipes and exciting kitchen tips and tricks.
            </p>
            <button className="container" id="btn">
              Subscribe
            </button>
          </div>

          <div className="col-md-3 p-5">
            <p className="fw-bold">Support</p>

            <p>
              <a className="support_item pb-3">Contact Us</a>
            </p>
            <p>
              <a className="support_item pb-3">FAQs</a>
            </p>
            <p>
              <a className="support_item">Privacy policy</a>
            </p>


          </div>

          <div className="col-md-3 p-5">
            <div className="pb-3">
              <p className="fw-bold">Follow Us</p>
              <a className="icon fa-brands fa-facebook ps-0" href="#"></a>
              <a className="icon fa-brands fa-youtube" href="#"></a>
              <a className="icon fa-brands fa-instagram" href="#"></a>
              <a className="icon fa-brands fa-github" href="#"></a>
            </div>

            <div className="pt-5">
              <p className="dev fw-bold">Developers</p>
              <p>Bryan Paul Palomer</p>
              <p>Patrick Laguna</p>
              <p>Eliezer Layug</p>
              <p>Marjorie Mainit</p>
            </div>
          </div>

          <div className="col-md-3 p-5">
            <p className="fw-bold">
              Still Have Question?
            </p>
            <div>
              <strong>Phone:</strong>
              <div>
                <p>Philippines: (02) 8540 9773 USA: +1 442-249-7722</p>
              </div>
              <div>
                <strong>Schedule:</strong>
                <p>Mon - Sun 6:00 AM - 12:00 AM</p>
              </div>
              <div>
                <strong>Email:</strong>
                <p>contact@spicesavvy.ph</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
