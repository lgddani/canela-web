import type { Plato } from '../data/menu';
import { formatoPrecio } from '../data/menu';
import { whatsappUrl } from '../config/negocio';
import { getImagePath } from '../utils/paths';
import './PlatoCard.css';

interface Props {
  plato: Plato;
  delay?: number;
}

const PlatoCard = ({ plato, delay = 0 }: Props) => (
  <article className="plato-card slide-up" style={{ transitionDelay: `${delay}ms` }}>
    <div className="plato-img">
      <img src={getImagePath(plato.imagen)} alt={plato.nombre} loading="lazy" />
      {plato.etiqueta && <span className="plato-etiqueta">{plato.etiqueta}</span>}
      <span className="plato-precio">{formatoPrecio(plato.precio)}</span>
    </div>
    <div className="plato-body">
      <span className="plato-cat">{plato.categoria}</span>
      <h3>{plato.nombre}</h3>
      <p>{plato.descripcion}</p>
      <a
        href={whatsappUrl(`¡Hola Canela! 😋 Quisiera pedir: ${plato.nombre}.`)}
        target="_blank"
        rel="noopener noreferrer"
        className="plato-btn"
      >
        <i className="fab fa-whatsapp"></i> Pedir ahora
      </a>
    </div>
  </article>
);

export default PlatoCard;
