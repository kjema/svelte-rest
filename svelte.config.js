import path from 'path';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		files: {
			routes: 'src/pages'
		},
		vite: {
			resolve: {
				alias: {
					// these are the aliases and paths to them
					'~': path.resolve('./'),
					components: path.resolve('./src/components'),
					features: path.resolve('./src/features'),
					pages: path.resolve('./src/pages')
				}
			}
		}
	}
};

export default config;
