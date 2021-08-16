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
        onMouseUp={(e) => {
            modalService.closeModal(modal)
        }}
        className={`fixed top-0 left-0 w-full h-full place-items-center overflow-y-auto
        ${isOpen ? "bg-opacity-25 visible" : "bg-opacity-0 invisible"} z-50 bg-black transition-all duration-300`}>
            <div className={`w-full p-4 md:p-10 grid place-items-center overflow-y-auto`}
                 style={{  height: 'auto'}}>{children}</div>
        </div>
    )
}

export default ModalOverlay