import AdminPanel from './pages/adminPanel';
import React from 'react';
import {Route, BrowserRouter as Router, Routes, Link} from 'react-router-dom';
import SecondPageTest from './pages/ntfSpecifics';
import './scss/App.scss';
// import { ReactSVG } from 'react-svg';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">AdminPanel</Link>
            </li>
            <li>
              <Link to="/test">SecondPageTest</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/test' exact element={<SecondPageTest/>} />
          <Route path='/' exact element={<AdminPanel/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
