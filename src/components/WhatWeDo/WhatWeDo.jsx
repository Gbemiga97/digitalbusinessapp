"use client"

import { features } from '@/src/utils/data'
import './WhatWeDo.css'
import { motion } from 'framer-motion'
import { containerVariants, descVariants, tagVariants, titleVariants } from '@/src/utils/animation'

const WhatWeDo = () => {
  return (
    <section className="wwd__wrapper">
        <div className="container">
            <div className="wwd__container">
                <div className="wwd__head">
                    <motion.h5 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className="tag">
                        What we do
                    </motion.h5>
                    <motion.h2 
                     initial="offscreen"
                     whileInView={"onscreen"}
                     variants={titleVariants}
                    className="title">
                    Empowering Founders With Non Dilutive Capital And Execution Expertise
                    </motion.h2>
                    <motion.p 
                     initial="offscreen"
                     whileInView={"onscreen"}
                     variants={descVariants}
                    className="desc">
                    Here is how we can evaluate
                    </motion.p>
                </div>

                <div className="wwd__features-containers">
                    <div className="wwd__features-container">
                        <motion.h3
                         initial="offscreen"
                         whileInView={"onscreen"}
                         variants={titleVariants}
                        className='sec__title'>Blue Adnavces</motion.h3>
                        <motion.p 
                         initial="offscreen"
                         whileInView={"onscreen"}
                         variants={descVariants}
                        className='text'>Fund recurring growth expenses e.g. customer acquisition, inventory</motion.p>
                        <div className="wwd__features">
                            {
                                features.slice(0, 3).map(({icon, title}, i) => (
                                    <motion.article 
                                    initial="offscreen"
                                    whileInView={"onscreen"}
                                    variants={containerVariants((i + 1) * 0.1)}
                                    key={i}>
                                        <img src={icon} alt="icon" width={60} height={60}/>
                                        <h6>{title}</h6>
                                    </motion.article>
                                ))
                            }
                        </div>
                    </div>

                    <div className="wwd__features-container">
                        <motion.h3
                         initial="offscreen"
                         whileInView={"onscreen"}
                         variants={titleVariants}
                        className='sec__title'>Blue Adnavces</motion.h3>
                        <motion.p 
                         initial="offscreen"
                         whileInView={"onscreen"}
                         variants={descVariants}
                        className='text'>Fund one-offs to scale e.g. product, hiring</motion.p>
                        <div className="wwd__features">
                            {
                                features.slice(3, 6).map(({icon, title}, i) => (
                                    <motion.article
                                    initial="offscreen"
                                    whileInView={"onscreen"}
                                    variants={containerVariants((i + 1) * 0.1)}
                                    key={i}>
                                        <img src={icon} alt="icon" width={60} height={60}/>
                                        <h6>{title}</h6>
                                    </motion.article>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <motion.div
                 initial="offscreen"
                 whileInView={"onscreen"}
                 variants={containerVariants(0.3)}
                className="wwd__support">
                        <div className="wwd__support-title">
                            <h3 className="sec__title">Blue Growth Support</h3>
                            <p className="desc">Data Insights and full stack expertise to supercharge growth</p>
                        </div>

                        <div className="wwd__support-text">
                            <p className="text">Actionable data insights by connecting revenue, marketing and social media platforms</p>
                            <p className="text">On demand execution expertise at cost or revenue share across proposition design, engineering, marketing analytics, partnerships, brand, intellectual property, market expansion, talent management</p>
                        </div>
                    </motion.div>
            </div>
        </div>
    </section>
  )
}

export default WhatWeDo