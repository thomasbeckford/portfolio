import React from 'react'

import Hero from '@/components/molecules/Hero/index'

import { HeroInfoContainer } from './HeroInfo.styled'

type HeroProps = {
  subtitle?: React.ReactNode
  title: React.ReactNode
  description: React.ReactNode
}

type HeroInfoProps = {
  data: HeroProps
}

function HeroInfo({ data }: HeroInfoProps): JSX.Element {
  return (
    <HeroInfoContainer>
      <Hero {...data} />
    </HeroInfoContainer>
  )
}

export default HeroInfo
