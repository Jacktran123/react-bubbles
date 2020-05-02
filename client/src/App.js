import React, { useState } from "react";
import { BrowserRouter as Router, Route,Redirect } from "react-router-dom";

import ProtectiveRoute from './components/ProtectiveRoute';
import BubblePage from './components/BubblePage';
import Login from "./components/Login";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
         <ProtectiveRoute path='/BubblePage' component={BubblePage} />
         
      </div>
    </Router>
  );
}

export default App;
