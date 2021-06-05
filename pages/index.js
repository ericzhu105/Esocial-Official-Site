import Head from 'next/head'

import Header from '@components/header' 
import Main from '@components/main' 
import ImageContainer from '@components/imageContainer' 

import School from '@sections/school' 
import Community from '@sections/community' 
import Ecosystem from '@sections/ecosystem'
import Features from '@sections/features'
import Footer from '@components/footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Esocial | Home Page</title>
        <meta name="description" content="Esocial, learning online" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Main />
        <ImageContainer />
        
        <School />
        <Community />
        <Ecosystem />
        <Features />

        <Footer />
      </main>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}