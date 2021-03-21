export default {
  border: {
    radius: '0.5rem'
  },

  font: {
    fontFamily: "'Poppins', sans-serif",
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1rem',
      small: '1.5rem',
      medium: '2rem',
      large: '2.5rem',
      xlarge: '3rem',
      xxlarge: '3.5rem'
    }
  },

  colors: {
    background: '#f0f2f5',
    shape: '#fff',
    red: '#E52e4D',
    blue: '#5429CC',
    green: '#33CC95',
    blueLight: '#6933ff',
    textTitle: '#363F5F',
    textBody: '#969cb3'
  },

  spacings: {
    xsmall: '1rem',
    small: '1.5rem',
    medium: '2rem',
    large: '2.5rem',
    xlarge: '3rem',
    xxlarge: '3.5rem'
  },

  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  }
} as const
