import React from 'react'

import { Page } from '../../components/page'
import { Layout } from '../../components/layout'
import {SpeakerCards, SpeakerCard} from '../../components/speakerCard'
import { SchoolProject, SchoolProject_Card } from '../../components/schoolProject'
import { Helmet } from 'react-helmet'

export default function ProfessionalGrowth(props) {
    return (
        <Page>
            <Layout style={{
                backgroundImage: 'url(/img/gradients/school_gradient.svg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '120% -5%'
            }}>
                <Helmet>
                    <meta name="description" content='Увеличение профессионального долголетия пришлого населения cеверных территорий: форсайт адаптационных стратегий' />
                    <meta name="keywords" content='проект школы научного лидерства центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
                    <meta property="og:image" content="/img/meta-image.jpg" />
                    <meta property="og:url" content={`https://scitech.ru/schoolProjects/professionalGrowth`} />
                    <meta property="og:title" content='Увеличение профессионального долголетия пришлого населения cеверных территорий: форсайт адаптационных стратегий' />
                    <meta property="og:description" content='проект школы научного лидерства центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
                    <title>Увеличение профессионального долголетия пришлого населения cеверных территорий: форсайт адаптационных стратегий</title>
                    <link rel="canonical" href={`https://scitech.ru/schoolProjects/professionalGrowth`} />
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
                                    <h1>Увеличение профессионального долголетия пришлого населения</h1>
                                    <h1>Северных территорий: форсайт адаптационных стратегий</h1>
                                    <img loading="lazy" className="pt2 mb0" src="/img/schoolProjects/projectGrowth_image.png" alt="Увеличение профессионального долголетия пришлого населения" />
                                    <div className="mt_big">
                                        <h4 className="raleway">Цель научного проекта: расширение представлений
                                            о механизмах адаптации пришлого населения в условиях Севера, разработка и внедрение
                                            на их основе программного продукта (к 2023 году), обеспечивающего форсайт
                                            (долговременное прогнозирование и реализацию) адаптационных стратегий для
                                            увеличения профессионального долголетия пришлого населения Северных территорий.</h4>
                                        <h4 className="raleway">Генеральная идея: новый научный подход к прогнозированию
                                            и реализации долгосрочных адаптационных стратегий, основанный на комплексной
                                            функциональной оценке состояния организма человека, математическом моделировании
                                            адаптационных стратегий и коррекции образа жизни с использованием общебиологических
                                            принципов эффективного восстановления морфо-функциональных ресурсов организма
                                            с учетом длительности проживания на Севере и профессионального стресса позволит
                                            значительно увеличить профессиональное долголетие пришлого населения Северных территорий.
                                        </h4>
                                        <h4 className="raleway">Команда проекта приняла участие в 7 модулях
                                            ШНЛ ЦРК НОЦ и по итогам каждого входила в тройку лидеров по результатам обучения и защиты проекта.</h4>
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
                                    <img loading="lazy" src="/img/schoolProjects/projectGrowth_schema.png" alt="schema" />
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
                                        <SpeakerCard photo="/img/schoolProjects/alena_govoruhina.png"
                                                     fullName="Алена Говорухина"
                                                     position='СурГПУ'
                                                     email="govalena@mail.ru"
                                                     phone="+7-922-258-22-08"
                                        >
                                            Лидер проекта, д-р биол. наук, доц.
                                        </SpeakerCard>
                                        <SpeakerCard photo="/img/schoolProjects/oleg_malkov.png"
                                                     fullName="Олег Мальков"
                                                     position='СурГПУ'
                                                     email="maosurgpu@gmail.com"
                                                     phone="+7-922-654-77-17"
                                        >
                                            Организация грантовой поддержки, пилот на предприятии, паспорт продукта, д-р мед. наук, доц.
                                        </SpeakerCard>
                                        <SpeakerCard photo="/img/schoolProjects/viktor_maltsev.png"
                                                     fullName="Виктор Мальцев"
                                                     position='СурГПУ'
                                        >
                                            Организация и сопровождение исследовательского блока
                                        </SpeakerCard>
                                        <SpeakerCard photo="/img/schoolProjects/natalia_nenenko.png"
                                                     fullName="Наталья Нененко"
                                                     position='СурГПУ'
                                        >
                                            Организация и сопровождение исследовательского блока, наукометрический анализ
                                        </SpeakerCard>
                                        <SpeakerCard photo="/img/schoolProjects/vergovtsev_konstantin.png"
                                                     fullName="Верховцев Константин"
                                                     position='ТюмГУ'
                                        >
                                            Привлечение ресурсов, защита интеллектуальной собственности
                                        </SpeakerCard>
                                        <SpeakerCard photo="/img/schoolProjects/tretiakov_sergej.png"
                                                     fullName="Третьяков Сергей"
                                                     position='СурГПУ'
                                        >
                                            Математическое моделирование
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
                                    <p className='asideMarker'>Вакансии</p>
                                </li>
                                <li className='i3_9'>
                                    <p>Программист</p>
                                    <p>Маркетолог</p>
                                    <a href="mailto:govalena@mail.ru" className='socials_mail socials_mail__alone'> </a>
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
                                                    <p className="raleway">Создана научная межвузовская региональная коллаборация (СурГПУ, ЮГУ, ТюмГУ)</p>
                                                    <p className="raleway">Подано 3 заявки на гранты</p>
                                                    <p className="raleway">Опубликованы 4 статьи в журналах, индексируемых в международных базах данных</p>
                                                    <p className="raleway">Проведено 4 фандрайзинговых мероприятия по привлечению ресурсов в проект  Модель адаптационных стратегий</p>
                                                </li>
                                                <li className='i3_4'>
                                                    <p className="raleway raleway_bold">2021</p>
                                                    <p className="raleway">Информационная база данных по показателям адаптационных механизмов</p>
                                                    <p className="raleway pb3">Публикации в рейтинговых журналах и подержанные гранты: 3 публикации (Q2 – Q3), 3 гранта</p>
                                                </li>
                                                <li className='i3_4'>
                                                    <p className="raleway raleway_bold">2022</p>
                                                    <p className="raleway">Май - Модель адаптационных стратегий</p>
                                                    <p className="raleway pb3">Декабрь - Программный продукт</p>
                                                </li>
                                            </ul>
                                            <ul className='g3 border_top border_left'>
                                                <li className='i3_4'>
                                                    <p className="raleway raleway_bold"> 2023</p>
                                                    <p className="raleway">Май - Модель адаптационных стратегий</p>
                                                    <p className="raleway pb3">Декабрь - Патенты на базу данных, модель, продукт</p>
                                                </li>
                                                <li className='i3_4'>
                                                    <p className="raleway raleway_bold">2024</p>
                                                    <p className="raleway">3 гранта/15 заявок, 3 публикации (Q2 – Q3),
                                                        6 докладов на международных конференциях
                                                        Достижение целевых показателей национального проекта «Демография» и
                                                        регионального проекта ХМАО-Югры «Укрепление общественного здоровья»
                                                        (увеличение доли граждан, ведущих здоровый образ жизни, уменьшение
                                                        распространенности вредных привычек на 15%, повышение физической
                                                        активности на 30-50%).</p>
                                                    <p className="raleway">Создание региональной научной школы по экологической физиологии человека.</p>
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
                                                    <p>Подано 2 заявки: 1 год — 1,2 млн ₽, 3 года — 30 млн ₽</p>
                                                    <p>Планируется еще 2 заявки </p>
                                                    <p>Получено финансирование в рамках госзадания по тематике проекта на сумму
                                                        27 млн ₽ на 2021-2023</p>
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
                                                    <p> Кол-во публикаций всех возможных: 10 (4 - WoS, Scopus, 6 - РИНЦ)</p>
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
                                        <SpeakerCard photo="/img/schoolProjects/alena_govoruhina.png"
                                                     fullName="Алена Говорухина"
                                                     position='СурГПУ'
                                                     email="govalena@mail.ru"
                                                     phone="+7-922-258-22-08"
                                        >
                                            Лидер проекта, д-р биол. наук, доц.
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
