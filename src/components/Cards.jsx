

export default function Cards(props){

    return(
        <>
            <div className="relative ">
                <div className="absolute bg-[#005450] text-white py-[4px] px-[18px] top-[22px] left-[36px] rounded-[100px] font-medium ">{props.name}</div>
                <img  
                    className="rounded-[12px] aspect-[12/16] w-full object-cover "
                    src={props.img.src} 
                    alt={props.img.alt} 
                />
            </div>
        </>
    )
}