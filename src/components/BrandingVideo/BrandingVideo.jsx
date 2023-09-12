"use client"

import { useRef } from 'react'
import './BrandingVideo.css'
import { motion, useScroll, useTransform } from 'framer-motion'

const BrandingVideo = () => {
  const ref = useRef()

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  })

  const scale = useTransform(scrollYProgress, [0, 1], [.6, 1])


  return (
    <div className="bv__container">
        <div className="container">
            < motion.video 
            src="/video.mp4" 
            type='video.mp4' 
            className="bv__video"
            autoPlay
            muted
            controls=''
            loop
            ref={ref}
            style={{scale}}
            ></ motion.video>
        </div>
    </div>
  )
}

export default BrandingVideo