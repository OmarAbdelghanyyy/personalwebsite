
import './App.css';
import Contact from './pages/contact';
import Home from './pages';
import Portfolio from './pages/portfolio';
import Cv from './pages/cv'
import Navbar from './components/Navbar/Navbar.js';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} /> 
        <Route exact path='/Home' element={<Home />} />
        <Route path='/cv' element={<Cv/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio/>} />
    </Routes>
    </Router>
  );
}

export default App;
