import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { getImagePath } from '../utils/paths';
import { NEGOCIO, whatsappUrl } from '../config/negocio';
import './Navbar.css';

const LINKS = [
  { to: '/', label: 'Inicio' },
  { to: '/productos', label: 'Menú' },
  { to: '/sobre-nosotros', label: 'Quiénes Somos' },
  { to: '/contacto', label: 'Contacto' },
];

const Navbar = () => {
  const [abierto, setAbierto] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Cerrar el menú móvil al cambiar de ruta
  const [rutaPrevia, setRutaPrevia] = useState(pathname);
  if (rutaPrevia !== pathname) {
    setRutaPrevia(pathname);
    setAbierto(false);
  }

  useEffect(() => {
    document.body.style.overflow = abierto ? 'hidden' : '';
  }, [abierto]);

  return (
    <header className={`navbar ${scrolled || abierto ? 'navbar-solida' : ''}`}>
      <div className="navbar-inner contenedor">
        <Link to="/" className="navbar-marca" aria-label={`${NEGOCIO.nombre} - Inicio`}>
          <img src={getImagePath('images/logo.webp')} alt="" width={52} height={52} />
          <span>
            <strong>Canela</strong>
            <small>ECU 593 · Bar Restaurante</small>
          </span>
        </Link>

        <nav className={`navbar-menu ${abierto ? 'abierto' : ''}`} aria-label="Principal">
          <ul>
            {LINKS.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.to === '/'} className="navbar-link" onClick={() => setAbierto(false)}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-primario navbar-cta">
            <i className="fab fa-whatsapp"></i> Reservar
          </a>
        </nav>

        <button
          className={`hamburguesa ${abierto ? 'abierto' : ''}`}
          onClick={() => setAbierto(!abierto)}
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={abierto}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
