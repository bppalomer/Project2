function Footer() {
  return (
    <>
      <footer>
        <div className="row">
          <div className="col-md-3 p-5">
              <p id="logo1">
                Sp
                <img
                  src="/Chili_logo.png"
                  alt="chili_image"
                  class="logo_image"
                />
                ce<span id="logo2">Savvy</span>
              </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
              iusto quae, commodi distinctio beatae, soluta nisi eligendi hic
              magnam modi, tempore nam suscipit eum provident! Debitis repellat
              tempore nostrum provident.
            </p>
            <button className="container" id="btn">
              Subscribe
            </button>
          </div>

          <div className="col-md-3 p-5">
            <p>
              Support
            </p>
            
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
            <div classname="pb-3">
            <p>Follow Us</p>
            <a className="icon fa-brands fa-facebook ps-0" hrer="#"></a>
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

          <div className="col-md-2 p-5">
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
