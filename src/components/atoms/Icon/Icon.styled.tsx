import styled from '@styled'

export const IconContainer = styled.div`
  border-radius: 20px;
  width: 80px;

  animation: move 2s infinite forwards;
  animation-iteration-count: 1;

  @keyframes move{
    0% {transform: scale(1)}
    50% {transform: scale(1.2)}
    0% {transform: scale(1)}
  }
  }
`
