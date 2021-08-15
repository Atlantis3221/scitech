import PhoneInput from "react-phone-input-2"
import Warning from "../icons/warning"
import { validators } from "../modals/reg/RegModal"

const ValidatedPhoneInput = ({state, setState, errors, setErrors}) => {
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
            borderRadius: 0
        }}
        dropdownStyle={{
            zIndex:30
        }}
        buttonStyle={{
            zIndex: 30
        }}
        dropdownClass={`absolute top-10 left-0`}
        containerClass={`w-full text-black`}
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