

export default function Card({title, description, image}){



    return (
        <section className="w-full max-md:flex-col flex sm:space-x-40">
            <div className="w-full max-md:hidden md:w-1/2 bg-gris2 flex items-center justify-center rounded-xl border border-gray-800">
                <div className="w-96">
                    <img src={image} alt="" />
                </div>
            </div>
            <div className="w-full md:w-1/2 max-md:mb-4">
                <div className="w-full flex-col items-center justify-start pt-2 space-y-5">
                    <div>
                        <p className="font-bold text-2xl">{title}</p>
                    </div>
                    <div>
                        <p className="font-medium text-lg">{description}</p>
                    </div>
                </div>
            </div>
            <div className="w-full md:hidden md:w-1/2 bg-gris2 flex items-center justify-center rounded-xl border border-gray-800">
                <div className="w-96">
                    <img src={image} alt="" />
                </div>
            </div>
        </section>
    )





}