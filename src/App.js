import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Contact } from "./pages/Contact";
import Projects from "./pages/Projects";
import { Home } from "./pages/Home";
import Publications from "./pages/Publications";
import Awards from "./pages/Awards";
import Experiences from "./pages/Experiences";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/internships" component={Experiences}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/publications" component={Publications}></Route>
        <Route exact path="/awards" component={Awards}></Route>
      </Switch>
    </Router>
  );
}

export default App;
