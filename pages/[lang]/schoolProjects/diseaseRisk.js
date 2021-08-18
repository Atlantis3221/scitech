import React from 'react'

import { Page } from '../../../components/page'
import { Layout } from '../../../components/layout'
import {SpeakerCards, SpeakerCard} from '../../../components/speakerCard'
import { SchoolProject, SchoolProject_Card } from '../../../components/schoolProject'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/router'
import Translator from '../../../i18n/translator'

export default function DiseaseRisk({ modalForm }) {
    const { query: {lang: lang} } = useRouter()
    return (
        <Page>
            <Layout style={{
                backgroundImage: 'url(/img/gradients/school_gradient.svg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '120% -5%'
            }} modalFormText={modalForm}>
                <Helmet>
                    <meta name="description" content='Многоуровневая система оценки риска развития заболеваний работников в Арктике' />
                    <meta name="keywords" content='проект школы научного лидерства центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
                    <meta property="og:image" content="/img/appleIcon.png" />
                    <meta property="og:url" content={`https://scitech.ru/schoolProjects/diseaseRisk`} />
                    <meta property="og:title" content='Многоуровневая система оценки риска развития заболеваний работников в Арктике' />
                    <meta property="og:description" content='проект школы научного лидерства центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
                    <title>Многоуровневая система оценки риска развития заболеваний работников в Арктике</title>
                    <link rel="canonical" href={`https://scitech.ru/schoolProjects/diseaseRisk`} />
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
                                    <h1>Многоуровневая система оценки риска развития заболеваний работников в Арктике</h1>
                                    <img loading="lazy" className="pt2 mb0" src="/img/schoolProjects/diseaseRisk.png" alt="schema" />
                                    <div className="mt_big">
                                        <h4 className="raleway">Цель научного проекта: создание прототипа интеллектуальной
                                            системы оценки риска развития болезней системы кровообращения у работников в
                                            условиях Арктики с критерием достоверности не менее 95%.</h4>
                                        <h4>Генеральные идеи:</h4>
                                        <h4 className="raleway">1. обоснованные выявленные нетривиальные зависимости между
                                            данными из электронных медицинских записей и развитием болезней системы
                                            кровообращения (оценка и прогноз индивидуальных и популяционных рисков);
                                        </h4>
                                        <h4 className="raleway">2. информационно-аналитическое обеспечение медицинских
                                            исследований для оценки степени риска развития сердечно-сосудистых заболеваний в условиях Арктики;
                                        </h4>
                                        <h4 className="raleway">3. разработка модели интеллектуальной системы оценки риска
                                            развития сердечно-сосудистых заболеваний на основе данных дистанционного мониторинга
                                            состояния здоровья работников.
                                        </h4>
                                        <h4 className="raleway">Объект исследования: здоровье человека в экстремальных климатических условиях.
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
                                    <p className='asideMarker asideMarker_mt1'>Критерии оценки НТП для базового сценария реализации проекта до 2024 года</p>
                                </li>
                                <li className='i3_9'>
                                    <img loading="lazy" src="/img/schoolProjects/diseaseRisk_schema.png" alt="schema" />
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
                                        <SpeakerCard fullName="Решетникова Юлия Сергеевна"
                                                     photo="/img/schoolProjects/reshetnikova_yulia.png"
                                                     email="reshetnikovayul@mail.ru"
                                                     phone="+7-929-269-48-81"
                                        >
                                            Лидер проекта, управление проектом, проведение исследований и публикации;
                                            5 лет управленческого опыта в здравоохранении, канд. мед. наук, врач, доц. каф.
                                            общественного здоровья и здравоохранения ИНПР  ФГБОУ ВО Тюменский ГМУ Минздрава России
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Нестерова Ольга Андреевна"
                                                     photo="/img/schoolProjects/nesterova_olga.png"
                                        >
                                            Исследователь, проведение исследований и публикации; 25 лет в разработке медицинских информационных систем, канд. техн. наук
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Каткова Алла Леонидовна"
                                                     photo="/img/schoolProjects/katkova_alla.png"
                                                     email="AllaKatkova@mail.ru"
                                                     phone="+7-961-203-63-00"
                                        >
                                            Исследователь, проведение исследований и публикации; 2 года работы с медицинскими
                                            информационными системами, канд. пед. наук, доц. каф. медицинской информатики и
                                            биологической физики с сетевой секцией биоэтики ЮНЕСКО ФГБОУ ВО Тюменский ГМУ Минздрава России
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Губин Денис Геннадьевич"
                                                     photo="/img/schoolProjects/gubin_denis.png"
                                        >
                                            Исследователь, проведение исследований и публикации; более 30 лет научных исследований мирового уровня, д-р мед. наук
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Захаров Александр Анатольевич"
                                                     photo="/img/schoolProjects/zaharov_aleksandr.png"
                                        >
                                            Разработчик/снабжение, разработка продукта/закупка и поставка технического оборудования;
                                            более 25 лет в разработке медицинских информационных систем, д-р техн. наук
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Петров Иван Михайлович"
                                                     photo="/img/schoolProjects/petrov_ivan.png"
                                        >
                                            Коммуникатор/снабжение, взаимодействие с заинтересованными лицами/закупка и поставка медицинского
                                            оборудования; проректор по науке и инновациям, д-р мед. наук
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Брынза Наталья Семеновна"
                                                     photo="/img/schoolProjects/brynza_natalia.png"
                                        >
                                            Коммуникатор, продвижение проекта; управленческий опыт в здравоохранении более 20 лет, д-р мед. наук
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Потапов Александр Петрович"
                                                     photo="/img/schoolProjects/potapov_aleksandr.png"
                                        >
                                            Исследователь, проведение исследований и публикации; руководитель Центра телемедицинских
                                            технологий, опыт работы в медицинских информационных системах, канд. мед. наук
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Оленников Евгений Александрович"
                                                     photo="/img/schoolProjects/olennikov_evgenij.png"
                                        >
                                            Разработчик, разработка продукта; более 15 лет в разработке медицинских информационных систем, канд. техн. наук
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Григоришин Сергей Викторович"
                                                     photo="/img/schoolProjects/grigorishin_sergej.png"
                                        >
                                            Исследователь, проведение исследований и публикации; 15 лет опыта исследовательской работы, канд. филос. наук
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Нигинский Даниил Михайлович"
                                                     photo="/img/schoolProjects/niginskij_daniil.png"
                                        >
                                            Исследователь, проведение исследований и публикации; аспирант, врач
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Анфилофьева Кристина Сергеевна"
                                                     photo="/img/schoolProjects/anfilofieva_kristina.png"
                                        >
                                            Исследователь, проведение исследований и публикации; аспирант, врач
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Зулькарнеев Искандер Рашитович"
                                                     photo="/img/schoolProjects/zulkarneev_iskander.png"
                                        >
                                            Разработчик, разработка и продвижение продукта; программист, специалист по безопасности
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Панфиленко Дмитрий"
                                                     photo="/img/schoolProjects/panfilenko_dmitrij.png"
                                        >
                                            Разработчик, разработка продукта; аспирант, программист
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Котельников Александр"
                                                     photo="/img/schoolProjects/kotelnikov_aleksandr.png"
                                        >
                                            Разработчик, разработка продукта; аспирант, программист
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
                                                    <p className="raleway">Заключено трехстороннее соглашение (ТюмГМУ, ТюмГУ, Департамент здравоохранения Тюменской обл.).</p>
                                                    <p className="raleway">Выполнен первичный сбор данных электронных медицинских карт (100 тыс. записей 3 тыс. пациентов поликлиники г. Тюмени).</p>
                                                    <p className="raleway">Подготовлены данные электронных медицинских карт для анализа (распознавание и обезличивание).</p>
                                                    <p className="raleway">Выполнено обучение и первичный анализ с использованием методов машинного обучения (подготовка обучающей и тестовой выборки).</p>
                                                    <p className="raleway">Создано приложение «Рискометр как проверка концепта проекта».</p>
                                                    <p className="raleway">Принято участие с темой проекта в двух конференциях «Информационные технологии и системы», Ханты-Мансийск (2019 и 2020).</p>
                                                    <p className="raleway">Принято участие с темой проекта в Стратегической сессии по созданию межрегионального научно-образовательного центра (2019).</p>
                                                    <p className="raleway">Проведен опрос «Ваше отношение к цифровизации здравоохранения» (548 - пациенты / 1159 - медицинские работники).</p>
                                                    <p className="raleway">Осуществлен сбор данных по результатам периодических мед. осмотров работников в условиях Крайнего Севера (200 человек).</p>
                                                    <p className="raleway">Проведена работа с данными амбулаторного мониторинга (суточный мониторинг артериального давления и других показателей) вахтовиков
                                                        в условиях Крайнего Севера с 2013 года (более 1500 человек).</p>
                                                    <p className="raleway">Проведен статистический анализ данных периодических осмотров.</p>
                                                </li>
                                                <li className='i3_4'>
                                                    <p className="raleway raleway_bold relative roarMap_title">2021</p>
                                                    <p className="raleway">Получение финансирования.</p>
                                                    <p className="raleway">Получение разрешения для сбора данных ЭМК.</p>
                                                    <p className="raleway">Закупка медицинского (дистанционного) оборудования.</p>
                                                    <p className="raleway">Разработка критериев персонифицированного отбора.</p>
                                                    <p className="raleway">Формирование группы для дистанционного мониторинга.</p>
                                                    <p className="raleway">Налаживание механизма сбора данных ЭМК (до 2 млн записей).</p>
                                                    <p className="raleway">Отработка критериев персонифицированного отбора.</p>
                                                    <p className="raleway">Заключение договоров с работодателями по применению отбора работников.</p>
                                                </li>
                                                <li className='i3_4'>
                                                    <p className="raleway raleway_bold relative roarMap_title">2022</p>
                                                    <p className="raleway">Описание модели системы.</p>
                                                    <p className="raleway">Проведение тестирования для корректировки параметров.</p>
                                                    <p className="raleway">Разработка модели.</p>
                                                    <p className="raleway">Проведение конференции «Современные направления IT в здравоохранении».</p>
                                                </li>
                                            </ul>
                                            <ul className='g3 border_top border_left'>
                                                <li className='i3_4'>
                                                    <p className="raleway raleway_bold relative roarMap_title">2023</p>
                                                    <p className="raleway">Проведение конференции «Цифровизация здравоохранения».</p>
                                                    <p className="raleway">Публикация 16 статей.</p>
                                                </li>
                                                <li className='i3_4'>
                                                    <p className="raleway raleway_bold relative roarMap_title">2024</p>
                                                    <p className="raleway">Создание прототипа интеллектуальной системы.</p>
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
                                                    <p>Подано 6 заявок на гранты</p>
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
                                                    <p>17 (14 - WoS, Scopus)</p>
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
                                                    <a href="https://sites.google.com/view/iconsilium/home"
                                                       className="raleway raleway_bold">
                                                        https://sites.google.com/view/iconsilium/home</a>
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
                                        <SpeakerCard fullName="Решетникова Юлия Сергеевна"
                                                     photo="/img/schoolProjects/reshetnikova_yulia.png"
                                                     email="reshetnikovayul@mail.ru"
                                                     phone="+7-929-269-48-81"
                                        >
                                            Лидер проекта, управление проектом, проведение исследований и публикации;
                                            5 лет управленческого опыта в здравоохранении, канд. мед. наук, врач, доц. каф.
                                            общественного здоровья и здравоохранения ИНПР  ФГБОУ ВО Тюменский ГМУ Минздрава России
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

export async function getServerSideProps(ctx) {
    const {current} = Translator("test", ctx.params.lang)

    return {
        props: { current: current["test"], modalForm: current["modalForm"]  },
    }
}