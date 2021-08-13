import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/layout'
import { news } from '../../data/news'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/router'
import { getContentfulNews, getDefineNews } from '../../helpers/axios'
import processEvent, { convertToDate } from './processEvent'



const NewsCompany = () => {
	const [defineNews, setDefineNews] = useState({})
	const router = useRouter()
	const { id } = router.query
	let data = undefined

	useEffect(async() => {
		data = news.findById(id)
		setTimeout(async() => {
			if (!data) {
				const { data: [contentful] } = await getDefineNews(id)
				const contentfulNews = processEvent(contentful)
				console.log(contentful)
				data = {
					_id: contentful?.fields?._id,
					title: contentful?.fields?.title,
					date: convertToDate(contentful?.fields?.date),
					image: contentful?.fields?.front?.fields?.file?.url,
					description: contentfulNews,
				}
			}
		}, 1000)
		setDefineNews(data)
	}, [id])

	console.log(defineNews)

	return (
		<Layout>
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
								<a href="/news" className='link_event link_event__toNews active'>Новости центра
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
								<a href="/newsSMI" className='link_event link_event__toNews'>СМИ о нас
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


export async function getServerSideProps() {
	const data = await getContentfulNews();

	return {
		props: { data: data.data },
	}
}