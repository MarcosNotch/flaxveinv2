
import { motion } from "framer-motion"

export default function BenefitCard({ color, icon, title, description }) {


    const divStyle = {
        backgroundColor: color, // Utiliza la propiedad 'color' para establecer el color de fondo
    };

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
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={cardVariants}
            className="w-full"
        >
            <section className="flex-col max-md:flex max-md:items-center max-md:justify-center  w-full space-y-4">
                <div style={divStyle} className={`rounded-full h-12 w-12 flex items-center justify-center`}>
                    <img width="30" height="20" src={icon} alt="security-checked--v1" />
                </div>
                <div className="max-w-xs max-md:items-center max-md:justify-center">
                    <p className="font-bold text-xl md:text-2xl max-md:text-center">{title}</p>
                </div>
                <div className="max-w-xs max-md:text-center w-full">
                    <p className="text-gris1 text-base md:text-lg font-medium">{description}</p>
                </div>
            </section>
        </motion.div>
    )
}