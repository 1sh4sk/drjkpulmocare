import React from 'react';
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";

import Header from './Header';
import Home from './Home';
import AboutSpecialist from './AboutSpecialist';
import CardDetails from './CardDetails';
import Procedures from './Procedures';
import ReachUs from './ReachUs';
import Footer from './Footer';




function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/AboutSpecialist" element={<AboutSpecialist />} />
          <Route path="/procedures" element={<Procedures />} />
          <Route path="/CardDetails" element={<CardDetails />} />
          <Route path="/ReachUs" element={<ReachUs />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
