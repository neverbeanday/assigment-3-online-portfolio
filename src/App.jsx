import { Navbar } from './components';
import { About, Awards, Experience, Home, Interest, Skills } from './pages';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// styles
import './app.scss';

function App() {
  return (
    <>
      <Router>
        <div className='app'>
          <Navbar />
          <div className='app-content'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/experience' element={<Experience />} />
              <Route path='/skills' element={<Skills />} />
              <Route path='/interest' element={<Interest />} />
              <Route path='/awards' element={<Awards />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
