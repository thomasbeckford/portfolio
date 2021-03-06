import React from 'react'
import HeroInfo from '@/components/organisms/HeroInfo/index'
import styled from '@styled'
import Texty from 'rc-texty'

const IndexPage = (): JSX.Element => {
  const HomeDescription = styled.div`
    @media (min-width: 768px) {
      font-size: 40px;
      margin-top: 20px;
      line-height: 40px;
    }
    font-size: 20px;
    margin-top: 20px;
    line-height: 25px;
  `

  const heroHeader = {
    data: {
      title: 'Hello.',
      subtitle: 'I am Thomas',
      description: (
        <HomeDescription>
          <Texty interval={20} mode="smooth">
            I am a Full Stack Web Developer, based in Argentina.
          </Texty>
          <Texty interval={20} mode="reverse" className="lightblue">
            National and international customers have relied on me for web
            projects.
          </Texty>
          <Texty interval={20} mode="smooth">
            As a freelancer, I work also with web agencies and startaups, to
            create the best experience for the business.
          </Texty>
        </HomeDescription>
      )
    }
  }

  const MainImage = styled.div`
    @media (min-width: 768px) {
      width: 300px;
      max-height: 300px;
    }
    width: 100%;
    cursor: pointer;
  `

  const Image = styled.img`
    @media (min-width: 768px) {
      width: 300px;
      max-height: 300px;
      border-radius: 20em;
      animation: scaleImage 0.3s 1;

      @keyframes scaleImage {
        0% {
          opacity: 0.1;
          // transform: scale(1);
        }
        50% {
          opacity: 0.5;
          // transform: scale(1.1);
        }
        100% {
          opacity: 1;
          // transform: scale(1);
        }
      }
    }
  `

  const MainPageContainer = styled.div`
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      text-align: left;

      
    }
    padding-top: 10px;
    padding:20px;
    
  }
  `

  // const IntroContainer = styled.div`
  //   position: fixed;
  //   width: 100vw;
  //   height: 100vh;
  //   top: 0;
  //   background: #f5efe1;
  //   z-index: 123456;
  //   left: 0;
  //   animation: 1s linear 1s 1 forwards animated-intro;
  // `
  // const WelcomeMessage = styled.div`
  //   @media (min-width: 768px) {
  //     color: black;
  //     font-size: 150px;
  //     text-align: center;
  //     padding-top: 150px;
  //     margin: 0;
  //     padding: 0;
  //   }
  //   animation: 1s ease-in 1s 1 forwards animated-intro;

  //   color: black;
  //   font-size: 50px;
  //   text-align: center;
  //   padding-top: 150px;
  // `

  return (
    <>
      {/* <IntroContainer>
        <WelcomeMessage>The minimum is my religion</WelcomeMessage>
        <WelcomeMessage>The minimum is my religion</WelcomeMessage>
        <WelcomeMessage>The minimum is my religion</WelcomeMessage>
        <WelcomeMessage>The minimum is my religion</WelcomeMessage>
      </IntroContainer> */}

      <MainPageContainer>
        <div>
          <HeroInfo {...heroHeader} />
        </div>
        <MainImage>
          <Image alt="thomas" src={'thomas.jpeg'} />
        </MainImage>
      </MainPageContainer>
    </>
  )
}

export default IndexPage
