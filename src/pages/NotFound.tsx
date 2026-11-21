import { Link } from 'react-router-dom';
import { getImagePath } from '../utils/paths';

const NotFound = () => (
  <section
    className="page-hero"
    style={{
      minHeight: '100vh',
      alignItems: 'center',
      textAlign: 'center',
      backgroundImage: `url(${getImagePath('images/platos-variados.webp')})`,
    }}
  >
    <div className="contenedor">
      <span className="script">¡Uy! Este plato no está en la carta</span>
      <h1>404</h1>
      <p style={{ margin: '0 auto 32px' }}>La página que buscas no existe, pero el encebollado sí. 😉</p>
      <Link to="/" className="btn btn-primario">
        Volver al inicio
      </Link>
    </div>
  </section>
);

export default NotFound;
