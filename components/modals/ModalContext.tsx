import React from "react"

const ModalContext = React.createContext({})

type IModals = "reg"

type ModalState = {
    [key in IModals]: string
}

const ModalContextProvider = () => {

}

export default ModalContextProvider