import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";
// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	integrations: [icon(), tailwind()],
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'zh'],
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: false,
		},
	},
});