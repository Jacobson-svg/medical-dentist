
import { motion } from "framer-motion"
import call from "../assets/icons/call.svg"
import mail from "../assets/icons/mail.svg"

export default function Offices(props){

    return(
        <>
            <div className="mb-[12px] relative group cursor-pointer">
                <div>
                    <img
                        className="h-[480px] max-lg:h-[360px] max-md:h-[460px] w-full object-cover rounded-[12px] brightness-[60%]  "
                        src={props.img.src}
                        alt={props.img.alt}
                    />
                </div>
                <div id={props.town} className="absolute bottom-[-108px] group-hover:bottom-0 p-[24px] w-full text-white font-normal transition-discrete duration-400">
                    <div className="flex max-sm:flex-col max-s::items-start max-sm:gap-3 items-center py-3">
                        <div className="w-full">
                            <h1 className="text-[28px] font-medium ">{props.town}</h1>
                            <p>{props.address}</p>
                        </div>
                        <div className="w-full max-sm:ml-14 ">
                            <a href={`tel:${props.number}`}><p className="flex gap-3 hover:underline"><span><img src={call} alt="call icon" /></span>{props.number}</p></a>
                            <a href={`mailto:${props.mail}`}><p className="flex gap-3 hover:underline"><span><img src={mail} alt="mail icon" /></span>{props.mail}</p></a>
                        </div>
                    </div>
                    <motion.div className="flex max-sm:flex-col justify-between max-sm:gap-3 py-[24px] border-t border-t-[#ffffff80] ">
                        <div className="w-6/12 max-sm:w-full"><h3>Ordinary hours</h3></div>
                        <div className="w-6/12 max-sm:w-full">
                            <div className="flex justify-around max-sm:justify-between mb-3">
                                <p>Mo-Th</p>
                                <p>10a.m - 6p.m</p>
                            </div>
                            <div className="flex justify-around max-sm:justify-between ">
                                <p>Friday</p>
                                <p>11a.m - 5p.m</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}