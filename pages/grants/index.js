import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { grants } from '../../data/grants'
import { GrantCard } from '../../components/grantCard'
import { Page } from '../../components/page'
import { Layout } from '../../components/layout'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default function Grants(props) {
	{/* @todo: add Grants from contentful*/}
	// const grantsData =  useTracker(() => clientGrants.find({}).fetch())
	const grantsData = ''
	const [grants, setGrants] = useState([])
	const [loaded, setLoaded] = useState(false)
	const [grantsType, setGrantsType] = useState(null)
	const [isShowSpinner, setIsShowSpinner] = useState(false)

	const [isShowMobileFilters, setIsShowMobileFilters] = useState(false)

	useEffect(() => {
		if (grantsData.length && !loaded) {
			console.log(grantsData)
			setLoaded(true)
			setGrants(grantsData.map(grant => {
				const fields = grant.fields
				return {
					description: documentToHtmlString(fields.description),
					deadline: fields.deadline,
					order: fields.order,
					price: fields.price,
					link: fields.link,
					title: fields.title,
					image: "https:" + fields.image.fields.file.url,
					_id: grant._id,
					cardType: fields.type === "Конкурс" ? "contests" : fields.type === "Фестиваль" ? "festivals" : fields.type === "Премия" ? "awards" : "grants"
				}
			}).sort((a,b) => a.order - b.order))
		}

	},[grantsData])

	useEffect(() => {

	}, [grants])

	const changeType = (type, name) => {
		setIsShowSpinner(true)
		setTimeout(() => {
			setIsShowSpinner(false)
		}, 600)
		if(type === 'type') {
			setGrantsType(name)
		}
		setIsShowMobileFilters(false)
	}

	const toggleFilterList = () => {
		setIsShowMobileFilters(true)
	}

	return (
		<Page>
			<Layout>
				<Helmet>
					<meta name="description" content='Гранты' />
					<meta name="keywords" content='Гранты' />
					<meta property="og:image" content="/img/appleIcon.png" />
					<meta property="og:url" content={`https://scitech.ru/grants`} />
					<meta property="og:title" content='Гранты' />
					<meta property="og:description" content='Гранты' />
					<title>Гранты</title>
					<link rel="canonical" href={`https://scitech.ru/grants`} />
				</Helmet>

				<div className={`mobileFilters ${isShowMobileFilters? 'mobileFilters_shown': ''}`}>
					<button className={'mobileFilters_closeBtn'}
									onClick={() => setIsShowMobileFilters(false)}
					>x</button>
					<p className="mobileFilters_title raleway raleway_bold">Фильтры</p>
					<p className={`tabLinks ${grantsType === 'grants' ? 'tabLinks__active' : ''}`}
						 onClick={() => changeType('type', 'grants')}>Гранты</p>
					<p className={`tabLinks ${grantsType === 'contests' ? 'tabLinks__active' : ''}`}
						 onClick={() => changeType('type', 'contests')}>Конкурсы</p>
					<p className={`tabLinks ${grantsType === 'festivals' ? 'tabLinks__active' : ''}`}
						 onClick={() => changeType('type', 'festivals')}>Фестивали</p>
					<p className={`tabLinks ${grantsType === 'awards' ? 'tabLinks__active' : ''}`}
						 onClick={() => changeType('type', 'awards')}>Премии</p>
				</div>

				<div className='show content'>
					<div className='container relative'>
						<ul className='g3'>
							<li className='i3_3'>
							</li>
							<li className='i3_9'>
								<h1>Гранты</h1>
							</li>
						</ul>
					</div>
				</div>

				<div className='show'>
					<div className='container'>
						<div className='content'>
							<ul className='g3'>
								<li className='i3_3 filtersProjects'>
									<p className={`tabLinks ${grantsType === 'grants' ? 'tabLinks__active' : ''}`}
										 onClick={() => changeType('type', 'grants')}>Гранты</p>
									<p className={`tabLinks ${grantsType === 'contests' ? 'tabLinks__active' : ''}`}
										 onClick={() => changeType('type', 'contests')}>Конкурсы</p>
									<p className={`tabLinks ${grantsType === 'festivals' ? 'tabLinks__active' : ''}`}
										 onClick={() => changeType('type', 'festivals')}>Фестивали</p>
									<p className={`tabLinks ${grantsType === 'awards' ? 'tabLinks__active' : ''}`}
										 onClick={() => changeType('type', 'awards')}>Премии</p>
								</li>

								<li className='i3_9 mb6 grantsContainer smallScreen_fullWidth'>
									<button className={'btn btn__bordered filterBtn'}
													onClick={() => toggleFilterList()}
									>Фильтры</button>

									<div className="activeFilterTabs">
										<p className={grantsType === 'grants' ? 'activeFilterTab' : 'activeFilterTab__hidden'}>Гранты
											<span className="activeFilterTab-closeBtn" onClick={() => changeType('type', null)}>x</span></p>
										<p className={grantsType === 'contests' ? 'activeFilterTab' : 'activeFilterTab__hidden'}>Конкурсы
											<span className="activeFilterTab-closeBtn" onClick={() => changeType('type', null)}>x</span></p>
										<p className={grantsType === 'festivals' ? 'activeFilterTab' : 'activeFilterTab__hidden'}>Фестивали
											<span className="activeFilterTab-closeBtn" onClick={() => changeType('type', null)}>x</span></p>
										<p className={grantsType === 'awards' ? 'activeFilterTab' : 'activeFilterTab__hidden'}>Премии
											<span className="activeFilterTab-closeBtn" onClick={() => changeType('type', null)}>x</span></p>
									</div>

									{grantsType ? grants.filter(a => a.cardType === grantsType).map(el => {
										return <GrantCard link={el?.link}
																			key={el?._id}
																			cardType={el?.cardType}
																			isShown={grantsType}
																			image={el?.image}
																			title={el?.title}
																			description={el?.description}
																			deadline={el?.deadline}
																			price={el?.price}
										> </GrantCard>
									}) : grants.map(el => {
										return <GrantCard link={el?.link}
																			key={el?._id}
																			cardType={el?.cardType}
																			isShown={grantsType}
																			image={el?.image}
																			title={el?.title}
																			description={el?.description}
																			deadline={el?.deadline}
																			price={el?.price}
										> </GrantCard>})}
									{/*
                  {!isShowSpinner ? <ProjectGrowthCardContainer>
                      {grants.map(el => {
                       return <GrantCard link={el?.link}
                                           key={el?._id}
                                           cardType={el?.cardType}
                                           isShown={grantsType}
                                           image={el?.image}
                                           title={el?.title}
                                           description={el?.description}
                                           deadline={el?.deadline}
                                           price={el?.price}
                        > </GrantCard>
                      })}
                    </ProjectGrowthCardContainer>
                    :
                    <div className="spiner_container">
                      <img src="/img/icons/spiner.gif" alt="spiner" />
                    </div>} */}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</Layout>
		</Page>
	)
}
