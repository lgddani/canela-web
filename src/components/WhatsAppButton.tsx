import { whatsappUrl } from '../config/negocio';
import './WhatsAppButton.css';

const WhatsAppButton = () => (
  <a
    href={whatsappUrl()}
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-float"
    aria-label="Escríbenos por WhatsApp"
  >
    <i className="fab fa-whatsapp"></i>
    <span className="whatsapp-tooltip">¿Pedido o reserva? ¡Escríbenos!</span>
  </a>
);

export default WhatsAppButton;
