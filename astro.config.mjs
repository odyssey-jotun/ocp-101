// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://odyssey-jotun.github.io',
  base: '/ocp-101',
  trailingSlash: 'always',
  integrations: [react()],
  vite: { plugins: [tailwindcss()] },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Instrument Serif',
      cssVariable: '--font-instrument',
      weights: [400],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['Helvetica Neue', 'Arial', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
  ],
});
