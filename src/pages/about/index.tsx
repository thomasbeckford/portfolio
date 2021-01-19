import React from 'react'
import HeroServices from '@/components/organisms/HeroServices/index'
import HeroInfo from '@/components/organisms/HeroInfo/index'
import styled from '@styled'

const AboutPage = (): JSX.Element => {
  const Subtitle = styled.p`
    font-size: 30px;
    margin-top: 10px;
    margin-bottom: 0px;
    padding: 0px;

    @media (min-width: 768px) {
      margin-top: 50px;
      font-size: 60px;
    }
  `

  const heroHeader = {
    data: {
      title: 'About me',
      description: <Subtitle>Main stack</Subtitle>
    }
  }

  const heroServices = {
    data: {
      description: '',
      icon: 'test',
      title: '',
      subtitle: ''
    },
    items: [
      {
        id: 1,
        title: 'Frontend',
        icon: 'front.svg',
        description: `Love to work with React. SSR and CSR applications. (Create React App & NextJS).`
      },
      {
        id: 2,
        title: 'Backend',
        icon: 'back.svg',
        description:
          'Mostly experienced in NodeJS working with Typescript. Express & Fastify frameworks.'
      },
      {
        id: 3,
        title: 'CI/CD',
        icon: 'aws.svg',
        description:
          'For CI/CD Tools I have experience in AWS and Jenkins. Creating pipelines to integrate and deploy.'
      },
      {
        id: 4,
        title: 'Database',
        icon: 'db.svg',
        description:
          'Working with relational and no-relational DBs and the best ORMs.'
      }
    ]
  }

  const ImageDiv = styled.div`
    width: 150px;
    text-align: center;
    img {
      width: 90px;
      cursor: pointer;
      margin: 0px;
      padding: 0px;
    }
    p {
      color: lightblue;
      text-decoration: underline;
    }
    &:hover p {
      transition: 0.3s;
      color: blue;
    }
    &:hover img {
      transition: 1s;
      transform: rotate(360deg);
    }
    @media (min-width: 768px) {
      width: 600px;
      margin: 0 auto;
      font-size: 30px;
      text-align: center;
      cursor: pointer;
      img {
        cursor: pointer;
        width: 150px;
      }
      a:after {
        background: inherit;
      }
    }
  `

  return (
    <>
      <div style={{ display: 'flex' }}>
        <HeroInfo {...heroHeader} />

        <ImageDiv>
          <a href="https://github.com/thomasbeckford">
            <img src="github.jpg" alt="github" />
            <p style={{ margin: '0px', padding: 0 }}>Check my github!</p>
          </a>
        </ImageDiv>
      </div>
      <HeroServices {...heroServices} />
    </>
  )
}

export default AboutPage
