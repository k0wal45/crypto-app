module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
        "primary": "#2563eb",
        "secondary": "#34d399",
        "accent": "#c084fc",
        "neutral": "#4b5563",
        "base-100": "#f3f4f6",
        "info": "#3abff8",
        "success": "#36d399",
        "warning": "#fbbd23",
        "error": "#dc2626",
        },
      },
    ],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['montserrat', 'sans-serif'],
        'montserrat-bold': ['montserrat-bold', 'sans-serif'],
        'montserrat-black': ['montserrat-black', 'sans-serif'],
        'montserrat-light': ['montserrat-light', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}