import styled from '@styled'

export const HeaderContainer = styled.div`
  @media (min-width: 768px) {
    height: 10vh;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`

export const Logo = styled.div``

export const Menu = styled.nav`
  ul {
    display: flex;
  }
  @media (min-width: 768px) {
    ul {
      display: flex;
  
      li {
        margin: 20px;
        font-size: 18px;
      }
    }
`

export const ThemeButton = styled.div`
  background: ${props => props.theme.color.cardBackground};
  color: ${props => props.theme.color.primary};
`

export const Container = styled.div`
  width: '100%';
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 30px;
  background: ${props => props.theme.color.background};
`
