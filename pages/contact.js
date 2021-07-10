import Head from 'next/head';

import Header from '@components/header' 
import Footer from '@components/footer'

import ContactSection from '@sections/contactContainer';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Esocial | Contact</title>
        <meta name="description" content="Contact Esocial for any questions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <ContactSection />
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