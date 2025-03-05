
import { Link } from "react-router-dom"
import React from "react"
import BookAppointmentBtn from "./ui/BookAppointmentBtn"
import black_menu from "../assets/icons/black_menu.svg"
import white_menu from "../assets/icons/white_menu.svg"

export default function Header(){

    const [isClicked, setIsClicked] = React.useState(false)

    function toggleClicked(){
        setIsClicked(prevIsClicked => !prevIsClicked)
    }

    return(
        <>
            <nav className={`fixed w-full backdrop-blur-sm z-100 ${isClicked ? "bg-black text-white" : null} transition transition-discrete duration-300 `}>
                <div className="flex p-[64px] items-center justify-between h-[89px] ">
                    <Link to="/"><div>
                        <h1>MEDICAL</h1>
                    </div></Link>
                    <div
                        className="hidden max-lg:block "
                        onClick={toggleClicked}
                    ><img src={isClicked ? white_menu : black_menu} alt='Burger bar' className="w-[24px]" /></div>
                    <div className={`flex items-center max-lg:pb-[80px] ${isClicked ? "bg-black text-white  max-lg:top-[86px]" : null} max-lg:w-full max-lg:items-start space-x-5 font-medium max-lg:absolute max-lg:top-[-500px] max-lg:left-0 max-lg:px-[40px]  max-lg:flex-col transition transition-discrete duration-300 `}>
                        <ul className="flex pr-5 space-x-8 border-r max-lg:flex-col max-lg:border-none max-lg:mb-[40px] max-lg:space-x-0 max-lg:pr-0 max-lg:text-[26px] ">
                            <li className="max-lg:mb-[10px]"><Link to="/">Home</Link></li>
                            <li className="max-lg:mb-[10px]"><Link to="/about">About</Link></li>
                            <li className="max-lg:mb-[10px]"><Link to="/services">Services</Link></li>
                            <li className="max-lg:mb-[10px]"><Link to="/location">Locations</Link></li>
                            <li className="max-lg:mb-[10px]"><Link to="#">Pricing</Link></li>
                        </ul>

                        <BookAppointmentBtn />                    
                    </div>
                </div>
            </nav>
        </>
    )
}