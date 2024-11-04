// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add this line to include all files in src folder
  ],
  theme: {
    extend: {
      colors: {
        customYellow: '#ca8a04',
      },
    },
  },
  plugins: [],
};
