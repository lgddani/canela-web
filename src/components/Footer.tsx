import { Link } from 'react-router-dom';
import { NEGOCIO, whatsappUrl } from '../config/negocio';
import { getImagePath } from '../utils/paths';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-tricolor" aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div className="contenedor footer-grid">
      <div className="footer-marca">
        <img src={getImagePath('images/logo.webp')} alt={NEGOCIO.nombre} width={96} height={96} loading="lazy" />
        <p className="footer-lema">{NEGOCIO.lema}</p>
        <p>
          Bar restaurante ecuatoriano en Newark, NJ. {NEGOCIO.ubicadoEn}.
        </p>
      </div>

      <div>
        <h4>Navegación</h4>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Menú</Link></li>
          <li><Link to="/sobre-nosotros">Quiénes Somos</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </div>

      <div>
        <h4>Visítanos</h4>
        <ul className="footer-info">
          <li>
            <i className="fas fa-location-dot"></i>
            <a href={NEGOCIO.redes.googleMaps} target="_blank" rel="noopener noreferrer">
              {NEGOCIO.direccion}, {NEGOCIO.ciudad}
            </a>
          </li>
          <li>
            <i className="fas fa-phone"></i>
            <a href={NEGOCIO.telefonoHref}>{NEGOCIO.telefono}</a>
          </li>
          {NEGOCIO.horario.map((h) => (
            <li key={h.dias}>
              <i className="far fa-clock"></i>
              <span>
                <strong>{h.dias}:</strong> {h.horas}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4>Síguenos y pide</h4>
        <div className="footer-redes">
          <a href={NEGOCIO.redes.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href={NEGOCIO.redes.googleMaps} target="_blank" rel="noopener noreferrer" aria-label="Google Maps">
            <i className="fab fa-google"></i>
          </a>
        </div>
        <a href={NEGOCIO.redes.uberEats} target="_blank" rel="noopener noreferrer" className="footer-uber">
          <i className="fas fa-motorcycle"></i> Pide en Uber Eats
        </a>
      </div>
    </div>
    <div className="footer-bottom contenedor">
      <p>© {new Date().getFullYear()} {NEGOCIO.nombre}. Todos los derechos reservados.</p>
      <p>
        Hecho con ❤️ y sabor ecuatoriano <span className="mini-bandera" aria-hidden="true"></span>
      </p>
    </div>
  </footer>
);

export default Footer;
