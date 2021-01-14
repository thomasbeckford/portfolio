import React from 'react'

import {
  HeroContainer,
  HeroSubTitle,
  HeroTitle,
  HeroDescription
} from './Hero.styled'

type HeroProps = {
  subtitle?: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
}

function Hero({ title, subtitle, description }: HeroProps): JSX.Element {
  return (
    <HeroContainer>
      {title && <HeroTitle>{title}</HeroTitle>}
      {subtitle && <HeroSubTitle>{subtitle}</HeroSubTitle>}
      {description && <HeroDescription>{description}</HeroDescription>}
    </HeroContainer>
  )
}

export default Hero
