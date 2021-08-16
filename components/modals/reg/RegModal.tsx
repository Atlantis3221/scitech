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
import ValidatedPhoneInput from "../../inputs/ValidatedPhoneInput"
import axios from "axios"

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
    name?: string,
    participationType?: ParticipationEnum,
    role?: string,
    amount?: string,
    theme?: string,
    phone?: string,
    year?: string,
    email?: string,
    confidential?: boolean,
    company?: string
}

type ParticipationEnum = "Индивидуальное" | "Групповое"


    const radioValues: ParticipationEnum[] = ["Индивидуальное", "Групповое"]
    const initialState: IRegState = {
        name: "",
        participationType: radioValues[0],
        role: "",
        amount: "",
        theme: "",
        year: "",
        email: "",
        phone: "",
        confidential: false,
        company: ""
    }
   export const validators = {
        name: ValidatorService.default,
        participationType: ValidatorService.default,
        role: ValidatorService.default,
        amount: ValidatorService.default,
        theme: ValidatorService.default,
        year: ValidatorService.default,
        email: ValidatorService.email,
        phone: isValidPhoneNumber,
        company: ValidatorService.default,
    }
    

const RegModal = () => {
    const initialErrors = Object.keys(initialState).reduce((acc, key) => {acc[key] = false; return acc; }, {})
    const modal = "reg"
    const {modalsState, regModalState} = useContext(ModalsContext)
    const isOpen = modalsState[modal]
    const [state, setState] = useState(initialState)
    const [errors, setErrors] = useState(initialErrors)
    const [loading, setLoading] = useState(false)
    const [addtionalNames, setAdditionalNames] = useState({
        name1: '',
        name2: "",
        name3: "",
        name4: "",
        name5: "",
        name6: ""
    })

    const sendData = async () => {
        setLoading(true)
        const res = await axios.post(`/api/reg/${regModalState.configName}`, regModalState.inputs.reduce((acc, key) => {acc[key] = state[key]; return acc; }, {}))
        setLoading(false)
        if (res.data.ok) {
            setState(initialState)
        }
    }

    const validate = () => {
        let obj = regModalState.inputs.reduce((acc, curr) => {
            if (curr == "confidential") {
                return acc
            }
            acc[curr] = !validators[curr](state[curr]);
            if (curr === "phone") {
                acc[curr] = !validators[curr]("+" + state[curr])
            }
            return acc
        }, {})
        if (regModalState.inputs.includes("confidential")) {
            const confidential = !ValidatorService.checkIfTrue(state.confidential)
            obj = {
                ...obj,
                confidential,
            }
        }
       
        setErrors({
            ...obj,
        })
        return obj
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
            pt-10 px-6 md:px-14 pb-10 font-raleway`}>
            <div className={`mb-8 text-white text-2xl`}>
            {regModalState.title}
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-4 gap-y-4 lg:gap-y-6 text-white`}>
                {regModalState.inputs.map(input => {
                    if (input === "name") {
                        if (state.participationType === "Индивидуальное") {
                            return (
                                <>
                                <div className={`col-span-1 flex items-center`}>
                                    Имя и фамилия
                                </div>
                                <div className={`col-span-3`}>
                                    <ValidatedTextInput errors={errors} state={state} name={"name"} setState={setState} setErrors={setErrors}/>
                                </div>
                                </>
                            )
                        }
                        else {
                            return (
                                <>
                                <div className={`col-span-1 flex items-center`}>
                                    Имя и фамилия
                                </div>
                                <div className={`col-span-3`}>
                                    <ValidatedTextInput errors={errors} state={state} name={"name"} setState={setState} setErrors={setErrors}/>
                                </div>
                                {Object.keys(addtionalNames).map(name => {
                                    return (
                                        <>
                                        <div className={`col-span-1 flex items-center`}>
                                        Имя и фамилия
                                        </div>
                                        <div className={`col-span-3`}>
                                            <ValidatedTextInput errors={{
                                                [name]: false
                                            }} state={addtionalNames} name={name} setState={setAdditionalNames} setErrors={setErrors}/>
                                        </div>
                                        </>
                                    )
                                })}
                                </>
                                
                            )
                            
                        }
                    }
                    if (input === "email") {
                        console.log("email")
                        return (
                            <>
                            <div className={`col-span-1 flex items-center`}>
                                Email
                            </div>
                            <div className={`col-span-3`}>
                                <ValidatedTextInput setErrors={setErrors} errors={errors} state={state} name={"email"} setState={setState}/>
                            </div>
                            </>
                        )
                    }
                    if (input === "participationType") {
                        return (
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
                             </>
                        )
                    }
                    if (input === "amount") {
                        return (
                            <>
                            <div className={`col-span-1 mb-1 flex items-center`}>
                                Количество человек
                            </div>
                            <div className={`col-span-3`}>
                                <ValidatedTextInput setErrors={setErrors} errors={errors} state={state} name={"amount"} setState={setState}/>
                            </div>
                            </>
                        )
                    }
                    if (input === "role") {
                        return (
                            <>
                            <div className={`col-span-1 flex items-center`}>
                                Должность
                            </div>
                            <div className={`col-span-3`}>
                                <ValidatedTextInput setErrors={setErrors} errors={errors} state={state} name={"role"} setState={setState}/>
                            </div>
                            </>
                        )
                    }
                    if (input === "year") {
                       return (
                        <>
                        <div className={`col-span-1 flex items-center`}>
                            Год аспирантуры 
                        </div>
                        <div className={`col-span-3`}>
                            <ValidatedTextInput setErrors={setErrors} errors={errors} state={state} name={"year"} setState={setState}/>
                        </div>
                        </>
                       ) 
                    }
                    if (input === "phone") {
                        return (
                            <>
                            <div className={`col-span-1 flex items-center`}>
                                Номер телефона
                            </div>
                             <div className={`col-span-3 relative z-40`}>
                                <ValidatedPhoneInput  setErrors={setErrors} errors={errors} state={state} setState={setState}/>
                            </div>
                            </>
                        )
                    }
                    if (input === "confidential") {
                        console.log(errors)
                        return (
                            <>
                            <div className={`col-span-1`}/>
                            <div className={`col-span-3 flex`}>
                                <div style={{
                                    color: Colors[regModalState.color].checkbox,
                                }} className={`w-6 h-6 flex-shrink-0 mr-2`}>
                                    <Checkbox state={state} setState={setState} setErrors={setErrors} errors={errors} name={"confidential"}/>
                                </div>
                                <div className={`${errors["confidential"] ? "text-error" : "text-white"}`}>
                                Даю согласие на обработку персональных данных, описанную в Политике обработки персональных данных
                                </div>
                            </div>
                            </>
                        )
                    }
                    if (input === "company") {
                        return (
                            <>
                            <div className={`col-span-1 flex items-center`}>
                               Организация
                            </div>
                            <div className={`col-span-3`}>
                                <ValidatedTextInput setErrors={setErrors} errors={errors} state={state} name={"company"} setState={setState}/>
                            </div>
                            </>
                        )
                    }
                })}

                <div className={`col-span-1`}>

                </div>
                <div className={`col-span-3`}>
                    <button
                    style={{
                        color: Colors[regModalState.color].checkbox
                    }}
                    className={`px-4 py-2 bg-white uppercase font-bold`}
                    onClick={() => {
                       const valid = validate()
                       if (!Object.values(valid).includes(true)) {
                          sendData()
                       }
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