import React, { useEffect, useState } from 'react'
import { Page } from '../../components/page'
import { Layout } from '../../components/layout'
import { Day24 } from '../../components/events'
import { Day25 } from '../../components/events'
import { Day26 } from '../../components/events'
import { Day27 } from '../../components/events'
import { Day28 } from '../../components/events'
import { SpeakerCard, SpeakerCards } from '../../components/speakerCard'
import { Partner } from '../../components/partner'
import { StrongText } from '../../components/strongText'
import { DatePlace } from '../../components/datePlace'

import { DateItem, DateSwitcher } from '../../components/dateSwicher/dateSwicher'
import { SchoolProject } from '../../components/schoolProject'
import { Helmet } from 'react-helmet'
import { ContentfulNewsWidget } from './news/contentfulNewsWidget'
import { NewsSMIWidget } from './newsSMI/newsSMIWidget'
import { getContentfulNews } from '../../helpers/axios'
import { useRouter } from 'next/dist/client/router'
import Translator from '../../i18n/translator'

const days = {
	'24': <Day24/>,
	'25': <Day25/>,
	'26': <Day26/>,
	'27': <Day27/>,
	'28': <Day28/>,
}


export default function EventsPage({  data, modalForm  }) {
	const { query: {lang: lang} } = useRouter()
	const [day, setDay] = useState('24')
	const [allContentfulNews, setContentfulNews] = useState([])

	useEffect(() => {
		setContentfulNews(data)
	}, [])

	return <Page>
		<Layout modalFormText={modalForm}>
			<Helmet>
				<meta name="description" content='Международная конференция «Наука. Лидерство. Общество» (Science. Leadership. Society)' />
				<meta name="keywords" content='Международная конференция «Наука. Лидерство. Общество» (Science. Leadership. Society)' />
				<meta property="og:image" content="/img/appleIcon.png" />
				<meta property="og:url" content={`https://scitech.ru/events`} />
				<meta property="og:title" content='Международная конференция «Наука. Лидерство. Общество» (Science. Leadership. Society)' />
				<meta property="og:description" content='Международная конференция «Наука. Лидерство. Общество» (Science. Leadership. Society)' />
				<title>Международная конференция «Наука. Лидерство. Общество» (Science. Leadership. Society)</title>
				<link rel="canonical" href={`https://scitech.ru/events`} />
			</Helmet>

			<div className="show wrapper_hero content">
				<div className="container">
					<ul className="g3">
						<li className="i3_3">
							<p className="asideMarker">конференция</p>
						</li>
						<li className="i3_9">
							<div className="titleHero">
								<h1>
									Международная конференция
									«Наука. Лидерство. Общество»
									(Science. Leadership. Society)
								</h1>
							</div>
						</li>
					</ul>
				</div>
			</div>

			<div className="show content">
				<div className="container">
					<ul className="g3">
						<li className="i3_3"></li>
						<li className="i3_9 wrapper_borderTop">
							<ul className="g3">
								<DatePlace dataFirst={[24, 'Авг 2020']}
													 dataSecond={[28, 'Авг 2020']}
													 place={'онлайн, zoom Московское время'}
								/>
								{/*<li className="i3_4">Бесплатное участие</li>*/}
								<li className="i3_12 sans">
									{/*<ul className="g3">*/}
									{/*	<li className="i3_0">*/}
									{/*		{isShowRegistrationButton ?*/}
									{/*			<Modal*/}
									{/*				Trigger={props => <Button red*/}
									{/*																	onClick={props.onClick}>Зарегистрироваться</Button>}*/}
									{/*				Content={props => <Form*/}
									{/*					afterSubmit={<div>спасибо за регистрацию</div>}*/}
									{/*					buttonSubmit={<button className="button">Зарегистрироваться</button>}*/}
									{/*					onSubmit={(e, values) => {*/}
									{/*						Requests.methods.insert({*/}
									{/*							group: 'registrations',*/}
									{/*							payload: values,*/}
									{/*						})*/}
									{/*						return true*/}
									{/*					}}*/}
									{/*					fields={[*/}
									{/*						{ name: 'name', label: 'Имя и фамилия' },*/}
									{/*						{ name: 'phone', label: 'Телефон' },*/}
									{/*						{ name: 'email', label: 'Электронная почта' },*/}
									{/*						{ name: 'organization', label: 'Названии оранизации' },*/}
									{/*						{ name: 'position', label: 'Должность' },*/}
									{/*					]}*/}
									{/*				/>}*/}
									{/*			/> : null*/}
									{/*		}*/}
									{/*	</li>*/}
									{/*	<li className="i3_0">*/}
									{/*		{isShowRegistrationButton ?*/}
									{/*			<>*/}
									{/*				<Modal*/}
									{/*					open={props.registrationType === 'reg1'}*/}
									{/*					Trigger={props => <Button bordered*/}
									{/*																		onClick={props.onClick}>Зарегистрироваться*/}
									{/*						на*/}
									{/*						Круглый стол</Button>}*/}
									{/*					Content={props => <div>*/}
									{/*						<h3>Зарегистрироваться на Круглый стол</h3>*/}
									{/*						<div>25 августа, 10:00–17:00</div>*/}
									{/*						<hr/>*/}
									{/*						<RegistrationForm1 onSubmit={(e, payload) => {*/}
									{/*							Requests.methods.insert({*/}
									{/*								group: 'registrations_1',*/}
									{/*								payload,*/}
									{/*							})*/}
									{/*							props.close()*/}
									{/*						}}/>*/}
									{/*					</div>}*/}
									{/*				/>*/}
									{/*				<p className="time__grey">25 августа, 10:00–17:00</p>*/}
									{/*			</>*/}
									{/*			: null*/}
									{/*		}*/}
									{/*	</li>*/}
									{/*</ul>*/}
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>

			<div className="show wrapper_about content">
				<div className="container">
					<ul className="g3">
						<li className="i3_3">
							<p className="asideMarker">о мероприятии</p>
						</li>
						<li className="i3_9">
							<h2>
								Приглашаем принять участие в первой международной конференции от ЦРК Западно-Сибирского НОЦ
							</h2>
							<p>
								<StrongText>Лекции международных и российских экспертов</StrongText> по вопросам фокусных тематик
								Западно-Сибирского НОЦ и
								прикладных аспектов трансфера научного знания в технологии развития общества.
							</p>
							<p>
								<StrongText>8 мини-конференций</StrongText> от проектных команд Школы Научного Лидерства с участием
								спикеров из российских и
								зарубежных образовательных организаций.
							</p>
							<p>
								<StrongText>Круглый стол</StrongText> с мировыми экспертами в области развития человеческого капитала
								«Актуальные вызовы и лучшие
								практики в подготовке руководителей научных, научно-технических проектов и лабораторий».
								<a className="schedule_link">Расписание круглого стола
									<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" clipRule="evenodd"
													d="M9.79972 3.68412L1.56172 11.8591L0.14209 10.4503L8.45638 2.19965L1.33524 2.19965L1.33524 0.199646L10.7997 0.199646L11.7997 0.199646V1.19965L11.7997 10.5789H9.79972L9.79972 3.68412Z"
													fill="#E62C2C"/>
									</svg>
								</a>
							</p>
							<p>
								<StrongText>Презентация официального Телеграм-канала</StrongText> с новостями Центра развития
								компетенций Западно-Сибирского
								НОЦ.
							</p>
						</li>
					</ul>
				</div>
			</div>

			<div className="show wrapper_speakers content">
				<div className="container">
					<ul className="g3">
						<li className="i3_3">
							<p className="asideMarker">
								Ключевые спикеры
							</p>
						</li>
						<li className="i3_9">
							<SpeakerCards>
								<SpeakerCard photo='/img/speaker_henry.png'
														 fullName='Henry Burgess'>
									The Head of the NERC Arctic Office (British Antarctic Survey) in Cambridge
								</SpeakerCard>
								<SpeakerCard photo='/img/speaker_irina.png'
														 fullName='Ирина Шрайбер'>
									Д.физ.-мат.н., научный сотрудник Европейского центра ядерных исследований (ЦЕРН,
									Женева)
								</SpeakerCard>
								<SpeakerCard photo='/img/speaker_maxim.png'
														 fullName='Максим Киселев'>
									Ph. D. (Yale), Professor of the Practice; Mentor, SKOLKOVO Foundation; Center for
									Entrepreneurship and Innovation. Генеральный директор АНО «Развитие человеческого
									капитала» г.Москва.
								</SpeakerCard>
								<SpeakerCard photo='/img/speaker_veniamin.png'
														 fullName='Вениамин Кизеев'>
									IPMA Level«B», член правления НП «СОВНЕТ», эксперт по управлению проектами и инновациями компании WINbd
								</SpeakerCard>
								<SpeakerCard photo='/img/speaker_hans_peter.png'
														 fullName='Dr. Hans Peter Beck'>
									President of the Swiss Physical Society; Prof. tit. at U. Fribourg Reader at U. of
									Bern; Physicist at CERN; Member of the ATLAS Collaboration; Former chair of IPPOG
								</SpeakerCard>
								<SpeakerCard photo='/img/speaker_angelina.png'
														 fullName='Давыдова Ангелина'>
									Директор Бюро экологической информации, экологический журналист, редактор журнала
									Экология и право, преподаватель СПбГУ, ИТМО, Европейского университета в
									Санкт-Петербурге, архитектурной школы МАРШ
								</SpeakerCard>
								<SpeakerCard photo='/img/speaker_germain.png'
														 fullName='Germaine Cornelissen-Guillaume'>
									Профессор кафедры интегративной биологии и физиологии (ИБП) Халберг
									Хронобиологический центр, директор, Миннесотский университет, Миннеаполис,
									Миннесота, США
								</SpeakerCard>
								<SpeakerCard photo='/img/speaker_igor.png'
														 fullName='Igor Grossmann'>
									Ph. D., Associate Professor Department of Psychology, University of Waterloo, Canada
								</SpeakerCard>
								<SpeakerCard photo='/img/speaker_krukov.png'
														 fullName='Крюков Валерий Анатольевич'>
									российский экономист, доктор экономических наук, профессор, академик РАН. Директор
									Института экономики и организации промышленного производства СО РАН, руководитель
									Центра ресурсной экономики, главный редактор всероссийского экономического журнала
									«ЭКО»
								</SpeakerCard>
								<SpeakerCard photo='/img/speaker_nikonorov.png'
														 fullName='Никоноров Сергей Михайлович'>
									Доктор экономических наук, профессор. Руководитель проектной группы «Полярный
									индекс» профессор кафедры экономики природопользования экономического факультета
									МГУ им М.В. Ломоносова, Москва
								</SpeakerCard>
								<SpeakerCard photo='/img/speaker_terry.png'
														 fullName='Terry Callaghan'>
									Distinguished Research Professor and Member, Royal Swedish Academy of Sciences.
									Professor of Arctic Ecology, University of Sheffield, UK. Professor of Botany,
									Tomsk State University. Coordinator of the INTERACT Network of Arctic Terrestrial
									Research Stations. Honorary Doctor of the Universities of Lund (Sweden), Oulu
									(Finland) and Tomsk State (Russia), Recipient of the Polar Medal (UK), the Vega
									Medal (Sweden) and joint recipient of the 2007 Nobel Peace Prize
								</SpeakerCard>
								<SpeakerCard photo='/img/speaker_golubeva.png'
														 fullName='Голубева Елена Юрьевна'>
									Д.б.н., профессор кафедры социальной работы и социальной безопасности САФУ.
									Председатель Общественного Совета по независимой оценке социальных услуг
									Министерства труда, занятости и социального развития Архангельской области.
									Работала экспертом от России в Центре развития здравоохранения в Кобе (Япония)
									по программе «Социальные инновации для здорового старения в
									местном сообществе в странах со средним и высоким уровнем дохода
								</SpeakerCard>
								<SpeakerCard photo='/img/speaker_afanasiev.png'
														 fullName='Георгий Афанасьев'>
									Основатель проекта «Лесные Сады», директор НП «Экспертный клуб промышленности и
									энергетики»
								</SpeakerCard>
							</SpeakerCards>
						</li>
					</ul>
				</div>
			</div>

			<div className="wrapper_partners content">
				<div className="container">
					<ul className="g3">
						<li className="i3_3">
							<p className="asideMarker">Партнеры</p>
						</li>
						<li className="i3_9">
							<ul className="g3">
								<li className="i3_4">
									<Partner logo='/img/logo_tumen_gov.png'
													 name='Правительство Тюменской области'
													 alt='Правительство Тюменской области'>
									</Partner>
								</li>

								{/*<li className="i3_4">*/}
								{/*	<img className="partnerLogo_big" src="/img/logo_sci_gov.png" alt=""/>*/}
								{/*	<br/>*/}
								{/*	Департамент цифрового развития Министерства науки и высшего образования РФ*/}
								{/*</li>*/}
							</ul>
						</li>
					</ul>
				</div>
			</div>

			<div className="wrapper_program content">
				<div className="container">
					<ul className="g3">
						<li className="i3_3">
							<p className="asideMarker">Программа</p>
							<p className="asideMarker">(московское время)</p>
						</li>
						<li className="i3_9">
							<DateSwitcher>
								<DateItem active={day === '24'}
													onClick={e => setDay('24')}
													date={'24'} month={'авг'}/>
								<DateItem active={day === '25'}
													onClick={e => setDay('25')}
													date={'25'} month={'авг'}/>
								<DateItem active={day === '26'}
													onClick={e => setDay('26')}
													date={'26'} month={'авг'}/>
								<DateItem active={day === '27'}
													onClick={e => setDay('27')}
													date={'27'} month={'авг'}/>
								<DateItem active={day === '28'}
													onClick={e => setDay('28')}
													date={'28'} month={'авг'}/>
							</DateSwitcher>
							<br/>
							<div className="days">{days[day]}</div>
						</li>
					</ul>
				</div>
			</div>

			<div className="wrapper_partners content">
				<div className="container">
					<ul className="g3">
						<li className="i3_3">
							<p className="asideMarker">Публикации СМИ</p>
						</li>
						<li className="i3_9">
							<SchoolProject>

								{/*THESE ARE News from Contentful */}
								<ContentfulNewsWidget isSMI={true} pageToShow={'events'} allContentfulNews={allContentfulNews}  />

								{/*THESE ARE News from website */}
								<NewsSMIWidget pageToShow={'events'}/>

							</SchoolProject>

						</li>
					</ul>
				</div>
			</div>
		</Layout>
	</Page>
}


export async function getServerSideProps(ctx) {
	const data = await getContentfulNews();
	const {current} = Translator("test", ctx.params.lang)
	return {
		props: { data: data.data, modalForm: current["modalForm"] },
	}
}