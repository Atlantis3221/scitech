import React from 'react'
import { Layout } from '../../../components/layout'
import { news } from '../../../data/news'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/router'
import { getContentfulNews, getDefineNews } from '../../../helpers/axios'
import Translator from '../../../i18n/translator'
import { EN_LANG, RU_LANG } from '../../../lib/constants'
import { transformContentfulNews } from '../../../helpers/transformContentfulNews'


const NewsCompany = ({modalForm, data: defineNews}) => {
	const { query: {lang: lang} } = useRouter()

	return (
		<Layout modalFormText={modalForm}>
			<Helmet>
				<meta name="description" content={defineNews?.title} />
				<meta name="keywords" content={defineNews?.title} />
				<meta property="og:image" content="/img/appleIcon.png" />
				<meta property="og:url" content={`https://scitech.ru/news/${defineNews?._id}`} />
				<meta property="og:title" content={defineNews?.title} />
				<meta property="og:description" content={defineNews?.title} />
				<title>{defineNews?.title}</title>
				<link rel="canonical" href={`https://scitech.ru/news/${defineNews?._id}`} />
			</Helmet>

			<div className='show wrapper_hero'>
				<div className='container'>
					<div className='content'>
						<ul className='g3'>
							<li className='i3_3'>
							</li>
							<li className='i3_9'>
								<p className="subtitleNews">{defineNews?.subtitle}</p>
								<h1>{defineNews?.title}</h1>
								<p className="raleway raleway__grey">{defineNews?.date}</p>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className='show'>
				<div className='container'>
					<div className='content news-padding'>
						<ul className='g3 news-flex-reverse'>
							<li className='i3_3'>
								<a href={`/${lang}/news`} className='link_event link_event__toNews active'>Новости центра
									<svg
										width='12'
										height='12'
										viewBox='0 0 12 12'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M9.79972 3.68412L1.56172 11.8591L0.14209 10.4503L8.45638 2.19965L1.33524 2.19965L1.33524 0.199646L10.7997 0.199646L11.7997 0.199646V1.19965L11.7997 10.5789H9.79972L9.79972 3.68412Z'
											fill='#E62C2C'
										/>
									</svg>
								</a>
								<a href={`/${lang}/newsSMI`} className='link_event link_event__toNews'>СМИ о нас
									<svg
										width='12'
										height='12'
										viewBox='0 0 12 12'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M9.79972 3.68412L1.56172 11.8591L0.14209 10.4503L8.45638 2.19965L1.33524 2.19965L1.33524 0.199646L10.7997 0.199646L11.7997 0.199646V1.19965L11.7997 10.5789H9.79972L9.79972 3.68412Z'
											fill='#E62C2C'
										/>
									</svg>
								</a>
							</li>
							<li className='i3_9'>
								<ul className='g3'>
									<li className='i3_12 mb6'>
										<ul className='g3'>
											<li className='i3_12'>
												{!defineNews?.hideTitleImage && <img loading="lazy" src={defineNews?.image} alt="newsPicture" />}
												<div
													className='newsText'
													dangerouslySetInnerHTML={{ __html: defineNews?.description }}
												/>
											</li>
										</ul>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</Layout>
	)
}
export default NewsCompany


export async function getStaticPaths() {
	const data = await getContentfulNews();
	const contentfulNews = data.data.map(contNews => transformContentfulNews(contNews))
	const allNews = contentfulNews.concat(news)
	const ruPaths = allNews.map((news) => {
		return {
			params: { id: news._id, lang: RU_LANG}
		}
	})
	const enPaths = allNews.map((news) => ({
		params: { id: news._id, lang: EN_LANG}
	}))
	return { fallback: 'blocking', paths: [...ruPaths, ...enPaths] }
}

export async function getStaticProps(ctx) {
	const { id } = ctx.params
	let defineNews = {}

	const { data: [contentful] } = await getDefineNews(id)
	if(contentful) {
		defineNews = transformContentfulNews(contentful)
	} else {
		defineNews = news.findById(id)
	}

	const {current} = Translator("test", ctx.params.lang)
	return {
		props: { data: defineNews, modalForm: current["modalForm"] },
		revalidate: 42,
	}
}
