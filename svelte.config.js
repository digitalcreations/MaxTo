import adapter from '@sveltejs/adapter-static';
import fs from 'fs';

const pkg = JSON.parse(fs.readFileSync(new URL('package.json', import.meta.url), 'utf8'));
fs.writeFileSync('src/lib/version.js', `export default '${pkg.version}';`);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		target: '#svelte',
		adapter: adapter()
	}
};

export default config;
