
import { Link } from "react-router-dom"

export default function ViewServices(props){

    return(
        <>
            <Link to="/services">
                <button className={`bg-[#000000c0] hover:bg-[#333333c7] transition transition-discete duration-200 rounded-[6px] text-white font-medium py-[12px] px-[24px] cursor-pointer ${props.defClass} `}>View services</button>
            </Link>
        </>
    )
}