import caldarImg from "../images/caldarImg.PNG";
import formImg from "../images/formImg.PNG";
import gifosImg from "../images/gifosImg.PNG";

const data = {

  contact: {
    name: "Ramiro Martinez",
    phone: "(+54) 9 3413-263-481",
    place: "Rosario, Santa Fe, CP 2000 Argentina",
    email: "ramiro.martinez91@hotmail.com",
    profession: "Full Stack Developer",
    about:
      "I am a results oriented web developer with excellent communication skills. My goal is to have the opportunity to be part of a company that allows me to develop personally and professionally.",
  },

  proyects: [
    {
      id: 1,
      name: "React Caldar Proyect",
      image: caldarImg,
      imgAlt: "Caldar",
      skills: ["React JS", "Redux", "CSS/SASS"],
      url: "https://react-caldar.vercel.app/",
      description: "Project with react, redux, form, css and heroku (inside project put confirm)"
    },
    {
      id: 2,
      name: "Ramiro's News",
      image: formImg,
      imgAlt: "Ramiro's News",
      skills: ["HTML", "CSS/SASS", "JavaScript"],
      url: "https://ramiro-s-news.vercel.app/subscription.html",
      description: "Daily subscription form made with html css and vanilla javaScript"
    },
    {
      id: 3,
      name: " Gifos search",
      image: gifosImg,
      imgAlt: "Gifos image",
      skills: ["HTML", "CSS/SASS", "JavaScritp"],
      url: "https://proyecto-gifos-omega.vercel.app/index.html",
      description: "Gifos search page made with html, css and vanilla javaScript"
    },
  ],

  courses: [
    {
      name: "React JS CoderHouse",
      profession: "Front end developer",
      skills: [
        "Components",
        "Hooks",
        "Promises, asynchrony and MAP",
        "APIs",
        "Routing",
        "Events",
        "Context",
        "Rendering techniques",
        "Firebase",
      ],
      date: " Feb 2021 - Currently  ",
    },
    {
      name: "Bootcamp Radium Rocket company",
      profession: "Full Stack Developer",
      skills: [
        "HTML",
        "GIT",
        "CSS",
        "Responsive",
        "JavaScript",
        "Node JS",
        "Express",
        "MongoDB",
        "Cloud Servers",
        "React JS",
        "Redux",
        "Form",
      ],
      date: " Oct 2020 - Jan 2021 ",
    },
    {
      name: "Acamica company",
      profession: "Full Stack Developer",
      skills: [
        "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "Node JS",
        "Express",
        "mongoDB",
        "MySQL",
        "Swagger",
        " Postman",
      ],

      date: " Apr 2020 - Nov 2020 ",
    },
    
  ],
  experience: [
    {
      company: "Edilizia SA Company",
      position: " Administrative Accounting ",
      date: "Aug 2016 - Feb 2020",
      duties: [
        "Generation of company availability reports.",
        "Preparation of the budget for the administrative sector.",
        "Carrying out bank reconciliations.",
        "Accounting entries for investments, salaries, social security and insurance for reports to management.",
        "Process improvement for the Accounts Payable area.",
        "Management of payments to suppliers",
        "Responsible for performing cash counts, closing and cash control.",
        "Banks: Management of financial-banking operations, which include the preparation of folders, presentation of documentation, loan application and other credit assistance.",
      ],
    },
    {
      company: "Accounting office Andreoli-Zarate",
      position: " Administrative Accounting ",
      date: "Mar 2014 - May 2015",
      duties: [
        "Tax settlements (IVA, IIBB, Earnings of Individuals and Personal Assets).",
        " Payment of salaries.",
        "General Regimen Registration.",
        "Registration of Monotributo (Inscription, Recategorization,Four-month DDJJ).",
        " Accounting Registrations (IVA Purchases, IVA Sales, Salary Book andwages).",
      ],
    },
  ],
  languages:[
{
  title: "Languages",
  english: "English",
  level: "Advanced Intermediate.",
  clases: "Currently taking classes at The Language MarketCompany."
}

  ],

  footer: ["Copyright 2021", "Design by Ramiro Martinez"],
};

export default data;
