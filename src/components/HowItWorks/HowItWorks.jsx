"use clients"

import { hitFeatures } from '@/src/utils/data'
import './HowItWorks.css'
import { motion } from 'framer-motion'
import { featureVariants, fetureDescVariants, tagVariants, titleVariants } from '@/src/utils/animation'

const HowItWorks = () => {
  return (
    <section className="hiw__wrapper">
        <div className="container">
            <div className="hiw__container">
                <div className="hiw__head">
                    <motion.h5 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className="tag">
                        How it works
                    </motion.h5>
                    <motion.h2 
                      initial="offscreen"
                      whileInView={"onscreen"}
                      variants={titleVariants}
                    className="title">
                    Unlocking Potential Along The Growth Journey
                    </motion.h2>
                </div>

                <div className="hiw__features">
                    {
                        hitFeatures.map(({icon, title, des}, i) => (
                            <motion.div 
                            initial="offscreen"
                            whileInView={"onscreen"}
                            variants={featureVariants}
                            key={i} className="hiw__feature">
                                <motion.div 
                                  initial="offscreen"
                                  whileInView={"onscreen"}
                                  variants={fetureDescVariants}
                                className="hiw__feature-details">
                                    <small className='des'>0{i + 1}</small>
                                    <h3 className="sec__title">
                                        {title}
                                        <p className="text">{des}</p>
                                    </h3>
                                </motion.div>

                                <div className="hiw__feature-icon">
                                    <img src={icon} alt={title} width={128} height={128} />
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default HowItWorks