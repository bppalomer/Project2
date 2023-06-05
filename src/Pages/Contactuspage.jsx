import { Helmet } from "react-helmet";

const Contactuspage = () => {
  return (
    <div className="mb-5 mt-5">
      <Helmet>
        <title>SpiceSavvy - Contact Us </title>
      </Helmet>
      <div className="container col-9 rounded" id="form">
        <div className="text-center">
          <h1 className="contact-head text-light">Contact Us</h1>
          <p className="text-light">
            We'd love to hear from you! If you have any questions, suggestions,
            or simply want to say hello, feel free to get in touch with us.
            Please fill out the form below, and we'll get back to you as soon as
            possible.
          </p>
        </div>
        <div className="row d-flex mb-3">
          <div className="col-sm-6">
            <label for="firstName" class="form-label text-light">
              First name
            </label>
            <input type="text" class="form-control" />
          </div>
          <div class="col-sm-6">
            <label for="lastName" class="form-label text-light">
              Last name
            </label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div className=" mb-3">
          <label className="form-label text-light">Email address</label>
          <input
            type="text"
            className="form-control"
            placeholder="name@example.com"
          />
        </div>
        <div className=" mb-3">
          <label className="form-label text-light">Comments</label>
          <textarea className="form-control" id="text-area" rows="3"></textarea>
        </div>
        <div className="d-flex justify-content-center">
          <button type="button" class="btn btn-dark btn-lg btn-block btn_contact_us mt-4 p-4">
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contactuspage;
