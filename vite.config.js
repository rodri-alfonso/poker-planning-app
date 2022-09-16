import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import tailwindcss from 'tailwindcss'

export default defineConfig({
	plugins: [preact(), tailwindcss()],
})
