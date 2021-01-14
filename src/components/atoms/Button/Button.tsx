import React from 'react'

import { ButtonContainer } from './Button.styled'
import { useTheme } from 'emotion-theming'
import { Theme } from '@/themes/index'

type ButtonProps = {
  text: string
  type?: 'primary' | 'secondary'
  outline?: boolean
  isDark?: boolean
}

function Button({
  text,
  type = 'primary',
  isDark,
  outline
}: ButtonProps): JSX.Element {
  const theme = useTheme<Theme>()

  const typeColor = theme.button[type] ?? theme.color.primary
  const backgroundColor = outline ? 'transparent' : typeColor
  const color = '#fff'

  const borderStyle = {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: isDark ? typeColor : '#fff'
  }

  const style = {
    backgroundColor,
    color
  }

  const border = outline ? borderStyle : {}

  return (
    <ButtonContainer style={{ ...style, ...border }}>{text}</ButtonContainer>
  )
}

export default Button
