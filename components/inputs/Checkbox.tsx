import Checkmark from "../icons/checkmark"

const Checkbox = ({name, state, setState, setErrors, errors}) => {
    return (
        <label>
            <div className={`w-full h-full p-1 bg-white cursor-pointer flex items-center justify-center`}>
                <div className={`${state[name] ? "opacity-100" : "hover:opacity-50 opacity-0"} transition-all `}>
                <Checkmark/>
                </div>
            </div>

            <input type="checkbox" checked={state[name]} onChange={() => {
                if (errors[name]) {
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