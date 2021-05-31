import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Header from "./components/HomeComponents/Header";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Header />
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
