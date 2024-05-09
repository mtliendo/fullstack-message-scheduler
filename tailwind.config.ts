import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	daisyui: {
		themes: [
			{
				dark: {
					...require('daisyui/src/theming/themes')['dark'],
					'base-100': '#17191E',
				},
			},
			'emerald',
		],
	},
	plugins: [daisyui],
}
export default config
