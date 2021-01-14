import styled from '@styled'

type HeroInfoContainerProps = {
  inverse?: boolean
}

export const HeroInfoContainer = styled.div<HeroInfoContainerProps>`
  width: 100%;
  margin: 0 auto;
  color: ${props => props.theme.color.primary};
  align-self: center;
  @media (min-width: 768px) {
    width: 100%;
    color: ${props => props.theme.color.primary};
  }
`

export const Image = styled.div``
