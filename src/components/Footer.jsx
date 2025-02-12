
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
                                <Link to="/"><li className="mb-[11px]">Homepage</li></Link>
                                <Link to="/location"><li className="mb-[11px]">Location</li></Link>
                                <Link to="/contact"><li className="mb-[11px]">Contact</li></Link>
                                <Link to="/about"><li className="mb-[11px]">About</li></Link>
                            </ul>
                        </div>
                        <div className="w-full">
                            <ul>
                                <li className="text-[#ffffff80] mb-[11px]">Pages</li>
                                <Link to="/services"><li className="mb-[11px]">Services</li></Link>
                                <Link to="#"><li className="mb-[11px]">Services-Example</li></Link>
                                <Link to="#"><li className="mb-[11px]">Legal</li></Link>
                                <Link to="/404"><li className="mb-[11px]">404</li></Link>
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