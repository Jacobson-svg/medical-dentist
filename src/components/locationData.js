import dental_office from "../assets/images/dental_office.png"
import lansing_dental_office from "../assets/images/lansing_dental_office.png"
import newton_dental_office from "../assets/images/newton_dental_office.png"

const data = [
    {
        id:1,
        img:{
            src:dental_office,
            alt:"Levittown dental office" 
        },
        town: "Levittown",
        address: "308 Geneva Street",
        number: "+237 696 767 542",
        mail: "levittown@medical.com",
    },
    {
        id:2,
        img:{
            src:lansing_dental_office,
            alt:"Lansing dental office"  
        },
        town: "Lansing",
        address: "342 John Avenue",
        number: "+237 653 240 469",
        mail: "lansing@medical.com",
    },
    {
        id:3,
        img:{
            src:newton_dental_office,
            alt:"Newton dental office"
        },
        town: "Newton",
        address: "4102 Morningview Lane",
        number: "+237 658 123 103",
        mail: "newton@medical.com",
    },
]
export default data