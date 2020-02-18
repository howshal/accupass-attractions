import React from 'react';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";

import './App.css';
import AttractionList from "./component/AttractionList";
import AttractionDetail from "./component/AttractionDetail";

function App() {
  return (
      <Router>
          <div className="App">
              <Switch>
                  <Route exact path="/" children={<AttractionList/>}/>
                  <Route path="/:id" children={<AttractionDetail/>}/>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
