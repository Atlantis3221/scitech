import React from 'react'

import { Page } from '../../../components/page'
import { Layout } from '../../../components/layout'
import {SpeakerCards, SpeakerCard} from '../../../components/speakerCard'
import { SchoolProject, SchoolProject_Card } from '../../../components/schoolProject'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/router'

export default function WisdomAsTheBasis(props) {
    const { query: {lang: lang} } = useRouter()
    return (
        <Page>
            <Layout style={{
                backgroundImage: 'url(/img/gradients/school_gradient.svg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '120% -5%'
            }}>
                <Helmet>
                    <meta name="description" content='Мудрость как основа успешного личностного и профессионального развития студентов в рамках ИОТ' />
                    <meta name="keywords" content='проект школы научного лидерства центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
                    <meta property="og:image" content="/img/appleIcon.png" />
                    <meta property="og:url" content={`https://scitech.ru/schoolProjects/wisdomAsTheBasis`} />
                    <meta property="og:title" content='Мудрость как основа успешного личностного и профессионального развития студентов в рамках ИОТ' />
                    <meta property="og:description" content='проект школы научного лидерства центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
                    <title>Мудрость как основа успешного личностного и профессионального развития студентов в рамках ИОТ</title>
                    <link rel="canonical" href={`https://scitech.ru/schoolProjects/wisdomAsTheBasis`} />
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
                                    <h1>Мудрость как основа успешного личностного и профессионального развития студентов в рамках ИОТ</h1>
                                    <img loading="lazy" className="pt2 mb0" src="/img/schoolProjects/wisdomAsTheBasis.png" alt="schema" />
                                    <div className="mt_big">
                                        <h4 className="raleway">Цель научного проекта: создание системы поддержки принятия мудрых/оптимальных
                                            решений для успешного личностного и профессионального развития студентов в рамках ИОТ.</h4>
                                        <h4 className="raleway">Задачи проекта:</h4>
                                        <h4 className="raleway">1. Изучение проблемы «мудрых решений» как основы для успешного жизненного самоопределения (2020-2022 гг.).
                                        </h4>
                                        <h4 className="raleway">2. Исследование механизмов и методов формирования мудрых решений, в том числе в рамках индивидуальных образовательных траекторий (2021-2023 гг.).
                                        </h4>
                                        <h4 className="raleway">3. Определение сценариев и алгоритмов работы по формированию мудрости в цифровом приложении (2021-2023 гг.).
                                        </h4>
                                        <h4 className="raleway">4. Создание системы поддержки принятия решений студентами, взаимодействующей с пользователем в режиме чат-бот (2022-2024 гг.).
                                        </h4>
                                        <h4 className="raleway">Фундаментальный аспект исследования: жизненное и профессиональное самоопределение через развитие мудрости.
                                        </h4>
                                        <h4 className="raleway">Прикладной аспект проекта: создание цифрового приложения для самопознания и конструктивного выбора профессиональной траектории.
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
                                    <p className='asideMarker asideMarker_mt1'>Критерии оценки НТП для базового сценария реализации проекта до 2023 года</p>
                                </li>
                                <li className='i3_9'>
                                    <img loading="lazy" src="/img/schoolProjects/wisdomAsTheBasis_schema.png" alt="schema" />
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
                                        <SpeakerCard fullName="Мурзина Юлия"
                                                     photo="/img/schoolProjects/murzina_yulia.png"
                                                     email={'y.s.murzina@utmn.ru'}
                                                     phone={'+7-922-047-89-08'}
                                        >
                                            Лидер проекта, канд. психол. наук, доцент кафедры общей и соц.психологии ТюмГУ,
                                            руководитель Гранта РФФИ «Ценностные ориентации владельцев успешного семейного бизнеса» (2018-2021 гг.)
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Мехтиханова Наталья"
                                                     photo="/img/schoolProjects/mehtihanova.png"
                                        >
                                            Научный руководитель, канд. психол. наук, доцент кафедры общей психологии Ярославского
                                            государственного университета им. П.Г. Демидова, руководитель Гранта РФФИ «Мудрость как
                                            детерминанта решения сложных жизненных проблем» (2019-2020 гг.)
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Шитиков Петр"
                                                     photo="/img/schoolProjects/shitikov.png"
                                        >
                                            Канд. филол. наук, канд. богословия (христианство), доцент кафедры филологического образования ТюмГУ
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Вершинина Светлана"
                                                     photo="/img/schoolProjects/vershinina.png"
                                        >
                                            Канд. экон. наук, доцент, заведующая кафедрой логики и математического анализа ТюмГУ, психолог
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Меньш Елена"
                                                     photo="/img/schoolProjects/mensh.png"
                                        >
                                            Канд. пед. наук, доцент, переводчик, психолог, заведующая кафедрой иностранных
                                            языков и межкультурной коммуникации ТюмГУ
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Шитов Илья"
                                                     photo="/img/schoolProjects/shitov.png"
                                        >
                                            Backend-разработчик ООО «Интеллектуальные транспортные системы»
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Нестерова Ольга"
                                                     photo="/img/schoolProjects/nesterova.png"
                                        >
                                            Канд. тех. наук, доцент ИМиКН ТюмГУ
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Захарчук Екатерина"
                                                     photo="/img/schoolProjects/zaharchuk.png"
                                        >
                                            Врач-нейропсихолог, нейрохирург, ассистент кафедры неврологии и нейрохирургии ТюмГМУ
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Иброгимов Маъмурали"
                                                     photo="/img/schoolProjects/ibrogimov.png"
                                        >
                                            Аспирант-психолог ТюмГУ, предприниматель Таджикистан-Россия, теолог (ислам)
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
                                                    <p className="raleway">Собрана международная команда исследователей из 7 ВУЗов.</p>
                                                    <p className="raleway">Изданы 7 научных публикаций, 7 готовятся к печати.
                                                        Проведена первая в России международная конференция по мудрости (в рамках Конференции Западно-сибирского НОЦ).</p>
                                                    <p className="raleway">Разработан MVP продукта.</p>
                                                </li>
                                                <li className='i3_4'>
                                                    <p className="raleway raleway_bold relative roarMap_title">2022</p>
                                                    <p className="raleway">Изучение проблемы «мудрых решений» как основы для успешного жизненного самоопределения.</p>
                                                </li>
                                                <li className='i3_4'>
                                                    <p className="raleway raleway_bold relative roarMap_title">2023</p>
                                                    <p className="raleway">Исследование механизмов и методов формирования мудрых решений в рамках дисциплин ИОТ.</p>
                                                    <p className="raleway">Определение сценариев и алгоритмов работы по формированию мудрости в цифровом приложении.</p>
                                                </li>
                                            </ul>
                                            <ul className='g3 border_top border_left'>
                                                <li className='i3_4'>
                                                    <p className="raleway raleway_bold relative roarMap_title">2024</p>
                                                    <p className="raleway">Системы поддержки принятия решений студентами, взаимодействующую с пользователем в режиме чат-бот.</p>
                                                </li>
                                                <li className='i3_4'></li>
                                                <li className='i3_4'></li>
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
                                                    <p>Подано 2 заявки.</p>
                                                    <p>Планируется еще 2 заявки.</p>
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
                                                    <p>Кол-во публикаций всех возможных: 7 (РИНЦ), также 7 готовятся к публикации
                                                        (из них: 2 - WoS, 1 - Scopus, 2 - ВАК, 2 - РИНЦ)</p>
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
                                    <p className='asideMarker asideMarker_mt1'>Сайт</p>
                                </li>
                                <li className='i3_9'>
                                    <ul className='g3'>
                                        <li className='i3_12'>
                                            <ul className='g3'>
                                                <li className='i3_12'>
                                                    <a href="https://psychobusiness.wixsite.com/wisdom" className="raleway raleway_bold">https://psychobusiness.wixsite.com/wisdom</a>
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
                                        <SpeakerCard fullName="Мурзина Юлия"
                                                     photo="/img/schoolProjects/murzina_yulia.png"
                                                     email={'y.s.murzina@utmn.ru'}
                                                     phone={'+7-922-047-89-08'}
                                        >
                                            Лидер проекта, канд. психол. наук, доцент кафедры общей и соц.психологии ТюмГУ,
                                            руководитель Гранта РФФИ «Ценностные ориентации владельцев успешного семейного бизнеса» (2018-2021 гг.)
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
                                          image='/img/schoolProjects/sihirtyaNation.png'
                                          link="/schoolProjects/sihirtyaNation"
                                        >
                                            Народ сихиртя – средневековая легенда Арктики: культурная адаптация и трансфер традиций
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
