import { useState } from "react"
import DropdownToggle from "../icons/dropdownToggle"

const Dropdown = ({value="", values=[], setter=(arg:string)=>{} }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={`relative font-raleway`}>
        <button 
        onClick={() => {
            setIsOpen(!isOpen)
        }}
        className={`h-12 w-full bg-white p-3 flex items-center 
        justify-between cursor-pointer transition-all ring-blue-500 ring-opacity-0 hover:ring-opacity-100 ring-2`}>
            <div className={`inline-block`}>
            {value}
            </div>
            <div className={`flex w-3.5 h-3.5 items-center justify-center`}>
            <DropdownToggle/>
            </div>
        </button>
        <div className={`absolute top-14 bg-white w-full left-0 origin-top-left transform transition-all duration-300 
        ${isOpen ? "visible opacity-100 scale-100" : "invisible opacity-0 scale-50"} max-h-30 overflow-y-auto`}>
            {values.map(value => 
            <button 
            onClick={() => {
                setter(value)
                setIsOpen(false)
            }}
            className={`p-3 hover:bg-scitech-red hover:text-white w-full text-left h-10 `}>
                {value}
            </button>)}
        </div>
    </div>
    )
}

export default Dropdown