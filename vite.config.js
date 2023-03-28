import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	base: '/News-Homepage/',
	plugins: [react()],

	build: {
		rollupOptions: {
			output: {
				sanitizeFileName: true,
			},
		},
	},
})
