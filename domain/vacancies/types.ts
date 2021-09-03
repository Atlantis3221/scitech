export type IVacanciesState = {
    location: string,
    locations: string[],
    categories: string[],
    currentCategories: string[],
    vacancies: IShortVacancy[],
    searchQuery: string,
    salaryLevels: string[],
    limit: number,
    page: number,
    currentSalaryLevels: string[],
    isLoading: boolean
}

export type IShortVacancy = {
    image: string,
    name: string,
    employer: string,
    salary?: string,
    location: string,
    vacancyURL: string
}

export type IVacancyAction = 
{type: "setLocation", payload: string} |
{type: "setVacancies", payload: IShortVacancy[]} |
{type: "setCategories", payload: string[]} |
{type: "setSearchQuery", payload: string} |
{type: "setCurrentSalaries", payload: string[]} |
{type: "toggleLoading", payload: boolean}

export interface VacancyPageProps {
    locations: string[],
    vacancies: IShortVacancy[],
    categories: string[]
}

export interface IVacanciesQuery {
    location: string,
    currentCategories: string[],
    searchQuery: string,
    currentSalaryLevels: string[],
}
