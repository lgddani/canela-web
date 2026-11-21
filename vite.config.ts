import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Nombre del repositorio en GitHub (https://<usuario>.github.io/<REPO>/)
// Si cambias el nombre del repo, cambia solo esta constante.
const REPO = 'canela'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `/${REPO}/`,
})
