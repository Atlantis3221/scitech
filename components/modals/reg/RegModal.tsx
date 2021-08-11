import { useContext, useState } from "react"
import Radio from "../../inputs/Radio"
import Checkbox from "../../inputs/Radio"
import ValidatedTextInput from "../../inputs/ValidatedTextInput"
import { ValidatorService } from "../../inputs/validatorService"
import InputStyleWrapper from "../../styleWrap/InputStyleWrap"
import ModalsContext, { Colors } from "../ModalContext"
import ModalOverlay from "../ModalOverlay"

const radioValues = ["Индивидуальное", "Групповое"]
    const initialState = {
        firstName: "",
        lastName: "",
        participationType: radioValues[0],
        role: "",
        amount: "",
        theme: "",
        year: "",
        email: "",

    }
    const validators = {
        firstName: ValidatorService.default,
        lastName: ValidatorService.default,
        participationType: ValidatorService.default,
        role: ValidatorService.default,
        amount: ValidatorService.default,
        year: ValidatorService.default,
        email: ValidatorService.email,


    }
    

const RegModal = () => {
    const modal = "reg"
    const {modalService, modalsState, regModalState} = useContext(ModalsContext)
    const isOpen = modalsState[modal]
    const [state, setState] = useState(initialState)
    const [errors, setErrors] = useState(Object.keys(initialState).reduce((acc, key) => {acc[key] = false; return acc; }, {}))
    
    
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
            overflow-y-auto max-w-3xl w-full h-full relative z-50 bg-white rounded-lg
            ${isOpen ? "opacity-100 visible scale-100" : "opacity-10 invisible scale-75"}
            transistion-all duration-300 transform origin-center
            pt-24 px-4 md:px-8 pb-10`}>
            <div className={`md:grid grid-cols-4 gap-y-4 text-white`}>
               {state.participationType && 
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
                {typeof state.firstName !== undefined && 
                <>
                <div className={`col-span-1`}>
                    Имя
                </div>
                <div className={`col-span-3`}>
                    <ValidatedTextInput errors={errors} state={state} name={"firstName"} setState={setState}/>
                </div>
                </>
                }
                {typeof state.lastName !== undefined && 
                <>
                <div className={`col-span-1 flex items-center`}>
                    Фамилия
                </div>
                <div className={`col-span-3`}>
                    <ValidatedTextInput errors={errors} state={state} name={"lastName"} setState={setState}/>
                </div>
                </>
                }
                {typeof state.role !== undefined && 
                <>
                <div className={`col-span-1 flex items-center`}>
                    Должность
                </div>
                <div className={`col-span-3`}>
                    <ValidatedTextInput errors={errors} state={state} name={"role"} setState={setState}/>
                </div>
                </>}
                {typeof state.amount !== undefined && 
                <>
                <div className={`col-span-1 flex items-center`}>
                    Количество человек
                </div>
                <div className={`col-span-3`}>
                    <ValidatedTextInput errors={errors} state={state} name={"amount"} setState={setState}/>
                </div>
                </>}
                {typeof state.year !== undefined && 
                <>
                <div className={`col-span-1 flex items-center`}>
                    Год аспирантуры 
                </div>
                <div className={`col-span-3`}>
                    <ValidatedTextInput errors={errors} state={state} name={"year"} setState={setState}/>
                </div>
                </>}
                <>
                <div className={`col-span-1 flex items-center`}>
                    Год аспирантуры 
                </div>
                <div className={`col-span-3`}>
                  
                </div>
                </>

                </div>

               
            </div>
        </ModalOverlay>
    )
}

export default RegModal