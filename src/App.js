import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';


function App() {
  return (
    <div className="App">
      
      <Router>
        <Header/>
        <Switch>
          <Route path = '/' exact    component = {Home}/>
          <Route path = '/about'     component = {About}/>
          <Route path = '/education' component = {Education}/>
          <Route path = '/skills'    component = {Skills}/>
          <Route path = '/projects'  component = {Projects}/>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
