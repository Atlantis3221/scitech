import { Dispatch, useReducer, useState } from "react"
import DropdownToggle from "../../../components/icons/dropdownToggle"
import Checkbox from "../../../components/inputs/Checkbox"
import Dropdown from "../../../components/inputs/Dropdown"
import { Page } from "../../../components/page"
import backendService, { BackRequest } from "../../../helpers/backendService"



type IVacanciesState = {
    location: string,
    locations: string[],
    vacancies?: IShortVacancy[]
}

export type IShortVacancy = {
    image: string,
    name: string,
    employer: string,
    salary?: string,
    location: string
}

type IVacancyAction = 
{type: "setLocation", payload: string} |
{type: "setVacancies", payload: IShortVacancy[]}

interface VacancyPageProps {
    locations: string[],
    vacancies: IShortVacancy[]
}

const VacancyReducer = (state:IVacanciesState, action: IVacancyAction) => {

    if (action.type === "setLocation") {
        return {
            ...state,
            location: action.payload
        }
    }
    if (action.type === "setVacancies") {
        console.log(action.payload)
        return {
            ...state,
            vacancies: action.payload
        }
    }
}

class CVacancyService {
    private dispatch: Dispatch<IVacancyAction>
    private state: IVacanciesState
    constructor(dispatch,state) {
        this.dispatch = dispatch
        this.state = state
    }
    async changeLocation(value: string) {
        if (this.state.location === value) {
            return
        }
        this.dispatch({type: "setLocation", payload: value})
        if (value === "Любая") {
            const vacancies = (await backendService.getVacancies().exec()).data
            this.dispatch({type: "setVacancies", payload: vacancies})
        }
        else {
            const vacancies = (await backendService.getVacancies().find("fields.location", value).exec()).data
            this.dispatch({type: "setVacancies", payload: vacancies})
        }

    }
}



const VacancyPage = ({locations, vacancies}:VacancyPageProps) => {
    const InitiialState:IVacanciesState = {
        location: "Любая",
        locations: ["Любая", "Удаленно", "SSS", ...locations],
    }
    const [state, dispatch] = useReducer(VacancyReducer, InitiialState)
    const VacancyService = new CVacancyService(dispatch,state)

    return (
        <Page>
            <div className={`grid grid-cols-4 h-full gap-x-5 px-12`}>
            <div className={` h-screen sticky`}>
                <div className={`font-raleway font-bold mt-20 mb-3`}>
                    Локация
                </div>
                <Dropdown value={state.location} values={state.locations} setter={VacancyService.changeLocation.bind(VacancyService)}/>
                <div className={`font-raleway font-bold mb-3 mt-10`}>
                    Научная область 
                </div>
            </div>
            <div className={`bg-yellow-400 h-full col-span-3`}>
                <h1>
                Вакансии и стажировки
                </h1>
                <div className={`grid grid-cols-3 space-x-5`}>
                    {state.vacancies.map(vacany => (<div>{vacany.name}</div>))}
                </div>
            </div>
            </div>
        </Page>
    )
}

export default VacancyPage

export async function getStaticPaths() {
    return { fallback: 'blocking',
      paths: [{ params: { lang: "ru" } }, { params: { lang: "en" } }]
    }
  }
  
  export async function getStaticProps(ctx) {
    
    const locations = await (await backendService.getAllLocations().exec()).data
    const vacancies = await  (await backendService.getVacancies().exec()).data

    return {
      props: { locations, vacancies },
      revalidate: 42,
    }
  }