import { convertToDate } from '../lib'
import processEvent from './processEvent'

export const transformContentfulNews = (news) => {
	return {
		_id: news?.fields?.url,
		isSmi: news?.fields?.isSmi,
		title: news?.fields?.title,
		date: convertToDate(news?.fields?.date),
		image: news?.fields?.front?.fields?.file?.url,
		description: processEvent(news),
	}
}