import { ReactNode, useContext } from "react"
import ModalsContext, { IModals } from "./ModalContext"

type IModalOverlayProps = {
    children: ReactNode,
    modal: IModals
}

const ModalOverlay = ({children, modal}: IModalOverlayProps) => {
    const {modalsState, modalService} = useContext(ModalsContext)
    const isOpen =  modalsState[modal] === true
    return (
        <div 
        onMouseDown={(e) => {
            modalService.closeModal(modal)
        }}
        className={`fixed top-0 left-0 w-full h-full place-items-center
        ${isOpen ? "bg-opacity-25 visible" : "bg-opacity-0 invisible"} p-4 flex justify-center z-50 bg-black transition-all duration-300`}>
            <div onMouseDown={(e) => {e.stopPropagation()}} className={`w-max  grid place-items-center h-full`}>{children}</div>
        </div>
    )
}

export default ModalOverlay