import Checkmark from "../icons/checkmark"

const SmallCheckbox = ({onChange, checked, value}) => {
    return (
        <>
            <input value={value} checked={checked} onChange={onChange} className={`hidden`} type="checkbox" name="" id="" />
            <div className={`w-full text-white h-full border transition-all  ${checked ? "ring-opacity-0 bg-opacity-100 bg-scitech-red"  : "ring-opacity-100 hover:bg-red-300 bg-white"} ring-1 ring-black `}>
                <div className={`h-full w-full flex justify-center transition-all ${checked ? "opacity-100" : "group-hover:opacity-50  opacity-0"}`}>
                <Checkmark/>
                </div>
            </div>
        </>
    )
}

export default SmallCheckbox