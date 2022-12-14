import Head from 'next/head'
import Image from 'next/image'
import Agile from '../components/Agile'
import Career from '../components/Career'
import CaseStudy from '../components/CaseStudy'


import Footer from '../components/footer'
import Header from '../components/header'
import HeroSection from '../components/HeroSection'
import Product from '../components/products/Product'
import Projects from '../components/projects'
import Service from '../components/services/Service'
import WhoWeAre from '../components/WhoWeAre'
import styles from '../styles/Home.module.css'
import Office from '../components/offices/Office'
import Topic from '../components/topics.js/Topic'
import Cinnamon from '../components/Cinnamon'
export default function Home() {
  return (
    <div >
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

     <section className=''>

  
     <Header />
      <HeroSection />
      <Product />
      <Service />
      <Agile />
      <CaseStudy />
      <WhoWeAre />
     <Cinnamon />
      <Career />

      


      <Projects />
      <Office />
    <Topic />
     
 
      <Footer />
      
     </section>
    </div>
  )
}
