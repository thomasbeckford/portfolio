import React from 'react'
import HeroInfo from '@/components/organisms/HeroInfo/index'
import styled from '@styled'

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
          <p>
            I am a Full Stack Web Developer, based in{' '}
            <span style={{ color: '#3a9fbf' }}>Argentina</span>.
          </p>
          <p>
            National and international customers have relied on me for web
            projects.
          </p>
          <p>
            {' '}
            As a freelancer, I work also with web agencies and startaups, to
            create the best experience for the business.{' '}
          </p>
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

  const MainPageContainer = styled.div`
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      text-align: left;
      padding-top: 50px;

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
          <img alt="thomas" src={'thomas.jpeg'} />
        </MainImage>
      </MainPageContainer>
    </>
  )
}

export default IndexPage
