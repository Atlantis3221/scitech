import axios from 'axios'

const ALL_NEWS = '/api/news';
const ALL_VACANCIES = '/api/vacancies';
const ALL_GRANTS = '/api/grants';
const ALL_SCHOOL_PROJECTS = '/api/schoolProject';
const ALL_SORTED_NEWS = '/api/news?sort_by=fields.date&sort_order=-1';
const DEFINED_NEWS = '/api/news?index_key=fields.url&index_value=';
const DEFINED_SCHOOL_PROJECTS = '/api/schoolProject?index_key=fields.url&index_value=';

const instatnce = axios.create({
})

instatnce.interceptors.request.use((config) => {
	config.baseURL = process.env.DATABASE_NAME ? "http://localhost:3000/" : ""
	console.log(config.baseURL)
	return config
})


export const getContentfulNews = async() => {
	try {
		const resp = await instatnce.get(ALL_SORTED_NEWS)
		if (resp.data.ok) {
			return resp.data
		}
		throw new Error("No news!")
	}
	catch (e) {
		console.log(e.message)
		return {data: []}
	}
	
}
export const getAllNews = async() => {
	try {
		const resp = await instatnce.get(ALL_SORTED_NEWS)
		if (resp.data.ok) {
			return resp.data
		}
		throw new Error("No news!")
	}
	catch (e) {
		console.log(e.message)
		return []
	}
}

export const getDefineNews = async(newsUrl) => await instatnce
	.get(`${DEFINED_NEWS}${newsUrl}`)
	.then((res) => {
		return res.data;
	}).catch(error => {
		console.log(error);
	});

export const getContentfulGrants = async() => await instatnce
	.get(ALL_GRANTS)
	.then((res) => {
		return res.data;
	}).catch(error => {
		console.log(error);
	});

export const getAllRequestData = async(project) => await instatnce
	.get(`/api/reg/${project}`)
	.then((res) => {
		return res.data;
	}).catch(error => {
		console.log(error);
	});

export const getContentfulVacancies = async() => {
	try {
		const resp = await instatnce.get(ALL_VACANCIES)
		if (resp.data.ok) {
			return resp.data
		}
		throw new Error("No vacancies!")
	}
	catch (e) {
		console.log(e.message)
		return {data: []}
	}

}
export const getDefineVacancy = async(vacancyUrl) => await instatnce
	.get(`${ALL_VACANCIES}/${vacancyUrl}`)
	.then((res) => {
		return res.data;
	}).catch(error => {
		console.log(error);
	});

export const getContentfulSchoolProjects = async() => {
	try {
		const resp = await instatnce.get(ALL_SCHOOL_PROJECTS)
		if (resp.data.ok) {
			return resp.data
		}
		throw new Error("No school projects!")
	}
	catch (e) {
		console.log(e.message)
		return {data: []}
	}

}
export const getDefineSchoolProject = async(schoolProjectUrl) => await instatnce
	.get(`${DEFINED_SCHOOL_PROJECTS}${schoolProjectUrl}`)
	.then((res) => {
		return res.data;
	}).catch(error => {
		console.log(error);
	});
