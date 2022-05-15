import AdminPanel from './pages/adminPanel';
import NftSpecifics from './pages/ntfSpecifics';
import React from 'react';
import {Route, BrowserRouter as Router, Routes, Link} from 'react-router-dom';
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
              <Link to="/nftSpecifics">Nf</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/nftSpecifics' exact element={<NftSpecifics/>} />
          <Route path='/' exact element={<AdminPanel/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
