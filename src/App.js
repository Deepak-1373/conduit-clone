import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Feeds from "./components/Feeds";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route to="/" component={Header} />
          <Route to="/banner" component={Banner} />
          <Route to="/feeds" component={Feeds} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
