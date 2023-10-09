/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'team-background': "url('/src/assets/team-background.png')",
        'feedback-background': "url('/src/assets/feedback-background.png')",
        'banner-background': "url('/src/assets/banner.png')",
      }
    },
  },
  plugins: [require("daisyui")],
}