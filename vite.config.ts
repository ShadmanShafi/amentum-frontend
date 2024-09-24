import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// import { visualizer } from 'rollup-plugin-visualizer';
import { VitePWA } from 'vite-plugin-pwa';
import compression from 'vite-plugin-compression';
import eslint from 'vite-plugin-eslint';
import checker from 'vite-plugin-checker';
import postcssPreset from 'postcss-preset-env';
import sassVar2JSON from './scripts/sass-to-json';
import path from 'path';

const theme = sassVar2JSON();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint(),
    compression(),
    !process.env.VITEST ? checker({ typescript: true }) : undefined,
    // process.env.ANALYZER
    //   ? visualizer({
    //       gzipSize: true,
    //     })
    //   : null,
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: ['**/*.{js,css,html,ico,jpg,png,svg,gif,webmanifest}'],
      },
      includeAssets: ['**/*.{png}'],
      manifest: {
        name: 'React App',
        start_url: '/',
        short_name: 'React App',
        description: 'React Antd Typescript Starter',
        theme_color: '#00b96b',
        icons: [
          {
            src: 'icons/192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        screenshots: [
          {
            src: 'icons/screenshot_320x320.png',
            sizes: '320x320',
            type: 'image/png',
            form_factor: 'narrow',
          },
          {
            src: 'icons/screenshot_1024x593.png',
            sizes: '1024x593',
            type: 'image/png',
            form_factor: 'wide',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    postcss: {
      plugins: [postcssPreset()],
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    sourcemap: true,
    outDir: 'dist',
  },
  define: {
    $__THEME__$: theme,
    'process.env': {},
  },
});
