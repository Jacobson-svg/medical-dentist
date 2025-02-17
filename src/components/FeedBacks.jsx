
import users_profil1 from "../assets/images/users_profil1.png"

export default function FeedBacks(){

    return(
        <>
            <div className="bg-[#ededed] px-[24px] py-[24px] w-[402px] max-md:w-full h-[285px] rounded-[12px] flex flex-col justify-end ">
                <div className="mb-[24px] overflow-auto "><p>"Dr. Smith and the team at Medical made my dental experience truly comfortable and stress-free. From the moment I walked in, I felt welcomed and cared for. The quality of their work is outstanding, and my smile has never looked better! Highly recommend!”</p></div>
                <div>
                    <img
                        className="w-[34px] h-[34px] object-cover rounded-[6px] inline mr-[10px] "
                        src={users_profil1}
                        alt="users profil picture" 
                    />
                    <span className="text-[#000000c0] ">Hello</span>
                </div>
                
            </div>
        </>
    )
}