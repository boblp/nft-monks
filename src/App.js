import AdminPanel from './pages/adminPanel';
import { Container } from 'react-bootstrap';
import React from 'react';
import {Route, BrowserRouter as Router, Routes, Link} from 'react-router-dom';
import SecondPageTest from './pages/secondPageTest';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { ReactSVG } from 'react-svg';

function App() {
  return (
    <Router>
      <Container>
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
      </Container>
    </Router>
  );
}

export default App;
