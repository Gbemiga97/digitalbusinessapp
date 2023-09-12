"use client"

import NavBar from "@/src/components/NavBar/NavBar";
import './page.css'
import Hero from "@/src/components/Hero/Hero";
import BrandingVideo from "@/src/components/BrandingVideo/BrandingVideo";
import WhatWeDo from "@/src/components/WhatWeDo/WhatWeDo";
import { motion, useAnimation } from "framer-motion";
import OurDifference from "@/src/components/OurDifference/OurDifference";
import HowItWorks from "@/src/components/HowItWorks/HowItWorks";
import WhoWeInvest from "@/src/components/WhoWeInvest/WhoWeInvest";
import Testimonials from "@/src/components/Testimonials/Testimonials";
import Footer from "@/src/components/Footer/Footer";

export default function Home() {
  const controls = useAnimation() 

  return (
   <motion.main className='app' animate={controls}>
    <NavBar />
    <Hero />
    <BrandingVideo />
    <WhatWeDo />

    <motion.div 
    onViewportEnter={() => {
      controls.start({
        backgroundColor: "var(--secondary-color)"
      })
    }}
    onViewportLeave={() => {
      controls.start({
        backgroundColor: "white"
      })
    }}
    >
      <OurDifference />
    </motion.div>

    <HowItWorks />

    <motion.div 
    onViewportEnter={() => {
      controls.start({
        backgroundColor: "var(--primary-color)"
      })
    }}
    onViewportLeave={() => {
      controls.start({
        backgroundColor: "white"
      })
    }}
    >
      <WhoWeInvest />
    </motion.div>
    <Testimonials />
    <Footer />
   </motion.main>
  )
}
