# Canela ECU 593 — Web propuesta

Sitio en React + Vite + TypeScript para **Canela ECU 593 (Bar Restaurante ecuatoriano, Newark NJ)**.
Es una maqueta comercial para presentar al restaurante.

Páginas: **Inicio · Menú (productos) · Quiénes Somos · Contacto**.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:5173/canela/
```

## Publicar en GitHub Pages

1. Crea un repo en GitHub llamado **`canela`** (si usas otro nombre, cámbialo en `vite.config.ts` → `REPO`).
2. Inicializa y sube:

```bash
git init
git add .
git commit -m "Web Canela ECU 593"
git branch -M main
git remote add origin https://github.com/<TU_USUARIO>/canela.git
git push -u origin main
npm run deploy     # build + publica /dist en la rama gh-pages
```

3. En GitHub → Settings → Pages → Branch: `gh-pages` / root.
4. Queda en `https://<TU_USUARIO>.github.io/canela/`.

> Si tu usuario no es `lgddani`, cambia también la URL de `og:image` en `index.html`.

## Dónde editar los datos

| Qué | Archivo |
| --- | --- |
| Teléfono, WhatsApp, horario, dirección, redes | `src/config/negocio.ts` |
| Platos destacados y carta resumida | `src/data/menu.ts` |
| Reseñas | `src/data/resenas.ts` |
| Fotos | `public/images/` |

## Datos reales vs. de ejemplo

**Reales** (TikTok @canelaecu593, Uber Eats, Google Maps — nov. 2026):
nombre, logo, flyer, dirección (54 Vincent St, Newark NJ 07105, dentro de La Conga), teléfono,
horario (10 a. m.–2 a. m., martes cerrado), calificaciones (4.7 Google / 28 reseñas, 4.7 Uber Eats),
estadísticas de TikTok, nombres y precios de los platos, reseñas de clientes, todas las fotos.

**De ejemplo / a confirmar**: WhatsApp (se asume el mismo número), correo, descripciones de los platos,
historia, misión, visión y valores, precio de micheladas, días exactos de los especiales de fin de semana,
y la asignación de algunas fotos a platos (p. ej. guatita).
