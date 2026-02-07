import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'DPRK Digital Archive',
			sidebar: [
				{ label: 'Live Media', autogenerate: { directory: 'media' } },
				{ label: 'Software Hub', autogenerate: { directory: 'software' } },
				{ label: 'Transparency', link: '/about/' },
			],
		}),
	],
});
