import React from 'react';
import { Container } from 'react-bootstrap';
import './App.scss';
import AttributesForm from './components/attributesForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import testBackground from './images/gray-background.jpg';
import animeFace from './images/anime-face.png';
// import { ReactSVG } from 'react-svg';

function App() {
  return (
    <Container>
      {/* <img src={testBackground} className='base' alt='background' />
      <img src={animeFace} className='face' alt='face' height={150} /> */}
      <AttributesForm gridClass="col-6 row" />
    </Container>
  );
}

export default App;
