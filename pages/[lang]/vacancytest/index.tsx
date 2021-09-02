import { ChangeEvent, Dispatch, useReducer, useState } from "react"
import DropdownToggle from "../../../components/icons/dropdownToggle"
import Checkbox from "../../../components/inputs/Checkbox"
import Dropdown from "../../../components/inputs/Dropdown"
import { Page } from "../../../components/page"
import backendService, { BackRequest } from "../../../helpers/backendService"
import SmallCheckbox from "../../../components/inputs/smallCheckbox"
import { IVacanciesState, VacancyPageProps } from "../../../domain/vacancies/types"
import CVacancyService from "../../../domain/vacancies/service"
import VacancyReducer from "../../../domain/vacancies/reducer"
import VacancyCard from "../../../domain/vacancies/ui/VacancyCard"
import Magnifier from "../../../components/icons/magnifier"


const VacancyPage = ({locations, vacancies, categories}:VacancyPageProps) => {

    const InitiialState:IVacanciesState = {
        location: "Любая",
        locations: ["Любая", ...locations],
        vacancies: vacancies,
        categories: [...categories],
        currentCategories: [],
        searchQuery: ""
    }

    const [state, dispatch] = useReducer(VacancyReducer, InitiialState)
    const VacancyService = new CVacancyService(dispatch,state)

    return (
        <Page>
            <div className={`grid md:grid-cols-4 grid-cols-2 h-full gap-x-5 px-12`}>
            <div >
                <div className={`sticky top-5`}>
                <div className={`font-raleway font-bold mt-20 mb-3`}>
                    Локация
                </div>
                <Dropdown value={state.location} values={state.locations} setter={VacancyService.changeLocation.bind(VacancyService)}/>
                <div className={`font-raleway font-bold mb-4 mt-10`}>
                    Научная область 
                </div>
                <div className={`grid grid-cols-1 gap-y-4`}>
                    {state.categories.map(a => {
                        return (
                            <label className={`flex items-center cursor-pointer `}>
                                <div className={`w-4 h-4 mr-2 flex-shrink-0 group text-white`}>
                                    <SmallCheckbox value={a} onChange={(e:ChangeEvent<HTMLInputElement>) => {VacancyService.toggleCategory(e.target.value)}} checked={state.currentCategories.includes(a)}/>
                                </div>
                                <div className={`font-raleway`}>
                                    {a}
                                </div>
                            </label>
                        )
                    })}
                </div>
                </div>
            </div>
            <div className={`h-full md:col-span-3`}>
                <h1>
                Вакансии и стажировки
                </h1>
                <div className={`w-full mt-14`}>
                    <div className={`h-10 ring-blue-400 transition-all bg-white max-w-xs flex items-center px-3 py-2 cursor-pointer focus-within:ring-1`}>
                        <div className={`w-6 h-6 `}>
                            <Magnifier/>
                        </div>
                        <input onChange={(e) => {VacancyService.SearchByString(e.target.value)}} value={state.searchQuery} className={`pl-2 font-raleway  ring-0 focus:ring-0 border-0 focus:outline-none w-full`} placeholder="Поиск" type="search" name="" id="" />
                    </div>
                </div>
                {state.vacancies.length ? 
                <div className={`grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-5 mt-8`}>
                     {state.vacancies.map(v => (
                     <div>
                        <VacancyCard {...v}/>
                    </div>))}
                </div> :
                <div className={`text-4xl text-center w-full h-full pt-10`}>
                    Ничего не найдено!
                </div>
                }
            </div>
            </div>
        </Page>
    )
}

export default VacancyPage

export async function getStaticPaths() {
    
    return { fallback: 'blocking',
      paths: []
    }
  }
  
  export async function getStaticProps(ctx) {
    
    const locations = await (await backendService.getAllLocations().exec()).data
    const vacancies = await  (await backendService.getVacancies().exec()).data
    const categories =  await (await backendService.getAllCategories().exec()).data

    return {
      props: { locations, vacancies, categories},
      revalidate: 42,
    }
  }