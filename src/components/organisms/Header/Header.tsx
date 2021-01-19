import React from 'react'
import {
  HeaderContainer,
  Logo,
  NavbarContainer,
  Menu,
  Container
} from './Header.styled'
import { Sun, Moon } from '@styled-icons/fa-solid' // import Sun and Moon icons
import Switch from 'react-switch'
import styled from '@styled'
import Link from 'next/link'

type HeaderProps = {
  isDark: boolean
  setIsDark: (value: boolean) => void
}

type MenuItem = {
  text: string
  href: string
}

const items: MenuItem[] = [
  { text: 'WELCOME', href: '/' },
  { text: 'ABOUT ME', href: '/about' },
  { text: 'CONTACT ME', href: '/contact' }
]

const NavLink = styled.a`
  font-size: 15px;
  cursor: pointer;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`

function Header({ isDark, setIsDark }: HeaderProps): JSX.Element {
  return (
    <HeaderContainer>
      <NavbarContainer>
        <Menu>
          <ul>
            {items.map(({ href, text }) => {
              return (
                <li key={href}>
                  <Link href={href}>
                    <NavLink>{text}</NavLink>
                  </Link>
                </li>
              )
            })}
          </ul>
        </Menu>
        <Container style={{ background: 'inherit' }}>
          <Switch
            offColor="#666"
            onColor="#666"
            activeBoxShadow={
              isDark ? '0 0 2px 3px #fafafa' : '0 0 2px 3px #303030'
            }
            height={32}
            width={56}
            onHandleColor="#303030"
            offHandleColor="#fafafa"
            uncheckedIcon={
              <Moon color="#F4F1C9" size={21} style={{ margin: '5px 0px' }} />
            }
            checkedIcon={
              <Sun color="yellow" size={23} style={{ margin: '4px 3px' }} />
            }
            onChange={() => setIsDark(!isDark)}
            checked={isDark}
          />
        </Container>
      </NavbarContainer>
    </HeaderContainer>
  )
}

export default Header
