import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "./ContactForm.scss";

export const ContactForm = () => {

  const click = () => {
    alert("Dale Negra");
  };

  const form = (ev) => {
    ev.preventDefault();
  };

  return (
<>
    <NavBar/>
    <div className="containerForm">
      
      <h1 className="h1-form">Get In Touch.</h1>

      <form
        onSubmit={() => form()}
        className="form"
        id="contactForm"
        name="contactForm"
      >
        <label className="name">
          Name <span class="required">*</span>
        </label>
        <input
          className="input"
          type="text"
          value=""
          size="35"
          id="contactName"
          name="contactName"
        />

        <label className="name">
          Email <span class="required">*</span>
        </label>
        <input
          className="input"
          type="text"
          value=""
          size="35"
          id="contactEmail"
          name="contactEmail"
        />

        <label className="name">Subject</label>
        <input
          className="input"
          type="text"
          value=""
          size="35"
          id="contactSubject"
          name="contactSubject"
        />

        <label className="name" for="contactMessage">
          Message <span class="required">*</span>
        </label>
        <textarea
          className="input"
          cols="50"
          rows="15"
          id="contactMessage"
          name="contactMessage"
        ></textarea>

        <div className="button">
          <button
            onClick={() => click()}
            className="submit-button"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </>
  );
};
