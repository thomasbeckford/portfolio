import React from 'react'

import ListCard from '@/components/organisms/ListCard/index'

import Hero from '@/components/molecules/Hero/index'
import Card from '@/components/molecules/Card/index'

import { HeroServicesContainer } from './HeroServices.styled'

type HeroProps = {
  subTitle?: string
  title: React.ReactNode
  description: React.ReactNode
  icon: string
  buttonText?: string
}

type ItemCard = {
  id: number
  title: string
  description: string
  icon: string
}

type HeroServicesProps = {
  data: HeroProps
  items: ItemCard[]
  inverse?: boolean
}

function HeroServices({ data, items }: HeroServicesProps): JSX.Element {
  return (
    <HeroServicesContainer>
      <Hero {...data} />
      <ListCard
        items={items}
        renderItem={item => {
          return <Card {...item} icon={item.icon} key={item.id} />
        }}
      />
    </HeroServicesContainer>
  )
}

export default HeroServices
