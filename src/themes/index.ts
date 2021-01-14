//Todo: Generate a styled component for the theme https://emotion.sh/docs/typescript
export type Theme = {
  color: {
    primary: string
    caribbeanGreen: string
    havelockBlue: string
    background: string
    white: string
    cardBackground: string
    footerBackground: string
  }
  button: {
    primary: string
    secondary: string
  }
}

export { default as darkTheme } from './dark'
export { default as lightTheme } from './light'
