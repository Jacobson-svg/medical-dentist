
import { Link } from "react-router-dom";
import CountUp from "../components/CountUp";
import arrow from "../assets/icons/arrow_forward.svg"

export default function page404(){

    return(
        <>
            <section className="p-[24px] text-white font-medium ">
                <div className="bg-[#095950]  h-[93vh] flex flex-col justify-center items-center">
                    <h1 className="text-[84px] max-xl:text-[64px] max-md:text-[56px] ">
                        <CountUp
                            from={0}
                            to={404}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text"
                        />
                    </h1>
                    <Link to="/"><div className="flex gap-2"><p>Back Home</p><span><img src={arrow} /></span></div></Link>
                </div>
            </section>
        </>
    )
}