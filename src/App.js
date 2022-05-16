import AdminPanel from './pages/AdminPanel';
import NftSpecifics from './pages/NftSpecifics';
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
