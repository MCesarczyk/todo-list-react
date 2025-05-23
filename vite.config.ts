/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import eslint from 'vite-plugin-eslint';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    eslint({
      cache: false,
      include: ['./src/**/*.js', './src/**/*.jsx'],
      exclude: [],
    }),
    svgr({ svgrOptions: { icon: true } }),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, '/src'),
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    open: true,
    hmr: {
      overlay: true,
    },
  },
  define: {
    'process.env': {},
  },
  build: {
    outDir: 'build',
  },
});
