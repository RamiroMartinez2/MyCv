import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const Experiences = () => {
  return (
    <>
      <NavBar />
      <div class="education-container">
        <h1 id="experiences" className="h1-edu">
          <span className="education-headerline">Work</span>
        </h1>
        <h3 className="university">Edilizia SA Company</h3>
        <p className="info">
          Administrative Accounting 
           <span>&bull;</span>{" "}
          <em className="date"> August 2016 - February 2020</em>
        </p>
        <ul className="ulist-exp">
          <li>Generation of company availability reports.</li>
          <li>Preparation of the budget for the administrative sector.</li>
          <li>Carrying out bank reconciliations.</li>
          <li>
            Accounting entries for investments, salaries, social security and
            insurance for reports to management.
          </li>
          <li> Process improvement for the Accounts Payable area.</li>
          <li>Management of payments to suppliers.</li>
          <li>
            Responsible for performing cash counts, closing and cash control.
          </li>
          <li>
            Banks: Management of financial-banking operations, which include the
            preparation of folders, presentation of documentation, loan
            application and other credit assistance.
          </li>
        </ul>
      </div>
      <div class="education-container">
        <h3 className="university">Accounting office Andreoli-Zarate</h3>
        <p className="info">
          Administrative Accounting
           <span>&bull;</span> <em className="date"> March 2014 - May 2015</em>
        </p>
        <ul className="ulist-exp">
          <li>
            Tax settlements (IVA, IIBB, Earnings of Individuals and Personal
            Assets).
          </li>
          <li> Payment of salaries.</li>
          <li>General Regime Registration.</li>
          <li>
            Registration of Monotributo (Inscription, Recategorization,
            Four-month DDJJ).
          </li>
          <li>
            Accounting Registrations (IVA Purchases, IVA Sales, Salary Book and
            wages).
          </li>
        </ul>
      </div>
    </>
  );
};

export default Experiences;
