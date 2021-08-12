import { useContext, useState } from "react"
import Radio from "../../inputs/Radio"
import ValidatedTextInput from "../../inputs/ValidatedTextInput"
import { ValidatorService } from "../../inputs/validatorService"
import InputStyleWrapper from "../../styleWrap/InputStyleWrap"
import ModalsContext  from "../ModalContext"
import ModalOverlay from "../ModalOverlay"
import PhoneInput from 'react-phone-input-2'
import { isValidPhoneNumber } from "react-phone-number-input";
import Warning from "../../icons/warning"
import Checkbox from "../../inputs/Checkbox"

export const Colors = {
    red: {
      bg: "#9F1E1E",
      checkbox: "#E52C2C"
    },
    green: {
      bg: "#309D64",
      checkbox: "#309D64"
    },
    blue: {
      bg: "#3E92CC",
      checkbox: "#3E92CC"
    },
    yellow: {
      bg: "#D66E14",
      checkbox: "#D66E14"
    }
}

type IRegState = {
    firstName?: string,
    lastName?: string,
    participationType?: string,
    role?: string,
    amount?: string,
    theme?: string,
    phone?: string,
    year?: string,
    email?: string,
    policy?: boolean
}


    const radioValues = ["Индивидуальное", "Групповое"]
    const initialState: IRegState = {
        firstName: "",
        lastName: "",
        participationType: radioValues[0],
        role: "",
        amount: "",
        theme: "",
        year: "",
        email: "",
        phone: "",
        policy: false
    }
    const validators = {
        firstName: ValidatorService.default,
        lastName: ValidatorService.default,
        participationType: ValidatorService.default,
        role: ValidatorService.default,
        amount: ValidatorService.default,
        theme: ValidatorService.default,
        year: ValidatorService.default,
        email: ValidatorService.email,
        phone: isValidPhoneNumber,
        policy: ValidatorService.true
    }
    

const RegModal = () => {
    const initialErrors = Object.keys(initialState).reduce((acc, key) => {acc[key] = false; return acc; }, {})
    const modal = "reg"
    const {modalService, modalsState, regModalState} = useContext(ModalsContext)
    const isOpen = modalsState[modal]
    const [state, setState] = useState(initialState)
    const [errors, setErrors] = useState(initialErrors)

    console.log(state)

    const validate = () => {
        const obj = Object.keys(state).reduce((acc, curr) => {
            acc[curr] = !validators[curr](state[curr]);
            if (curr === "phone") {
                acc[curr] = !validators[curr]("+" + state[curr])
            }
            return acc
        }, {})
        setErrors(obj)
    }
    
    return (
        <ModalOverlay modal={modal}>
            <div         
            onClick={(e) => {
                e.stopPropagation()
            }}
            onMouseUp={(e) => {
                e.stopPropagation()
            }}
            style={{
                backgroundColor: Colors[regModalState.color].bg
            }}
            className={`
            overflow-y-auto max-w-3xl w-full h-full relative z-50 bg-white 
            ${isOpen ? "opacity-100 visible scale-100" : "opacity-10 invisible scale-75"}
            transistion-all duration-300 transform origin-center
            pt-14 px-6 md:px-14 pb-10`}>
            <div className={`md:grid grid-cols-4 gap-y-4 text-white`}>
                {regModalState.inputs.includes("participationType") &&
                <>
               <div className={`col-span-1`}>
                Тип участия
               </div>
               <div className={`col-span-3`}>
                     {radioValues.map(a => {
                    return <div className={`w-6 h-6 mb-2`}>
                        <Radio value={a} state={state} setState={setState} color={Colors[regModalState.color].checkbox} name={"participationType"}/>
                    </div>
                    })}
                </div>
                </>}
                {regModalState.inputs.includes("firstName") &&
                <>
                <div className={`col-span-1`}>
                    Имя
                </div>
                <div className={`col-span-3`}>
                    <ValidatedTextInput errors={errors} state={state} name={"firstName"} setState={setState}/>
                </div>
                </>
                }
                {regModalState.inputs.includes("lastName") &&
                <>
                <div className={`col-span-1 flex items-center`}>
                    Фамилия
                </div>
                <div className={`col-span-3`}>
                    <ValidatedTextInput errors={errors} state={state} name={"lastName"} setState={setState}/>
                </div>
                </>
                }
                {regModalState.inputs.includes("role") &&
                <>
                <div className={`col-span-1 flex items-center`}>
                    Должность
                </div>
                <div className={`col-span-3`}>
                    <ValidatedTextInput errors={errors} state={state} name={"role"} setState={setState}/>
                </div>
                </>}
                {regModalState.inputs.includes("amount") &&
                <>
                <div className={`col-span-1 mb-1 flex items-center`}>
                    Количество человек
                </div>
                <div className={`col-span-3`}>
                    <ValidatedTextInput errors={errors} state={state} name={"amount"} setState={setState}/>
                </div>
                </>}
                {regModalState.inputs.includes("year")  &&
                <>
                <div className={`col-span-1 flex items-center`}>
                    Год аспирантуры 
                </div>
                <div className={`col-span-3`}>
                    <ValidatedTextInput errors={errors} state={state} name={"year"} setState={setState}/>
                </div>
                </>}
                {regModalState.inputs.includes("phone") &&
                <>
                <div className={`col-span-1 flex items-center`}>
                    Номер телефона
                </div>
                 <div className={`col-span-3 relative z-30`}>
                 <PhoneInput
                    inputStyle={{
                        width: "100%",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        height: "3rem"
                    }}
                    country="ru"
                    value={state["phone"]}
                    onChange={(e) => {
                        setState({
                            ...state,
                            phone: e
                        })
                    }}
                    containerStyle={{
                        zIndex:30
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
                </div>
                </>
                }
                {regModalState.inputs.includes("email") &&
                <>
                <div className={`col-span-1 flex items-center`}>
                    Email
                </div>
                <div className={`col-span-3`}>
                    <ValidatedTextInput errors={errors} state={state} name={"email"} setState={setState}/>
                </div>
                </>
                }
                <div className={`col-span-1`}>

                </div>
                <div className={`col-span-3`}>
                    <div style={{
                        color: Colors[regModalState.color].checkbox
                    }} className={`w-6 h-6`}>
                        <Checkbox state={state} setState={setState} name={"policy"}/>
                    </div>
                </div>
                <div className={`col-span-1`}>

                </div>
                <div>
                    <button
                    style={{
                        color: Colors[regModalState.color].checkbox
                    }}
                    className={`px-4 py-2 bg-white uppercase`}
                    onClick={() => {
                        validate()
                    }}
                    >Отправить
                    </button>
                </div>
                </div>

               
            </div>
        </ModalOverlay>
    )
}

export default RegModal