
import { Link } from "react-router-dom"

export default function Footer(){

    return(
        <>
            <footer className="bg-black pt-[96px] max-md:pt-[40px] pb-[36px] px-[40px] max-md:px-[24px] text-white font-medium ">
                <div className="flex justify-between max-md:flex-col mb-[72px]">
                    <div className="w-full max-md:mb-[44px] ">LOGO</div>
                    <div className="w-full flex max-md:flex-col gap-[36px] max-md:gap-[24px] ">
                        <div className="w-full">
                            <ul>
                                <li className="text-[#ffffff80] mb-[11px]">Pages</li>
                                <li className="mb-[11px]"><Link to="/">Homepage</Link></li>
                                <li className="mb-[11px]"><Link to="/location">Location</Link></li>
                                <li className="mb-[11px]"><Link to="/contact">Contact</Link></li>
                                <li className="mb-[11px]"><Link to="/about">About</Link></li>
                            </ul>
                        </div>
                        <div className="w-full">
                            <ul>
                                <li className="text-[#ffffff80] mb-[11px]">Pages</li>
                                <li className="mb-[11px]"><Link to="/services">Services</Link></li>
                                <li className="mb-[11px]"><Link to="#">Services-Example</Link></li>
                                <li className="mb-[11px]"><Link to="#">Legal</Link></li>
                                <li className="mb-[11px]"><Link to="/404">404</Link></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>

                <div className="text-[#ffffff80] flex max-md:flex-col max-md:items-center max-md:justify-center font-medium border-t border-t-[#ffffff20] pt-[72px] px-[24px] ">
                    <p className="w-full max-md:mb-[44px] text-center ">@2025 copyrigth Jacobrayan. All rights reserved.</p>
                    <p className="w-full text-center">Build with ❤ by <span className="font-bold">Jacob</span> </p>
                </div>
            </footer>
        </>
    )
}