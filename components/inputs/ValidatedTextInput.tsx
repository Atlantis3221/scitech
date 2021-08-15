import { useEffect } from "react"
import Warning from "../icons/warning"
import { validators } from "../modals/reg/RegModal"
import InputStyleWrapper from "../styleWrap/InputStyleWrap"

const ValidatedTextInput = ({state, name, setState, errors, setErrors}) => {
    return (
        <>
    <InputStyleWrapper>
        <input style={{
            position: "relative",
            zIndex: 0
        }} name={name} value={state[name]} 
         onChange={(e) => {
            if (errors[name]) {
                setErrors({
                    ...errors,
                    [name]: !validators[name](e.target.value)
                })
            }
             setState({
                 ...state,
                 [name]: e.target.value
             })
         }}/>
        <div className={`w-6 h-6`}>
           {errors[name] && <Warning/>} 
        </div>
    </InputStyleWrapper>
    {errors[name] && <div className={`mt-1 text-sm`}>
               Заполните данное поле
            </div>}

        </>
    )
}

export default ValidatedTextInput