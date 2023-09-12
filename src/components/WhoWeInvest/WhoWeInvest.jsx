"use client"

import { whoWeInvest } from '@/src/utils/data'
import './WhoWeInvest.css'
import { motion } from 'framer-motion'
import { containerVariants, tagVariants, titleVariants } from '@/src/utils/animation'

const WhoWeInvest = () => {
  return (
    <section className="wwi__wrapper">
        <div className="container">
            <div className="wwi__container">
                <div className="wwi__content">
                    <div className="wwi__head">
                        <motion.h5 
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={tagVariants}
                        className="tag">
                            Who we invest in
                        </motion.h5>
                        <motion.h2 
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVariants}
                        className="title">Digital Businesses
                        <br />With Early Traction</motion.h2>
                    </div>
                    <div className="wwi__features">
                        {
                            whoWeInvest.map(({title, des}, i) => (
                                <motion.article 
                                initial="offscreen"
                                whileInView={"onscreen"}
                                variants={containerVariants(i * 0.05 + 1)}
                                key={i} className="wwi__feature">
                                    <h3 className="des">{title}</h3>
                                    <p className="text">{des}</p>
                                </motion.article>
                            ))
                        }
                    </div>
                </div>

                <motion.div
                initial="offscreen"
                whileInView={"onscreen"}
                variants={containerVariants(0.5)}
                className="wwi__img">
                    <img src="/persons.png" alt="people" />
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default WhoWeInvest