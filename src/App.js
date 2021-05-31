import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/App.css";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
