import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	optimizeDeps: {
		exclude: ['mupdf']
	},
	// build: {
	// 	target: 'esnext'
	// },
	plugins: [tailwindcss(), sveltekit()]
});
