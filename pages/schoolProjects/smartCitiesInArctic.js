import React from 'react'

import { Page } from '../../components/page'
import { Layout } from '../../components/layout'
import {SpeakerCards, SpeakerCard} from '../../components/speakerCard'
import { SchoolProject, SchoolProject_Card } from '../../components/schoolProject'
import { Helmet } from 'react-helmet'

export default function SmartCitiesInArctic(props) {
    return (
        <Page>
            <Layout style={{
                backgroundImage: 'url(/img/gradients/school_gradient.svg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '120% -5%'
            }}>
                <Helmet>
                    <meta name="description" content='Умные города в российской Арктике Polaris: White Stars Of Arctic' />
                    <meta name="keywords" content='проект школы научного лидерства центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
                    <meta property="og:image" content="/img/meta-image.jpg" />
                    <meta property="og:url" content={`https://scitech.ru/schoolProjects/smartCitiesInArctic`} />
                    <meta property="og:title" content='Умные города в российской Арктике Polaris: White Stars Of Arctic' />
                    <meta property="og:description" content='проект школы научного лидерства центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
                    <title>Умные города в российской Арктике Polaris: White Stars Of Arctic</title>
                    <link rel="canonical" href={`https://scitech.ru/schoolProjects/smartCitiesInArctic`} />
                </Helmet>

                <div className='show wrapper_hero'>
                    <div className='container relative'>
                        <div className="colorSpot colorSpot__green" style={{ left: '7.7rem'}}></div>
                        <div className='content'>
                            <ul className='g3 relative'>
                                <li className='i3_3'>
                                    <p className='asideMarker'>проект школы научного лидерства</p>
                                    <p className='asideMarker'>поток 2019–2020</p>
                                </li>
                                <li className='i3_9'>
                                    <h1>Умные города в российской Арктике Polaris: White Stars Of Arctic
                                    </h1>
                                    <img loading="lazy" className="pt2 mb0" src="/img/schoolProjects/smartCitiesInArctic.png" alt="integration_image" />
                                    <div className="mt_big">
                                        <h4 className="raleway">Цель научного проекта: разработать новую модель социально-экономического
                                            развития региона на основе использования умных технологий, направленную на ускорение
                                            экономического роста и повышение качества жизни.</h4>
                                        <h4 className="raleway">Генеральная идея: повышение эффективности управления городским
                                            хозяйством, конкурентоспособности арктических городов в борьбе за человеческий
                                            капитал, а также качества и комфорта городской среды на территории всей России.
                                        </h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='show'>
                    <div className='container'>
                        <div className='content'>
                            <ul className='g3 relative'>
                                <li className='i3_3'>
                                    <p className='asideMarker asideMarker_mt_half'>Критерии оценки НТП для базового сценария реализации проекта 2020/2025 гг.</p>
                                </li>
                                <li className='i3_9'>
                                    <h4>Сейчас:</h4>
                                    <img loading="lazy" src="/img/schoolProjects/smartCitiesInArctic_schema1.png" alt="schema" />
                                    <h4>Через 5 лет:</h4>
                                    <img loading="lazy" src="/img/schoolProjects/smartCitiesInArctic_schema2.png" alt="schema" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='show wrapper_speakers'>
                    <div className='container'>
                        <div className='content'>
                            <ul className='g3'>
                                <li className='i3_3'>
                                    <p className='asideMarker'>Команда</p>
                                </li>
                                <li className='i3_9'>
                                    <SpeakerCards>
                                        <SpeakerCard fullName="Карагулян Егине Араратовна"
                                                     photo="/img/schoolProjects/karagulyan_egine.png"
                                                     email="e.a.karagulyan@utmn.ru"
                                                     phone="+7-922-044-96-10"
                                        >
                                            Лидер проекта; руководство проектом, исследование социально-экономических
                                            проблем городов АЗ РФ, разработка концепции, стратегии смарт сити для арктических
                                            городов; канд. экон. наук, доц. кафедры экономики и финансов ТюмГУ
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Костко Наталья Анатольевна"
                                                     photo="/img/schoolProjects/kostko_natalia.png"
                                        >
                                            Исполнитель; исследование социального пространства умного города; д-р соц. наук, проф. общей и экономической социологии
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Дюссо Дэвид"
                                                     photo="/img/schoolProjects/dusso_david.png"
                                        >
                                            Исполнитель; исследования в области зеленой энергетики; Ph. D., проф. Школы
                                            перспективных исследований
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Бабурина Наталья Алексеевна"
                                                     photo="/img/schoolProjects/baburina_natalia.png"
                                        >
                                            Исполнитель; исследования качества жизни населения умных городов; канд. экон. наук, доц. кафедры экономики и финансов
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Батырева Мария Владимировна"
                                                     photo="/img/schoolProjects/batyreva_mariya.png"
                                        >
                                            Исполнитель; исследование социально-экономических проблем умного города, оценка восприятия
                                            технологий умного города жителями; канд. социол. наук, доц. кафедры общей и экономической социологии
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Захарова Ольга Владимировна"
                                                     photo="/img/schoolProjects/zaharova_olga.png"
                                        >
                                            Исполнитель; компаративные исследования стратегий развития городов
                                            Арктической зоны; канд. филос. наук, доц. государственного муниципального управления
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Иванова Светлана Александровна"
                                                     photo="/img/schoolProjects/ivanova_svetlana.png"
                                        >
                                            Исполнитель; исследование социально-экономических проблем Арктических городов,
                                            исследование качества жизни в умных городах, исследование уровня цифровизации
                                            городов РФ. Исследование проблем пространственного развития Арктики; канд. экон. наук, доц. кафедры экономики и финансов
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Левкина Анастасия Олеговна"
                                                     photo="/img/schoolProjects/levkina_anastasiya.png"
                                        >
                                            Исполнитель; разработка социо-гуманитарной концепции умного города в АЗ РФ,
                                            исследование качества жизни населения Арктических городов, исследование
                                            коллаборативных практик в городах АЗ РФ; канд. экон. наук, проф. кафедры
                                            экономической безопасности, бухгалтерского учета и аудита
                                        </SpeakerCard>
                                    </SpeakerCards>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='show'>
                    <div className='container'>
                        <div className='content'>
                            <ul className='g3'>
                                <li className='i3_3'>
                                    <p className='asideMarker asideMarker_mt_low'>дорожная карта</p>
                                </li>
                                <li className='i3_9'>
                                    <ul className='g3'>
                                        <li className='i3_12'>
                                            <ul className='g3 border_top border_right'>
                                                <li className='i3_4'>
                                                    <p className="raleway raleway_bold relative roarMap_title"><span className="roadMap_circle"></span>2020</p>
                                                    <p className="raleway">Получено 3 гранта РФФИ.</p>
                                                    <p className="raleway">Сделано 11 публикаций.</p>
                                                    <p className="raleway">Проведено анкетирование около 2000 жителей арктических
                                                        городов Тюменской области относительно их восприятия и использования существующих технологий умного города.</p>
                                                </li>
                                                <li className='i3_4'>
                                                    <p className="raleway raleway_bold relative roarMap_title">2022</p>
                                                    <p className="raleway">Перечень наиболее востребованных администрацией и населением сферой ЖКХ городов АЗ РФ технологий SC, позволяющий:
                                                        сократить расходы бюджетов на содержание ЖКХ городов АЗ РФ на 40%, повысить
                                                        качество жизни населения за счет внедрения умных технологий на 10-30%,
                                                        сократить миграционный отток на 1,2%, диверсифицировать структуру городской
                                                        экономики, выработать инструмент оценки прогресса городов, развивающихся на основе концепции SC.
                                                    </p>
                                                    <p className="raleway">Методика оценки экономической эффективности внедрения технологий SС
                                                        (влияние на темпы экономического роста).</p>
                                                    <p className="raleway">Разработка платформенных решений для умного арктического города, предполагающих новую
                                                        модель взаимодействия участников рынка и финансирования умных городов.</p>
                                                    <p className="raleway">Стратегия/программы развития городов.</p>
                                                    <p className="raleway">Платформенные решения для арктических городов.</p>
                                                </li>
                                                <li className='i3_4'>

                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='show'>
                    <div className='container'>
                        <div className='content pt0'>
                            <ul className='g3'>
                                <li className='i3_3'>
                                    <p className='asideMarker'>Фандрайзинг</p>
                                </li>
                                <li className='i3_9'>
                                    <ul className='g3'>
                                        <li className='i3_12'>
                                            <ul className='g3'>
                                                <li className='i3_12'>
                                                    <p>Подано 5, поддержано 3 заявки</p>
                                                    <p>Привлечено 1,5 млн ₽</p>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='show'>
                    <div className='container'>
                        <div className='content pt0'>
                            <ul className='g3'>
                                <li className='i3_3'>
                                    <p className='asideMarker'>публикации</p>
                                </li>
                                <li className='i3_9'>
                                    <ul className='g3'>
                                        <li className='i3_12'>
                                            <ul className='g3'>
                                                <li className='i3_12'>
                                                    <p>11 (5 - ВАК, 2 - WoS, 4 - Scopus, 1 - глава в коллективной монографии)</p>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='show'>
                    <div className='container'>
                        <div className='content pt0'>
                            <ul className='g3'>
                                <li className='i3_3'>
                                    <p className='asideMarker'>Мероприятия-спутники </p>
                                </li>
                                <li className='i3_9'>
                                    <ul className='g3'>
                                        <li className='i3_12'>
                                            <ul className='g3'>
                                                <li className='i3_12'>
                                                    <p>Организация работы секции «Смарт сити в Арктике» в рамках
                                                        I научно-практической конференции Центра развития компетенций
                                                        «Развитие лидерских компетенций и команд в сфере исследований и разработок»</p>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='show'>
                    <div className='container'>
                        <div className='content pt0'>
                            <ul className='g3'>
                                <li className='i3_3'>
                                    <p className='asideMarker'>руководитель</p>
                                </li>
                                <li className='i3_9'>
                                    <SpeakerCards>
                                        <SpeakerCard fullName="Карагулян Егине Араратовна"
                                                     photo="/img/schoolProjects/karagulyan_egine.png"
                                                     email="e.a.karagulyan@utmn.ru"
                                                     phone="+7-922-044-96-10"
                                        >
                                            Лидер проекта; руководство проектом, исследование социально-экономических
                                            проблем городов АЗ РФ, разработка концепции, стратегии смарт сити для арктических
                                            городов; канд. экон. наук, доц. кафедры экономики и финансов ТюмГУ
                                        </SpeakerCard>
                                    </SpeakerCards>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='show'>
                    <div className='container'>
                        <div className='content pt0'>
                            <ul className='g3'>
                                <li className='i3_3'>
                                    <p className='asideMarker asideMarker_mt1'>Выступление на
                                        Международной конференции «Наука. Лидерство. Общество» (Science. Leadership. Society)
                                    </p>
                                </li>
                                <li className='i3_9'>
                                    <ul className='g3'>
                                        <li className='i3_12'>
                                            <ul className='g3'>
                                                <li className='i3_12'>
                                                    <a href="/events" className="raleway raleway_bold"> Посмотреть доклад</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='show'>
                    <div className='container'>
                        <div className='content'>
                            <ul className='g3'>
                                <li className='i3_3'>
                                    <p className='asideMarker asideMarker_mt1'>другие проекты первого потока</p>
                                </li>
                                <li className='i3_9'>
                                    <SchoolProject>
                                        <SchoolProject_Card
                                          image='/img/schoolProjects/projectGrowth_image.png'
                                          link="/schoolProjects/professionalGrowth"
                                        >
                                            Увеличение профессионального долголетия пришлого населения Северных территорий: форсайт
                                            адаптационных стратегий
                                        </SchoolProject_Card>
                                        <SchoolProject_Card
                                          image='/img/schoolProjects/ecoSafety_image.png'
                                          link="/schoolProjects/ecoSafety"
                                        >
                                            Экологическая безопасность Обь-Иртышского речного бассейна
                                        </SchoolProject_Card>
                                        <SchoolProject_Card
                                          image='/img/schoolProjects/diseaseRisk.png'
                                          link="/schoolProjects/diseaseRisk"
                                        >
                                            Многоуровневая система оценки риска развития сердечно-сосудистых заболеваний работников в Арктике
                                        </SchoolProject_Card>
                                        <SchoolProject_Card
                                          image='/img/schoolProjects/greenTransformation.png'
                                          link="/schoolProjects/greenTransformation"
                                        >
                                            Разработка модели зеленой трансформации региона
                                        </SchoolProject_Card>
                                        <SchoolProject_Card
                                          image='/img/schoolProjects/sihirtyaNation.png'
                                          link="/schoolProjects/sihirtyaNation"
                                        >
                                            Народ сихиртя – средневековая легенда Арктики: культурная адаптация и трансфер традиций
                                        </SchoolProject_Card>
                                        <SchoolProject_Card
                                          image='/img/schoolProjects/wisdomAsTheBasis.png'
                                          link="/schoolProjects/wisdomAsTheBasis"
                                        >
                                            Мудрость как основа успешного личностного и профессионального развития студентов в рамках
                                            индивидуальной образовательной траектории
                                        </SchoolProject_Card>
                                        <SchoolProject_Card
                                          image='/img/schoolProjects/integration_image.svg'
                                          link="/schoolProjects/integrationOfGreenTechnologies"
                                        >
                                            Интеграция зеленых технологий в устойчивое развитие Арктики
                                        </SchoolProject_Card>
                                    </SchoolProject>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Layout>
        </Page>
    )
}
