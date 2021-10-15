module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif']
		},
		extend: {
			boxShadow: {
				small: '0 5px 10px rgba(0,0,0,0.12)',
				medium: '0 8px 30px rgba(0,0,0,0.12)',
				large: '0 30px 60px rgba(0,0,0,0.12)'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
