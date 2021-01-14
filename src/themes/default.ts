import { Theme } from '.'

const colors = {
  primary: '#21262C',
  caribbeanGreen: '#2196f3',
  havelockBlue: '#4689D7',
  background: '#FFFFFF',
  white: '#FFFFFF',
  cardBackground: '#FFFFFF',
  navigationBar: '#4e4b4b',
  footerBackground: '#000'
}

const defaultTheme: Theme = {
  color: {
    ...colors
  },
  button: {
    primary: colors.caribbeanGreen,
    secondary: colors.havelockBlue
  }
}

export default defaultTheme
