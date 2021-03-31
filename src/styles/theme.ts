export default {
  grid: {
    container: '112rem'
  },

  border: {
    radius: '0.4rem'
  },

  font: {
    fontFamily: "'Poppins', sans-serif",
    normal: 400,
    bold: 600,
    sizes: {
      xxsmall: '0.5rem',
      xsmall: '1rem',
      small: '1.2rem',
      medium: '1.4rem',
      large: '1.6rem',
      xlarge: '1.8rem',
      xxlarge: '2rem'
    }
  },

  colors: {
    background: '#f0f2f5',
    backgroundSecondary: '#e7e9ee',
    shape: '#fff',
    white: '#fff',
    red: '#E52e4D',
    blue: '#5429CC',
    green: '#33CC95',
    greenBackground: '#D1DFD7',
    blueLight: '#6933ff',
    textTitle: '#363F5F',
    textBody: '#969cb3',
    gray: '#d7d7d7'
  },

  spacings: {
    xxsmall: '0.5rem',
    xsmall: '1rem',
    small: '1.2rem',
    medium: '1.4rem',
    large: '1.6rem',
    xlarge: '1.8rem',
    xxlarge: '2rem'
  },

  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  }
} as const
