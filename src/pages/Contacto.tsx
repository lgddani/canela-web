import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { NEGOCIO, mapsEmbedUrl, whatsappUrl } from '../config/negocio';
import { getImagePath } from '../utils/paths';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Contacto.css';

// iziToast se carga desde index.html
declare const iziToast: {
  warning: (o: object) => void;
  error: (o: object) => void;
  success: (o: object) => void;
};

const INICIAL = { nombre: '', telefono: '', motivo: 'Reservar una mesa', personas: '2', fecha: '', mensaje: '' };

const Contacto = () => {
  useScrollReveal();
  const [form, setForm] = useState(INICIAL);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    let { value } = e.target;
    if (name === 'nombre') value = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]/g, '');
    if (name === 'telefono') value = value.replace(/[^\d+\s()-]/g, '').slice(0, 18);
    setForm({ ...form, [name]: value });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const aviso = (message: string) => iziToast.warning({ title: 'Falta un dato', message, position: 'topRight' });

    if (form.nombre.trim().length < 3) return aviso('Escribe tu nombre (mínimo 3 letras).');
    if (form.telefono.replace(/\D/g, '').length < 10) return aviso('Escribe un teléfono válido de al menos 10 dígitos.');
    if (form.motivo === 'Reservar una mesa' && !form.fecha) return aviso('Elige la fecha y hora de tu reserva.');

    const fecha = form.fecha
      ? new Date(form.fecha).toLocaleString('es-US', { weekday: 'long', day: 'numeric', month: 'long', hour: 'numeric', minute: '2-digit' })
      : '';

    const lineas = [
      `¡Hola Canela! 👋 Soy *${form.nombre.trim()}*.`,
      `Motivo: ${form.motivo}`,
      form.motivo === 'Reservar una mesa' ? `Personas: ${form.personas}` : '',
      fecha ? `Fecha: ${fecha}` : '',
      `Teléfono: ${form.telefono}`,
      form.mensaje.trim() ? `Mensaje: ${form.mensaje.trim()}` : '',
    ].filter(Boolean);

    window.open(whatsappUrl(lineas.join('\n')), '_blank', 'noopener');
    iziToast.success({ title: '¡Listo!', message: 'Te llevamos a WhatsApp para confirmar.', position: 'topRight' });
    setForm(INICIAL);
  };

  const esReserva = form.motivo === 'Reservar una mesa';

  return (
    <div className="contacto-page">
      <section className="page-hero" style={{ backgroundImage: `url(${getImagePath('images/interior.webp')})` }}>
        <div className="contenedor">
          <span className="script">Contáctanos</span>
          <h1>Reserva tu mesa</h1>
          <p>Escríbenos para reservas, pedidos para llevar, eventos o cualquier consulta. ¡Te respondemos rapidito!</p>
        </div>
      </section>

      <section className="seccion contacto-main">
        <div className="contenedor contacto-grid">
          {/* Info */}
          <aside className="contacto-info slide-right">
            <h2>Información</h2>
            <p className="contacto-sub">Estamos dentro de La Conga, en el barrio Ironbound de Newark.</p>

            <ul className="info-lista">
              <li>
                <i className="fas fa-location-dot"></i>
                <div>
                  <span>Dirección</span>
                  <a href={NEGOCIO.redes.googleMaps} target="_blank" rel="noopener noreferrer">
                    {NEGOCIO.direccion}, {NEGOCIO.ciudad}
                  </a>
                </div>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <div>
                  <span>Teléfono</span>
                  <a href={NEGOCIO.telefonoHref}>{NEGOCIO.telefono}</a>
                </div>
              </li>
              <li>
                <i className="fab fa-whatsapp"></i>
                <div>
                  <span>WhatsApp</span>
                  <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                    Escríbenos aquí
                  </a>
                </div>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <div>
                  <span>Correo</span>
                  <a href={`mailto:${NEGOCIO.email}`}>{NEGOCIO.email}</a>
                </div>
              </li>
            </ul>

            <div className="horario-card">
              <h3>
                <i className="far fa-clock"></i> Horario
              </h3>
              {NEGOCIO.horario.map((h) => (
                <div key={h.dias} className={`horario-fila ${h.cerrado ? 'cerrado' : ''}`}>
                  <span>{h.dias}</span>
                  <strong>{h.horas}</strong>
                </div>
              ))}
            </div>

            <div className="contacto-redes">
              <a href={NEGOCIO.redes.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href={NEGOCIO.redes.uberEats} target="_blank" rel="noopener noreferrer" aria-label="Uber Eats">
                <i className="fas fa-motorcycle"></i>
              </a>
              <a href={NEGOCIO.redes.googleMaps} target="_blank" rel="noopener noreferrer" aria-label="Google Maps">
                <i className="fab fa-google"></i>
              </a>
            </div>
          </aside>

          {/* Formulario */}
          <form className="contacto-form slide-left" onSubmit={onSubmit} noValidate>
            <h2>Escríbenos</h2>
            <p className="contacto-sub">Completa el formulario y te enviamos directo a WhatsApp para confirmar.</p>

            <div className="campo-fila">
              <label className="campo">
                <span>Nombre *</span>
                <input name="nombre" value={form.nombre} onChange={onChange} placeholder="Tu nombre" autoComplete="name" />
              </label>
              <label className="campo">
                <span>Teléfono *</span>
                <input name="telefono" value={form.telefono} onChange={onChange} placeholder="(862) 000-0000" inputMode="tel" autoComplete="tel" />
              </label>
            </div>

            <label className="campo">
              <span>¿En qué te ayudamos?</span>
              <select name="motivo" value={form.motivo} onChange={onChange}>
                <option>Reservar una mesa</option>
                <option>Pedido para llevar</option>
                <option>Evento o celebración</option>
                <option>Otra consulta</option>
              </select>
            </label>

            {esReserva && (
              <div className="campo-fila">
                <label className="campo">
                  <span>Personas</span>
                  <select name="personas" value={form.personas} onChange={onChange}>
                    {['1', '2', '3', '4', '5', '6', '7', '8', '10+'].map((n) => (
                      <option key={n}>{n}</option>
                    ))}
                  </select>
                </label>
                <label className="campo">
                  <span>Fecha y hora *</span>
                  <input type="datetime-local" name="fecha" value={form.fecha} onChange={onChange} />
                </label>
              </div>
            )}

            <label className="campo">
              <span>Mensaje</span>
              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={onChange}
                rows={4}
                placeholder={esReserva ? 'Ej: Es un cumpleaños, ¿pueden ponernos cerca de la pantalla?' : 'Cuéntanos qué necesitas'}
              />
            </label>

            <button type="submit" className="btn btn-whatsapp btn-enviar">
              <i className="fab fa-whatsapp"></i> Enviar por WhatsApp
            </button>
          </form>
        </div>
      </section>

      <section className="mapa">
        <iframe
          title={`Mapa de ${NEGOCIO.nombre}`}
          src={mapsEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>
    </div>
  );
};

export default Contacto;
