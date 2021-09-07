import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, Method } from "axios"
import { IShortVacancy, IVacanciesQuery } from '../domain/vacancies/types'

const instatnce = axios.create({
})

instatnce.interceptors.request.use((config) => {
	config.baseURL = process.env.DATABASE_NAME ? "http://localhost:3000/" : ""
	console.log(config.baseURL)
	return config
})

type IBackendResponse<T> = {
    ok: true,
    data: T
} | {
    ok: false,
    error: string
}


export class BackRequest<T> {
    url: string
    constructor(url) {
        this.url = url+ "?"
    }

    sort(sort_by: string, sort_order: -1 | 1) {
        this.url += `sort_by=${sort_by}&sort_order=${sort_order}&`
        return this
    }

    paginate(limit: number, page: number) {
        this.url += `limit=${limit}&page=${page}&`
        return this
    }

    find(index_key?:string, index_value?:string) {
        if (index_value && index_key) {
            this.url += `${index_key}=${index_value}&`
        }
        return this
    }

    async exec() {
        const resp = (await instatnce.get<IBackendResponse<T>>(this.url))
        if (resp.data.ok) {
            return resp.data
        }
        if (resp.data.ok === false) {
            throw new Error(resp.data.error)
        }
    }
    

}


class CBackendService {
    private client: AxiosInstance
    constructor(client, request) {
        this.client = client
    }
    async getVacanciesWithFilters(state:IVacanciesQuery) {
        const resp = await axios.post<IBackendResponse<IShortVacancy[]>>("/api/vacancies/searchByCategory", state)
        if (resp.data.ok) {
            return resp.data.data
        }
        if (resp.data.ok === false) {
            throw new Error(resp.data.error)
        }
    }
    getAllLocations() {
            return new BackRequest<string[]>("/api/vacancies/geo")
    }
    getVacancies() {
            return new BackRequest<IShortVacancy[]>("/api/vacancies/")
    }
    getAllCategories() {
        return new BackRequest<string[]>("/api/vacancies/categories")
    }
    getEmployers() {
        return new BackRequest("/api/employers")
    }
}

export default new CBackendService(instatnce, BackRequest)