import React from 'react'

const Contactuspage = () => {
  return (
    <>
      <section className='container p-5 m-5 '>
        <form>
          <div>
            <h1 id='text'>Contact Us</h1>
            <p className='text' >We'd love to hear from you! If you have any questions, suggestions, or simply want to say hello,
              feel free to get in touch with us. Please fill out the form below, and we'll get back to you as soon as possible.</p>
          </div>
          <div className='row pt-5'>
            <div className="mb-3 ms-5 col-md-5">
              <label for="text" className="form-label">First Name</label>
              <input type="text" className="form-control" id="firstname" />
            </div>
            <div className="mb-3 col-md-5">
              <label for="text" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="lastname" />
            </div>
            <div className="mb-3 ms-5 col-md-10">
              <label for="text" className="form-label">Email address</label>
              <input type="text" className="form-control" id="Email address" />
            </div>
            <div className="mb-3 ms-5 col-10">
            <label for="text" className="form-label">Comment</label>
              <textarea type="text" className="form-control" id="Comment" rows="3" />
            </div>
            <button type="submit" className="btn btn-primary bg-info col-md-2 m-5">Submit</button>
          </div>
        </form>
      </section>


    </>

  )
}

export default Contactuspage