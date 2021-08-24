import { Dispatch, useReducer, useState } from "react"
import DropdownToggle from "../../../components/icons/dropdownToggle"
import Checkbox from "../../../components/inputs/Checkbox"
import Dropdown from "../../../components/inputs/Dropdown"
import { Page } from "../../../components/page"
import backendService, { BackRequest } from "../../../helpers/backendService"
import lodash from "lodash"



type IVacanciesState = {
    location: string,
    locations: string[],
    categories: string[],
    currentCategories: string[],
    vacancies: IShortVacancy[]
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
{type: "setVacancies", payload: IShortVacancy[]} |
{type: "setCategories", payload: string[]}

interface VacancyPageProps {
    locations: string[],
    vacancies: IShortVacancy[],
    categories: string[]
}

const VacancyReducer= (state:IVacanciesState, action: IVacancyAction):IVacanciesState  => {

    if (action.type === "setLocation") {
        return {
            ...state,
            location: action.payload
        }
    }
    if (action.type === "setVacancies") {
        return {
            ...state,
            vacancies: action.payload
        }
    }
    if (action.type === "setCategories") {
        console.log(action.payload)
        return {
            ...state,
            currentCategories: lodash.xor(action.payload)
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
            const vacancies = (await backendService.getVacancies().find("fields.vacancyCategory", this.state.currentCategories.join(",")).exec()).data
            this.dispatch({type: "setVacancies", payload: vacancies})
            return
        }
        if (value === "Удаленно") {
            const vacancies = (await backendService.getVacancies().find("fields.vacancyCategory", this.state.currentCategories.join(",")).find("fields.remote", "true").exec()).data
            this.dispatch({type: "setVacancies", payload: vacancies})
            return
        }
            const vacancies = (await backendService.getVacancies().find("fields.vacancyCategory", this.state.currentCategories.join(",")).find("fields.location", value).exec()).data
            this.dispatch({type: "setVacancies", payload: vacancies})
    }
    async toggleCategory(value:string) {
        const newArr = lodash.xor(this.state.currentCategories, [value]) 
        console.log(newArr.join(","))
        this.dispatch({type: "setCategories", payload: newArr})
        if (this.state.location === "Любая") {
            const vacancies = (await backendService.getVacancies().find("fields.vacancyCategory", newArr.join(",")).exec()).data
            this.dispatch({type: "setVacancies", payload: vacancies})
            return
        }
        if (this.state.location === "Удаленно") {
            const vacancies = (await backendService.getVacancies().find("fields.vacancyCategory", newArr.join(",")).find("fields.remote", "true").exec()).data
            this.dispatch({type: "setVacancies", payload: vacancies})
            return
        }
        else {
            const vacancies = (await backendService.getVacancies().find("fields.vacancyCategory", newArr.join(",")).find("fields.location", this.state.location).exec()).data
            this.dispatch({type: "setVacancies", payload: vacancies})
            return
        }
    }
}



const VacancyPage = ({locations, vacancies, categories}:VacancyPageProps) => {
    const InitiialState:IVacanciesState = {
        location: "Любая",
        locations: ["Любая", "Удаленно", ...locations],
        vacancies: vacancies,
        categories: [...categories],
        currentCategories: []
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
                <div>
                    {state.categories.map(a => {
                        return (
                            <div className={`flex items-center`}>
                                <div>
                                    <input onChange={
                                        (e) => {
                                            VacancyService.toggleCategory(e.target.value)
                                        }
                                    } type="checkbox" name={a} id="" value={a} checked={state.currentCategories.includes(a)} />
                                </div>
                                <div>
                                {a}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={`bg-yellow-400 h-full col-span-3`}>
                <h1>
                Вакансии и стажировки
                </h1>
                <div className={`grid grid-cols-3 space-x-5`}>
                    {state.vacancies.map(v=> (<div>{v.name}</div>))}
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
    const categories =  await (await backendService.getAllCategories().exec()).data
    console.log(vacancies)
    return {
      props: { locations, vacancies, categories},
      revalidate: 42,
    }
  }