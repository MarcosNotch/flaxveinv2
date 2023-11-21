import BenefitCard from "../benefitsCard/benefirCard"

export default function Benefits(){


    return (

        <article className="w-full">
            <section className="w-full flex flex-col space-y-10 items-center justify-center mb-16 ">
                <div>
                    <h2 className="text-5xl md:text-7xl font-semibold max-md:text-center">Benefits of custom software</h2>
                </div>
                <div>
                    <p className="text-gris1 font-medium text-base md:text-lg max-md:text-center">Discover key points on how custom software can enhance your business.</p>
                </div>
            </section>

            <section className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
                <BenefitCard color={"#C2A8FF"} icon={"https://img.icons8.com/ios/50/security-checked--v1.png"} title={"Increased Data Security"} description={"Custom development allows implementing best security practices from the outset, tailored to the specific needs of the company."}/>
                <BenefitCard  color={"#FF99EB"} icon={"https://img.icons8.com/ios/50/positive-dynamic--v1.png"} title={"Scalability and Controlled Updates"} description={"Custom software can be easily adapted as the company grows and evolves. Updates and expansions can be implemented more controlledly."}/>
                <BenefitCard  color={"#FFBB80"} icon={"https://img.icons8.com/ios-glyphs/30/--pocket-watch.png"} title={"Improved operational efficiency"} description={"As it's designed specifically for your operations, custom software can automate repetitive tasks, streamline processes, and reduce errors, leading to higher productivity."}/>
                <BenefitCard color={"#FFE27A"} icon={"https://img.icons8.com/ios/50/positive-dynamic--v1.png"} title={"Scalability and Controlled Updates"} description={"Custom software can be easily adapted as the company grows and evolves. Updates and expansions can be implemented more controlledly, avoiding significant disruptions in day-to-day operations."}/>
                <BenefitCard color={"#69F28D"} icon={"https://img.icons8.com/ios/50/positive-dynamic--v1.png"} title={"Scalability and Controlled Updates"} description={"Custom software can be easily adapted as the company grows and evolves. Updates and expansions can be implemented more controlledly, avoiding significant disruptions in day-to-day operations."}/>
                <BenefitCard color={"#8ECFFB"} icon={"https://img.icons8.com/ios/50/positive-dynamic--v1.png"} title={"Scalability and Controlled Updates"} description={"Custom software can be easily adapted as the company grows and evolves. Updates and expansions can be implemented more controlledly, avoiding significant disruptions in day-to-day operations."}/>
            </section>



        </article>

    )

}