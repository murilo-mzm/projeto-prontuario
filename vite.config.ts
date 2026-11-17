import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Caminhos relativos: sem isto o `dist/` só funciona servido a partir da raiz
  // de um site, e não ao ser aberto direto do pendrive.
  base: './',
  server: { port: 5173, strictPort: false },
  build: {
    // O build portátil junta tudo num arquivo só, então não pode haver
    // pedaços separados nem CSS em arquivo à parte.
    cssCodeSplit: false,
    assetsInlineLimit: 1024 * 1024,
    rollupOptions: {
      output: { inlineDynamicImports: true, manualChunks: undefined },
    },
  },
});
