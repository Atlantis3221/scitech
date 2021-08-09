import { useContext } from "react"
import ModalsContext, { Colors } from "../ModalContext"
import ModalOverlay from "../ModalOverlay"

const RegModal = () => {
    const modal = "reg"
    const {modalService, modalsState, regModalState} = useContext(ModalsContext)
    const isOpen = modalsState[modal]
    
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
                backgroundColor: Colors[regModalState]
            }}
            className={`
            overflow-y-auto max-w-3xl w-full h-full relative z-50 bg-white rounded-lg
            ${isOpen ? "opacity-100 visible scale-100" : "opacity-10 invisible scale-75"}
            transistion-all duration-300 transform origin-center
            pt-24 px-4 md:px-8 pb-10`}>

            </div>
        </ModalOverlay>
    )
}

export default RegModal