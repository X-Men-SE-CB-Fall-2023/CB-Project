/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				white: "#FFFFFF",
				yellow: "#FFF600",
				green: "#14DF28",
			},
		},
	},
	plugins: [],
}
