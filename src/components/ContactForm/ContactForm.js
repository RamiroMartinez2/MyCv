import "./ContactForm.scss";

import React, { useState } from "react";

const NUMERO_DE_TELEFONO = "5493413263481";

export const ContactForm = () => {
  const [userInfo, setUserInfo] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formatedText = `
    Nombre: ${(userInfo.name || "").replace(" ", "%20")}
    %0A*Email*: ${(userInfo.email || "").replace(" ", "%20")}
    %0A*Mensaje*: ${(userInfo.content || "").replace(" ", "%20")}
    `;
    window.open(`https://wa.me/${NUMERO_DE_TELEFONO}?text=${formatedText}`);
  };

  return (
    <section id="contact" className="contact-form">
      <div className="flex-container">
        <h2 className="h1-form">GET IN TOUCH</h2>
        <form className="form" onSubmit={handleSubmit}>
          <label className="name">
            Name <span class="required">*</span>
          </label>
          <input
            required
            name="name"
            className="input"
            type="text"
            placeholder="Name"
            value={userInfo.name}
            onChange={(e) => handleChange(e)}
          />
          <label className="name">
            Email <span class="required">*</span>
          </label>
          <input
            required
            name="email"
            type="email"
            className="input"
            placeholder="Email"
            value={userInfo.email}
            onChange={(e) => handleChange(e)}
          />
          <label className="name" for="contactMessage">
            Message <span class="required">*</span>
          </label>
          <textarea
            required
            type="text"
            className="input"
            name="content"
            placeholder="Type here"
            onChange={(e) => handleChange(e)}
          />

          <button className="button" type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};
