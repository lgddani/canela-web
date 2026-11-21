import { Link } from 'react-router-dom';
import PlatoCard from '../components/PlatoCard';
import { PLATOS } from '../data/menu';
import { RESENAS } from '../data/resenas';
import { NEGOCIO, whatsappUrl } from '../config/negocio';
import { getImagePath } from '../utils/paths';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Home.css';

const DESTACADOS = ['churrasco', 'ceviche-mixto', 'guatita'];

const CINTA = ['Encebollado', 'Bandera', 'Guatita', 'Ceviche Mixto', 'Churrasco', 'Bolón Canela', 'Cecina Lojana', 'Chaulafán', 'Micheladas'];

const ESPECIALES = ['Encebollado', 'Guatita', 'Caldo de Salchicha', 'Bandera Costeña', 'Sopa de Cangrejo', 'Cangrejos Encocados', 'Arroz con Mariscos', 'Tripa Mishky'];

const Estrellas = () => (
  <span className="estrellas" aria-hidden="true">
    {Array.from({ length: 5 }).map((_, i) => (
      <i key={i} className="fas fa-star"></i>
    ))}
  </span>
);

const Home = () => {
  useScrollReveal();
  const destacados = PLATOS.filter((p) => DESTACADOS.includes(p.id));

  return (
    <div className="home">
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${getImagePath('images/interior.webp')})` }} />
        <div className="contenedor hero-grid">
          <div className="hero-texto">
            <span className="hero-script">
              {NEGOCIO.eslogan} <span className="mini-bandera" aria-hidden="true"></span>
            </span>
            <h1>
              El sabor de casa,
              <br />
              <em>en el corazón</em> de Newark.
            </h1>
            <p>
              Encebollado, bandera, ceviches y parrilla preparados como en Ecuador. Un bar restaurante familiar con buena
              música, micheladas heladas y la sazón que te hace sentir en tu tierra.
            </p>
            <div className="hero-ctas">
              <Link to="/productos" className="btn btn-primario">
                Ver el menú <i className="fas fa-arrow-right"></i>
              </Link>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-contorno">
                <i className="fab fa-whatsapp"></i> Reservar mesa
              </a>
            </div>
            <ul className="hero-ratings">
              <li>
                <Estrellas />
                <span>
                  <strong>{NEGOCIO.calificaciones.google.nota}</strong> en Google
                </span>
              </li>
              <li>
                <Estrellas />
                <span>
                  <strong>{NEGOCIO.calificaciones.uberEats.nota}</strong> en Uber Eats
                </span>
              </li>
              <li>
                <i className="fab fa-tiktok"></i>
                <span>
                  <strong>{NEGOCIO.redes.tiktokLikes}</strong> likes
                </span>
              </li>
            </ul>
          </div>
          <div className="hero-logo">
            <img src={getImagePath('images/logo.webp')} alt={`Logo ${NEGOCIO.nombre}`} width={420} height={420} />
          </div>
        </div>
        <a href="#nosotros" className="hero-scroll" aria-label="Bajar">
          <span></span>
        </a>
      </section>

      {/* ===== CINTA ===== */}
      <div className="cinta" aria-hidden="true">
        <div className="cinta-track">
          {[...CINTA, ...CINTA].map((c, i) => (
            <span key={i}>
              {c} <i className="fas fa-star"></i>
            </span>
          ))}
        </div>
      </div>

      {/* ===== INTRO ===== */}
      <section id="nosotros" className="seccion intro textura-papel">
        <div className="contenedor intro-grid">
          <div className="intro-fotos slide-right">
            <img className="intro-foto-1" src={getImagePath('images/chuleta.webp')} alt="Chuleta a la plancha con menestra y patacones" loading="lazy" />
            <img className="intro-foto-2" src={getImagePath('images/bar-equipo.webp')} alt="Nuestro equipo en el bar" loading="lazy" />
            <div className="intro-sello">
              <span>{NEGOCIO.ubicadoEn}</span>
            </div>
          </div>
          <div className="intro-texto slide-left">
            <span className="script">{NEGOCIO.lema}</span>
            <h2>Cocina ecuatoriana de verdad, servida con cariño</h2>
            <p>
              En Canela ECU 593 cada plato lleva el sabor de nuestras abuelas: el encebollado de la mañana, la bandera
              bien servida, los ceviches frescos y la parrilla al punto. Estamos en el 54 de Vincent St, dentro de La
              Conga, para que vengas en familia, con amigos o a ver el partido.
            </p>
            <ul className="intro-features">
              <li>
                <i className="fas fa-heart"></i>
                <div>
                  <strong>Sazón de casa</strong>
                  <span>Recetas tradicionales de la Costa y la Sierra.</span>
                </div>
              </li>
              <li>
                <i className="fas fa-people-group"></i>
                <div>
                  <strong>Ambiente familiar</strong>
                  <span>Buena música, buena atención y espacio para todos.</span>
                </div>
              </li>
              <li>
                <i className="fas fa-champagne-glasses"></i>
                <div>
                  <strong>Bar completo</strong>
                  <span>Micheladas, cervezas bien frías y cócteles.</span>
                </div>
              </li>
            </ul>
            <Link to="/sobre-nosotros" className="btn btn-contorno-oscuro">
              Conoce nuestra historia
            </Link>
          </div>
        </div>
      </section>

      {/* ===== DESTACADOS ===== */}
      <section className="seccion destacados">
        <div className="contenedor">
          <div className="seccion-titulo slide-up">
            <span className="script">Los favoritos de la casa</span>
            <h2>Platos que nos piden una y otra vez</h2>
            <div className="tricolor"><span></span><span></span><span></span></div>
          </div>
          <div className="destacados-grid">
            {destacados.map((p, i) => (
              <PlatoCard key={p.id} plato={p} delay={i * 120} />
            ))}
          </div>
          <div className="destacados-cta slide-up">
            <Link to="/productos" className="btn btn-canela">
              Ver todo el menú <i className="fas fa-utensils"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ESPECIALES FIN DE SEMANA ===== */}
      <section className="especiales">
        <div className="especiales-img" style={{ backgroundImage: `url(${getImagePath('images/platos-variados.webp')})` }} />
        <div className="especiales-card slide-up">
          <span className="especiales-badge">Sáb · Dom</span>
          <span className="script">Solo los fines de semana</span>
          <h2>Especiales de Fin de Semana</h2>
          <p>Los sabores que esperas toda la semana. ¡Llega temprano porque vuelan!</p>
          <ul>
            {ESPECIALES.map((e) => (
              <li key={e}>
                <i className="fas fa-check"></i> {e}
              </li>
            ))}
          </ul>
          <a
            href={whatsappUrl('¡Hola Canela! 🙌 ¿Qué especiales tienen este fin de semana?')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primario"
          >
            <i className="fab fa-whatsapp"></i> Pregunta por los especiales
          </a>
        </div>
      </section>

      {/* ===== NUMEROS ===== */}
      <section className="numeros">
        <div className="contenedor numeros-grid">
          <div className="numero scale-up">
            <strong>4.7<small>★</small></strong>
            <span>Calificación en Google</span>
          </div>
          <div className="numero scale-up" style={{ transitionDelay: '100ms' }}>
            <strong>70K<small>+</small></strong>
            <span>Likes en TikTok</span>
          </div>
          <div className="numero scale-up" style={{ transitionDelay: '200ms' }}>
            <strong>60<small>+</small></strong>
            <span>Platos en la carta</span>
          </div>
          <div className="numero scale-up" style={{ transitionDelay: '300ms' }}>
            <strong>2<small>am</small></strong>
            <span>Abiertos hasta tarde</span>
          </div>
        </div>
      </section>

      {/* ===== RESEÑAS ===== */}
      <section className="seccion resenas seccion-oscura">
        <div className="contenedor">
          <div className="seccion-titulo slide-up">
            <span className="script">Lo que dicen de nosotros</span>
            <h2>Nuestros clientes hablan por nosotros</h2>
            <p>
              <strong>{NEGOCIO.calificaciones.google.nota} ★</strong> con {NEGOCIO.calificaciones.google.total} reseñas en
              Google Maps
            </p>
          </div>
          <div className="resenas-grid">
            {RESENAS.slice(0, 4).map((r, i) => (
              <figure key={r.autor} className="resena slide-up" style={{ transitionDelay: `${i * 100}ms` }}>
                <Estrellas />
                <blockquote>“{r.texto}”</blockquote>
                <figcaption>
                  <span className="resena-avatar">{r.autor.charAt(0)}</span>
                  <span>
                    <strong>{r.autor}</strong>
                    <small>
                      <i className={r.fuente === 'Google' ? 'fab fa-google' : 'fas fa-motorcycle'}></i> Reseña en {r.fuente}
                    </small>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA VISITA ===== */}
      <section className="seccion visita textura-papel">
        <div className="contenedor visita-grid">
          <div className="visita-texto slide-right">
            <span className="script">Te esperamos</span>
            <h2>Ven a comer como en Ecuador</h2>
            <ul className="visita-datos">
              <li>
                <i className="fas fa-location-dot"></i>
                <div>
                  <strong>{NEGOCIO.direccion}</strong>
                  <span>
                    {NEGOCIO.ciudad} · {NEGOCIO.ubicadoEn}
                  </span>
                </div>
              </li>
              <li>
                <i className="far fa-clock"></i>
                <div>
                  {NEGOCIO.horario.map((h) => (
                    <span key={h.dias} className={h.cerrado ? 'cerrado' : ''}>
                      <strong>{h.dias}:</strong> {h.horas}
                    </span>
                  ))}
                </div>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <div>
                  <a href={NEGOCIO.telefonoHref}>
                    <strong>{NEGOCIO.telefono}</strong>
                  </a>
                  <span>Pedidos y reservaciones</span>
                </div>
              </li>
            </ul>
            <div className="visita-ctas">
              <a href={NEGOCIO.redes.googleMaps} target="_blank" rel="noopener noreferrer" className="btn btn-canela">
                <i className="fas fa-diamond-turn-right"></i> Cómo llegar
              </a>
              <a href={NEGOCIO.redes.uberEats} target="_blank" rel="noopener noreferrer" className="btn btn-uber">
                <i className="fas fa-motorcycle"></i> Pedir en Uber Eats
              </a>
            </div>
          </div>
          <div className="visita-flyer slide-left">
            <img src={getImagePath('images/flyer.webp')} alt="Canela ECU 593 - Bar Restaurante - Dentro de La Conga" loading="lazy" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
