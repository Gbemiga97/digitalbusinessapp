"use client"

import { HeroData } from '@/src/utils/data'
import EmailBox from '../EmailBox/EmailBox'
import './Hero.css'
import { motion } from 'framer-motion'



const Hero = () => {

  

  const variants = (delay) => ({
    initial: {
      y: "18rem"
    },
    animate:{
      y: "0rem",
      transition: {
        type: "spring",
        damping: 25,
        duration: 2.5,
        delay
      }
    }

  })

  const imgVariant = () => ({
    initial: {
      y: "18rem"
    },animate: {
      y: "0rem",
      transition:{
        type: "spring",
        duration: 2,
        stiffness: 30
      }
    }
  })

  return (
    <section className="hero__wrapper">
      <div className="container">
        <div className="hero__container">
            <div className="img__arrow">
              <img src="./hero/hero-arrow.png" alt="arrow" />
           </div>

            <div className="hero__imgs">
              {
                HeroData.map(({src, bg, delay}, i) => (
                  <div key={i} className="img__pills">
                    <motion.div
                    initial={'initial'}
                    animate={"animate"}
                    variants={variants(delay)}
                    style={{backgroundColor: bg}}
                    className="img__pills-bg">
                      <motion.img 
                      initial={"initial"}
                      animate={"animate"}
                      variants={imgVariant()}
                      src={src} alt='person' />
                    </motion.div>
                  </div>
                ))
              }
            
            </div>
           
            <div className="hero__content">
                <h1>
                    redefine how you grow your <span> digital business </span>
                </h1>
                <p>Revenue based funding and execution support designed for early stage founders</p>
                <EmailBox />
            </div>
            </div>
        </div>
    </section>
  )
}

export default Hero