import AdminPanel from './pages/adminPanel';
import React from 'react';
import {Route, BrowserRouter as Router, Routes, Link} from 'react-router-dom';
import './scss/App.scss';

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
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' exact element={<AdminPanel/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
