
import { Link } from "react-router-dom"
import React from "react"
import BookAppointmentBtn from "./ui/BookAppointmentBtn"
import burger_bar from "../assets/icons/burger_bar.png"

export default function Header(){

    const [isClicked, setIsClicked] = React.useState(false)

    function toggleClicked(){
        setIsClicked(prevIsClicked => !prevIsClicked)
    }

    return(
        <>
            <nav className={`fixed w-full backdrop-blur-sm z-100 ${isClicked ? "bg-black text-white" : null} transition transition-discrete duration-300 `}>
                <div className="flex p-[40px] items-center justify-between h-[89px] ">
                    <Link to="/"><div>
                        <h1>MEDICAL</h1>
                    </div></Link>
                    <div
                        className="hidden max-lg:block "
                        onClick={toggleClicked}
                    ><img src={burger_bar} /></div>
                    <div className={`flex items-center max-lg:pb-[80px] ${isClicked ? "bg-black text-white  max-lg:top-[86px]" : null} max-lg:w-full max-lg:items-start space-x-5 font-medium max-lg:absolute max-lg:top-[-500px] max-lg:left-0 max-lg:px-[40px]  max-lg:flex-col transition transition-discrete duration-300 `}>
                        <ul className="flex pr-5 space-x-8 border-r max-lg:flex-col max-lg:border-none max-lg:mb-[40px] max-lg:space-x-0 max-lg:pr-0 max-lg:text-[26px] ">
                            <Link to="/"><li className="max-lg:mb-[10px]">Home</li></Link>
                            <Link to="/about"><li className="max-lg:mb-[10px]">About</li></Link>
                            <Link to="/services"><li className="max-lg:mb-[10px]">Services</li></Link>
                            <Link to="/location"><li className="max-lg:mb-[10px]">Locations</li></Link>
                            <Link to="#"><li className="max-lg:mb-[10px]">Pricing</li></Link>
                        </ul>

                        <BookAppointmentBtn />                    
                    </div>
                </div>
            </nav>
        </>
    )
}