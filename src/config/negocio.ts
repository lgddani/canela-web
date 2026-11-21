/**
 * Datos del negocio centralizados.
 * Fuentes: TikTok @canelaecu593, Uber Eats y Google Maps (nov. 2026).
 * Lo marcado con "EJEMPLO" no se encontró públicamente y debe confirmarse con el restaurante.
 */
export const NEGOCIO = {
  nombre: 'Canela ECU 593',
  marca: 'CanelaEcu593',
  tipo: 'Bar Restaurante',
  eslogan: 'Con sabor a Ecuador',
  lema: 'Aquí se cocina con amor',
  ubicadoEn: 'Dentro de La Conga',

  direccion: '54 Vincent St',
  ciudad: 'Newark, NJ 07105',
  pais: 'Estados Unidos',
  coords: { lat: 40.7305266, lng: -74.1369578 },

  telefono: '+1 862-346-0512',
  telefonoHref: 'tel:+18623460512',
  // EJEMPLO: se asume que el mismo número tiene WhatsApp
  whatsapp: '18623460512',
  // EJEMPLO: correo no encontrado
  email: 'hola@canelaecu593.com',

  horario: [
    { dias: 'Lunes', horas: '10:00 a. m. – 2:00 a. m.' },
    { dias: 'Martes', horas: 'Cerrado', cerrado: true },
    { dias: 'Miércoles a Domingo', horas: '10:00 a. m. – 2:00 a. m.' },
  ],

  calificaciones: {
    google: { nota: 4.7, total: 28 },
    uberEats: { nota: 4.7, total: 17 },
  },

  redes: {
    tiktok: 'https://www.tiktok.com/@canelaecu593',
    tiktokUser: '@canelaecu593',
    tiktokSeguidores: '8.7K',
    tiktokLikes: '70.1K',
    uberEats: 'https://www.ubereats.com/store/canela-ecu-593-54-vincent-st/w72LHHCSXKSJGx7a-loTHg',
    googleMaps: 'https://maps.app.goo.gl/wwouLeULsWESYMa2A',
    // EJEMPLO: no se encontraron cuentas de Instagram/Facebook
    instagram: 'https://www.instagram.com/',
    facebook: 'https://www.facebook.com/',
  },
};

export const whatsappUrl = (mensaje = '¡Hola Canela! 👋 Quisiera hacer un pedido / reservar una mesa.') =>
  `https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent(mensaje)}`;

export const mapsEmbedUrl = `https://www.google.com/maps?q=${NEGOCIO.coords.lat},${NEGOCIO.coords.lng}&z=17&output=embed`;
