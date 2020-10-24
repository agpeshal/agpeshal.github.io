import React from 'react';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Contact } from './pages/Contact';
import { Projects } from './pages/Projects';
import { Home } from './pages/Home';

function App() {
  return (
    <Router>
      <NavBar>
      </NavBar>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/projects' component={Projects}></Route>
        <Route exact path='/contact' component={Contact}></Route>
      </Switch>
    </Router>





  );
}

export default App;
