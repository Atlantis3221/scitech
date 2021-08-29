export const transformContentfulVacancies = (vacancy = {}) => {
	const convertText = (text = '') => {
		let newString = text.replace(/\n/g, '<br\>')
		newString = newString.replace(/-/g, '—')
		return newString
	}
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
				text: convertText(content?.content?.[0]?.value),
			}
		}),
	}

	return mappedVacancy;
}