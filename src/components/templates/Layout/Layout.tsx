import React from 'react'
import Header from '@/components/organisms/Header'

import {
  MainContainer,
  HeaderContainer,
  ChildrenContainer
} from './Layout.styled'

interface LayoutProps {
  isDark: boolean
  setIsDark: (value: boolean) => void
  children: React.ReactNode
}

function Layout({ isDark, setIsDark, children }: LayoutProps): JSX.Element {
  return (
    <MainContainer>
      <HeaderContainer>
        <Header isDark={isDark} setIsDark={setIsDark} />
        <ChildrenContainer>{children}</ChildrenContainer>
      </HeaderContainer>
    </MainContainer>
  )
}

export default Layout
