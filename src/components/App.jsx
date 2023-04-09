import React from 'react';
import { BrowserRouter as Router, 
  Route, Routes} from "react-router-dom";


import Home from './Home';
import AboutSpecialist from './AboutSpecialist';
import CardDetails from './CardDetails';
import Procedures from './Procedures';



function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
        
          <Route path='/' element={<Home />}/>
          <Route path="/AboutSpecialist" element={<AboutSpecialist />} />
          <Route path="/procedures" element={<Procedures />} />
          <Route path="/CardDetails" element={<CardDetails />} />
          
        
          
          
        </Routes>
      </Router>

    </div>
  );
}

export default App;
