module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    neumorphismColor: {
      red: {
        100: '#FBEBE9',
        200: '#F5CEC7'
      },
      gray: {
        100: '#455781',
        900: '#1A2744'
      },
      white: {
        100: '#EAECF4',
        50: '#fff'
      },
      yellow: {
        100: '#FFF47D'
      }
    },
    neumorphismSize: {
      xs: '0.05em',
      sm: '0.1em',
      default: '0.2em',
      lg: '0.4em',
      xl: '0.8em'
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT:
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md:
        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg:
        '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl:
        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',

      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none'
    },

    truncate: {
      lines: {
        3: '3',
        5: '5',
        8: '8'
      }
    },
    zIndex: {
      '0': ' 0',
      '10': '10',
      '20': '20',
      '30': '30',
      '40': '40',
      '50': '50',
      '25': '25',
      '75': '75',
      '100': '100',
      auto: 'auto',
      '-10': '-10',
      '-30': '-30'
    },
    extend: {},
    animation: {
      none: 'none',
      spin: 'spin 1s linear infinite',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      bounce: 'bounce 1s infinite',
      arrowr: 'arrowr 3s ease-in-out infinite',
      wiggle: 'wiggle 1s ease-in-out infinite'
    },
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },

        '50%': { transform: 'rotate(3deg)' }
      }
    }
  },
  variants: {
    neumorphismFlat: ['responsive', 'focus', 'active'],
    neumorphismConcave: ['responsive', 'focus', 'active'],
    neumorphismConvex: ['responsive', 'hover', 'focus', 'active'],
    neumorphismInset: ['focus', 'active'],
    extend: {
      boxShadow: ['active']
    }
  },
  plugins: [
    require('tailwindcss-truncate-multiline')(['responsive', 'hover']),
    require('tailwindcss-neumorphism'),
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar-hide')
  ]
};
