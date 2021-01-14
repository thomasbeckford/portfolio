import styled from '@styled'

export const HeaderContainer = styled.div``
export const ChildrenContainer = styled.div`
  width: auto;
  margin: 10px;

  @media (min-width: 768px) {
    margin: 0 150px;
    width: auto;
  }
`
export const FooterContainer = styled.div`
  @media (min-width: 768px) {
    border: none;
  }
`
export const MainContainer = styled.div`
  @media (min-width: 768px) {

  }

  min-height: 100vh;
  background: url('movie.png');
  width: 100%;
  animation: movie infinite;
  animation-duration: .1s;
  animation-direction: alternate;
  animation-name: movie;
}
    
@keyframes movie  {
  0% {
    background position: 0px 0px;
  }
  100% {
    background-position: 60000px 4000px;
  }
}
`
