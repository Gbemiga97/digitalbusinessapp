import './EmailBox.css'
import { LuMail } from 'react-icons/lu'
import { motion } from 'framer-motion'
import { containerVariants } from '@/src/utils/animation'

const EmailBox = () => {

  
  return (
    <motion.div 
    initial={{
      width: ".5rem",
      borderRadius: "100%"
    }}
    whileInView={{
      width: "70%",
      borderRadius: "999px",
      transition: "easeOut",
      duration: 1
    }}
    className="emailbox">

      <motion.div
      variants={containerVariants(0.7)}
      initial="offscreen"
      whileInView={"onscreen"}
      viewport={{
        once: true
      }}
      >
        <LuMail size={30} color='grey'/>
       </motion.div>
        <motion.input 
        variants={containerVariants(0.9)}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{
          once: true
        }}
        type="text" placeholder='Enter Email'/>

        <button>
            Get Funded
        </button>
    </motion.div>
  )
}

export default EmailBox