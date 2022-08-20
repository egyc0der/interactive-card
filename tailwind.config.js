/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"bg-front": "url('./images/bg-card-front.png')",
				"bg-back": "url('./images/bg-card-back.png')",
				"bg-main-dt": "url('./images/bg-main-desktop.png')",
				"bg-main-mb": "url('./images/bg-main-mobile.png')",
			},
		},
	},
	plugins: [],
};
