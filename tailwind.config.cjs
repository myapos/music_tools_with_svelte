/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		listStyleType: {
			none: 'none',
			disc: 'disc',
			decimal: 'decimal',
			square: 'square',
			'lower-roman': 'lower-roman',
			'upper-roman': 'upper-roman'
		},
		extend: {
			colors: {
				'tuner-color': '#a92525',
				tuned: '#ebbf31ab'
			}
		},
		screens: {
			sm: { max: '640px' },
			// => @media (min-width: 640px) { ... }

			md: { max: '768px' },
			// => @media (min-width: 768px) { ... }

			lg: { max: '1024px' },
			// => @media (min-width: 1024px) { ... }

			xl: { max: '1280px' },
			// => @media (min-width: 1280px) { ... }

			'2xl': { max: '1536px' }
			// => @media (min-width: 1536px) { ... }
		}
	},
	plugins: []
};
