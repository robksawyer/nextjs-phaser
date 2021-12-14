module.exports = {
  mode: 'jit',
  // corePlugins: {
  //   preflight: false,
  // },

  // If you want to support toggling dark mode manually instead of relying on the operating
  // system preference, use the class strategy instead of the media strategy
  darkMode: 'class',
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        'black-alpha': 'rgba(0,0,0,0.5)',
        current: 'currentColor',
        cyan: '#00ffff',
        discord: '#5865F2',
        purple: {
          58: '#5865F2',
        },
        gray: {
          33: '#333',
          19: '#191919',
          f8: '#F8F2F2',
          dark: '#222',
          darker: '#111',
          light: '#555',
        },
        hotPink: '#C8287A',
        pageBG: 'var(--pageBG)',
        pageText: 'var(--pageText)',
        pink: {
          ff: '#ff4b4b',
          hot: '#C8287A',
        },
        teal: {
          '2c': '#2CFEFE',
        },
        red: {
          fd: '#FD4E50',
        },
        transparent: 'transparent',
        white: '#FFFFFF',
      },
      borderRadius: {
        ms: '0.25rem',
      },
      dropShadow: {
        discord: '0px 4px 12px #5865F2',
        discordHover: '0px 2px 8px #5865F2',
        purple: '0px 4px 12px #5865F2',
        purpleHover: '0px 2px 8px #5865F2',
        hotPink: '0px 4px 12px #C8287A',
        hotPinkHover: '0px 2px 8px #C8287A',
        teal: '0px 4px 12px #2CFEFE',
        tealHover: '0px 2px 8px #2CFEFE',
        red: '0px 0px 3px red',
      },
      fontFamily: {
        sans: ['poppins', 'Helvetica', 'Arial', 'sans-serif'],
        menlo: [
          'Menlo',
          'Monaco',
          'Lucida Console',
          'Liberation Mono',
          'DejaVu Sans Mono',
          'Bitstream Vera Sans Mono',
          'Courier New',
          'monospace',
        ],
      },
      fontSize: {
        xxs: '.625rem',
      },
      gap: {
        6: '-1.5rem',
      },
      height: {
        'screen-1/2': '50vh',
        'screen-1/3': '33vh',
      },
      width: {
        profile: '1200px',
        'screen-1/2': '50vw',
        'screen-1/3': '33vw',
      },
      zIndex: {
        '-1': '-10',
        100: 100,
        50: 50,
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        infinity: 9999999999,
      },
    },
    screens: {
      lg: '1200px',
      md: '940px',
      sm: '768px',
      xl: '1600px',
      xs: '480px',
    },
  },
  plugins: [],
};
