import Head from 'next/head'
import Image from 'next/image'
import Agile from '../components/Agile'
import Barnahus from '../components/barnahus'
import Career from '../components/Career'
import CaseStudy from '../components/CaseStudy'

import Community from '../components/community'
import Engage from '../components/engage'
import Footer from '../components/footer'
import Header from '../components/header'
import HeroSection from '../components/HeroSection'
import Managing from '../components/managing'
import Mauritius from '../components/mauritius'
import Mffais from '../components/mffais'
import Optimize from '../components/optimize'
import Ping from '../components/ping'
import Procrastination from '../components/procastination'
import Product from '../components/products/Product'
import Projects from '../components/projects'
import Rooms from '../components/rooms'
import Service from '../components/services/Service'
import Solutions from '../components/solutions'
import Stake from '../components/stake'
import Tabs from '../components/tabs'
import WhoWeAre from '../components/WhoWeAre'
import styles from '../styles/Home.module.css'
import Office from '../components/offices/Office'
import Topic from '../components/topics.js/Topic'
export default function Home() {
  return (
    <div >
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

     <section>

  
     <Header />
      <HeroSection />
      <Product />
      <Service />
      <Agile />
      <CaseStudy />
      <WhoWeAre />
     
      <Career />

      


      <Projects />
      <Office />
    <Topic />
     
 
      <Footer />
      
     </section>
    </div>
  )
}