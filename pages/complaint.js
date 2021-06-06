import Head from 'next/head';

import Header from '@components/header' 
import Footer from '@components/footer'

import ComplainSection from '@sections/complainContainer';

export default function Complaint() {
  return (
    <div>
      <Head>
        <title>Esocial | Contact</title>
        <meta name="description" content="Contact Esocial for any questions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <ComplainSection />
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