import React, { ReactNode, Reducer, useEffect, useState } from "react";
import { useReducer } from "react";

export type IModals = "reg"

type ContextProps = {
  modalsState: IModalState,
  modalService: ModalService,
  regModalState: IRegModalState
  setRegModalState: React.Dispatch<React.SetStateAction<IRegModalState>>
}

const ModalsContext = React.createContext<Partial<ContextProps>>({});

interface Props {
  children: ReactNode;
}

type IModalState = {
  [key in IModals]: boolean
}

type IColoredInputs = {
  bg: string,
  checkbox: string
}

type IColors = {
    red: IColoredInputs,
    green: IColoredInputs,
    blue: IColoredInputs,
    yellow: IColoredInputs,
    voilet: IColoredInputs
}

type IRegModalInput = "participationType" | "name" | "role" | "amount" | "theme" | "phone" | "year" | "confidential" | "email" | "company"

type IConfigNames = 'scienceLeadSchoolNextSet' |
'scienceLeadSchoolMyRegion' |
'managementSchoolNextSet' |
'managementSchoolMyRegion' |
'accelerationProgramNextSet' |
'onlineForumConsortium' |
'gameMethodsInEducation' |
'subscribeToNews' |
'recruitingPriceDevelopEvent' |
'becomeClient' |
'scientificPracticalConference'

type IRegModalState = {
    color: keyof IColors,
    inputs: IRegModalInput[],
    title: string,
    configName: IConfigNames,
    isSent: boolean
}

const initialState:IModalState = {
    reg: false
}

type IAction = 
{type: "openModal",  payload: IModals} | 
{type: "closeModal", payload: IModals} |
{type: "closeAll"}

const modalReducer: Reducer<IModalState, IAction> = (state, action) => {
  if (action.type === "openModal") {
    return {
      ...state,
      [action.payload]: true
    }
  }
  if (action.type === "closeModal") {
    return {
      ...state,
      [action.payload]: false
    }
  }
  if (action.type === "closeAll") {
    return {
       ...Object.keys(state).reduce((acc, key) => {acc[key] = false; return acc; }, state)
    }
  }
}

class ModalService {
  dispatch: React.Dispatch<IAction>
  constructor(dispatch){
    this.dispatch = dispatch
  }
  openModal(modal: IModals){
    this.dispatch({type: "openModal", payload: modal})
  }
  closeModal(modal: IModals){
    this.dispatch({type: "closeModal", payload: modal})
  }
  closeAll() {
    this.dispatch({type: "closeAll"})
  }
}

const ModalsContextProvider = ({ children }: Props) => {
  const [modalsState, dispatch] = useReducer(modalReducer, initialState)
  const modalService = new ModalService(dispatch)
  const [regModalState, setRegModalState] = useState<IRegModalState>({
    color: "red",
    inputs: ["participationType", "name", "phone", "email", "confidential"],
    title: "",
    configName: "becomeClient",
    isSent: false
  })

  return (
    <ModalsContext.Provider
      value={{
        modalsState,
        modalService,
        regModalState,
        setRegModalState
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
};

export default ModalsContext;

export { ModalsContextProvider };