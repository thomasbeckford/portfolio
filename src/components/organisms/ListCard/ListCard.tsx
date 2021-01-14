import React from 'react'
import { ListCardContainer } from './ListCard.styled'

type ItemCard = {
  id: number
  title: string
  jobPosition?: string
  description: string
  icon: string
}

type ListCardProps = {
  items: ItemCard[]
  renderItem: (item: ItemCard) => JSX.Element
}

function ListCard({ items, renderItem }: ListCardProps): JSX.Element {
  return (
    <ListCardContainer>{items.map(item => renderItem(item))}</ListCardContainer>
  )
}

export default ListCard
