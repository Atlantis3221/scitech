import React, { MutableRefObject, useContext, useRef, useState } from "react"
import Radio from "../../inputs/Radio"
import ValidatedTextInput from "../../inputs/ValidatedTextInput"
import { ValidatorService } from "../../inputs/validatorService"
import ModalsContext  from "../ModalContext"
import ModalOverlay from "../ModalOverlay"
import { isValidPhoneNumber } from "react-phone-number-input";
import Checkbox from "../../inputs/Checkbox"
import ValidatedPhoneInput from "../../inputs/ValidatedPhoneInput"
import { InputTextarea } from '../../inputs/inputTextarea'
import { InputFile } from '../../inputs/inputFile'
import axios from "axios"
import SentCheck from "../../icons/sentCheck"
import { useRouter } from "next/router"

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
    },
    violet: {
        bg: "#8C1F7D",
        checkbox: "#9F248E"
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
    speciality?: string,
    email?: string,
    confidential?: boolean,
    company?: string,
    speaker?: boolean
    comment?: string
    file?: any
}

type ParticipationEnum = "Индивидуальное" | "Групповое"

    const defaultAdditionalNames = {
        name1: '',
        name2: "",
        name3: "",
        name4: "",
        name5: "",
        name6: ""
    }
    const radioValues: ParticipationEnum[] = ["Индивидуальное", "Групповое"]
    const initialState: IRegState = {
        name: "",
        participationType: radioValues[0],
        role: "",
        amount: "",
        theme: "",
        year: "",
        speciality: "",
        email: "",
        phone: "",
        confidential: false,
        company: "",
        comment: "",
        file: undefined
    }
   export const validators = {
        name: ValidatorService.default,
        participationType: ValidatorService.default,
        role: ValidatorService.default,
        amount: ValidatorService.default,
        theme: ValidatorService.default,
        year: ValidatorService.default,
        speciality: ValidatorService.default,
        email: ValidatorService.email,
        phone: isValidPhoneNumber,
        company: ValidatorService.default,
        comment: ValidatorService.default,
        file: ValidatorService.default,
    }
    

const RegModal = ({ modalFormText = {} }) => {
    const { query: {lang: lang} } = useRouter()
    const initialErrors = Object.keys(initialState).reduce((acc, key) => {acc[key] = false; return acc; }, {})
    const modal = "reg"
    const {modalsState, regModalState, setRegModalState, modalService} = useContext(ModalsContext)
    const isOpen = modalsState[modal]
    const [state, setState] = useState(initialState)
    const [errors, setErrors] = useState(initialErrors)
    const [loading, setLoading] = useState(false)
    const [addtionalNames, setAdditionalNames] = useState(defaultAdditionalNames)
    const scrollRef = useRef() as MutableRefObject<HTMLDivElement>

    const sendData = async () => {
        setLoading(true)
        let obj = {}
        if (state.participationType === "Групповое") {
            obj = addtionalNames
        }
        const res = await axios.post(`/api/reg/${regModalState.configName}`, regModalState.inputs.reduce((acc, key) => {acc[key] = state[key]; return acc; }, obj))
        setLoading(false)
        if (res.data.ok) {
            scrollRef.current.scrollTo(0,0)
            setRegModalState({
                ...regModalState,
                isSent: true
            })
            setTimeout(() => {
                modalService.closeModal("reg")
            }, 2000)
            setTimeout(() => {
                setRegModalState({
                    ...regModalState,
                    isSent: false
                })
                setState(initialState)
                setAdditionalNames(defaultAdditionalNames)
            }, 2500)
        }
    }

    const validate = () => {
        let obj = regModalState.inputs.reduce((acc, curr) => {
            if (curr == "confidential") {
                return acc
            }
            if (curr === "speaker") {
                return acc
            }
            if (curr === "amount") {
                if (state.participationType === "Групповое") {
                    return acc[curr] = !validators[curr](state[curr]);
                }
                return acc
            }
            acc[curr] = !validators[curr](state[curr]);
            if (curr === "phone") {
                acc[curr] = !validators[curr]("+" + state[curr])
            }
            if (curr === "file") {
               // value = await toBase64(state[curr])
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
            ref={scrollRef}
            className={`
            ${regModalState.isSent ? "overflow-hidden" : "overflow-y-auto"}
            max-w-3xl w-full relative z-50 h-full
            ${isOpen ? "opacity-100 visible scale-100" : "opacity-10 invisible scale-75"}
            transistion-all duration-300 transform origin-center 
            `}>
                <div className={`w-full overflow-y-auto pt-10 px-6 md:px-14 pb-10 font-raleway`} style={{
                    backgroundColor: Colors[regModalState.color].bg
                }}>
                    <div className={`mb-8 text-white text-2xl w-3/4`}>
                        {regModalState.title}
                        <span style={{ display: 'block', fontSize: 'initial', paddingTop: '1rem'}}>
                            {regModalState.subtitle}</span>
                    </div>

                    <div className={`grid grid-cols-1 md:grid-cols-4 gap-y-4 lg:gap-y-6 text-white`}>
                        {regModalState.inputs.map(input => {
                            if (input === "name") {
                                if (state.participationType === "Индивидуальное") {
                                    return (
                                        <>
                                        <div className={`col-span-1 flex items-center`}>
                                            { modalFormText["Имя и фамилия"]}
                                        </div>
                                        <div className={`col-span-3`}>
                                            <ValidatedTextInput errors={errors}
                                                                state={state}
                                                                name={"name"}
                                                                setState={setState}
                                                                placeholder={modalFormText["Имя и фамилия"]}
                                                                setErrors={setErrors}/>
                                        </div>
                                        </>
                                    )
                                }
                                else {
                                    return (
                                        <>
                                        <div className={`col-span-1 flex items-center`}>
                                            {regModalState.configName !== "strategicEducationalIntensive" ? modalFormText["Имя и фамилия"] : "ФИО контактного лица лица"}
                                        </div>
                                        <div className={`col-span-3`}>
                                            <ValidatedTextInput errors={errors}
                                                                state={state}
                                                                name={"name"}
                                                                setState={setState}
                                                                placeholder={modalFormText["Имя и фамилия"]}
                                                                setErrors={setErrors}/>
                                        </div>
                                        </>

                                    )

                                }
                            }
                            if (input === "email") {
                                return (
                                    <>
                                    <div className={`col-span-1 flex items-center`}>
                                        Email
                                    </div>
                                    <div className={`col-span-3`}>
                                        <ValidatedTextInput setErrors={setErrors}
                                                            errors={errors}
                                                            state={state}
                                                            name={"email"}
                                                            placeholder={lang === 'ru' ? 'example@test.com' : 'example@test.com'}
                                                            setState={setState}/>
                                    </div>
                                    </>
                                )
                            }
                            if (input === "participationType") {
                                return (
                                    <>
                                    <div className={`col-span-1`}>
                                        {modalFormText["Тип участия"]}
                                    </div>
                                    <div className={`col-span-3`}>
                                          {radioValues.map(a => {
                                         return <div className={`w-6 h-6 mb-2`} key={Math.random()}>
                                             <Radio value={a}
                                                    state={state}
                                                    setState={setState}
                                                    color={Colors[regModalState.color].checkbox}
                                                    name={"participationType"}/>
                                         </div>
                                         })}
                                     </div>
                                     </>
                                )
                            }
                            if (state.participationType === "Групповое" && input === "amount") {
                                return (
                                    <>
                                    <div className={`col-span-1 mb-1 flex items-center pr-4`}>
                                        {modalFormText["Количество человек"]}
                                    </div>
                                    <div className={`col-span-3`}>
                                        <ValidatedTextInput setErrors={setErrors}
                                                            errors={errors}
                                                            state={state}
                                                            name={"amount"}
                                                            placeholder={modalFormText["Количество человек"]}
                                                            setState={setState}/>
                                    </div>
                                    </>
                                )
                            }
                            if (input === "role") {
                                return (
                                    <>
                                    <div className={`col-span-1 flex items-center`}>
                                        {modalFormText["Должность"]}
                                    </div>
                                    <div className={`col-span-3`}>
                                        <ValidatedTextInput setErrors={setErrors}
                                                            errors={errors}
                                                            state={state}
                                                            name={"role"}
                                                            placeholder={modalFormText["Должность"]}
                                                            setState={setState}/>
                                    </div>
                                    </>
                                )
                            }
                            if (input === "company") {
                                return (
                                  <>
                                      <div className={`col-span-1 flex items-center`}>
                                          {modalFormText["Организация"]}
                                      </div>
                                      <div className={`col-span-3`}>
                                          <ValidatedTextInput setErrors={setErrors}
                                                              errors={errors}
                                                              state={state}
                                                              name={"company"}
                                                              placeholder={modalFormText["Организация"]}
                                                              setState={setState}/>
                                      </div>
                                  </>
                                )
                            }
                            if (input === "speciality") {
                                return (
                                  <>
                                      <div className={`col-span-1 flex items-center`}>
                                          {modalFormText["Направление аспирантуры"]}
                                      </div>
                                      <div className={`col-span-3`}>
                                          <ValidatedTextInput setErrors={setErrors}
                                                              errors={errors}
                                                              state={state}
                                                              name={"speciality"}
                                                              placeholder={modalFormText["Направление аспирантуры"]}
                                                              setState={setState}/>
                                      </div>
                                  </>
                                )
                            }
                            if (input === "year") {
                               return (
                                <>
                                <div className={`col-span-1 flex items-center`}>
                                    {modalFormText["Год аспирантуры"]}
                                </div>
                                <div className={`col-span-3`}>
                                    <ValidatedTextInput setErrors={setErrors}
                                                        errors={errors}
                                                        state={state}
                                                        name={"year"}
                                                        placeholder={modalFormText["Год аспирантуры"]}
                                                        setState={setState}/>
                                </div>
                                </>
                               )
                            }
                            if (input === "phone") {
                                return (
                                    <>
                                    <div className={`col-span-1 flex items-center`}>
                                        {modalFormText["Телефон"]}
                                    </div>
                                     <div className={`col-span-3 relative z-40`}>
                                        <ValidatedPhoneInput  setErrors={setErrors} errors={errors} state={state} setState={setState}/>
                                    </div>
                                    </>
                                )
                            }
                            if (input === "confidential") {
                                return (
                                    <>
                                    <div className={`col-span-1`}/>
                                    <div className={`col-span-3 flex mt-4`}>
                                        <div style={{
                                            color: Colors[regModalState.color].checkbox,
                                        }} className={`w-6 h-6 flex-shrink-0 mr-2`}>
                                            <Checkbox state={state} setState={setState} setErrors={setErrors} errors={errors} name={"confidential"}/>
                                        </div>
                                        <div className={`${errors["confidential"] ? "text-error" : "text-white"}`}>
                                            <p className="mt0">{modalFormText["Даю согласие на обработку персональных данных, описанную в "]}
                                                <a href={`/${lang}/policy`} className='class="input_linkToPolicy"'> {modalFormText["Политике обработки персональных данных"]}</a>
                                            </p>
                                        </div>
                                    </div>
                                    </>
                                )
                            }
                            if (input === "speaker") {
                                return (
                                    <>
                                    <div className={`col-span-1`}/>
                                    <div className={`col-span-3 flex mt-4`}>
                                        <div style={{
                                            color: Colors[regModalState.color].checkbox,
                                        }} className={`w-6 h-6 flex-shrink-0 mr-2`}>
                                            <Checkbox state={state} setState={setState} setErrors={setErrors} errors={errors} name={"speaker"}/>
                                        </div>
                                        <div className={`${errors["speaker"] ? "text-error" : "text-white"}`}>
                                            <p className="mt0">{modalFormText["Принять участие как спикер"]}</p>
                                        </div>
                                    </div>
                                    </>
                                )
                            }
                            if (input === "comment") {
                                return (
                                  <>
                                      <div className={`col-span-1 flex items-center`}>
                                          {modalFormText["Комментарий"]}
                                      </div>
                                      <div className={`col-span-3`}>
                                          <InputTextarea state={state}
                                                              name={"comment"}
                                                              placeholder={modalFormText["Комментарий"]}
                                                              setState={setState}/>
                                      </div>
                                  </>
                                )
                            }
                            if (input === "file") {
                                return (
                                  <>
                                      <div className={`col-span-1 flex items-center`}>
                                          {modalFormText["Файл"]}
                                      </div>
                                      <div className={`col-span-3`}>
                                          <InputFile state={state}
                                                         name={"comment"}
                                                         description={'resume'}
                                                         setState={setState}/>
                                      </div>
                                  </>
                                )
                            }
                        })}
 
                        {regModalState.configName !== "strategicEducationalIntensive" && state.participationType === "Групповое" && <div className={`col-span-4 text-2xl `}>Члены команды</div> }
                         {regModalState.configName !== "strategicEducationalIntensive" && state.participationType === "Групповое" && Object.keys(defaultAdditionalNames).map(name => {
                                            return (
                                                <>
                                                <div className={`col-span-1 flex items-center`}>
                                                    {modalFormText["Имя и фамилия"]}
                                                </div>
                                                <div className={`col-span-3`}>
                                                    <ValidatedTextInput placeholder={modalFormText["Имя и фамилия"]} errors={{
                                                        [name]: false
                                                    }} state={addtionalNames} name={name} setState={setAdditionalNames} setErrors={setErrors}/>
                                                </div>
                                                </>
                                            )
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
                            >{modalFormText["Отправить"]}
                            </button>
                        </div>
                        </div>
                        <div
                        style={{
                            backgroundColor: Colors[regModalState.color].bg
                        }}
                        className={`fixed ${regModalState.isSent ? "visible opacity-100" : "invisible opacity-0"} transition-all duration-300 w-full top-0 left-0 h-full z-40 grid place-items-center px-10 text-white`}>
                            <div className={`flex flex-col items-center`}>
                                <SentCheck/>
                                <div className={`text-2xl font-bold mt-4 mb-5`}>
                                    {modalFormText["Спасибо, вы успешно зарегистрировались"]}
                                </div>
                                <div>
                                    {modalFormText["До встречи на мероприятии!"]}
                                </div>
                            </div>

                        </div>
                        <div className={`absolute right-10 top-10 z-40 cursor-pointer`} onClick={() => {modalService.closeModal(modal)}}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.06066 8L15.5303 14.4697C15.8232 14.7626 15.8232 15.2374 15.5303 15.5303C15.2374 15.8232 14.7626 15.8232 14.4697 15.5303L8 9.06066L1.53033 15.5303C1.23744 15.8232 0.762563 15.8232 0.46967 15.5303C0.176777 15.2374 0.176777 14.7626 0.46967 14.4697L6.93934 8L0.46967 1.53033C0.176777 1.23744 0.176777 0.762563 0.46967 0.46967C0.762563 0.176777 1.23744 0.176777 1.53033 0.46967L8 6.93934L14.4697 0.46967C14.7626 0.176777 15.2374 0.176777 15.5303 0.46967C15.8232 0.762563 15.8232 1.23744 15.5303 1.53033L9.06066 8Z" fill="#F5F5F5"/>
                            </svg>
                        </div>

                    </div>
                </div>
        </ModalOverlay>
    )
}

export default RegModal
