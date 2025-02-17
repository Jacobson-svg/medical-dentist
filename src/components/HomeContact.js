const HomeContact = [
    {
        id:1,
        select: true,
        label: "Location",
        option1:{
            name: "levittown",
            text: "Levittown"
        },
        option2:{
            name: "lansing",
            text: "Lansing"
        },
        option3:{
            name: "newton",
            text: "Newton"
        }
    },
    {
        id:2,
        select: false,
        label: "Name & Surname",
        type: "text",
        name: "name",
        placeholder: "Jane Smith"
    },
    {
        id:3,
        select: false,
        label: "Phone Number",
        type: "number",
        name: "number",
        placeholder: "696 767 542"
    },
    {
        id:4,
        select: false,
        label: "Emaill",
        type: "email",
        name: "email",
        placeholder: "jane@medical.com"
    }
]
export default HomeContact