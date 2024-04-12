import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import embeds from 'astro-embed/integration';

// https://astro.build/config
export default defineConfig({
	site: 'https://noswaldev.github.io',
	base: '/slt', //set this repo isn't named 'USER.github.io'. Otherwise, repo name must also be prefixed to all page links
	integrations: [
		starlight({
			title: 'MH Test Site', //required
			// logo: {},
			// tableOfContents: {}, //default H2-H3. Right side toc for page contents
			// locales: {}, //for translated labels
			// customCss: [], //custom css imports
			// social: { //displayed on site header
			// 	discord: 'about:blank',
			// },
			// expressiveCode:{}, //modifying theme including dark mode and text fonts
			// pagefind: true, //allow site search bar. default true.
			// head: [], //add site tags for analytics and scripts
			// lastUpdated: false, //shows date of last page update in footer based on git date. default false. can override in frontmatter.
			// pagination: true, //add prev & next in footer. default true. can override in frontmatter.
			// favicon: '', //icon shown in browser tab label. store in public/.
			// titleDelimiter: '|', //title delimiter in browser tab. default '|'.
			// disable404Route: false, //use a custom 404 page. put custom 404 in src/pages/404.astro and set to true. default false.
			// components: { //paths to components for overriding Starlight defaults
			// 	YouTube: './src/components/yt_embed/YouTube.astro',
			// },
			sidebar: [ //sitemap. Left side. Autogenerate also autosorts by alphabet.
				// {
				// 	label: 'Guides',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'Example Guide', link: '/slt/guides/example/' },
				// 	],
				// },
				{
					label: 'Documents',
					autogenerate: { directory: 'docs' },
					badge: { text: 'BETA', variant: 'caution' },
				},
			],
		}),
		embeds()
	],
});
