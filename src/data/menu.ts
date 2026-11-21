/**
 * Platos y precios REALES tomados del menú de Uber Eats (nov. 2026).
 * Las descripciones son textos de ejemplo redactados para la propuesta.
 * Las fotos son reales (Google Maps del local); la asignación foto → plato es aproximada.
 */
export type Categoria = 'Todos' | 'Platos fuertes' | 'Mariscos' | 'Tradicionales' | 'Bar';

export interface Plato {
  id: string;
  nombre: string;
  precio: number | null; // null = precio a consultar
  categoria: Exclude<Categoria, 'Todos'>;
  descripcion: string;
  imagen: string;
  etiqueta?: string;
}

export const CATEGORIAS: Categoria[] = ['Todos', 'Platos fuertes', 'Mariscos', 'Tradicionales', 'Bar'];

export const PLATOS: Plato[] = [
  {
    id: 'churrasco',
    nombre: 'Churrasco',
    precio: 25,
    categoria: 'Platos fuertes',
    descripcion: 'Carne a la plancha con dos huevos fritos, arroz, papas fritas, aguacate y ensalada fresca.',
    imagen: 'images/churrasco.webp',
    etiqueta: 'Popular',
  },
  {
    id: 'ceviche-mixto',
    nombre: 'Ceviche Mixto',
    precio: 25,
    categoria: 'Mariscos',
    descripcion: 'Camarón y pescado en jugo de limón, cebolla curtida y cilantro. Con chifles y tostado.',
    imagen: 'images/ceviche.webp',
    etiqueta: 'Recomendado',
  },
  {
    id: 'guatita',
    nombre: 'Guatita',
    precio: 22,
    categoria: 'Tradicionales',
    descripcion: 'Clásico ecuatoriano en salsa de maní, con arroz blanco, maduro y curtido de cebolla.',
    imagen: 'images/guatita.webp',
    etiqueta: '#3 más pedido',
  },
  {
    id: 'chuleta',
    nombre: 'Chuleta a la Plancha',
    precio: 20,
    categoria: 'Platos fuertes',
    descripcion: 'Jugosa chuleta de cerdo a la plancha con menestra, arroz, patacones y ensalada.',
    imagen: 'images/chuleta.webp',
    etiqueta: 'Popular',
  },
  {
    id: 'chaulafan',
    nombre: 'Chaulafán',
    precio: 25,
    categoria: 'Tradicionales',
    descripcion: 'Arroz salteado al wok con camarón, pollo, cerdo y huevo, acompañado de maduro frito.',
    imagen: 'images/chaulafan.webp',
    etiqueta: 'Fin de semana',
  },
  {
    id: 'camarones-apanados',
    nombre: 'Camarones Apanados',
    precio: 20,
    categoria: 'Mariscos',
    descripcion: 'Camarones crocantes con papas fritas, salsa de la casa y salsa de tomate.',
    imagen: 'images/camarones-apanados.webp',
  },
  {
    id: 'michelada',
    nombre: 'Micheladas de la Casa',
    precio: null,
    categoria: 'Bar',
    descripcion: 'Escarchadas con chamoy y tajín, bien heladas. El acompañante perfecto para el partido.',
    imagen: 'images/michelada.webp',
    etiqueta: 'Del bar',
  },
];

/** Resumen de la carta completa (precios reales de Uber Eats) para la sección "Más de nuestra carta". */
export const CARTA_RESUMIDA: { titulo: string; items: [string, number][] }[] = [
  {
    titulo: 'Desayunos',
    items: [['Bolón Canela (bistec y huevo)', 17], ['Tigrillo', 15.99], ['Bolón Mixto y Huevo', 14], ['Mote Pillo con Cecina', 30]],
  },
  {
    titulo: 'Tradicionales',
    items: [['Bandera', 25], ['Encebollado', 20], ['Cecina Lojana', 25], ['Seco de Gallina', 20], ['Fritada', 20]],
  },
  {
    titulo: 'Del Mar',
    items: [['Ceviche Levanta Muertos', 35], ['Jalea de Mariscos', 45], ['Sopa de Mariscos', 30], ['Cangrejos Encocados', 35], ['Pargo Frito', 35]],
  },
  {
    titulo: 'Para compartir',
    items: [['Super Picada Familiar', 40], ['Picada Mixta Pequeña', 25], ['Corviche Canela', 9.99], ['Mini Empanadas', 7], ['Salchipapa', 15]],
  },
];

export const formatoPrecio = (p: number | null) => (p === null ? 'Consultar' : `$${p % 1 === 0 ? p : p.toFixed(2)}`);
