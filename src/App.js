import './App.css';
import Contact from './pages/contact';
import Home from './pages';
import ProjectDisplay from './pages/ProjectDisplay.js'
import Cv from './pages/cv'
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Projects from './pages/projects';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className='App'>
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} /> 
        <Route exact path='/Home' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDisplay />} />
        <Route path='/cv' element={<Cv/>} />
        <Route path='/contact' element={<Contact />} />
    </Routes>
    </Router>
    <Footer />
  </div>
  );
}

export default App;
