import { BrowserRouter as Router, Route } from "react-router-dom";
import "./scss/main.css";

//Components
import Navbar from "./components/Navbar";
import DisplayPlanets from "./components/DisplayPlanets";
import Footer from "./components/Footer";

//Import planet data from json file
const data = require("./data/data.json");

const App = () => {
  return (
    <Router>
      <Navbar />
      <Route exact path="/">
        <DisplayPlanets data={data[0]} />
      </Route>
      <Route exact path="/venus">
        <DisplayPlanets data={data[1]} />
      </Route>
      <Route exact path="/earth">
        <DisplayPlanets data={data[2]} />
      </Route>
      <Route exact path="/mars">
        <DisplayPlanets data={data[3]} />
      </Route>
      <Route exact path="/jupiter">
        <DisplayPlanets data={data[4]} />
      </Route>
      <Route exact path="/saturn">
        <DisplayPlanets data={data[5]} />
      </Route>
      <Route exact path="/uranus">
        <DisplayPlanets data={data[6]} />
      </Route>
      <Route exact path="/neptune">
        <DisplayPlanets data={data[7]} />
      </Route>
      <Footer />
    </Router>
  );
};

export default App;
