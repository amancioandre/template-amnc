module.exports = {
  purge: ["layouts/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        keyframes: {
            'fade-in-up': {
                "0%": {
                    opacity: '0',
                    transform: 'translateY(10px)'
                },
                "100%": {
                    opacity: '1',
                    transform: 'translateY(0)'
                }
            }
        },
        animation: {
            'fade-in-up': 'fade-in-up 0.5s ease-out'
        },
        colors: {
            'highlight': '#1F2937'
        }
    },
  },
  variants: {
    extend: {
        animation: ['hover']
    },
  },
  plugins: [],
}
