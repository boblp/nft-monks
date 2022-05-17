import AdminPanel from './pages/adminPanel';
import NftSpecifics from './pages/nftSpecifics';
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
              <Link to="/nftSpecifics">NftSpecifics</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' exact element={<AdminPanel/>} />
          <Route path='/nftSpecifics' exact element={<NftSpecifics/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
