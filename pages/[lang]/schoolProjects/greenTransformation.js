import React from 'react'

import { Page } from '../../../components/page'
import { Layout } from '../../../components/layout'
import {SpeakerCards, SpeakerCard} from '../../../components/speakerCard'
import { SchoolProject, SchoolProject_Card } from '../../../components/schoolProject'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/router'
import Translator from '../../../i18n/translator'

export default function GreenTransformation({ modalForm }) {
    const { query: {lang: lang} } = useRouter()
    return (
        <Page>
            <Layout style={{
                backgroundImage: 'url(/img/gradients/school_gradient.svg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '120% -5%'
            }} modalFormText={modalForm}>
                <Helmet>
                    <meta name="description" content='Разработка модели зеленой трансформации региона: ценности, практики, социально-экономические эффекты' />
                    <meta name="keywords" content='проект школы научного лидерства центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
                    <meta property="og:image" content="/img/appleIcon.png" />
                    <meta property="og:url" content={`https://scitech.ru/schoolProjects/greenTransformation`} />
                    <meta property="og:title" content='Разработка модели зеленой трансформации региона: ценности, практики, социально-экономические эффекты' />
                    <meta property="og:description" content='проект школы научного лидерства центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
                    <title>Разработка модели зеленой трансформации региона: ценности, практики, социально-экономические эффекты</title>
                    <link rel="canonical" href={`https://scitech.ru/schoolProjects/greenTransformation`} />
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
                                    <h1>Разработка модели зеленой трансформации региона: ценности, практики, социально-экономические эффекты</h1>
                                    <img loading="lazy" className="pt2 mb0" src="/img/schoolProjects/greenTransformation.png" alt="schema" />
                                    <div className="mt_big">
                                        <h4 className="raleway">Цель научного проекта: моделирование условий и механизмов продвижения
                                            зеленых (экологических) практик и зеленых (экологических) ценностей, которые стимулируют
                                            социально-экономическое развитие региона.</h4>
                                        <h4 className="raleway">Генеральная идея: экологическая повестка актуальна для мирового сообщества,
                                            и российское общество также участвует в переходе к более устойчивым, экологическим практикам.
                                            Зеленая трансформация регионального развития предполагает процесс изменения исходного состояния
                                            в целевое, используя все выявленные ресурсы зеленого развития и вновь созданные механизмы.
                                            В целом, проект можно представить в виде двух этапов. Первый этап проекта - аналитический,
                                            на котором происходит подготовка шагов для трансформации – проводятся социальные исследования,
                                            изучаются субъекты зеленых практик и связи между ними, выявляются разрывы между практиками,
                                            способы связывания стейкхолдеров, способы создания цепочек добавленной стоимости, продуктовых
                                            цепочек и т.д. Второй этап проекта – этап моделирования – предполагает описание практической
                                            деятельности, которая рекомендована для достижения цели: рекомендации, планы-графики, дорожные
                                            карты, программы. Кроме того, важную роль в проекте играют инструменты анализа и трансформации,
                                            которые создаются как продукты проекта. Такими продуктами являются: открытая база данных реестра
                                            зеленых практик; информационно-коммуникационная платформа «Green networking / Зеленая сеть»;
                                            интерактивная карта зеленых практик. В результате будет обоснована методология зеленой трансформации,
                                            включающая набор аналитических инструментов и практических рекомендаций по осуществлению
                                            социально-экономических изменений.
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
                                    <img loading="lazy" src="/img/schoolProjects/greenTransformation_schema.png" alt="schema" />
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
                                        <SpeakerCard fullName="Захарова Ольга Владимировна"
                                                     photo="/img/schoolProjects/zaharova_olga.png"
                                                     email="o.v.zakharova@utmn.ru"
                                                     phone="+7-922-269-95-05"
                                        >
                                            Лидер проекта, координатор проекта; разработка паспорта и дизайна проекта,
                                            создание системы контроля проекта, разработка рекомендаций для органов власти,
                                            теоретическое обоснование; канд. филос. наук, доц.
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Пупышева Ирина Николаевна"
                                                     photo="/img/schoolProjects/pupysheva_irina.png"
                                        >
                                            Организатор научного продвижения; анализ социальной информации, теоретическое
                                            обоснование; канд. филос. наук, доц.
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Суворова Людмила Григорьевна"
                                                     photo="/img/schoolProjects/suvorova_lyudmila.png"
                                        >
                                            Организатор социального продвижения; описание оснований классификации практик,
                                            анализ связей, логический анализ социальных данных данных; канд. филос. наук, доц.
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Захаров Антон Викторович"
                                                     photo="/img/schoolProjects/zaharov_anton.png"
                                        >
                                            Менеджер по масштабированию; разработка бюджета проекта, масштабирование проекта;
                                            канд. пед. наук, начальник научного отдела Ишимского филиала ТюмГУ
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Костко Наталья Анатольевна"
                                                     photo="/img/schoolProjects/kostko_natalia.png"
                                        >
                                            Эксперт; организация социологического исследования, анализ результатов; д-р соц. наук, проф.
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Ахмедова Ирина Дмитриевна"
                                                     photo="/img/schoolProjects/ahmedova_irina.png"
                                                     email="idakhmedova@mail.ru"
                                                     phone="+7-909-184-77-56"
                                        >
                                            Разработчик продукта; создание и поддержка интерактивной карты; канд. геогр. наук, доц.
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Жеребятьева Наталья Владимировна"
                                                     photo="/img/schoolProjects/zherebyatieva_natalia.png"
                                        >
                                            Разработчик продукта; моделирование, пространственный анализ данных; канд. геогр. наук, доц.
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Сулкарнаева Лилия Даулятовна"
                                                     photo="/img/schoolProjects/sulkarnaeva_liliya.png"
                                        >
                                            Разработчик продукта; наполнение базы данных, пространственный анализ данных; ст. преподаватель, профессиональный переводчик
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Паюсова Татьяна Игоревна"
                                                     photo="/img/schoolProjects/payusova_tatiana.png"
                                        >
                                            Разработчик продукта; моделирование, архитектор базы данных; доцент
                                        </SpeakerCard>
                                        <SpeakerCard fullName="Атманских Мария Борисовна"
                                                     photo="/img/schoolProjects/atmanskih_mariya.png"
                                        >
                                            Разработчик продукта; наполнение базы данных; ст. преподаватель
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
                                                    <p className="raleway">Разработано категориальное поле зеленых ценностей, описано сущностное понимание зеленых ценностей.</p>
                                                    <p className="raleway">Изучены методологические подходы к феномену «зеленые практики», обоснован термин, разработана классификация зеленых практик.</p>
                                                    <p className="raleway">Изучено восприятие обществом зеленых практик, описана картина готовности населения к «зеленому» развитию региона (на основании анкетирования более 400 респондентов).</p>
                                                    <p className="raleway">Осуществляется исследование логики повседневности зеленых практик как основание механизма их развития (проведено
                                                        5 биографических интервью, сделаны предварительные выводы).</p>
                                                    <p className="raleway">Выявлены наиболее влиятельные зеленые группы в социальных сетях и связи между ними методом визуализации социального графа.</p>
                                                    <p className="raleway">Определены условия масштабирования зеленых практик (на материалах анализа зеленых
                                                        проектов, финансируемых на краудфандинговых платформах).</p>
                                                    <p className="raleway">Проанализированы 390 проектов. Выявлены зеленые ценности, использование которых в
                                                        позиционировании ведет к успешному финансированию проектов.</p>
                                                    <p className="raleway">Созданы версии продуктов проекта: реестра зеленых практик, информационно-коммуникационной платформы
                                                        «Green networking / Зеленая сеть», интерактивной карты зеленых практик.</p>
                                                    <p className="raleway">Активно ведется взаимодействие с партнерами:
                                                        запускается курс в рамках Центра дополнительного образования (ТюмГУ), где будут
                                                        обучаться предприниматели и волонтеры, занятые в сфере обращения с отходами; реализуется
                                                        туристско-образовательный проект неформального экологического образования для школьников
                                                        и студентов с Фондом коренных малочисленных народов Тюменской области.</p>
                                                </li>
                                                <li className='i3_4'>
                                                    <p className="raleway raleway_bold relative roarMap_title">2023</p>
                                                    <p className="raleway">Модель зеленой трансформации социально-экономической среды региона.</p>
                                                    <p className="raleway">Методология зеленой трансформации региона.
                                                        программа популяризации зеленых практик для формирования институциональных оснований их реализации (обсуждение зеленой повестки в Точке кипения, в органах власти и т.д.).
                                                    </p>
                                                    <p className="raleway">Система институциональной поддержки зеленых практик как совокупность новых функций управления.</p>
                                                    <p className="raleway">Реестр зеленых практик.</p>
                                                    <p className="raleway">Информационно-коммуникационная платформа «Green networking / Зеленая сеть».</p>
                                                    <p className="raleway">Интерактивная карта зеленых практик.</p>
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
                                                    <p>Подано 5 заявок на гранты, привлечено 2,5 млн ₽</p>
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
                                                    <p>8 (изданы 3 - ВАК и WoS - Q2, 1 - глава в монографии, 4 подготовлено для WoS)</p>
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
                                                    <p> 3 </p>
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
                                                    <a href="http://greennetworking.ru/" className="raleway raleway_bold">http://greennetworking.ru/</a>
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
                                        <SpeakerCard fullName="Захарова Ольга Владимировна"
                                                     photo="/img/schoolProjects/zaharova_olga.png"
                                                     email="o.v.zakharova@utmn.ru"
                                                     phone="+7-922-269-95-05"
                                        >
                                            Лидер проекта, координатор проекта; разработка паспорта и дизайна проекта,
                                            создание системы контроля проекта, разработка рекомендаций для органов власти,
                                            теоретическое обоснование; канд. филос. наук, доц.
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