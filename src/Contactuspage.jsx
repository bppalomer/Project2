

const Contactuspage = () => {
  return (
    <div className="mb-5 mt-5">
      <div>
        <h1 className="contact-head">
          Contact Us
        </h1>
        <p className="intro">
          We'd love to hear from you! If you have any questions, suggestions, or simply want to say hello, feel free to get in touch with us.
          Please fill out the form below, and we'll get back to you as soon as possible.
        </p>
      </div>
      <div className="container col-9" id="form">
        <div className="row">
          <div className="d-flex mb-3">
            <div className="col-sm-6">
              <label for="firstName" class="form-label">First name</label>
              <input type="text" class="form-control" />
            </div>
            <div class="col-sm-6">
              <label for="lastName" class="form-label">Last name</label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div className=" mb-3">
            <label className="form-label">Email address</label>
            <input type="text" className="form-control" placeholder="name@example.com" />
          </div>
          <div className=" mb-3">
            <label className="form-label">Comments</label>
            <textarea className="form-control" id="text-area" rows="3"></textarea>
          </div>
          <div>
            <button type="button" class="btn btn-dark">Enter</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactuspage