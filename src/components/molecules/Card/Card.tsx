import React from 'react'
import Icon from '@/components/atoms/Icon/index'

import {
  CardContainer,
  CardTitle,
  CardDescription,
  CardHeader
} from './Card.styled'

type CardProps = {
  icon: string
  title: string
  description: string
}

function Card({ title, description, icon }: CardProps): JSX.Element {
  return (
    <CardContainer>
      <CardHeader>
        <Icon image={icon} />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  )
}

export default Card
