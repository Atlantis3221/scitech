import Checkmark from "../icons/checkmark"

const Checkbox = ({name, state, setState, setErrors=null, errors=null, bg="white"}) => {
    return (
        <label>
            <div className={`w-full h-full p-1 group ${bg === "white" && "bg-white"} ${bg === "red" && "bg-scitech-red"} cursor-pointer flex items-center justify-center`}>
                <div className={`${state[name] ? "opacity-100" : "group-hover:opacity-50 opacity-0"} transition-all flex items-center`}>
                <Checkmark/>
                </div>
            </div>

            <input type="checkbox" checked={state[name]} onChange={() => {
                if (errors && errors[name]) {
                    setErrors({
                        ...errors,
                        [name]: false
                    })
                }
                setState({
                    ...state,
                    [name]: !state[name]
                })
            }} name={name} id="" hidden />
        </label>

    )
}

export default Checkbox