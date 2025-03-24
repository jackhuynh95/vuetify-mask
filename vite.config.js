import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src', // Maps `@` to the `src` directory
    },
  },
  server: {
    port: 8081, // Match your Vue CLI port if needed
  },
  build: {
    target: 'esnext', // Ensure compatibility with modern browsers
    outDir: './dist', // Output directory for the build
    assetsDir: './assets', // Directory for static assets
  },
});