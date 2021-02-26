import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Skills from "./components/Skills/Skills";
import Home from "./components/Home/Home";
import Educations from "./components/Educations/Educations";
import Portfolio from "./components/Portfolio/Portfolio";
import Experiences from "./components/Experiences/Experiences";
import { ContactForm } from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home} />
        <Switch>
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/educations" component={Educations} />
          <Route exact path="/experiences" component={Experiences} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contactForm" component={ContactForm} />
        </Switch>
        <Route exact path="/" component={Footer} />
      </>
    </Router>
  );
}

export default App;
