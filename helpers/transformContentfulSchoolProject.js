import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export const transformContentfulSchoolProject = (defineProject = {}) => {
	console.log(defineProject)

	const mappedItem = {
		_id: defineProject?._id,
		asideEvents: documentToHtmlString(defineProject?.fields?.asideEvents),
		coverImg: defineProject?.fields?.coverImg?.fields?.file?.url,
		educationalProgram: documentToHtmlString(defineProject?.fields?.educationalProgram),
		estimationImg: defineProject?.fields?.estimationImg?.fields?.file?.url,
		fundraising: documentToHtmlString(defineProject?.fields?.fundraising),
		generalIdea: documentToHtmlString(defineProject?.fields?.generalIdea),
		goal: documentToHtmlString(defineProject?.fields?.goal),
		inResult: documentToHtmlString(defineProject?.fields?.inResult),
		performance: documentToHtmlString(defineProject?.fields?.performance),
		performanceVideoLink: defineProject?.fields?.performanceVideoLink,
		popularization: documentToHtmlString(defineProject?.fields?.popularization),
		publications: documentToHtmlString(defineProject?.fields?.publications),
		researchObject: documentToHtmlString(defineProject?.fields?.researchObject),
		roadMap: defineProject?.fields?.roadMap,
		scientificStudies: documentToHtmlString(defineProject?.fields?.scientificStudies),
		smiAboutUs: defineProject?.fields?.smiAboutUs,
		team: defineProject?.fields?.team,
		teamPhotos: defineProject?.fields?.teamPhotos,
		title: defineProject?.fields?.title,
		url: defineProject?.fields?.url,
		isForManagementSchool: defineProject?.fields?.isForManagementSchool,
		isForSchool: defineProject?.fields?.isForSchool,
	}

	return mappedItem;
}