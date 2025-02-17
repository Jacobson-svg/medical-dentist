
import { Link } from "react-router-dom"
import arrow_forward from "../assets/icons/arrow_forward.svg"

export default function LocationCard(props){

    return(
        <>
            <div className="max-w-[424px] max-md:max-w-[900px] w-full h-[161px] bg-[#ffffff50] backdrop-blur-[10px] rounded-[12px] p-[24px] text-white ">
                <h2 className="text-[28px] mb-[8px] ">{props.town}</h2>
                <p className="mb-[8px] ">{props.address}</p>
                <Link to={`/location#${props.town}`} >
                    <p className="pt-[12px] flex items-center ">
                        <span className="mr-[12px] ">View more</span>
                        <img className="w-5" src={arrow_forward} alt='Arrow forward icon' />
                    </p>
                </Link>
            </div>
        </>
    )
}