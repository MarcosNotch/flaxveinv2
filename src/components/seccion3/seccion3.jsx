import Card from "../card/card";
import RigthCard from "../card/rigthCard";
import { motion } from "framer-motion";

export default function Seccion3() {

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
        <article className="flex-col my-10 mb-20 space-y-20">
            <Card title={"Your business, your rules"} description={"Our goal is to design and develop a system that perfectly aligns with your operations, allowing you to seamlessly transition every task to the digital world."} image={"https://jobbis.s3.amazonaws.com/custom1.webp"} />
            <RigthCard />
            <section className="w-full max-md:flex-col flex sm:space-x-40">
                <div className="w-full max-md:hidden md:w-1/2 bg-gris2 flex items-center justify-center rounded-xl border border-gray-800">
                    <div className="w-full p-10 h-72 flex items-center justify-center">
                        <img src={"https://jobbis.s3.amazonaws.com/imageInternet.png"} alt="" />
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="w-full flex-col items-center justify-start pt-2 space-y-5">
                        <div>
                            <p className="font-bold text-2xl">{"Web Apps development"}</p>
                        </div>
                        <div>
                            <p className="font-medium text-lg">{"We build web applications accessible from any device with an internet connection, ensuring continuous access and guaranteeing the security of data in the cloud. Our focus is on developing solutions that never leave our users without access to their information, while maintaining the integrity and confidentiality of their data in secure environments."}</p>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-4 md:hidden md:w-1/2 bg-gris2 flex items-center justify-center rounded-xl border border-gray-800">
                    <div className="w-full p-10 h-72 flex items-center justify-center">
                        <img src={"https://jobbis.s3.amazonaws.com/imageInternet.png"} alt="" />
                    </div>
                </div>
            </section>
            <section className="w-full max-md:flex-col flex sm:space-x-40">
                <div className="w-full md:w-1/2">
                    <div className="w-full flex-col items-center justify-start pt-2 space-y-5">
                        <div>
                            <p className="font-bold text-2xl">{"Mobile Apps development"}</p>
                        </div>
                        <div>
                            <p className="font-medium text-lg">{"Having your own mobile application offers companies a direct connection with their customers, providing quick access to products or services at any time. This tool not only strengthens brand image but also enables personalized interactions, valuable data collection and differentiation in a competitive market, giving companies a strategic advantage to improve customer experience and expand their reach."}</p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center">
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={cardVariants}
                    className="bg-gris2 w-64 rounded-3xl flex items-center justify-center border border-gray-800 max-md:mt-4"
                >
                    <div className="w-64 p-2 flex items-center justify-center">
                        <img className="rounded-3xl" src={"https://framerusercontent.com/images/CKClBwl7hJlHrpeJpQ1yGugTTMY.svg"} alt="" />
                    </div>

                </motion.div>
                </div>
                

            </section>
        </article>
    )




}