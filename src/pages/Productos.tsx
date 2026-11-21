import { useState } from 'react';
import PlatoCard from '../components/PlatoCard';
import { CARTA_RESUMIDA, CATEGORIAS, PLATOS, formatoPrecio } from '../data/menu';
import type { Categoria } from '../data/menu';
import { NEGOCIO, whatsappUrl } from '../config/negocio';
import { getImagePath } from '../utils/paths';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Productos.css';

const Productos = () => {
  const [categoria, setCategoria] = useState<Categoria>('Todos');
  useScrollReveal([categoria]);

  const platos = categoria === 'Todos' ? PLATOS : PLATOS.filter((p) => p.categoria === categoria);

  return (
    <div className="productos-page">
      <section className="page-hero" style={{ backgroundImage: `url(${getImagePath('images/platos-variados.webp')})` }}>
        <div className="contenedor">
          <span className="script">Nuestro menú</span>
          <h1>Sabores que cruzan fronteras</h1>
          <p>Una selección de nuestros platos más queridos. Precios en USD, listos para comer aquí, llevar o pedir a domicilio.</p>
        </div>
      </section>

      <section className="seccion productos-lista">
        <div className="contenedor">
          <div className="filtros" role="tablist" aria-label="Categorías del menú">
            {CATEGORIAS.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={categoria === c}
                className={`filtro ${categoria === c ? 'activo' : ''}`}
                onClick={() => setCategoria(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="productos-grid">
            {platos.map((p, i) => (
              <PlatoCard key={p.id} plato={p} delay={(i % 3) * 100} />
            ))}
          </div>
        </div>
      </section>

      <section className="seccion carta textura-papel">
        <div className="contenedor">
          <div className="seccion-titulo slide-up">
            <span className="script">Y mucho más…</span>
            <h2>Más de nuestra carta</h2>
            <p>Desayunos, tradicionales, mariscos y picadas para compartir. ¡Pregunta por el plato que extrañas!</p>
            <div className="tricolor"><span></span><span></span><span></span></div>
          </div>
          <div className="carta-grid">
            {CARTA_RESUMIDA.map((sec, i) => (
              <div key={sec.titulo} className="carta-seccion slide-up" style={{ transitionDelay: `${i * 100}ms` }}>
                <h3>{sec.titulo}</h3>
                <ul>
                  {sec.items.map(([nombre, precio]) => (
                    <li key={nombre}>
                      <span>{nombre}</span>
                      <span className="carta-puntos" aria-hidden="true"></span>
                      <strong>{formatoPrecio(precio)}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pedido-cta">
        <div className="contenedor pedido-inner slide-up">
          <div>
            <span className="script">¿Antojado?</span>
            <h2>Pide ahora y recíbelo calientito</h2>
            <p>Escríbenos por WhatsApp para pedidos para llevar o pide a domicilio por Uber Eats.</p>
          </div>
          <div className="pedido-btns">
            <a href={whatsappUrl('¡Hola Canela! 🍽️ Quisiera hacer un pedido para llevar.')} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <i className="fab fa-whatsapp"></i> Pedir por WhatsApp
            </a>
            <a href={NEGOCIO.redes.uberEats} target="_blank" rel="noopener noreferrer" className="btn btn-primario">
              <i className="fas fa-motorcycle"></i> Uber Eats
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Productos;
