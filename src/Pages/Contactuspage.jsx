/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import "bootstrap/dist/css/bootstrap.css";
import { Helmet } from "react-helmet";

const Contactuspage = () => {
  const [data, setData] = useState([]);
  const [newUser, setNewUser] = useState({
    id: 0,
    firstname: "",
    lastname: "",
    email: "",
    comments: "",
  });
 
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

  const addUser = async (e) => {
    e.preventDefault(); 
  
    if (
      newUser.firstname === "" ||
      newUser.lastname === "" ||
      newUser.email === "" ||
      newUser.comments === ""
    ) {
      return; 
    }
  
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

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "Users"));
      setData(querySnapshot.docs.map((doc) => doc.data()));
    };

    fetchData();
  }, []);


  return (
    <div className="mb-5 mt-5">
      <Helmet>
        <title>SpiceSavvy - Contact Us </title>
      </Helmet>
      <div className="container rounded shadow-lg ps-0" id="form">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img className="img-fluid img-contact" src="/contact-pic.jpg" alt="picture" />
          </div>
            <div className="col-md-6">
            <div className="text-start">
              <h1 className="contact-head text-dark">Contact Us</h1>
              <p className="text-dark">
                We'd love to hear from you! If you have any questions, suggestions,
                or simply want to say hello, feel free to get in touch with us.
                Please fill out the form below, and we'll get back to you as soon as
                possible.
              </p>
            </div>
            <div className="row d-flex mb-3">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label text-dark">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control shadow-lg"
                  onChange={handleFirstName}
                  value={newUser.firstname}
                  required
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label text-dark">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control shadow-lg"
                  onChange={handleLastName}
                  value={newUser.lastname}
                  required
                />
              </div>
            </div>
            <div className=" mb-3">
              <label className="form-label text-dark">Email address</label>
              <input
                type="text"
                className="form-control shadow-lg"
                placeholder="name@example.com"
                onChange={handleEmail}
                value={newUser.email}
                required
              />
            </div>
            <div className=" mb-3">
              <label className="form-label text-dark">Comments</label>
              <textarea
                className="form-control shadow-lg"
                id="text-area"
                rows="3"
                onChange={handleComment}
                value={newUser.comments}
                required
              ></textarea>
            </div>
            <div className="d-flex justify-content-start">

              <button
                type="button"
                className="btn btn-dark btn_contact_us mt-4 p-3 shadow-lg"
                onClick={addUser}
              >
                Submit Feedback
              </button>
            </div>
          </div>
            </div>
        </div>
        
      {showAlert && (
        <div className="container mt-3">
          <div className="alert alert-success alert-dismissible fade show" role="alert">
           Thank you for Submitting your Feedback!
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
      
    </div>
  );
};

export default Contactuspage;
