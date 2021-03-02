import React from "react";
import data from "../../data/data";
import "./Languages.scss";


export const Languages = () => {
  const languages = data?.languages;
  const Currentlanguages = languages.map((language) => (
    <>
      <h3 className="title">{language.english}</h3>
      <p className="info">{language.level}</p>
      <p className="info">{language.clases}</p>
    </>
  ));

  return (
    <>
      <div id="languages" className="languages-container">
        <h1 className="h1-lang">
          <span className="languages-headerline">Languages</span>
        </h1>
        {Currentlanguages}
      </div>
    </>
  );
};
