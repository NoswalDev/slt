import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://noswaldev.github.io',
  	// base: '/slt', //temporarily commented out to run on dev server
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			disable404Route: true, //override default starlight 404
			customCss: [
				'./src/styles/global.css',
				'./src/styles/global_small.css'
			]
		}),
	],
});
