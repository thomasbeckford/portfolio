import React from 'react'
import HeroInfo from '@/components/organisms/HeroInfo/index'
import styled from '@styled'
import Texty from 'rc-texty'

const AboutPage = (): JSX.Element => {
  const LetsTalk = styled.a`
    &:after {
      bottom: 5px;
      height: 5px;
      background: blue;
    }
    &:hover:after {
      background: blue;
    }
    @media (min-width: 768px) {
      margin: 0;
      padding: 0;

      &:after {
        bottom: 20px;
        height: 15px;
        background: blue;
      }
      &:hover:after {
        background: blue;
      }
    }
    color: blue;
    margin: 0;
    padding: 0;
  `

  const ArrowDown = styled.div`
    animation: bounce 3s infinite;
    fill: ${props => props.theme.color.primary};
    transform: rotate(20deg);
    bottom: 5%;
    @keyframes bounce {
      0%,
      20%,
      50%,
      80%,
      100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-30px);
      }
      60% {
        transform: translateY(-15px);
      }
    }
  `
  const ContactTitle = styled.div`
    @media (min-width: 768px) {
      line-height: 160px;
    }
    line-height: 60px;
  `

  const heroHeader = {
    data: {
      title: <ContactTitle>Are you minding a project?</ContactTitle>,
      subtitle: (
        <>
          <LetsTalk href="mailto:tebeckford@gmail.com">Let's Talk</LetsTalk>
          <ArrowDown>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              viewBox="0 0 24 24"
            >
              <a href="mailto:tebeckford@gmail.com">
                <path d="M21 14.655l-5.799.908 3.393 6.917-3.111 1.52-3.413-6.982-4.07 3.651v-15.857l13 9.843m-12.792-10.905l-1.042.519-1.536-3.087 1.043-.519 1.535 3.087zm2.599-3.577l-1.152-.173-.513 3.409 1.152.173.513-3.409zm-4.779 5.848l.557-1.023-3.028-1.648-.557 1.023 3.028 1.648z" />
              </a>
            </svg>
          </ArrowDown>
        </>
      ),
      description: null
    }
  }

  return (
    <>
      <HeroInfo {...heroHeader} />
    </>
  )
}

export default AboutPage
