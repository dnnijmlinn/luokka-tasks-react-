import React, { Component } from 'react';
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import './index.css';
import Luokka1 from './Luokka1';
import Luokka2 from './Luokka2';
import Funk1 from './Funk1';
import Funk2 from './Funk2';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul className="header">
            <li><NavLink exact to="/">Luokka1</NavLink></li>
            <li><NavLink to="/luokka2">Luokka2</NavLink></li>
            <li><NavLink to="/funk1">Funktionaalinen1</NavLink></li>
            <li><NavLink to="/funk2">Funktionaalinen2</NavLink></li>
          </ul>
          <div className="content"></div>
          <Route exact path="/" component={Luokka1} />
          <Route path="/luokka2" component={Luokka2} />
          <Route path="/funk1" component={Funk1} />
          <Route path="/funk2" component={Funk2} />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
