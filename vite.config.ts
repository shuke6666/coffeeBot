import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';
import mkcert from 'vite-plugin-mkcert';
import UnoCSS from 'unocss/vite'

export default defineConfig({
  base: '/solidjs-template',
  plugins: [
    UnoCSS(),
    solidPlugin(),
    tsconfigPaths(),
    process.env.HTTPS && mkcert(),
  ],
  build: {
    target: 'esnext',
  },
  publicDir: './public',
  server: {
    // Exposes your dev server and makes it accessible for the devices in the same network.
    host: true,
    port:3000
  },
});
