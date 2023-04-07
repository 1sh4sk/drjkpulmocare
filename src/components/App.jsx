import React from 'react';
import { BrowserRouter as Router, 
  Route, Routes} from "react-router-dom";


import Home from './Home';
import AboutSpecialist from './AboutSpecialist';



function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
        
          <Route path='/' element={<Home />}/>
          <Route path="/AboutSpecialist" element={<AboutSpecialist />} />
          
        
          
          
        </Routes>
      </Router>

    </div>
  );
}

export default App;
