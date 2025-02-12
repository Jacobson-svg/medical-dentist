
import CountUp from './CountUp'

export default function OurStats(){

    return(
        <>
            <div className="p-[24px] pb-[96px] flex max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-[24px] justify-between space-x-[36px] ">
                <div className="border-t border-t-[#00000080] w-full pt-[24px] flex flex-col items-center max-md:flex-col max-md:items-center ">
                    <h1 className="text-[64px] font-medium mb-[8px] ">
                    <CountUp
                        from={0}
                        to={15}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text"
                    />+</h1>
                    <p className="text-[#00000080] font-medium tracking-[-0.32px] leading-[20.8px] ">years of experience</p>
                </div>
                
                <div className="border-t border-t-[#00000080] w-full pt-[24px] flex flex-col items-center max-md:flex-col max-md:items-center ">
                    <h1 className="text-[64px] font-medium mb-[8px] ">
                    <CountUp
                        from={0}
                        to={20}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text"
                    />
                    </h1>
                    <p className="text-[#00000080] font-medium tracking-[-0.32px] leading-[20.8px] ">specialists</p>
                </div>

                <div className="border-t border-t-[#00000080] w-full pt-[24px] flex flex-col items-center max-md:flex-col max-md:items-center ">
                    <h1 className="text-[64px] font-medium mb-[8px] ">
                    <CountUp
                        from={0}
                        to={500}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text"
                    />
                    +</h1>
                    <p className="text-[#00000080] font-medium tracking-[-0.32px] leading-[20.8px] ">patients helped</p>
                </div>
            </div>
        </>
    )
}