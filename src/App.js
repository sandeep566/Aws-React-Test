import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./MyFiles/Home";
import About from "./MyFiles/About";
import Contact from "./MyFiles/Contact";
import Nopage from "./MyFiles/Nopage";
import Services from './MyFiles/Services';



const App = () => {
  return (
   
    <Router>
      
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="*" element={<Nopage/>} />
      </Routes>
  </Router>
  );
};

export default App;