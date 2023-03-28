import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import resolve from '@rollup/plugin-node-resolve'

export default defineConfig({
	base: '/News-Homepage/',
	plugins: [
		react(),
		resolve({
			extensions: ['.js', '.ts', '.jsx', '.tsx'],
		}),
	],
})
