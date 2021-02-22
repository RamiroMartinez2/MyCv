import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Skills from "./components/Skills/Skills";
import Home from "./components/Home/Home";
import Educations from "./components/Educations/Educations";
import Portfolios from "./components/Portfolios/Portfolios";
import Experiences from "./components/Experiences/Experiences";
import PortfolioDetail from "./components/PortfolioDetail/PortfolioDetail";
import { ContactForm } from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/skills" component={Skills} />
          <Route path="/educations" component={Educations} />
          <Route path="/experiences" component={Experiences} />
          <Route path="/portfolios" component={Portfolios} />
          <Route path="/portfolioDetail" component={PortfolioDetail} />
          {/* <Route path="/contactForm" component={ContactForm} /> */}
        </Switch>
        <Route exact path="/" component={Footer} />
      </>
    </Router>
  );
}

export default App;
