import { Theme } from '.'
import defaultTheme from './default'

const darkTheme: Theme = {
  ...defaultTheme,
  color: {
    ...defaultTheme.color,
    primary: '#fafafa',
    background: '#010101',
    cardBackground: 'rgba(255, 255, 255, 0.08)',
    footerBackground: 'rgba(255, 255, 255, 0.08)'
  }
}

export default darkTheme
