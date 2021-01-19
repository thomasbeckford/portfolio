import styled from '@styled'

export const HeroContainer = styled.div``

export const HeroSubTitle = styled.div`
  font-size: 50px;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 135px;
    font-weight: bold;
  }
`
export const HeroTitle = styled.div`
  font-size: 50px;
  margin-bottom: 0px;
  font-weight: bold;
  line-height: 40px;

  @media (min-width: 768px) {
    font-size: 165px;
    margin-bottom: 0px;
    font-weight: bold;
    line-height: 120px;
    padding-top: 50px;
  }

  animation: opacity-animation 2s forwards;

  @keyframes opacity-animation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
export const HeroDescription = styled.div`
  font-size: 18px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 20px;
    opacity: 70%;
  }
`
