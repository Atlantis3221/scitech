import React from 'react'

import { Page } from '../../../components/page'
import { Layout } from '../../../components/layout'
import {SpeakerCards, SpeakerCard} from '../../../components/speakerCard'
import { SchoolProject, SchoolProject_Card } from '../../../components/schoolProject'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/router'

export default function SihirtyaNation(props) {
    const { query: {lang: lang} } = useRouter()
    return (
        <Page>
            <Layout style={{
                backgroundImage: 'url(/img/gradients/school_gradient.svg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '120% -5%'
            }}>
                <Helmet>
                    <meta name="description" content='Народ сихиртя – средневековая легенда Арктики: культурная адаптация и трансфер традиций' />
                    <meta name="keywords" content='проект школы научного лидерства центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
                    <meta property="og:image" content="/img/appleIcon.png" />
                    <meta property="og:url" content={`https://scitech.ru/schoolProjects/sihirtyaNation`} />
                    <meta property="og:title" content='Народ сихиртя – средневековая легенда Арктики: культурная адаптация и трансфер традиций' />
                    <meta property="og:description" content='проект школы научного лидерства центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
                    <title>Народ сихиртя – средневековая легенда Арктики: культурная адаптация и трансфер традиций</title>
                    <link rel="canonical" href={`https://scitech.ru/schoolProjects/sihirtyaNation`} />
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
                                    <h1>Народ сихиртя – средневековая легенда Арктики: культурная адаптация и трансфер традиций</h1>
                                    <img loading="lazy" className="pt2 mb0" src="/img/schoolProjects/sihirtyaNation.png" alt="schema" />
                                    <div className="mt_big">
                                        <h4 className="raleway">Цель научного проекта: Выявление и систематизация признаков средневековой культуры,
                                            соотносимой с легендарными сихиртя, и характеристика процесса трансляции этих
                                            признаков в культуру современного общества.</h4>
                                        <h4 className="raleway">Генеральная идея: Ответить на вопрос: кто такие сихиртя на самом
                                            деле? Изучение материальной и духовной культуры средневекового населения Севера
                                            – предшественников ненцев, которые стали прототипом народа сихиртя и о которых
                                            ненцы сложили цикл своих легенд. Сопоставление признаков, отраженных в легендах
                                            с реальными научными данными, полученные с применением междисциплинарного подхода.
                                        </h4>
                                        <h4 className="raleway">Проект рассчитан на 6 лет (1 ноября 2020 г. – 31 декабря 2026 г.).</h4>
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
                                    <p className='asideMarker asideMarker_mt1'>Критерии оценки НТП для базового сценария реализации проекта до 2026 года</p>
                                </li>
                                <li className='i3_9'>
                                    <img loading="lazy" src="/img/schoolProjects/sihirtyaNation_schema.png" alt="schema" />
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
                                        <SpeakerCard fullName="Ткачев Александр Александрович"
                                                     photo="/img/schoolProjects/tkachev_aleksandr.png"
                                                     email="al.al.tkachev@mail.ru"
                                                     phone="+7-904-495-59-73"
                                        >
                                            Лидер проекта; управление проектом, археолог, исследователь;  канд. ист. наук, доцент, ТюмГУ
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Гюрджоян Катя Гнеловна"
                                                     photo="/img/schoolProjects/gyurdjoyan_katya.png"
                                        >
                                            Администратор проекта; археолог, исследователь
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Дрожащих Наталия Владимировна"
                                                     photo="/img/schoolProjects/drozhaschih_natalia.png"
                                        >
                                            Редактор и переводчик; лингвист, исследователь
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Мешалкина Мария Андреевна"
                                                     photo="/img/schoolProjects/meshalkina_mariya.png"
                                        >
                                            Маркетолог; искусствовед, исследователь
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Балахнина Лидия Васильевна"
                                                     photo="/img/schoolProjects/balahnina_lidiya.png"
                                        >
                                            Редактор; искусствовед, исследователь
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Фокин Александр Александрович"
                                                     photo="/img/schoolProjects/fokin_aleksandr.png"
                                        >
                                            Историк; исследователь, популяризатор
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
                                                    <p className="raleway raleway_bold relative roarMap_title"><span className="roadMap_circle"></span>2013-2019 гг.</p>
                                                    <p className="raleway">Проводились археологические исследования на территории Тазовского района ЯНАО.</p>
                                                    <p className="raleway">Открыто 11 новых памятников, из них частично исследовано 8 объектов историко-культурного наследия.</p>
                                                    <p className="raleway">Поданы тезисы на две конференции.</p>
                                                    <p className="raleway">Поданы заявки в 2 фонда на получение грантов.</p>
                                                </li>
                                                <li className='i3_4'>
                                                    <p className="raleway raleway_bold relative roarMap_title">2023</p>
                                                    <p className="raleway">Опубликован ряд статей по основным проблемам, связанным с проектом (ориентировочно не менее 5).</p>
                                                    <p className="raleway">Поданы заявки на гранты по теме проекта (не менее 2 ежегодно).
                                                    </p>
                                                    <p className="raleway">Участие в конференциях (ежегодно).</p>
                                                    <p className="raleway">Археологические исследования уже открытых и поиск новых памятников при получении финансирования.</p>
                                                </li>
                                                <li className='i3_4'>
                                                    <p className="raleway raleway_bold relative roarMap_title">2026</p>
                                                    <p className="raleway">Обоснование реального существования в тундровых пространствах
                                                        севера Западной Сибири народа, предшествовавшего заселению этой территории ненцами,
                                                        и названного ими сихиртя, на основе признаков материальной и духовной культуры средневекового населения.</p>
                                                    <p className="raleway">Уточнение хронологических и географических рамок существования сихиртя.
                                                    </p>
                                                    <p className="raleway">Характеристика элементов культуры, антропологического облика и адаптационных стратегий населения.</p>
                                                    <p className="raleway">Сбор текстов легенд у представителей КМНС.</p>
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
                                                    <p>Кол-во заявок на гранты: 2/21, подано 2</p>
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
                                    <p className='asideMarker'>публикации и доклады</p>
                                </li>
                                <li className='i3_9'>
                                    <ul className='g3'>
                                        <li className='i3_12'>
                                            <ul className='g3'>
                                                <li className='i3_12'>
                                                    <p>Кол-во публикаций всех возможных: 13. Доклады на конференциях: 2, планируется 6
                                                    </p>
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
                                    <p className='asideMarker'>Научная деятельность</p>
                                </li>
                                <li className='i3_9'>
                                    <ul className='g3'>
                                        <li className='i3_12'>
                                            <ul className='g3'>
                                                <li className='i3_12'>
                                                    <p>Состоялись две успешные защиты дипломных работ, участники рекомендованы
                                                        и (после вступительных испытаний) поступили в магистратуру; готовятся
                                                        курсы «Традиционная культура народов Тюменского Севера», «Искусство
                                                        Средневековой Арктики», руководителем выигран тревел-грант на обучение
                                                        (стажировку) в Великобритании (но в условиях пандемии - дистанционный формат).</p>
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
                                    <p className='asideMarker'>Популяризация</p>
                                </li>
                                <li className='i3_9'>
                                    <ul className='g3'>
                                        <li className='i3_12'>
                                            <ul className='g3'>
                                                <li className='i3_12'>
                                                    <p>Разработаны эскизы ювелирной коллекции на основе дизайна предметов
                                                        из археологических раскопок, разрабатывается настольная игра по мотивам
                                                        легенд о сихиртя, получили приглашение осветить проект на заседании
                                                        Русского географического общества и др.</p>
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
                                        <SpeakerCard fullName="Ткачев Александр Александрович"
                                                     photo="/img/schoolProjects/tkachev_aleksandr.png"
                                                     email="al.al.tkachev@mail.ru"
                                                     phone="+7-904-495-59-73"
                                        >
                                            Лидер проекта; управление проектом, археолог, исследователь;  канд. ист. наук, доцент, ТюмГУ
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
                                          image='/img/schoolProjects/smartCitiesInArctic.png'
                                          link="/schoolProjects/smartCitiesInArctic"
                                        >
                                            Умные города в российской Арктике
                                            Polaris: White Stars Of Arctic
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
