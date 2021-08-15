import Checkmark from "../icons/checkmark"

const Checkbox = ({name, state, setState}) => {
    return (
        <label>
            <div className={`w-full h-full p-1 bg-white cursor-pointer flex items-center justify-center`}>
                <div className={`${state[name] ? "opacity-100" : "hover:opacity-50 opacity-0"} transition-all mr-2`}>
                <Checkmark/>
                </div>
            </div>

            <input type="checkbox" checked={state[name]} onChange={() => {
                setState({
                    ...state,
                    [name]: !state[name]
                })
            }} name={name} id="" hidden />
        </label>

    )
}

export default Checkbox