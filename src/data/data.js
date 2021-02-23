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
      skills: ["React JS", "Redux", "CSS/SASS",],
      url: "https://react-caldar.vercel.app/",
    },
    {
      id: 2,
      name: "Ramiro's News",
      image: formImg,
      imgAlt: "Ramiro's News",
      skills: ["HTML", "CSS/SASS", "JavaScritp"],
      url: "https://ramiro-s-news.vercel.app/",
    },
    {
      id: 3,
      name: " Gifos search",
      image: gifosImg,
      imgAlt: "Gifos image",
      skills: ["HTML", "CSS/SASS", "JavaScritp"],
      url: "https://proyecto-gifos-omega.vercel.app/index.html",
    },
  ],
  skills: {

    html: "HTML",
    git: "GIT",
    css: "CSS",
    sass: "SASS",
    javascript: "JavaScript",
    node: "Node JS",
    express: "Express",
    mongoDB: "mongoDB",
    mysql: "MySQL",
    heroku: "Cloud Servers",
    react: "React JS",
    redux: "Redux",
    form: "Form",
    swagger: "Swagger",
    postman: " Postman",
  },
  footer:{
    copyright:'Copyright 2021',
    design:'Design by Ramiro Martinez'
  }
};

export default data;
