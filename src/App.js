//import logo from './logo.svg';
//import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/src/" elemetnt={<About />} />
            <Route path="/src/" elemetnt={<Portfolio />} />
            <Route path="/src/" elemetnt={<Resume />} />
            <Route path="/src/" elemetnt={<Contact />} />

          </Routes>
        </div>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
