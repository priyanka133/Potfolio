
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
// import Potfolio from './Components/Potfolio';
import Services from './Components/Services';
import Prot from './Components/Prot.js';
import Resume from './Components/Resume.js';
import Contact from './Components/Contact.js';
import Testinomial from './Components/Testinomial.js';



function App() {
  return (
    <>




       <div class="parallax"></div>
        {/* <Home></Home> */}
        <Routes>        
      <Route path="/"  element={<Home/>} />
      <Route path="/Home"  element={<About />}/>
      <Route path="/About"  element={<About/>}/>
      <Route path="/About"  element={<Prot/>}/>
      <Route path="/xyz"  element={<Services/>}/>
      
        </Routes>
        <Navbar/>
        <About/>
        <Resume/>
        <Services/>
        
        <Prot></Prot>
        <Testinomial></Testinomial>
        <Contact/>
       
   
  
    </>
  );
}

export default App;
