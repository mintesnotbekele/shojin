module.exports = {
    content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
    theme: {
      extend: {
        fontFamily: {
          montserrat: ['Montserrat', 'sans-serif'],
        },
        fontSize: {
          base: ['16px', '100%'], // 16px with 100% line height
        },
        letterSpacing: {
          tightest: '0', // 0% letter spacing (can be renamed if needed)
        },
      },
    },
    plugins: [],
  };
  