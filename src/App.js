import './App.css';
import testBackground from './images/gray-background.jpg';
import animeFace from './images/anime-face.png';
// import { ReactSVG } from 'react-svg';

function App() {
  return (
    <div className='middle-center'>
      <img src={testBackground} className='base' alt='background' />
      <img src={animeFace} className='face' alt='face' height={150} />
    </div>
  );
}

export default App;
