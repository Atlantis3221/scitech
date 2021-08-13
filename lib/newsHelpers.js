export const convertToDate = (sec) => {
	if (sec) {
		const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
		return `${new Date(sec).getDate()} ${months[new Date(sec).getMonth()]} ${new Date(sec).getFullYear()}`
	}
	return ''
}

export const convertToMilliseconds = (date) => {
	return new Date(date).getTime()
}

export const convertContentfulNews = (news) => {
	return news.map(news => {
		return {
			_id: news?.fields?.url,
			title: news?.fields?.title,
			date: convertToDate(news?.fields?.date),
		}
	})
}
