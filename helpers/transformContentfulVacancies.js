import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export const transformContentfulVacancies = (vacancy = {}) => {
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
		vacancyDescription: documentToHtmlString(vacancy?.fields?.vacancyDescription),
	}

	return mappedVacancy;
}