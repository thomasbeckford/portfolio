import styled from '@styled'

type ListCardContainerProps = {
  fullSize?: boolean
}

export const ListCardContainer = styled.div<ListCardContainerProps>`
  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
`
