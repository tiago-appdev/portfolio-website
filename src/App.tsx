import { Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './routes/Home';
import Proyect from './routes/Proyect';
import About from './routes/About';
import Contact from './routes/Contact';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyect" element={<Proyect />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
