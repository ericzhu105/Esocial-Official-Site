import Head from 'next/head'

import Header from '@components/header' 
import Footer from '@components/footer'

import WorkAtEsocial from '@sections/work'
import AllJobs from '@sections/allJobs'

export default function Work() {
  return (
    <div>
      <Head>
        <title>Esocial | Careers</title>
        <meta name="description" content="Work At Esocial" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <WorkAtEsocial />
        <AllJobs />
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