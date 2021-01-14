import React from 'react'
import HeroServices from '@/components/organisms/HeroServices/index'
import HeroInfo from '@/components/organisms/HeroInfo/index'

const AboutPage = (): JSX.Element => {
  const heroHeader = {
    data: {
      title: 'About me',
      description: (
        <div style={{ marginTop: '10px', marginBottom: '0px', padding: '0px' }}>
          Main stack
        </div>
      )
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

  return (
    <>
      <HeroInfo {...heroHeader} />
      <HeroServices {...heroServices} />
    </>
  )
}

export default AboutPage
