import { useEffect } from "react"
import Warning from "../icons/warning"
import { validators } from "../modals/reg/RegModal"
import InputStyleWrapper from "../styleWrap/InputStyleWrap"
import { useRouter } from 'next/dist/client/router'

const ValidatedTextInput = ({state, name, setState, errors, setErrors, placeholder}) => {
    const { query: {lang: lang} } = useRouter()
    return (
        <>
    <InputStyleWrapper>
        <input style={{
            position: "relative",
            zIndex: 0
        }} placeholder={`${placeholder ?? ''}`}
               name={name}
               value={state[name]}
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
        {lang === 'ru' ? 'Заполните данное поле' : 'Please fill in this field'}
            </div>}

        </>
    )
}

export default ValidatedTextInput