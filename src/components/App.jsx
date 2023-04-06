import React from 'react';
import { BrowserRouter as Router, 
  Route, Routes} from "react-router-dom";


import Home from './Home';
import AboutSpecialist from './AboutSpecialist';
import ReachUs from './ReachUs';
import Procedures from './Procedures';


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
        
          <Route path='/' element={<Home />}/>
          <Route path="/AboutSpecialist" element={<AboutSpecialist />} />
          <Route path="/Procedures" element={<Procedures />} />
          <Route path="/ReachUs" element={<ReachUs />} />
          
          
        </Routes>
      </Router>

    </div>
  );
}

export default App;
