import React from 'react'

import { Page } from '../../components/page'
import { Layout } from '../../components/layout'
import {SpeakerCards, SpeakerCard} from '../../components/speakerCard'
import { SchoolProject, SchoolProject_Card } from '../../components/schoolProject'
import { Helmet } from 'react-helmet'

export default function EcoSafety(props) {
    return (
        <Page>
            <Helmet>
                <meta name="description" content="Цель научного проекта: создание инструментария для управления
                оздоровлением и обеспечением экологической безопасности Обь-Иртышского речного бассейна в перспективе
                2030 г. на базе интегрированной динамической модели социально-экологической системы бассейна,
                опирающейся на международные экологические стандарты.̆" />
                <meta name="keywords" content="экологическая безопасность Обь-Иртышского речного бассейна" />
                <meta property="og:image" content="/img/meta-image.jpg" />
                <meta property="og:url" content="https://scitech.ru/schoolProjects/ecoSafety" />
                <meta property="og:title" content="Экологическая безопасность Обь-Иртышского речного бассейна"/>
                <meta property="og:description" content="Цель научного проекта: создание инструментария для управления
                оздоровлением и обеспечением экологической безопасности Обь-Иртышского речного бассейна в перспективе
                2030 г. на базе интегрированной динамической модели социально-экологической системы бассейна,
                опирающейся на международные экологические стандарты." />
                <title>Экологическая безопасность Обь-Иртышского речного бассейна</title>
                <link rel="canonical" href="https://scitech.ru/schoolProjects/ecoSafety" />
            </Helmet>

            <Layout style={{
                backgroundImage: 'url(/img/gradients/school_gradient.svg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '120% -5%'
            }}>
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
                                    <h1>Экологическая безопасность Обь-Иртышского речного бассейна</h1>
                                    <img loading="lazy" className="pt2 mb0" src="/img/schoolProjects/ecoSafety_image.png" alt="schema" />
                                    <div className="mt_big">
                                        <h4 className="raleway">Цель научного проекта: создание инструментария для управления
                                            оздоровлением и обеспечением экологической безопасности Обь-Иртышского речного
                                            бассейна в перспективе 2030 г. на базе интегрированной динамической модели
                                            социально-экологической системы бассейна, опирающейся на международные
                                            экологические стандарты.</h4>
                                        <h4 className="raleway">Основная суть работы: интеграция частных моделей природных
                                            процессов (идущих в атмосферном воздухе, водных объектах, почвах, горных породах,
                                            в том числе многолетнемерзлых, биоте, экосистемах) между собой и с социально-экономическими
                                            системами в единую динамическую модель, которая опирается на выбранные опытным
                                            путем критические показатели состояния природы и общества, получающая первичные
                                            данные в режиме реального времени.
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
                                    <img loading="lazy" src="/img/schoolProjects/ecoSafety.png" alt="schema" />
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
                                        <SpeakerCard photo="/img/schoolProjects/horoshavin_vitaliy.png"
                                                     fullName="Хорошавин Виталий"
                                                     position='ТюмГУ'
                                                     email="v.y.khoroshavin@utmn.ru"
                                                     phone="+7-912-397-05-98"
                                        >
                                            Лидер проекта, моделирование процессов. Канд. геогр. наук, доц., директор Института наук о Земле ТюмГУ
                                        </SpeakerCard>
                                        <SpeakerCard photo="/img/schoolProjects/rusakova_irina.png"
                                                     fullName="Русакова Ирина"
                                                     position='ТюмГУ'
                                                     email="i.r.idrisov@utmn.ru"
                                                     phone="+7-912-925-60-00"
                                        >
                                            НИР. Канд. хим. наук, зав. лаб. мониторинга окружающей среды Тобольского ПИ (филиал) ТюмГУ
                                        </SpeakerCard>
                                        <SpeakerCard photo="/img/schoolProjects/idrisov_ildar.png"
                                                     fullName="Идрисов Ильдар"
                                                     position='ТюмГУ'
                                        >
                                            Создание инфраструктуры, сбор данных. Канд. геогр. наук, доц., зав. каф. картографии и ГИС Института наук о Земле ТюмГУ
                                        </SpeakerCard>
                                        <SpeakerCard photo="/img/schoolProjects/zarov_evgeny.png"
                                                     fullName="Заров Евгений"
                                                     position='ЮГУ'
                                        >
                                            Сбор данных, моделирование процессов. Ст. науч. сотр. каф. ЮНЕСКО «Динамика окружающей среды и изменения климата» ЮГУ
                                        </SpeakerCard>
                                        <SpeakerCard photo="/img/schoolProjects/korkin_sergey.png"
                                                     fullName="Коркин Сергей"
                                                     position='НВГУ'
                                        >
                                            Моделирование процессов. Канд. геогр. наук, доц., каф. географии, зав. лаб. геоэкологии
                                            НВГУ
                                        </SpeakerCard>
                                        <SpeakerCard photo="/img/schoolProjects/tsaptsova_tatiana.png"
                                                     fullName="Цапцова Татьяна"
                                                     position='ТюмГУ'
                                        >
                                            Нормирование, доц. каф. естественнонаучных дисциплин Тобольского ПИ (филиал) ТюмГУ
                                        </SpeakerCard>
                                        <SpeakerCard photo="/img/schoolProjects/samohina_natalia.png"
                                                     fullName="Самохина Наталья"
                                                     position='НВГУ'
                                        >
                                            Закупка  оборудования, менеджмент проекта. Канд. филос. наук, доц., ведущий специалист по организации и  сопровождению НИД
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
                                                    <p className="raleway">Разработана научная основа для внедрения региональных экологических нормативов путем
                                                        адаптации международных экологических норм и подходов к оценке качества окружающей среды
                                                        (с учетом природных особенностей региона)</p>
                                                    <p className="raleway">Алгоритм оценки баланса природных/техногенных воздействий на «здоровье» бассейновых экосистем в Арктике</p>
                                                    <p className="raleway">Новые методы оценки и технологии регулирования рассредоточенных (non-point) источников загрязнения.</p>
                                                </li>
                                                <li className='i3_4'>
                                                    <p className="raleway raleway_bold relative roarMap_title">2023</p>
                                                    <p className="raleway">Разработана научная основа для внедрения региональных экологических нормативов путем
                                                        адаптации международных экологических норм и подходов к оценке качества окружающей среды
                                                        (с учетом природных особенностей региона)</p>
                                                    <p className="raleway">Алгоритм оценки баланса природных/техногенных воздействий на «здоровье» бассейновых экосистем в Арктике</p>
                                                    <p className="raleway">Новые методы оценки и технологии регулирования рассредоточенных (non-point) источников загрязнения.</p>
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
                                                    <p>4 заявки подано, 4 в процессе</p>
                                                    <p>Привлечено 23 млн ₽/год</p>
                                                    <p>Финансирование проекта на сумму 638,900 млн руб. на 2020-2024 гг</p>
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
                                                    <p> Опубликовано 23 публикации в изданиях МБД WoS СС, Scopus, более 30 статей за рамками ШНЛ</p>
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
                                                    <p> Участие в разработке концепции модернизации системы экологического
                                                        мониторинга РФ под эгидой Министерства природных ресурсов и экологии РФ</p>
                                                    <p>Экспедиция для исследования текущей экологической ситуации в низовья р. Оби (август, 2020) </p>
                                                    <p>Презентация проекта «Экологическая безопасность Обь-Иртышского речного бассейна» на
                                                        встрече с консулом Великобритании в г. Екатеринбурге</p>
                                                    <p>Проведение российско-британской полевой экологической школы «ARCTIS-2020»
                                                        на базе научного стационара «Мухрино» (ЮГУ)
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
                                    <p className='asideMarker'>руководитель</p>
                                </li>
                                <li className='i3_9'>
                                    <SpeakerCards>
                                        <SpeakerCard photo="/img/schoolProjects/horoshavin_vitaliy.png"
                                                     fullName="Хорошавин Виталий"
                                                     position='ТюмГУ'
                                                     email="v.y.khoroshavin@utmn.ru"
                                                     phone="+7-912-397-05-98"
                                        >
                                            Лидер проекта, моделирование процессов. Канд. геогр. наук, доц., директор Института наук о Земле ТюмГУ
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
