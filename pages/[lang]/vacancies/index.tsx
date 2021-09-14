import { ChangeEvent, Dispatch, useEffect, useReducer, useState } from "react"
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
import WhiteCross from "../../../components/icons/whiteCross"
import { disableBodyScroll, enableBodyScroll} from "body-scroll-lock"
import { Layout } from "../../../components/layout"
import Translator from '../../../i18n/translator'


const VacancyPage = ({locations, categories}:VacancyPageProps) => {

    const InitiialState:IVacanciesState = {
        location: "Любая",
        locations: ["Любая", ...locations],
        vacancies: [],
        categories: [...categories],
        currentCategories: [],
        searchQuery: "",
        salaryLevels: [
            "до 100 000 ₽",
            "от 100 000 ₽ до 150 000 ₽",
            "выше 150 000 ₽"
        ],
        limit: 4,
        page: 0,
        currentSalaryLevels: [

        ],
        isLoading: true
    }

    const [state, dispatch] = useReducer(VacancyReducer, InitiialState)
    const VacancyService = new CVacancyService(dispatch,state)
    const [sidebarOpen, setSidebarOpen] = useState(false)

    useEffect(() => {
        VacancyService.init()
    }, [])

    useEffect(() => {
        const body = document.querySelector('body');
        if (sidebarOpen) {
            disableBodyScroll(body)
        }
        else {
            enableBodyScroll(body)
        }

    }, [sidebarOpen])

    return (
        <Layout>
            <div className={`grid md:grid-cols-4  h-full gap-x-5 md:px-12 px-5`}>
            <div className={`fixed overflow-y-auto md:pt-12 top-0 left-0 bg-gray-200 transition-all duration-300 md:bg-transparent w-full h-full transform ${!sidebarOpen ? "-translate-x-full md:translate-x-0" : "translate-x-0"}  px-4 md:px-2 md:relative`} >
                <div className={`top-5 `}>
                    <div onClick={() => {setSidebarOpen(!sidebarOpen)}} className={`w-12 h-12 md:hidden mt-2  ml-auto`}>
                        <WhiteCross/>
                    </div>
                <h2 className={`md:hidden mb-5 mt-10`}>
                    Фильтры
                </h2>
                <div className={`font-raleway font-bold md:mt-20 mb-3`}>
                    Локация
                </div>
                <Dropdown value={state.location} values={state.locations} setter={VacancyService.changeLocation.bind(VacancyService)}/>
                <div className={`font-raleway font-bold mb-4 mt-10`}>
                    Уровень дохода
                </div>
                <div className={`grid grid-cols-1 gap-y-4`}>
                {state.salaryLevels.map(a => {
                        return (
                            <label className={`flex items-center cursor-pointer `}>
                                <div className={`w-4 h-4 mr-2 flex-shrink-0 group text-white`}>
                                    <SmallCheckbox value={a} onChange={(e:ChangeEvent<HTMLInputElement>) => {VacancyService.toggleSalaryLevel(e.target.value)}} checked={state.currentSalaryLevels.includes(a)}/>
                                </div>
                                <div className={`font-raleway`}>
                                    {a}
                                </div>
                            </label>
                        )
                    })}
                </div>
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
            <div className={`h-full md:col-span-3 pt-12 mb-20`}>
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
                    <button 
                    onClick={() => {
                        setSidebarOpen(!sidebarOpen)
                    }}
                    className={`p-2 mt-5 font-bold text-sm px-4 md:hidden ring-scitech-red ring-2 text-scitech-red font-raleway uppercase`}>
                    Фильтры
                    </button>
                </div>
                
                {state.isLoading ? 
                <div className={`w-full h-60 grid place-items-center`}>
                        <div className="w-20 h-20 p-2">
                            <img className={`w-full h-full`} src="/img/icons/spiner.gif" loading="lazy" alt="spiner" />
                        </div>
                </div>

                :
                state.vacancies.length ? 
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
            </Layout>
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
    const categories =  await (await backendService.getAllCategories().exec()).data
    const {current} = Translator("test", ctx.params.lang)
    return {
      props: { locations, categories},
      revalidate: 42,
    }
  }