/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			eras: ['ITC Eras']
		},
		extend: {
			colors: {
				aux: 'var(--auxiliar1)',
				white: 'white',
				black: 'black',
				aux2: 'var(--auxiliar2)'
			},

			boxShadow: {
				sombra1: '7px 7px 14px 1px rgba(0,0,0,.2), -7px -7px 20px 0px rgba(255,255,255,.4);',
				sombra2: '3px 3px 6px 1px rgba(0,0,0,.2), -3px -3px 20px 0px rgba(255,255,255,.4);'
			}
		},
		boxShadow: {
			sombra1: '7px 7px 14px 1px rgba(0,0,0,.2), -7px -7px 20px 0px rgba(255,255,255,.4);',
			sombra2: '3px 3px 6px 1px rgba(0,0,0,.2), -3px -3px 20px 0px rgba(255,255,255,.4);'
		}
	},
	plugins: [
		require('tailwindcss-animated')
	]
}
