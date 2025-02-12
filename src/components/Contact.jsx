
import call from "../assets/icons/call.svg"
import mail from "../assets/icons/mail.svg"

export default function Contact(){

    return(
        <>
            <div className="flex justify-between w-full border-b border-b-[#00000030] py-[36px]">
                <div className="w-4/12 ">
                    <h1 className="text-[42px] max-xl:text-[34px] max-md:text-[27px] ">Lt</h1>
                </div>
                <div className="w-8/12 ">
                    <h3 className="text-[24px] max-md:text-[18px] ">Levittown</h3>
                    <p className="text-[#00000090] ">308 Geneva Street</p>
                    <p className="text-[#00000090] flex ">
                        <img className="mr-[12px] text-[black]" src={call} />
                        <span>+237 696 767 542</span>
                    </p>
                    <p className="text-[#00000090] flex ">
                        <img className="mr-[12px] text-[black]" src={mail} />
                        <span>levittown@medical.com</span>
                    </p>
                    
                </div>
            </div>
        </>
    )
}