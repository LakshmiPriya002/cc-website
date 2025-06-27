// pages/index.js
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Crestcode | Innovative Web Solutions</title>
        <meta name="description" content="Crestcode - We build innovative, scalable digital solutions." />
      </Head>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
