import lodash from "lodash"
import { Dispatch } from "react"
import backendService from "../../helpers/backendService"
import { IVacanciesQuery, IVacanciesState, IVacancyAction } from "./types"

class CDebouncer{
    private timeout: NodeJS.Timeout
    constructor() {

    }
    debounce(fn, wait:number) {
        clearTimeout(this.timeout)
        console.log(this.timeout)
        this.timeout = setTimeout(fn, wait)
    }
}

const vacancyDebouncer = new CDebouncer()

export default class CVacancyService {
    private dispatch: Dispatch<IVacancyAction>
    private state: IVacanciesState
    constructor(dispatch,state) {
        this.dispatch = dispatch
        this.state = state
    }

    private async fetchVacancies(state:IVacanciesQuery) {
        vacancyDebouncer.debounce(async () => {
            const result = await ( backendService.getVacanciesWithFilters(state))
            this.dispatch({type: "setVacancies", payload: result})
        }, 1000)
    }

    async changeLocation(value: string) {
        if (this.state.location === value) {
            return
        }
        this.dispatch({type: "setLocation", payload: value})
        await this.fetchVacancies({
            ...this.state,
            location: value
        })
    }

    async SearchByString(value: string) {
        this.dispatch({type: "setSearchQuery", payload: value})
        await this.fetchVacancies({
            ...this.state,
            searchQuery: value
        })
    }

    async toggleCategory(value:string) {
        const newArr = lodash.xor(this.state.currentCategories, [value]) 
        this.dispatch({type: "setCategories", payload: newArr})
        await this.fetchVacancies({
            ...this.state,
            currentCategories: newArr,
        })
    }
}