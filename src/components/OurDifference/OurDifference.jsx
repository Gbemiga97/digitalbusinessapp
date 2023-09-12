import { ourDiffFeatures } from '@/src/utils/data'
import './OurDifference.css'
import { motion } from 'framer-motion'
import { containerVariants, descVariants, tagVariants, titleVariants } from '@/src/utils/animation'

const OurDifference = () => {
  return (
    <section className="od__wrapper">
        <div className="container">
            <div className="od__container">
                <div className="od__head">
                    <motion.h5
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className="tag">Our difference</motion.h5>
                    <motion.h2 
                      initial="offscreen"
                      whileInView={"onscreen"}
                      variants={titleVariants}
                    className="title">Fair Capital, Hassle Free</motion.h2>
                    <motion.p
                      initial="offscreen"
                      whileInView={"onscreen"}
                      variants={descVariants}
                    className="text">Our mission is to level the playing field for early stage growth capital.
                        We provide capital that is unbiased, flexible and non dilutive with the execution support to accelerate value creation.
                    </motion.p>
                </div>

                <div 
                className="od__features">
                    {
                        ourDiffFeatures.map(({icon, title, des}, i) => (
                            <motion.div 
                            initial="offscreen"
                            whileInView={"onscreen"}
                            variants={containerVariants((i + 1) * 0.1)}
                            key={i} className="od__feature">
                                <img src={icon} alt={title} width={128} height={128} />
                                <h3 className="sec__title">
                                    {title}
                                </h3>
                                <p className="text">{des}</p>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurDifference