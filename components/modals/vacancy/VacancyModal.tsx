import React, { MutableRefObject, useContext, useRef, useState } from "react"
import ValidatedTextInput from "../../inputs/ValidatedTextInput"
import { ValidatorService } from "../../inputs/validatorService"
import ModalsContext  from "../ModalContext"
import ModalOverlay from "../ModalOverlay"
import Checkbox from "../../inputs/Checkbox"
import { InputTextarea } from '../../inputs/inputTextarea'
import { InputFile } from '../../inputs/inputFile'
import axios from "axios"
import SentCheck from "../../icons/sentCheck"
import { useRouter } from "next/router"

export type IVacancyState = {
    name?: string,
    comment?: string,
    confidential?: boolean,
    file?: any,
}

const initialState: IVacancyState = {
    name: "",
    comment: "",
    confidential: false,
    file: undefined,
}
export const validators = {
    name: ValidatorService.default,
    comment: ValidatorService.default,
    file: ValidatorService.default,
}
    

const VacancyModal = ({ modalFormText = {} }) => {
    const { query: {lang: lang} } = useRouter()

    const initialErrors = Object.keys(initialState).reduce((acc, key) => {acc[key] = false; return acc; }, {})
    const modal = "vacancy"
    const {modalsState, modalService} = useContext(ModalsContext)
    const isOpen = modalsState[modal]

    const [state, setState] = useState(initialState)
    const [isSent, setIsSent] = useState(false)
    const [errors, setErrors] = useState(initialErrors)
    const [loading, setLoading] = useState(false)
    const scrollRef = useRef() as MutableRefObject<HTMLDivElement>

    const sendData = async () => {
        setLoading(true)
        let obj = {}
        const res = { data: {ok: true}}
        // const res = await axios.post(`/api/vacancy/${regModalState.configName}`,
        //   regModalState.inputs.reduce((acc, key) => {acc[key] = state[key]; return acc; }, obj))
        // setLoading(false)
        if (res.data.ok) {
            scrollRef.current.scrollTo(0,0)
            setIsSent(true)
            setTimeout(() => {
                modalService.closeModal("vacancy")
            }, 2000)
            setTimeout(() => {
                setIsSent(true)
                setState(initialState)
            }, 2500)
        }
    }

    const toBase64 = async (file) => new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
    })

    {/*const validate = () => {*/}
    {/*    let obj = regModalState.inputs.reduce((acc, curr) => {*/}
    //         if (curr === "file") {
    //            // const value = await toBase64(state[curr])
    //            // console.log(value)
    //         }
    //         return acc
    {/*    }, {})*/}
    {/*    console.log(obj)*/}
    //     if (regModalState.inputs.includes("confidential")) {
    //         const confidential = !ValidatorService.checkIfTrue(state.confidential)
    //         obj = {
    //             ...obj,
    //             confidential,
    //         }
    //     }
    //     setErrors({
    //         ...obj,
    //     })
    //     return obj
    // }
    
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
            ${isSent ? "overflow-hidden" : "overflow-y-auto"}
            max-w-3xl w-full relative z-50 h-full
            ${isOpen ? "opacity-100 visible scale-100" : "opacity-10 invisible scale-75"}
            transistion-all duration-300 transform origin-center 
            `}>
                <div className={`w-full overflow-y-auto pt-10 px-6 md:px-14 pb-10 font-raleway`} style={{ backgroundColor: '#9F1E1E'}}>
                    <div className={`mb-8 text-white text-2xl w-3/4`}>
                        Подать резюме
                        <span style={{ display: 'block', fontSize: 'initial', paddingTop: '1rem'}}>
                            Мы формируем базу резюме, но не публикуем ее в общий доступ
                        </span>
                    </div>

                    <div className={`grid grid-cols-1 md:grid-cols-4 gap-y-4 lg:gap-y-6 text-white`}>
                        <>
                            <div className={`col-span-1 flex items-center`}>Имя и фамилия</div>
                            <div className={`col-span-3`}>
                                <ValidatedTextInput errors={errors}
                                                    state={state}
                                                    name={"name"}
                                                    setState={setState}
                                                    placeholder={'Имя и фамилия'}
                                                    setErrors={setErrors}/>
                            </div>
                        </>
                        <>
                            <div className={`col-span-1 flex items-center`}>Файл</div>
                            <div className={`col-span-3`}>
                                <InputFile state={state}
                                           name={"comment"}
                                           description={'resume'}
                                           setState={setState}/>
                            </div>
                        </>
                        <>
                            <div className={`col-span-1 flex items-center`}>Комментарий</div>
                            <div className={`col-span-3`}>
                                <InputTextarea state={state}
                                               name={"comment"}
                                               placeholder={'Комментарий'}
                                               setState={setState}/>
                            </div>
                        </>
                        <>
                            <div className={`col-span-1`}/>
                            <div className={`col-span-3 flex mt-4`}>
                                <div style={{ color: "#E52C2C" }} className={`w-6 h-6 flex-shrink-0 mr-2`}>
                                    <Checkbox state={state} setState={setState} setErrors={setErrors} errors={errors} name={"confidential"}/>
                                </div>
                                <div className={`${errors["confidential"] ? "text-error" : "text-white"}`}>
                                    <p className="mt0">Даю согласие на обработку персональных данных, описанную в
                                        <a href={`/${lang}/policy`} className='class="input_linkToPolicy"'>
                                            Политике обработки персональных данных</a>
                                    </p>
                                </div>
                            </div>
                        </>

                        <div className={`col-span-1`}> </div>
                        <div className={`col-span-3`}>
                            <button style={{ color: "#E52C2C" }}
                            className={`px-4 py-2 bg-white uppercase font-bold`}
                            onClick={() => {
                               // const valid = validate()
                               // if (!Object.values(valid).includes(true)) {
                                  sendData()
                               // }
                            }}
                            >Отправить
                            </button>
                        </div>
                        </div>
                        <div style={{ backgroundColor: '#9F1E1E'}}
                             className={`fixed ${isSent ? "visible opacity-100" : "invisible opacity-0"} transition-all duration-300 w-full top-0 left-0 h-full z-40 grid place-items-center px-10 text-white`}>
                            <div className={`flex flex-col items-center`}>
                                <SentCheck/>
                                <div className={`text-2xl font-bold mt-4 mb-5`}>Спасибо за отклик на резюме</div>
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

export default VacancyModal
