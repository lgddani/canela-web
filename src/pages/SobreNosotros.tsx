import { NEGOCIO } from '../config/negocio';
import { getImagePath } from '../utils/paths';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './SobreNosotros.css';

const VALORES = [
  { icono: 'fas fa-mortar-pestle', titulo: 'Sabor auténtico', texto: 'Recetas tradicionales ecuatorianas, con ingredientes y sazón como en casa.' },
  { icono: 'fas fa-heart', titulo: 'Hecho con amor', texto: 'Nuestro lema no es casualidad: cada plato se prepara con dedicación y cariño.' },
  { icono: 'fas fa-house-chimney', titulo: 'Ambiente familiar', texto: 'Un lugar para compartir con la familia y amigos, con buena música y alegría.' },
  { icono: 'fas fa-hand-holding-heart', titulo: 'Atención de primera', texto: 'Te recibimos con amabilidad y te tratamos como parte de la familia.' },
];

const GALERIA = [
  { src: 'images/interior.webp', alt: 'Interior del restaurante', clase: 'g-alta' },
  { src: 'images/ceviche.webp', alt: 'Ceviche con chifles y tostado', clase: '' },
  { src: 'images/michelada.webp', alt: 'Micheladas de la casa', clase: 'g-alta' },
  { src: 'images/sopa.webp', alt: 'Plato servido en la barra', clase: '' },
  { src: 'images/plato-especial.webp', alt: 'Plato especial de la casa', clase: '' },
  { src: 'images/caldo.webp', alt: 'Caldo tradicional en la barra', clase: 'g-alta' },
  { src: 'images/cerveza.webp', alt: 'Cerveza bien fría', clase: '' },
  { src: 'images/churrasco.webp', alt: 'Churrasco', clase: '' },
  { src: 'images/chaulafan.webp', alt: 'Chaulafán', clase: '' },
];

const SobreNosotros = () => {
  useScrollReveal();

  return (
    <div className="nosotros-page">
      <section className="page-hero" style={{ backgroundImage: `url(${getImagePath('images/bar-equipo.webp')})`, backgroundPosition: 'center 30%' }}>
        <div className="contenedor">
          <span className="script">Quiénes somos</span>
          <h1>Un pedacito de Ecuador en Newark</h1>
          <p>Somos una familia que extrañaba los sabores de su tierra y decidió compartirlos con todos.</p>
        </div>
      </section>

      {/* Historia */}
      <section className="seccion historia">
        <div className="contenedor historia-grid">
          <div className="historia-texto slide-right">
            <span className="script">Nuestra historia</span>
            <h2>
              Nacimos de la nostalgia
              <br />y del amor por nuestra cocina
            </h2>
            <p>
              <strong>Canela ECU 593</strong> nació con una idea sencilla: que ningún ecuatoriano en New Jersey tenga que
              extrañar el sabor de su casa. El “593” es el código de nuestro país, y lo llevamos en el nombre para que
              nunca se nos olvide de dónde venimos.
            </p>
            <p>
              Hoy, dentro de La Conga en el 54 de Vincent St, servimos desde el bolón del desayuno hasta la
              picada familiar de la noche, pasando por encebollados, ceviches, secos y parrilladas. Y los fines de semana,
              los especiales que te transportan directo a la Costa y la Sierra.
            </p>
            <blockquote className="historia-cita">
              “Gracias, trabajamos con amor.”
              <cite>— Respuesta del equipo de Canela a sus clientes</cite>
            </blockquote>
          </div>
          <div className="historia-img slide-left">
            <img src={getImagePath('images/interior.webp')} alt="Salón de Canela ECU 593 con decoración tropical" loading="lazy" />
            <div className="historia-badge">
              <strong>4.7 ★</strong>
              <span>en Google Maps</span>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="seccion valores seccion-oscura">
        <div className="contenedor">
          <div className="seccion-titulo slide-up">
            <span className="script">Lo que nos mueve</span>
            <h2>Nuestros valores</h2>
          </div>
          <div className="valores-grid">
            {VALORES.map((v, i) => (
              <div key={v.titulo} className="valor slide-up" style={{ transitionDelay: `${i * 100}ms` }}>
                <i className={v.icono}></i>
                <h3>{v.titulo}</h3>
                <p>{v.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mision / Vision */}
      <section className="seccion mv textura-papel">
        <div className="contenedor mv-grid">
          <div className="mv-card slide-right">
            <span className="mv-num">01</span>
            <h3>Misión</h3>
            <p>
              Llevar la auténtica gastronomía ecuatoriana a cada mesa de New Jersey, con platos generosos, ingredientes de
              calidad y una atención cálida que haga sentir a cada cliente como en casa.
            </p>
          </div>
          <div className="mv-card slide-left">
            <span className="mv-num">02</span>
            <h3>Visión</h3>
            <p>
              Ser el punto de encuentro favorito de la comunidad ecuatoriana y latina en Newark, reconocido por su sabor,
              su ambiente familiar y por mantener vivas nuestras tradiciones.
            </p>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="seccion galeria">
        <div className="contenedor">
          <div className="seccion-titulo slide-up">
            <span className="script">Así se vive Canela</span>
            <h2>Nuestra galería</h2>
            <div className="tricolor"><span></span><span></span><span></span></div>
          </div>
          <div className="galeria-grid">
            {GALERIA.map((g) => (
              <figure key={g.src} className={`galeria-item zoom-in ${g.clase}`}>
                <img src={getImagePath(g.src)} alt={g.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* TikTok */}
      <section className="tiktok-cta">
        <div className="contenedor tiktok-inner slide-up">
          <i className="fab fa-tiktok"></i>
          <div>
            <h2>Síguenos en TikTok</h2>
            <p>
              Más de <strong>{NEGOCIO.redes.tiktokSeguidores} seguidores</strong> y <strong>{NEGOCIO.redes.tiktokLikes} likes</strong>.
              Mira lo que se cocina cada día.
            </p>
          </div>
          <a href={NEGOCIO.redes.tiktok} target="_blank" rel="noopener noreferrer" className="btn btn-primario">
            {NEGOCIO.redes.tiktokUser}
          </a>
        </div>
      </section>
    </div>
  );
};

export default SobreNosotros;
