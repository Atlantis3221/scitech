import { IVacanciesState, IVacancyAction } from "./types"

const VacancyReducer = (state:IVacanciesState, action: IVacancyAction):IVacanciesState  => {

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
        return {
            ...state,
            currentCategories: action.payload
        }
    }
    if (action.type === "setSearchQuery") {
        return {
            ...state,
            searchQuery: action.payload
        }
    }
}


export default VacancyReducer