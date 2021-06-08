import React from 'react';
import Navbar from "./components/Navbar"
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import './First.css';
import Home from "./components/Pages/Home";


function First() {
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
      <Route path="/" exact component=
      {Home}
      />
      </Switch>
     </Router>
  </>  
  )
}

export default First;
