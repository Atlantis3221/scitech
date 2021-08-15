

const Radio = ({value, state, color, name, setState}) => {
    const checked = state[name] === value
    return (
        <label className={`w-full h-full cursor-pointer group flex items-center`}>
        <div 
        style={{
            color
        }}
        className={`w-full h-full ring-current group ring-2 rounded-full p-1 bg-white flex-shrink-0 mr-2 `}>
            <input checked={state[name] === value} onClick={(e) => {
                console.log(value)
                setState({
                ...state,
                [(e.target as any).name]: value,
                })}} 
                type="radio" className={`hidden`} name={name} id="" />
            <div
            style={{
                backgroundColor: color
            }}
            className={`w-full h-full ${checked ? "opacity-100" : "group-hover:opacity-50 opacity-0"}  transition-all rounded-full`}
            />

        </div>
        <div>
            {value}
        </div>
        </label>
    )
}

export default Radio