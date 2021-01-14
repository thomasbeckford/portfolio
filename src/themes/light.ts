import { Theme } from '.'
import defaultTheme from './default'

const lightTheme: Theme = {
  ...defaultTheme,
  color: {
    ...defaultTheme.color,
    primary: '#303030',
    background: '#fafafa',
    cardBackground: 'rgba(0, 0, 0, 0.04)',
    footerBackground: '#2196f3'
  }
}

export default lightTheme
