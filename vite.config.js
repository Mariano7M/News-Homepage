import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
	base: '/News-Homepage/',
	plugins: [react()],
	resolve: {
		alias: {
			src: path.resolve('src/'),
		},
	},
})
