import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import './App.css';


function App() {
  return (
    <div className='App'>
    <Header />
    <div className='Pages'>
            <Routes>
            <Route
              path="/about" 
              element={<About />}
            />
            <Route
              path="/portfolio" 
              element={<Portfolio />}
            />
            <Route
              path="/resume" 
              element={<Resume />}
            />
          </Routes>
        </div>
      <Footer/>
      </div>
  );
}

export default App;
