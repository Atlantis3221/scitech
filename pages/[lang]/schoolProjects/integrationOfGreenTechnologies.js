import React from 'react'

import { Page } from '../../../components/page'
import { Layout } from '../../../components/layout'
import {SpeakerCards, SpeakerCard} from '../../../components/speakerCard'
import {SchoolProject, SchoolProject_Card} from "../../../components/schoolProject";
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/router'

export default function IntegrationOfGreenTechnologies(props) {
    const { query: {lang: lang} } = useRouter()
    return (
        <Page>
            <Layout style={{
                backgroundImage: 'url(/img/gradients/school_gradient.svg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '120% -5%'
            }}>
                <Helmet>
                    <meta name="description" content='Интеграция зеленых технологий в устойчивое развитие Арктики' />
                    <meta name="keywords" content='проект школы научного лидерства центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
                    <meta property="og:image" content="/img/appleIcon.png" />
                    <meta property="og:url" content={`https://scitech.ru/schoolProjects/integrationOfGreenTechnologies`} />
                    <meta property="og:title" content='Интеграция зеленых технологий в устойчивое развитие Арктики' />
                    <meta property="og:description" content='проект школы научного лидерства центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
                    <title>Интеграция зеленых технологий в устойчивое развитие Арктики</title>
                    <link rel="canonical" href={`https://scitech.ru/schoolProjects/integrationOfGreenTechnologies`} />
                </Helmet>

                <div className='show wrapper_hero'>
                    <div className='container relative'>
                        <div className="colorSpot colorSpot__green"></div>
                        <div className='content'>
                            <ul className='g3 relative'>
                                <li className='i3_3'>
                                    <p className='asideMarker'>проект школы научного лидерства</p>
                                    <p className='asideMarker'>поток 2019–2020</p>
                                </li>
                                <li className='i3_9'>
                                    <h1>Интеграция зеленых технологий</h1>
                                    <h1>в устойчивое развитие Арктики</h1>
                                    <p className="fz_big">Green technologies: A contribution to sustainable development in the Arctic</p>
                                    <img loading="lazy" src="/img/schoolProjects/integration_image.svg" alt="arctica" />
                                    <div className="mt_big">
                                        <p className="raleway raleway_bigbold">Цель научного проекта: разработать корпоративную систему
                                            управления зелеными технологиями для Арктических предприятий на основе математического моделирования.</p>
                                        <p className="raleway raleway_bigbold">Генеральная идея: зеленые технологии сокращают использование природных ресурсов,
                                            уменьшают выбросы вредных веществ. Устойчивое развитие и промышленное освоение
                                            Арктики возможно через внедрение «зеленых» технологий.</p>
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
                                    <p className='asideMarker asideMarker_mt1'>Критерии оценки НТП для базового сценария реализации проекта до 2023 года</p>
                                </li>
                                <li className='i3_9'>
                                    <img loading="lazy" src="/img/schoolProjects/greenTech.png" alt="schema" />
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
                                        <SpeakerCard photo="/img/schoolProjects/speaker_yumanova.png"
                                                     fullName="Юманова Наталья Николаевна"
                                                     position='лидер проекта'
                                                     email="n.n.yumanova@utmn.ru"
                                                     phone="+7-912-925-03-05"
                                        >
                                            Разработка методики оценки финансово-экономических критериев «зеленой» технологии.
                                            Экономическое моделирование внедрения «зеленых» технологий в условиях российской
                                            Арктики. Оценка инфраструктурных инвестиций для предприятий Арктической зоны.
                                            Канд. экон. наук, доц. ТюмГУ; публикации в Scopus, WoS; участие в грантовой работе
                                        </SpeakerCard>
                                        <SpeakerCard photo="/img/schoolProjects/speaker_skipin.png"
                                                     fullName="Скипин Дмитрий Леонидович"
                                                     position='исследователь'
                                        >
                                            Анализ финансово-хозяйственной деятельности предприятий Арктической зоны.
                                            Экономическое моделирование внедрения «зеленых» технологий в условиях российской Арктики.
                                            Оценка экономической безопасности российских предприятий Арктики. Канд. экон. наук,
                                            доц. ТюмГУ; публикации в Scopus, WoS; участие в грантовой работе
                                        </SpeakerCard>
                                        <SpeakerCard photo="/img/schoolProjects/speaker_degtyareva.png"
                                                     fullName="Дегтярева Екатерина Владимировна"
                                                     position='исследователь'
                                        >
                                            Анализ финансово-хозяйственной деятельности предприятий Арктической зоны. Разработка и
                                            оценка инструментов «зеленого» финансирования для предприятий Арктической зоны.
                                            Канд. экон. наук, доц. ТюмГУ; публикации в Scopus, WoS
                                        </SpeakerCard>
                                        <SpeakerCard photo="/img/schoolProjects/speaker_selivanova.png"
                                                     fullName="Силиванова Елена Анатольевна"
                                                     position='исследователь'
                                        >
                                            Разработка технологий Пест-менеджмента для сельскохозяйственных предприятий Арктической
                                            зоны. Канд. биол. наук, ведущий науч. сотр., Федеральный исследовательский центр
                                            Тюменский научный центр СО РАН; публикации в Scopus, WoS; участие в грантовой работе
                                        </SpeakerCard>
                                        <SpeakerCard photo="/img/schoolProjects/speaker_prituzhelova.png"
                                                     fullName="Притужалова Ольга Александровна"
                                                     position='исследователь'
                                        >
                                            Систематизация критериев «зеленых» технологий. Разработка методики экологического
                                            менеджмента и аудита. Оценка экологической безопасности предприятий российской
                                            Арктики. Канд. геогр. наук, Ph. D. (Dr. rer. nat.), доц. ТюмГУ; публикации в Scopus, WoS
                                        </SpeakerCard>
                                        <SpeakerCard photo="/img/schoolProjects/speaker_semenov.png"
                                                     fullName="Семенов Максим Юрьевич"
                                                     position='исследователь'
                                        >
                                            Проведение социологических исследований. Организация опросов руководителей предприятий,
                                            общественного мнения. Моделирование социально-экономических процессов. Канд. социол.
                                            наук, доц. публикации в Scopus, WoS; участие в грантовой работе
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
                                                    <p className="raleway">Проведены социологические опросы по интересу населения к экологически чистой продукции.</p>
                                                    <p className="raleway">Разработан устав проекта</p>
                                                    <p className="raleway">Проведены структурированное интервью и анкетирование предприятий.</p>
                                                </li>
                                                <li className='i3_4'>
                                                    <p className="raleway raleway_bold">2021</p>
                                                    <p className="raleway">Оформлен патент на изобретение.</p>
                                                    <p className="raleway">Получено 3 гранта.</p>
                                                    <p className="raleway">Подготовлено/опубликовано 3 научные работы.</p>
                                                    <p className="raleway">Обеспечено финансирование проекта.</p>
                                                    <p className="raleway">Сформирована база данных (сайт) опыта внедрения зеленых технологий.</p>
                                                </li>
                                                <li className='i3_4'>
                                                    <p className="raleway raleway_bold">2022</p>
                                                    <p className="raleway">Методическое руководство внедрения ЗТ (экодиагностика, консалтинг, обучение и др.).</p>
                                                    <p className="raleway">Мобильное приложение по экодиагностике населения, предприятий, работников предприятий.</p>
                                                </li>
                                            </ul>
                                            <ul className='g3 border_top border_left'>
                                                <li className='i3_4'>
                                                    <p className="raleway raleway_bold">2023</p>
                                                    <p className="raleway">Разработана математическая модель внедрения зеленых технологий.</p>
                                                    <p className="raleway">Образовательный продукт для персонала предприятий.</p>
                                                    <p className="raleway">Экспертная система внедрения «зеленых» технологий на предприятии.</p>
                                                </li>
                                                <li className='i3_4'>
                                                    <p className="raleway raleway_bold">2024</p>
                                                    <p className="raleway">Предложен алгоритм (консалтинг) внедрения «зеленых» технологий.</p>
                                                </li>
                                                <li className='i3_4'>
                                                    <p className="raleway raleway_bold">2025</p>
                                                    <p className="raleway m0 pb3">Корпоративная система управления экологическими инновациями.</p>
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
                                                    <p>3/7 заявок на гранты (3 - текущие, 3 - подано, 1 - в работе)</p>
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
                                                    <p>10 публикаций (4 - ВАК, 5 - WoS, 5 - РИНЦ), 1 доклад на конференции</p>
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
                                    <p className='asideMarker'>Образовательные программы</p>
                                </li>
                                <li className='i3_9'>
                                    <ul className='g3'>
                                        <li className='i3_12'>
                                            <ul className='g3'>
                                                <li className='i3_12'>
                                                    <p> Притужалова О.А.: Международный Летний Университет – 2020 (организатор
                                                        - Южно-Казахстанский университет им. М. Ауэзова), 15-26 июня 2020 г.
                                                        Школа «Зеленые технологии и дизайн». Лекция по теме: «Оценка жизненного
                                                        цикла и экологическое проектирование продукции» и мастер-класс по теме
                                                        «Принципы оценки жизненного цикла».</p>
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
                                        <SpeakerCard photo="/img/schoolProjects/speaker_yumanova.png"
                                                     fullName="Юманова Наталья Николаевна"
                                                     position='лидер проекта'
                                                     email="n.n.yumanova@utmn.ru"
                                                     phone="+7-912-925-03-05"
                                        >
                                            Разработка методики оценки финансово-экономических критериев «зеленой» технологии.
                                            Экономическое моделирование внедрения «зеленых» технологий в условиях российской
                                            Арктики. Оценка инфраструктурных инвестиций для предприятий Арктической зоны.
                                            Канд. экон. наук, доц. ТюмГУ; публикации в Scopus, WoS; участие в грантовой работе
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
                                                    <a href={`/${lang}/events`} className="raleway raleway_bold"> Посмотреть доклад</a>
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
                                          image='/img/schoolProjects/greenTransformation.png'
                                          link="/schoolProjects/greenTransformation"
                                        >
                                            Разработка модели зеленой трансформации региона
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
                                          image='/img/schoolProjects/smartCitiesInArctic.png'
                                          link="/schoolProjects/smartCitiesInArctic"
                                        >
                                            Умные города в российской Арктике
                                            Polaris: White Stars Of Arctic
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
