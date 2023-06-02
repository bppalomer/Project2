
import React, { useState, useEffect } from "react";
import { db } from './firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.css';

const Contactuspage = () => {

  const [data, setData] = useState([]);
  const [newUser, setNewUser] = useState({
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    comments: '',
  });

  // Functions to handle input changes
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
      console.log("Added successfully. Document ID: ", docRef.id);
      clearFields();

      setTimeout(() => {
        clearFields();
      }, 2000);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const clearFields = () => {
    setNewUser({
      id: 0,
      firstname: '',
      lastname: '',
      email: '',
      comments: '',
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "Users"));
      setData(querySnapshot.docs.map(doc => doc.data()));
    };

    fetchData();
  }, []);



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
              <label for="firstName"
                class="form-label">First name</label>
              <input type="text"
                onChange={handleFirstName}
                value={newUser.firstname}
                class="form-control" />
            </div>
            <div class="col-sm-6">
              <label for="lastName"
                class="form-label">Last name</label>
              <input type="text"
                onChange={handleLastName}
                value={newUser.lastname}
                class="form-control" />
            </div>
          </div>
          <div className=" mb-3">
            <label className="form-label">Email address</label>
            <input type="text"
              onChange={handleEmail}
              value={newUser.email}
              className="form-control"
              placeholder="name@example.com" />
          </div>
          <div className=" mb-3">
            <label className="form-label">Comments</label>
            <textarea className="form-control"
              onChange={handleComment}
              value={newUser.comments}
              id="text-area"
              rows="3"></textarea>
          </div>
          <div>
            <button type="button"
              class="btn btn-dark"
              onClick={addUser}
            >Enter</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactuspage