/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			maxHeight: {
				128: '30rem',
			},
			width: {
				18: '24rem',
			},
		},
	},
	plugins: [],
}
