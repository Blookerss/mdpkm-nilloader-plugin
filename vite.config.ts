import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { viteExternalsPlugin } from 'vite-plugin-externals';

// https://vitejs.dev/config/
import { id, version } from './src/manifest.json';
export default defineConfig({
    build: {
        lib: {
            name: 'mdpkm NilLoader Plugin',
            entry: 'src/main.ts',
            formats: ['es'],
            fileName: `${id}-${version}.plugin`
        },
        target: 'esnext'
    },
	define: {
		'process.env': {}
	},
    plugins: [
        svgr(),
        react(),
		viteExternalsPlugin({
			react: 'React',
			voxura: 'Voxura',
			i18next: 'i18next',
			'react-dom': 'ReactDOM',
			'voxeliface': 'Voxeliface'
		})
    ]
});