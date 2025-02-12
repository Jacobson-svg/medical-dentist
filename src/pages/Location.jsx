import arrow_forward from "../assets/icons/arrow_forward.svg"
import Footer from "../components/Footer";
import Header from "../components/Header";
import Offices from "../components/Offices";
import QuickActionCard from "../components/QuickActionCard";
import locationData from "../components/locationData"


export default function Location(){

    

    const officesElts = locationData.map(elt =>(
        <Offices
            key={elt.id}
            img={elt.img}
            town={elt.town}
            address={elt.address}
            number={elt.number}
            mail={elt.mail}
        />
    ))

    return(
        <>
            <Header />

            <section className="pt-[220px] pb-[96px] max-md:pb-[40px] max-lg:pt-[120px] max-lg:px-[16px] px-[40px] font-medium ">
                <div className="flex max-md:flex-col max-md:justify-start justify-between gap-[48px] max-md:gap-[24px] ">
                    <div className="w-4/12 max-md:w-full">
                        <p>Locations</p>
                        <h1 className="text-[64px] max-xl:text-[48px] max-lg:text-[38px]  ">Our offices</h1>
                    </div>

                    <div className="w-8/12 max-md:w-full">
                        {officesElts}
                    </div>
                    
                </div>

                <div className="mt-15">
                    <QuickActionCard />
                </div>
            </section>

            <Footer />
        </>
    )
}