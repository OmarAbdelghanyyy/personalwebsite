import logo from './logo.svg';
import './App.css';
import Contact from './pages/contact';
import Home from './pages';
import Portfolio from './pages/portfolio';
import Navbar from './components/Navbar';
import Cv from './pages/cv'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/cv' element={<Cv/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio/>} />
    </Routes>
    </Router>
  );
}

export default App;
