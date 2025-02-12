import arrow_forward from "../assets/icons/arrow_forward.svg"


export default function DentalCare(props){

    return(
        <>
            <div className={`parent relative max-md:w-full cursor-pointer ${props.defClass} `}>
                <div className="absolute bottom-[24px] left-[24px] text-white font-medium z-10">
                    <h3 className="text-[24px] mb-[12px]">{props.text}</h3>
                    <p className="flex ">
                        <span className="mr-[12px]">Learn more</span>
                        <img className="w-5 parent-hover:translate-x-[20px] " src={arrow_forward} />
                    </p>
                </div>
                <img
                    className="rounded-[12px] aspect-[13/16] max-lg:aspect-[11/16] max-md:aspect-[13/16] w-full object-cover brightness-[60%] hover:blur-[3px] transition transition-discrete duration-400 "
                    src={props.img.src} 
                    alt={props.img.alt}
                />
                
            </div>
        </>
    )
}