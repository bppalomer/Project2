import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import "bootstrap/dist/css/bootstrap.css";

const Contactuspage = () => {
  const [data, setData] = useState([]);
  const [newUser, setNewUser] = useState({
    id: 0,
    firstname: "",
    lastname: "",
    email: "",
    comments: "",
  });
  const [showScroll, setShowScroll] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleFirstName = (e) => {
    setNewUser({ ...newUser, firstname: e.target.value });
  };

  const handleLastName = (e) => {
    setNewUser({ ...newUser, lastname: e.target.value });
  };

  const handleEmail = (e) => {
    setNewUser({ ...newUser, email: e.target.value });
  };

  const handleComment = (e) => {
    setNewUser({ ...newUser, comments: e.target.value });
  };

  const addUser = async () => {
    try {
      const docRef = await addDoc(collection(db, "Users"), newUser);
      console.log("Added successfully. ", docRef.id);
      clearFields();

      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    } catch (error) {
      console.log("Error adding ", error);
    }
  };


  const clearFields = () => {
    setNewUser({
      id: 0,
      firstname: "",
      lastname: "",
      email: "",
      comments: "",
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "Users"));
      setData(querySnapshot.docs.map((doc) => doc.data()));
    };

    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mb-5 mt-5">
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
            <label htmlFor="firstName" className="form-label text-light">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              onChange={handleFirstName}
              value={newUser.firstname}
            />
          </div>
          <div className="col-sm-6">
            <label htmlFor="lastName" className="form-label text-light">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              onChange={handleLastName}
              value={newUser.lastname}
            />
          </div>
        </div>
        <div className=" mb-3">
          <label className="form-label text-light">Email address</label>
          <input
            type="text"
            className="form-control"
            placeholder="name@example.com"
            onChange={handleEmail}
            value={newUser.email}
          />
        </div>
        <div className=" mb-3">
          <label className="form-label text-light">Comments</label>
          <textarea
            className="form-control"
            id="text-area"
            rows="3"
            onChange={handleComment}
            value={newUser.comments}
          ></textarea>
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-dark btn-lg btn-block btn_contact_us mt-4 p-4"
            onClick={addUser}
          >
            Submit Feedback
          </button>
        </div>
      </div>
      {showAlert && (
        <div className="container mt-3">
          <div className="alert alert-success alert-dismissible fade show" role="alert">
           Thank you for Submitting!
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={() => setShowAlert(false)}
            ></button>
          </div>
        </div>
      )}
      {showScroll && (
        <div className="container mt-5">
          <button
              type="button"
              className="btn btn-dark text-white"
              onClick={scrollToTop}
              id="myButton"
            >
              Scroll to top
            </button>
        </div>
      )}
    </div>
  );
};

export default Contactuspage;
