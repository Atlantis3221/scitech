import { useEffect } from "react"
import PhoneInput from "react-phone-input-2"
import Warning from "../icons/warning"
import { validators } from "../modals/reg/RegModal"

const ValidatedPhoneInput = ({state, setState, errors, setErrors}) => {

    useEffect(() => {
      const res = Array.from(document.getElementsByClassName("country")) 
      res.map(elem => {
        elem.classList.add("z-30", "relative")
      })
    }, [])
    return (
        <>
        <PhoneInput
        
        inputStyle={{
            width: "100%",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            height: "3rem",
            borderRadius: 0
        }}
        country="ru"
        value={state["phone"]}
        onChange={(e) => {
            if (errors["phone"]) {
                setErrors({
                    ...errors,
                    phone: !validators.phone("+" + e)
                })
            }
            setState({
                ...state,
                phone: e
            })
        }}
        containerStyle={{
            zIndex:30,
            borderRadius: 0,
            fontFamily: "Arial"
        }}
        dropdownStyle={{
        }}
        buttonStyle={{
            zIndex: 9999,
            position: "absolute"
        }}
        dropdownClass={`absolute top-10 left-0 z-30`}
        containerClass={`w-full text-black ring-2 ring-transparent focus-within:ring-black hover:ring-input-hover transition-all`}
        />
            <div className={`w-6 h-6 absolute top-3 right-3 z-30`}>
                {errors["phone"] && <Warning/>}
            </div>
            {errors["phone"] && <div className={`mt-1`}>
                Заполните это поле
                </div>}

        </>
    )
}

export default ValidatedPhoneInput