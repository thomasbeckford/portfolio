import React from 'react'
import Link from 'next/link'

import { LinkContainer } from './Link.styled'

interface LinkProps {
  href: string
  text: string
}

function LinkComponent({ href, text }: LinkProps): JSX.Element {
  return (
    <Link href={href}>
      <LinkContainer>{text}</LinkContainer>
    </Link>
  )
}

export default LinkComponent
