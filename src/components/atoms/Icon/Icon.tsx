import React from 'react'
import { IconContainer } from './Icon.styled'

function Icon({ image }: any): JSX.Element {
  return (
    <IconContainer>
      <img src={image} alt="" />
    </IconContainer>
  )
}

export default Icon
