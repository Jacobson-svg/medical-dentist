
import { Link } from "react-router-dom"

export default function BookAppointmentBtn(props){

    return(
        <>
            <Link to="/contact"><button className={`bg-[#095950] hover:bg-[#00000080] transition transition-discete duration-200 rounded-[6px] font-medium text-white py-[12px] px-[24px] cursor-pointer ${props.defClass} `}>Book an appointment</button></Link>
        </>
    )
}