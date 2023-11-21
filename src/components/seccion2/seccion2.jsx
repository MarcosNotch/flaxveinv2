import { motion } from "framer-motion"


export default function Seccion2() {


    const cardVariants = {
        offscreen: {
          y: 50,
          opacity: 0
        },

        onscreen: {
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1.5
          }
        },
        
      };

    return (
        <article className="w-full flex items-center justify-between md:p-10 my-20">

            <div className="w-full relative">
                <img className="object-contain" src="https://jobbis.s3.amazonaws.com/f1.webp" alt="dashboard example 1" />
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    
                >
                <motion.div variants={cardVariants} className="absolute opacity-100 w-[38%] top-[42%] left-[5%]">
                    <img className='w-full h-full object-contain' src="https://jobbis.s3.amazonaws.com/hROCEHdTDmOlclmtK6SUDAKI.webp" alt="" />
                </motion.div>
                
                    <motion.div variants={cardVariants} className="absolute opacity-100 w-[24%] top-[26%] right-[2%]">
                        <img className='w-full h-full object-contain' src="https://jobbis.s3.amazonaws.com/creditcard.webp" alt="" />
                    </motion.div>
                </motion.div>

            </div>
        </article>
    )
}