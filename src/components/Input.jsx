

export default function Input(props){

    return(
        <>
            <div className="flex flex-col mb-[24px] ">
                <label className="mb-[10px] " htmlFor={props.id}>{props.label}</label>

                {

                    props.select ?
                    <div className={`pr-[24px]  bg-[#ededed] rounded-[8px] text-[#00000080] ${props.defClass} `}>
                        <select
                            id={props.id}
                            defaultValue="selected"
                            className={`px-[24px] w-full py-[12px] outline-none`}
                        >
                            <option disabled value="selected">Select...</option>
                            <option name={props.option1.name}>{props.option1.text}</option>
                            <option name={props.option2.name}>{props.option2.text}</option>
                            <option name={props.option3.name}>{props.option3.text}</option>
                        </select>
                    </div>:
                    <input className={`px-[24px] py-[12px] bg-[#ededed] rounded-[8px] outline-none ${props.defClass} `} id={props.id} type={props.type} name={props.name} placeholder={props.placeholder} />

                }

            </div>
        </>
    )
}