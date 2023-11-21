import AskCard from "../askCard/askCard";




export default function Seccion4(){


    return(
        <article className="w-full">
        <section className="w-full flex flex-col space-y-10 items-center justify-center mb-16 ">
            <div>
                <h2 className="text-5xl md:text-7xl font-semibold max-md:text-center">Frequently Asked Questions</h2>
            </div>
            <div>
                <p className="text-gris1 font-medium text-base md:text-lg max-md:text-center">Discover key points on how custom software can enhance your business.</p>
            </div>
        </section>

        <section className="w-full flex-col space-y-5 flex items-center justify-center h-auto">
            <AskCard title={"How is custom software developed?"} description={"Custom software development begins with a detailed analysis of the customer's requirements and needs. This is followed by design, programming, testing and implementation. It is a collaborative process between the developers and the client to ensure that the software meets their expectations."}/>
            <AskCard title={"How long does it take to develop custom software?"} description={"Development time may vary depending on project complexity, specific requirements, and software scope. Simple projects can take weeks."}/>
            <AskCard title={"How do I know if I need custom software for my company?"} description={"If you find limitations in existing solutions that do not meet your business needs or are looking for a competitive advantage with unique features, custom software development may be the best option."}/>
            <AskCard title={"How much does custom software cost?"}description={"Custom software represents a strategic investment that can transform a company's operational efficiency, which directly translates into a reduction in time spent on repetitive tasks and the elimination of obsolete processes. By automating and optimizing workflows, a notable decrease in operating costs is achieved.In short, investing in custom software is much more than a technological improvement; It is a strategic investment that leads to cost reduction, improves efficiency and productivity, and provides a long-term competitive advantage for companies."}/>
            <AskCard title={"How do you make sure you understand my needs before starting development?"} description={"We carry out an initial consulting phase in which we work closely with you to understand your requirements, objectives and expectations before starting software development. Additionally, in the development process we hold weekly meetings to show you the progress."}/>
        </section>
    </article>
    )






}