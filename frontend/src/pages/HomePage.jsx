import React from 'react';
import { Link } from 'react-router-dom';
import GoogleLogin from '../components/auth/GoogleLogin.jsx';
import logo from '../images/plumaclauca.svg';
import backgroundBird from '../images/background_bird.png';

function HomePage() {
  return (
    <div className="home-page">
      {/* Imagen de fondo fija */}
      <div
        className="home-background"
        style={{
          backgroundImage: `url(${backgroundBird})`,
        }}
      >
        {/* Capa de opacidad para contraste */}
        <div className="home-bg-filter" />
      </div>

      {/* Navegación invisible */}
      <nav className="home-nav">
        <div className="home-logo">
          <img src={logo} alt="PlumaCauca" />
        </div>
        <div className="home-nav-links">
          <Link to="/" className="home-nav-link">Inicio</Link>
          <Link to="/nosotros" className="home-nav-link">Sobre nosotros</Link>
          <GoogleLogin compact />
        </div>
      </nav>

      {/* Texto central */}
      <div className="home-content">
        <h1 className="home-title">
          Protejamos el vuelo
          <br />
          de las aves, para que
          <br />
          su canto nunca se apague.
        </h1>
        <Link to="/mapa" className="btn-home">
          comienza tu aventura
        </Link>
      </div>
    </div>
  );
}

export default HomePage;