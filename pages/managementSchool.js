import React from 'react'

import { Page } from '../components/page'
import { Layout } from '../components/layout'
import { SpeakerCards, SpeakerCard } from '../components/speakerCard'
import { Button } from '../components/button'
import { SchoolProject, SchoolProject_Card } from '../components/schoolProject'
import { StrongText } from '../components/strongText'
// import { Modal } from '../../@fireball/components/modal'
import { RegisterEventFormSchool } from '../components/forms/registerEventFormSchool/registerEventForm'
// import { Requests } from '../../@fireball/collections/requests'
import { Helmet } from 'react-helmet'
import { RegisterEventForm } from '../components/forms/registerEventForm/registerEventForm'
import '../styles/fonts.css'
import '../styles/reset.less'
import '../styles/sciteam.less'
import '../styles/form.less'
import '../styles/home.less'
import '../styles/grid2.less'
import '../styles/textPopup.less'
import '../styles/variables.less'
import '../components/speakerCard/speakerCard.less'

export default function ManagementSchool(props) {
  return (
    <Page>
      <Helmet>
        <meta name="description"
              content="Подготовка руководителей, которые должны обеспечить перевод исследовательской идеи в инновационную технологию или продукт" />
        <meta name="keywords" content="Управление научно-техническими проектами, шрнтп" />
        <meta property="og:image" content="/img/meta-image.jpg" />
        <meta property="og:url" content="https://scitech.ru/managementSchool" />
        <meta property="og:title" content="Школа руководителей научно-технологических проектов" />
        <meta property="og:description"
              content="Подготовка руководителей, которые должны обеспечить перевод исследовательской идеи в инновационную технологию или продукт" />
        <title>Школа руководителей научно-технологических проектов</title>
        <link rel="canonical" href="https://scitech.ru/managementSchool" />
      </Helmet>

      <Layout style={{
        backgroundImage: 'url(/img/gradients/school_gradient_viol.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '120% -5%',
      }}>
        <div className='show wrapper_hero'>
          <div className='container relative'>
            <div className="colorSpot colorSpot__violet" style={{ left: '7.7rem'}}></div>
            <div className='content'>
              <ul className='g3 relative'>
                <li className='i3_3'>
                  <p className='asideMarker'>Образовательный проект</p>
                </li>
                <li className='i3_9'>
                  <h1>Школа руководителей</h1>
                  <h1>научно-технических проектов</h1>
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
                </li>
                <li className='i3_9 wrapper_borderTop relative'>
                  <ul className='g3'>
                    <li className='i3_12 flex_between'>
                      <div>
                        <p className="asideMarker">
                          {/*TODO: change svg*/}
                          <svg width="14" height="16" viewBox="0 0 14 16" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M9.52047 6.33759C10.5813 5.37044 12.0158 4.06241 12.1466 0.9375H13.0938V0H0.90625V0.9375H1.85341C1.98416 4.06241 3.41872 5.37044 4.47953 6.33759C5.19112 6.98637 5.59375 7.38347 5.59375 8C5.59375 8.61653 5.19112 9.01363 4.47953 9.66241C3.41872 10.6296 1.98416 11.9376 1.85341 15.0625H0.90625V16H13.0938V15.0625H12.1466C12.0158 11.9376 10.5813 10.6296 9.52047 9.66241C8.80888 9.01363 8.40625 8.61653 8.40625 8C8.40625 7.38347 8.80888 6.98637 9.52047 6.33759ZM6.53125 11.5137C6.38647 11.5436 6.24344 11.587 6.10384 11.6448L3.23269 12.8329C3.70156 11.6407 4.45675 10.9518 5.11116 10.3552C5.84147 9.68937 6.53125 9.06047 6.53125 8V11.5137ZM8.88884 10.3552C9.54325 10.9518 10.2984 11.6407 10.7673 12.8328L7.89616 11.6447C7.75656 11.587 7.61353 11.5435 7.46875 11.5137V8C7.46875 9.06047 8.15853 9.68937 8.88884 10.3552ZM3.21622 3.125C2.98956 2.53441 2.83303 1.82131 2.79206 0.9375H11.2079C11.1669 1.82131 11.0104 2.53441 10.7837 3.125H3.21622Z"
                              fill="#02090F" />
                          </svg>
                          Длительность — 1 год
                        </p>
                        <p className="raleway">Февраль 2021 - Февраль 2022</p>
                      </div>
                      <div className="datePlace_place mt_low">
                        <img src='/img/pin.svg' alt='icon' />
                        <div className="place_text">
                          <p className="asideMarker asideMarker_mt">
                            онлайн, оффлайн
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="raleway">Прием заявок окончен</p>
                      </div>
                    </li>
                    <li className='i3_12 flex_end m0'>
                      {/*<div className='registerEventForm registerEventForm__violet'>*/}
                        {/*<Modal*/}
                        {/*  Trigger={props => (*/}
                        {/*    <Button violet onClick={props.onClick}>*/}
                        {/*      Записаться на набор 2021/2022*/}
                        {/*    </Button>*/}
                        {/*  )}*/}
                        {/*  Content={props => (*/}
                        {/*    <div>*/}
                        {/*      <div className='registerEventForm_title'>*/}
                        {/*        Записаться на набор 2021/2022*/}
                        {/*      </div>*/}
                        {/*      /!*TODO: переделать на общую форму*!/*/}
                        {/*      <RegisterEventForm*/}
                        {/*        // applicationType={true}*/}
                        {/*        hideParticipant={false}*/}
                        {/*        hideSituation={true}*/}
                        {/*        showOrganizationField={true}*/}
                        {/*        eventType={'managementSchoolNextSet'}*/}
                        {/*        onSubmit={(e, payload) => {*/}
                        {/*          Requests.methods.insert({*/}
                        {/*            group: 'registrations_schoolCoach',*/}
                        {/*            payload,*/}
                        {/*          })*/}
                        {/*          // props.close()*/}
                        {/*        }}*/}
                        {/*      />*/}
                        {/*    </div>*/}
                        {/*  )}*/}
                        {/*/>*/}
                      {/*</div>*/}
                      {/*<div className='registerEventForm registerEventForm__violet'>*/}
                      {/*  <Modal*/}
                      {/*    Trigger={props => (*/}
                      {/*      <Button bordered-violet marginleft onClick={props.onClick}>*/}
                      {/*        Заказать проведение в моем регионе*/}
                      {/*      </Button>*/}
                      {/*    )}*/}
                      {/*    Content={props => (*/}
                      {/*      <div>*/}
                      {/*        <div className='registerEventForm_title'>*/}
                      {/*          Заказать проведение в моем регионе*/}
                      {/*        </div>*/}
                      {/*        <RegisterEventForm*/}
                      {/*          // applicationType={true}*/}
                      {/*          hideParticipant={false}*/}
                      {/*          hideSituation={true}*/}
                      {/*          showOrganizationField={true}*/}
                      {/*          eventType={'managementSchoolMyRegion'}*/}
                      {/*          onSubmit={(e, payload) => {*/}
                      {/*            Requests.methods.insert({*/}
                      {/*              group: 'registrations_schoolCoach_MyRegion',*/}
                      {/*              payload,*/}
                      {/*            })*/}
                      {/*            // props.close()*/}
                      {/*          }}*/}
                      {/*        />*/}
                      {/*      </div>*/}
                      {/*    )}*/}
                      {/*  />*/}
                      {/*</div>*/}
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
                  <p className='asideMarker'>О проекте</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <em>
                            Подготовка руководителей, которые должны обеспечить перевод исследовательской идеи в
                            инновационную
                            технологию или продукт (прототип), генерировать нестандартные идеи, способствовать
                            масштабированию инноваций,
                            созданию новых рабочих мест, выводить на рынок новые продукты и передовые технологии.
                            <p><em>Основные идеи школы:</em></p>
                          </em>
                        </li>
                        <li className='i3_6'>
                          <h4>Пространство нового как возможность сформировать новые идеи и проекты</h4>
                          <h4>Проектное обучение и наставничество</h4>
                          <h4>Умение решать задачи в условиях ограниченности или отсутствия ресурсов</h4>
                        </li>
                        <li className='i3_6'>
                          <h4>Культура кооперации как ключевой фактор развития технологий</h4>
                          <h4>Предпринимательство и предприимчивость, постановка предпринимательской логики</h4>
                          <h4>Постановка управленческих и бизнес-моделей будущего как основа для разработки технологий,
                            основанных на науке</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
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
                    <SpeakerCard photo="/img/speaker_golubev.png"
                                 fullName="Евгений Голубев" position='ментор'
                    >
                      Директор Технологического парка ТюмГУ, эксперт по управлению крупными проектами во взаимодействии
                      университет-индустрия
                    </SpeakerCard>
                    <SpeakerCard photo="/img/speaker_kizeev.png"
                                 fullName="Вениамин Кизеев" position='руководитель проектной работы'
                    >
                      IPMA Level«B», член правления НП «СОВНЕТ», эксперт по управлению проектами и инновациями компании
                      WINbd
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
                  <p className='asideMarker'>Основные эксперты</p>
                </li>
                <li className='i3_9'>
                  <SpeakerCards>
                    <SpeakerCard photo="/img/speaker_skobelev.png"
                                 fullName="Скобелев Петр Олегович"
                    >
                      Доктор технических наук, президент / генеральный конструктор Группы компаний «Генезис знаний»,
                      Самара-Москва-Сколково, Россия
                    </SpeakerCard>
                    <SpeakerCard photo="/img/speaker_lavrov.png"
                                 fullName="Лавров Олег Владимирович"
                    >
                      Президент Российской ассоциации менеджмента знаний «КМ Альянс», доктор медицинских наук
                    </SpeakerCard>
                    <SpeakerCard photo="/img/speaker_tatunashvili.png"
                                 fullName="Татунашвили Леван Вахтангович"
                    >
                      Заместитель генерального директора по инновационной деятельности Технопарка Новосибирского
                      Академгородка Академпарк
                    </SpeakerCard>
                    <SpeakerCard photo="/img/speaker_poletaev.png"
                                 fullName="Полетаев Дмитрий Александрович"
                    >
                      Эксперт по подготовке презентаций и публичных выступлений. Визитинг лектор МВА ТПУ
                    </SpeakerCard>
                    <SpeakerCard photo="/img/speaker_tsepes.png"
                                 fullName="Ципес Григорий Львович"
                    >
                      Кандидат экономических наук, главный консультант Департамента развития и консалтинга IBS,
                      вице-президент Ассоциации управления проектами СОВНЕТ
                    </SpeakerCard>
                    <SpeakerCard photo="/img/speaker_sartory.png"
                                 fullName="Сартори Андрей Владимирович"
                    >
                      К.ф.-м.н, доцент, предприниматель, руководитель отдела планирования НИОКР проектного направления
                      Прорыв, Госкорпорация «Росатом»
                    </SpeakerCard>
                    <SpeakerCard photo="/img/speaker_fertman.png"
                                 fullName="Фертман Александр Давидович"
                    >
                      Директор по науке технологиям и образованию Фонда «Сколково», заместитель руководителя рабочей
                      группы Технет НТИ, доцент НИЯУ МИФИ
                    </SpeakerCard>
                    <SpeakerCard photo='/img/speaker_walker.png'
                                 fullName='Уолкер Спенсер'>
                      Менеджер Центра коммерциализации и трансфера технологий Университета Юты, член правления DFFCU и возглавляет кафедру
                    </SpeakerCard>
                    <SpeakerCard photo='/img/speaker_kashirskih.png'
                                 fullName='Егор Каширских'>
                      Директор ООО ИНПЦ «Иннотех» Член совета объединения «Сибирская биотехнологическая инициатива».
                      Член Совета директоров АО «Кузбасский Технопарк», Директор по НИОКР ООО «Биотехнологии»
                    </SpeakerCard>
                    <SpeakerCard photo='/img/speaker_rozhdestvenskij.png'
                                 fullName='Игорь Рождественский'>
                      Кандидат физ.-мат. наук PhD. Со-основатель и член Правления Ассоциации Брокеров Инноваций и Технологий.
                      Член Международного Комитета International Technology Transfer Network (Китай)
                    </SpeakerCard>
                    <SpeakerCard photo='/img/speaker_gareev.png'
                                 fullName='Гареев Арсен'>
                      Директор Центра управления технологическим развитием НТИ, АО «РВК» Руководит проектом по
                      сопровождению и мониторингу деятельности Центров НТИ
                    </SpeakerCard>
                  </SpeakerCards>
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
                  <p className='asideMarker'>основные модераторы</p>
                </li>
                <li className='i3_9'>
                  <SpeakerCards>
                    <SpeakerCard photo="/img/speaker_kizeev.png"
                                 fullName="Кизеев Вениамин Михайлович" position='руководитель'
                    >
                      IPMA Level«B», член правления НП «СОВНЕТ», эксперт по управлению проектами и инновациями компании
                      WINbd
                    </SpeakerCard>
                    <SpeakerCard photo="/img/speaker_panteleev.png"
                                 fullName="Пантелеев Сергей Анатольевич"
                    >
                      Руководитель проектов WINbd, эксперт по развитию проектов и экосистем, тренер, преподаватель, консультант
                    </SpeakerCard>
                    <SpeakerCard photo="/img/speaker_ahmetova.png"
                                 fullName="Ахметова Полина Андреевна"
                    >
                      Директор Стартап-студии «Открытые инновации», менеджер проектов WINbd
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
                  <p className='asideMarker asideMarker_tiny'>Модуль 1</p>
                  <p className='asideMarker asideMarker_mt1'>20 - 25 марта 2021</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4>Стратегии генерации, разработки и реализации научно-технических проектов</h4>
                        </li>
                        {/*<li className='i3_3'>*/}
                        {/*  <p className="module_school">Стратегии генерации научно-технических проектов</p>*/}
                        {/*</li>*/}
                        {/*<li className='i3_3'>*/}
                        {/*  <p className="module_school">Стратегии разработки научно-технических проектов</p>*/}
                        {/*</li>*/}
                        {/*<li className='i3_3'>*/}
                        {/*  <p className="module_school">Стратегии работы с научно-техническими проектами на различных*/}
                        {/*    стадиях TRL</p>*/}
                        {/*</li>*/}
                        {/*<li className='i3_12'>*/}
                        {/*  <p className="cursiv"><StrongText>Домашнее задание:</StrongText> каждый участник программы*/}
                        {/*    должен подготовить и/или найти минимум 3 индивидуальных проекта в*/}
                        {/*    своей организации на различных стадиях TRL к следующему модулю.</p>*/}
                        {/*</li>*/}
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_tiny'>Модуль 2</p>
                  <p className='asideMarker asideMarker_mt1'>17 - 22 мая 2021</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4>Экспертиза и упаковка научно-технических проектов</h4>
                        </li>
                        {/*<li className='i3_3'>*/}
                        {/*  <p className="module_school">Как провести экспертизу и выставить приоритеты в портфеле*/}
                        {/*    научно-технических проектов</p>*/}
                        {/*</li>*/}
                        {/*<li className='i3_3'>*/}
                        {/*  <p className="module_school">Формат упаковки научно-технического проекта в зависимости от его*/}
                        {/*    степени зрелости</p>*/}
                        {/*</li>*/}
                        {/*<li className='i3_3'>*/}
                        {/*  <p className="module_school">Распределение участников по группам в зависимости от тематики*/}
                        {/*    портфелей проектов</p>*/}
                        {/*</li>*/}
                        {/*<li className='i3_12'>*/}
                        {/*  <p className="cursiv"><StrongText>Домашнее задание:</StrongText> сформировать портфель*/}
                        {/*    научно-технических проектов и*/}
                        {/*    провести упаковку по выбранному направлению. Работа выполняется в группе.</p>*/}
                        {/*</li>*/}
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_tiny'>Модуль 3</p>
                  <p className='asideMarker asideMarker_mt1'>12 - 17 июля 2021</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4>Управление заинтересованными сторонами научно-технических проектов (включая VC, органы
                            государственной власти, корпоративных заказчиков, индустриальных партнеров)</h4>
                        </li>
                        {/*<li className='i3_3'>*/}
                        {/*  <p className="module_school">Работа с VC </p>*/}
                        {/*</li>*/}
                        {/*<li className='i3_3'>*/}
                        {/*  <p className="module_school">Работа с корпоративными заказчиками</p>*/}
                        {/*</li>*/}
                        {/*<li className='i3_3'>*/}
                        {/*  <p className="module_school">Работа с индустриальными партнерами</p>*/}
                        {/*</li>*/}
                        {/*<li className='i3_12'>*/}
                        {/*  <p className="cursiv"><StrongText>Домашнее задание:</StrongText> каждому участнику*/}
                        {/*    провести не менее 10 переговоров с потенциальными партнерами проекта.</p>*/}
                        {/*</li>*/}
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_tiny'>Модуль 4</p>
                  <p className='asideMarker asideMarker_mt1'>23 - 28 августа 2021</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4>Бизнес-модель и экономика научно-технического проекта</h4>
                        </li>
                        {/*<li className='i3_3'>*/}
                        {/*  <p className="module_school">Определение заинтересованных сторон научно-технических*/}
                        {/*    проектов</p>*/}
                        {/*</li>*/}
                        {/*<li className='i3_3'>*/}
                        {/*  <p className="module_school">Формирование плана взаимодействия с заинтересованными*/}
                        {/*    сторонами</p>*/}
                        {/*</li>*/}
                        {/*<li className='i3_3'>*/}
                        {/*  <p className="module_school">Формирование дорожной карты развития научно-технических*/}
                        {/*    проектов</p>*/}
                        {/*</li>*/}
                        {/*<li className='i3_12'>*/}
                        {/*  <p className="cursiv"><StrongText>Домашнее задание:</StrongText> первая*/}
                        {/*    итерация по запуску и продвижению научно-технического проекта.</p>*/}
                        {/*</li>*/}
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_tiny'>Модуль 5</p>
                  <p className='asideMarker asideMarker_mt1'>18 - 23 октября 2021</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4>Организация работы с потенциальными клиентами научно-технических проектов (Customer Development)</h4>
                        </li>
                        {/*<li className='i3_3'>*/}
                        {/*  <p className="module_school">Введение в управление проектами</p>*/}
                        {/*</li>*/}
                        {/*<li className='i3_3'>*/}
                        {/*  <p className="module_school">Научно-технические проекты и как управлять ими </p>*/}
                        {/*</li>*/}
                        {/*<li className='i3_3'>*/}
                        {/*  <p className="module_school">Как строить отношения с пользователями проекта, и кто они </p>*/}
                        {/*</li>*/}
                        {/*<li className='i3_3'>*/}
                        {/*  <p className="module_school">Как сформировать консорциум для поддержки своего проекта</p>*/}
                        {/*</li>*/}
                        {/*<li className='i3_3'>*/}
                        {/*  <p className="module_school">Прототипы и лучшие практики управления научно-техническими*/}
                        {/*    проектами </p>*/}
                        {/*</li>*/}
                        {/*<li className='i3_3'>*/}
                        {/*  <p className="module_school">Как управлять командой научно-технического проекта</p>*/}
                        {/*</li>*/}
                        {/*<li className='i3_3'>*/}
                        {/*  <p className="module_school">Что ждет заказчик от проекта на различных стадиях </p>*/}
                        {/*</li>*/}
                        {/*<li className='i3_3'>*/}
                        {/*  <p className="module_school">Источники финансирования научно-технических проектов</p>*/}
                        {/*</li>*/}
                        {/*<li className='i3_12'>*/}
                        {/*  <p className="cursiv"><StrongText>Домашнее задание:</StrongText> работа в команде над*/}
                        {/*    научно-техническим проектом.</p>*/}
                        {/*</li>*/}
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_tiny'>Модуль 6</p>
                  <p className='asideMarker asideMarker_mt1'>22 - 27 ноября 2021</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4>Управление проектом и командой научно-технического проекта</h4>
                        </li>
                        {/*<li className='i3_3'>*/}
                        {/*  <p className="module_school">Экономическая оценка эффективности научно-технического*/}
                        {/*    проекта </p>*/}
                        {/*</li>*/}
                        {/*<li className='i3_3'>*/}
                        {/*  <p className="module_school">Стратегии коммерциализации научно-технического проекта</p>*/}
                        {/*</li>*/}
                        {/*<li className='i3_3'>*/}
                        {/*  <p className="module_school">Формирование инвестиционного предложения научно-технического*/}
                        {/*    проекта</p>*/}
                        {/*</li>*/}
                        {/*<li className='i3_12'>*/}
                        {/*  <p className="cursiv"><StrongText>Домашнее задание:</StrongText> работа в команде*/}
                        {/*    над формированием финальной версии бизнес-модели и инвестиционного предложения*/}
                        {/*    научно-технического проекта.</p>*/}
                        {/*</li>*/}
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_tiny'>Модуль 7</p>
                  <p className='asideMarker asideMarker_mt1'>17 - 22 января 2022</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4>Международный трансфер технологий и защита интеллектуальной собственности</h4>
                        </li>
                        {/*<li className='i3_3'>*/}
                        {/*  <p className="module_school">Международный трансфер технологий </p>*/}
                        {/*</li>*/}
                        {/*<li className='i3_3'>*/}
                        {/*  <p className="module_school">Правовые аспекты трансфера технологий</p>*/}
                        {/*</li>*/}
                        {/*<li className='i3_3'>*/}
                        {/*  <p className="module_school">Управление интеллектуальной собственностью на международном*/}
                        {/*    рынке</p>*/}
                        {/*</li>*/}
                        {/*<li className='i3_12'>*/}
                        {/*  <p className="cursiv"><StrongText>Домашнее задание:</StrongText> работа*/}
                        {/*    в команде над формированием финальной версии плана шагов по защите интеллектуальной*/}
                        {/*    собственности.</p>*/}
                        {/*</li>*/}
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_tiny'>Модуль 8</p>
                  <p className='asideMarker asideMarker_mt1'>19 - 22 февраля 2022</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4>Подготовка к защитам и защиты проектов</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='i3_3'> </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <p>Для команд и индивидуальных участников от организаций Западно-Сибирского НОЦ обучение
                            является безвозмездным, направляющая организация обязуется обеспечить полноценное участие
                            сотрудников в обучении. Для команд и индивидуальных участников не от организаций
                            Западно-Сибирского НОЦ участие платное.</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='show wrapper_results'>
          <div className='container'>
            <div className='content pt0'>
              <ul className='g3'>
                <li className='i3_3'>
                </li>
                <li className='i3_9 border_top'>
                  <h2>Итоги первого потока 2019-2020</h2>
                  <p className="titleBlock">В Школе принимали участие сотрудники из ТюмГУ, ТИУ, ТюмГМУ,
                    ХМГМА, СурГУ, ЮГУ, ТюмНЦ СО РАН и ООО «Инновационная компания «МЕТАКОН», АНО «Культура
                    Сибири», ООО Группа компаний «СЕВЕР», ООО «Ивент» и ООО «Тёплый дом»</p>
                  <a href="/managementSchool2019-2020" className='link_event link_event__noBorder raleway_bold mt_low'>Полное
                    расписание первого
                    потока 2019-2020
                    <svg
                      width='12'
                      height='12'
                      viewBox='0 0 12 12'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M9.79972 3.68412L1.56172 11.8591L0.14209 10.4503L8.45638 2.19965L1.33524 2.19965L1.33524 0.199646L10.7997 0.199646L11.7997 0.199646V1.19965L11.7997 10.5789H9.79972L9.79972 3.68412Z'
                        fill='#E62C2C'
                      />
                    </svg></a>

                  <ul className='g3'>
                    <li className='i3_12'>
                      <div className="result_numbers">
                        <div className="result_item">
                          <p className="bigNumber">38</p>
                          <p className="number_description">участников выпустились</p>
                        </div>
                        <div className="result_item">
                          <p className="bigNumber">10</p>
                          <p className="number_description">проектов </p>
                        </div>
                        <div className="result_item">
                          <p className="bigNumber">17</p>
                          <p className="number_description">выигранных грантов</p>
                        </div>
                        <div className="result_item">
                          <p className="bigNumber">74<span className="bigNumber_mini">млн ₽</span></p>
                          <p className="number_description">выигранных денег </p>
                        </div>
                        <div className="result_item">
                          <p className="bigNumber">295<span className="bigNumber_mini">млн ₽</span></p>
                          <p className="number_description">привлеченные деньги от партнеров</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='show wrapper_feedback content mt_half'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker'>отзывы</p>
              </li>
              <li className='i3_9'>
                <p className='feedback_name feedback_name_pt_low'>Козин Евгений Сергеевич, к.т.н., доцента ФГБОУ ВО
                  «Тюменский государственный университет»</p>
                <p className='feedBack_title'>
                  Школа руководителей же показала нам другой способ работы над проектами – «от рынка», который
                  предполагает сначала произвести анализ проблем и потребностей участников рынка, а уже затем, в случае
                  успешной проверки жизнеспособности научной идеи, - ее техническую реализацию и инженерную проработку.
                </p>
                <div className='feedBack_descript_container'>
                  <p className='feedBack_descript'>
                    Обучение в Школе руководителей научно-технических проектов для меня и команды нашего проекта
                    «FaceDrive» позволило по-новому посмотреть на университетские научно-технические проекты. В
                    академической среде мы привыкли развивать проекты «от идеи», прорабатывая конструкцию либо
                    технологию какого-либо изобретения. Школа руководителей же показала нам другой способ работы над
                    проектами – «от рынка», который предполагает сначала произвести анализ проблем и потребностей
                    участников рынка, а уже затем, в случае успешной проверки жизнеспособности научной идеи, - ее
                    техническую реализацию и инженерную проработку.
                    <br />
                    Полученный нами опыт уже трансформировался в успешное руководство несколькими студенческими
                    проектными командами, дошедшими до финалов научных конкурсов и конференций. Кроме того, полученная
                    информация легла в основу методического сопровождения управления проектами нескольких
                    образовательных программ университета, а также дала существенный толчок развитию нашего проекта
                    «FaceDrive».
                  </p>
                  <p className='feedBack_descript'>Обучение в Школе проходило в различных форматах – от многочисленных
                    лекций и мастер-классов признанных отечественных и зарубежных экспертов в области управления
                    научно-техническими проектами, так и в режиме воркшопов и командной проектной работы по тематикам,
                    связанным с научными интересами ее участников.
                    <br />
                    Руководство и преподавательский состав Школы проделало огромную работу по организации столь
                    насыщенной и информативной образовательной программы с практическим уклоном в сторону
                    научно-технического предпринимательства, предоставив, по сути, готовый алгоритм к развитию
                    собственного проекта, его «упаковке» и доведению до получения первой прибыли. За это им огромное
                    спасибо и дальнейших успехов в развитии!</p>
                </div>

                <p className='feedback_name'>Такмашева Ирина Вениаминовна, зам.проректора по научной работе ФГБОУ ВО
                  «Югорский государственный университет»</p>
                <p className='feedBack_title'>
                  На мой взгляд, содержание курса является уникальным именно за счет интеграции опыта лидеров в
                  различных областях, в том числе зарубежных лидеров и экспертов.
                </p>
                <div className='feedBack_descript_container'>
                  <p className='feedBack_descript'>
                    Обучение проходило по модульному принципу и включало в себя 7 модулей, при этом каждый модуль
                    сопровождался экспертными лекциями, проектной работой, рекомендациями менторов. Итоговым
                    мероприятием курса стала защита проектов перед представителями бизнеса, государства и научного
                    сообщества.
                    <br />
                    Данный образовательный курс помог мне и членам моей команды не просто запустить проект «Цифровая
                    Lean-лаборатория» и добиться существенных результатов, но и развить проектную культуру,
                    дизайн-мышление, креативность и коммуникативность.
                  </p>
                  <p className='feedBack_descript'>
                    На мой взгляд, содержание курса является уникальным именно за счет интеграции опыта лидеров в
                    различных областях, в том числе зарубежных лидеров и экспертов. На модулях были представлены
                    инструменты и механизмы создания первоклассных команд проектов, выбора сценариев и стратегий
                    развития проектов, оценки потенциала проекта и выявления не столько краткосрочной, сколько
                    долгосрочной ценности для клиента или бизнес-партнера.
                    <br />
                    Рекомендую всем пройти данный курс, а менторам и экспертам желаю вдохновения, процветания и
                    реализации амбициозных замыслов.
                  </p>
                </div>

                <p className='feedback_name'>Илья Анисимов, профессор кафедры эксплуатации автомобильного транспорта
                  ФГБОУ ВО «Тюменский индустриальный университет»</p>
                <p className='feedBack_title'>Дорогие друзья, те, кто только начинает или планирует начать обучение в
                  этой школе. Могу только порадоваться за вас, что вы окунетесь в это море новых знаний и выйдите из
                  него уже хорошо подготовленным технологическим менеджером. </p>
                <div className='feedBack_descript_container'>
                  <p className='feedBack_descript'>
                    Начиная обучение в Школе я относился к происходящему с иронией. Думал, чему меня еще могут научить,
                    если я уже сам прошел через все круги ада, когда придумал, разработал, сделал, вывел на рынок и стал
                    успешно продавать оборудование. Но начав обучение, осознал, что знаний моих не так и много, а опыт
                    сложился из набитых шишек. Их бы не было, обладай я знаниями, полученными в Школе.
                    <br />
                    Следующий этап осознания пришел тогда, когда понял, что мы здесь не развлекаемся, а реально работаем
                    над проектом. Итогом этой работы может быть реальный инвестор, который поверит в твою разработку или
                    у тебя есть шанс войти в НОЦ со своим проектом. После этого осознания началась другая, тяжелая,
                    дистанционная, но интересная жизнь.
                  </p>
                  <p className='feedBack_descript'>
                    В итоге мы поняли, что не надо придумывать за рынок, что ему нужно, нужно понимать проблемы рынка.
                    Мы поняли фин. модель, бизнес-модель, франшизы, юнит-экономику, технологические цепочки, ораторское
                    искусство, правильные презентации, разобрались, кто такой CusDev, TRL, ЛПР, кривая Гартнера и многое
                    другое.Подводя итог, можно сказать: спикеры, менторы, модераторы, эксперты, все очень грамотные
                    люди, которые дадут вам, если вы сами этого захотите, очень много. И пройдя Школу, вы сможете
                    оценить свой уровень до и после неё. И приятно удивитесь.
                    <br/>
                    Всем удачи и много денег)
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className='show'>
          <div className='container mt_half'>
            <div className='content'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'>проекты 1 потока</p>
                </li>
                <li className='i3_9'>
                  <SchoolProject>
                    <SchoolProject_Card
                      violet
                      image='/img/managementSchoolProjects/DLLProject.png'
                      link="/managementSchoolProjects/DLLProject"
                    >
                      Digital Lean-Lab (DLL): электронная образовательная платформа
                    </SchoolProject_Card>
                    <SchoolProject_Card
                      violet
                      image='/img/managementSchoolProjects/ElectroBase.png'
                      link="/managementSchoolProjects/ElectroBase"
                    >
                      Мобильная многофункциональная электрическая платформа с дистанционным управлением ElectroBase
                    </SchoolProject_Card>
                    <SchoolProject_Card
                      violet
                      image='/img/managementSchoolProjects/FaceDrive.png'
                      link="/managementSchoolProjects/FaceDrive"
                    >
                      FaceDrive - Услуга по идентификации водителя транспортного средства путём распознавания его лица
                    </SchoolProject_Card>
                    <SchoolProject_Card
                      violet
                      image='/img/managementSchoolProjects/BioPlantsSecure.png'
                      link="/managementSchoolProjects/BioPlantsSecure"
                    >
                      Интеллектуальная система биологической защиты растений
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
