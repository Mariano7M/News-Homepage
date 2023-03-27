import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	base: '/News-Homepage/',
	plugins: [react()],
	resolve: ['.js', '.ts', '.tsx', '.jsx'],
	build: {
		rollupOptions: {
			external: [
				'react', // ignore react stuff
				'react-dom',
			],
		},
	},
})
