/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1565C0',       // Ocean Blue
        secondary: '#2196F3',     // Soft Blue
        accent: '#81D4FA',        // Aqua Blue
        navbar: '#A8EEFF',        // Fresh Air
        background: '#E3F2FD',    // Light Blue
        darkBackground: '#0A192F',// Deep Navy
        textLight: '#0A192F',     // Deep Navy
        textDark: '#E3F2FD',      // Light Blue
        error: '#D32F2F',         // Red
        success: '#388E3C',       // Green
        neutralBorder: '#90A4AE', // Steel Blue
      },
    },
  },
  plugins: [],
};
