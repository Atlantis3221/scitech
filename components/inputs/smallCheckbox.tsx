const SmallCheckbox = ({onChange, checked, value}) => {
    return (
        <label className={`overflow-visible`}>
            <input value={value} checked={checked} onChange={onChange} className={`hidden`} type="checkbox" name="" id="" />
            <div className={`w-full h-full border transition-all ${checked ? "bg-scitech-red ring-opacity-0" : "bg-white ring-opacity-100"} ring-1 ring-black `}>

            </div>
        </label>
    )
}

export default SmallCheckbox