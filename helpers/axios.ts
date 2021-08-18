import axios from 'axios'

const ALL_NEWS = 'http://localhost:3000/api/news';
const ALL_GRANTS = 'http://localhost:3000/api/grants';
const ALL_SORTED_NEWS = 'http://localhost:3000/api/news?sort_by=fields.date&sort_order=-1';
const DEFINED_NEWS = 'http://localhost:3000/api/news?index_key=fields.url&index_value=';

const instatnce = axios.create({
	baseURL: "http://localhost:3000"
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
		return []
	}
	
}
export const getAllNews = async() => await instatnce
	.get(ALL_NEWS)
	.then((res) => {
		return res.data;
	}).catch(error => {
		console.log(error);
	});

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