import { convertToDate } from '../lib'
import processEvent from './processEvent'

export const transformContentfulVacancies = (vacancy) => {
	const mappedVacancy = {
		_id: vacancy?._id,
		employerImage: vacancy?.fields?.employer?.fields?.image?.fields?.file?.url,
		employerName: vacancy?.fields?.employer?.fields?.name,
		employerWebsite: vacancy?.fields?.employerWebsite,
		location: vacancy?.fields?.location,
		salary: vacancy?.fields?.salary,
		vacancyCategory: vacancy?.fields?.vacancyCategory,
		vacancyName: vacancy?.fields?.vacancyName,
		vacancyURL: vacancy?.fields?.vacancyURL,
		vacancyDescription: vacancy?.fields?.vacancyDescription?.content?.map(content => {
			return {
				text: content?.content?.[0]?.value,
			}
		}),
	}

	return mappedVacancy;
}