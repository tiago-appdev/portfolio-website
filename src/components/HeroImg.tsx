import './HeroImgStyles.css';
import heroBg from '../assets/hero-bg.jpg';
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={heroBg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>hi, i'm a freelancer.</p>
        <h1>React Developer.</h1>
        <div>
          <Link to="/proyect" className="btn">
            Proyects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
