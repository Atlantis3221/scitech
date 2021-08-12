import React from 'react'

import { Page } from '../components/page'
import { Layout } from '../components/layout'
import {SpeakerCards, SpeakerCard} from '../components/speakerCard'
import {SchoolProject, SchoolProject_Card} from "../components/schoolProject";
import {StrongText} from "../components/strongText";
import { Helmet } from 'react-helmet'

export default function ManagementSchool2019_2020 (props) {
    return (
      <Page>
          <Helmet>
              <meta name="description" content="Подготовка руководителей, которые должны обеспечить перевод исследовательской идеи в инновационную технологию или продукт" />
              <meta name="keywords" content="Управление научно-техническими проектами, шрнтп" />
              <meta property="og:image" content="/img/appleIcon.png" />
              <meta property="og:url" content="https://scitech.ru/managementSchool" />
              <meta property="og:title" content="Школа руководителей научно-технологических проектов"/>
              <meta property="og:description" content="Подготовка руководителей, которые должны обеспечить перевод исследовательской идеи в инновационную технологию или продукт" />
              <title>Школа руководителей научно-технологических проектов</title>
              <link rel="canonical" href="https://scitech.ru/managementSchool" />
          </Helmet>

          <Layout style={{
              backgroundImage: 'url(/img/gradients/school_gradient_viol.svg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '120% -5%'
          }}>
              <div className='show wrapper_hero'>
                  <div className='container relative'>
                      <div className="colorSpot colorSpot__violet"></div>
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
                                      <li className='i3_12 flex_end'>
                                          <div>
                                              <p className="asideMarker">
                                                  {/*TODO: change svg*/}
                                                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none"
                                                       xmlns="http://www.w3.org/2000/svg">
                                                      <path
                                                        d="M9.52047 6.33759C10.5813 5.37044 12.0158 4.06241 12.1466 0.9375H13.0938V0H0.90625V0.9375H1.85341C1.98416 4.06241 3.41872 5.37044 4.47953 6.33759C5.19112 6.98637 5.59375 7.38347 5.59375 8C5.59375 8.61653 5.19112 9.01363 4.47953 9.66241C3.41872 10.6296 1.98416 11.9376 1.85341 15.0625H0.90625V16H13.0938V15.0625H12.1466C12.0158 11.9376 10.5813 10.6296 9.52047 9.66241C8.80888 9.01363 8.40625 8.61653 8.40625 8C8.40625 7.38347 8.80888 6.98637 9.52047 6.33759ZM6.53125 11.5137C6.38647 11.5436 6.24344 11.587 6.10384 11.6448L3.23269 12.8329C3.70156 11.6407 4.45675 10.9518 5.11116 10.3552C5.84147 9.68937 6.53125 9.06047 6.53125 8V11.5137ZM8.88884 10.3552C9.54325 10.9518 10.2984 11.6407 10.7673 12.8328L7.89616 11.6447C7.75656 11.587 7.61353 11.5435 7.46875 11.5137V8C7.46875 9.06047 8.15853 9.68937 8.88884 10.3552ZM3.21622 3.125C2.98956 2.53441 2.83303 1.82131 2.79206 0.9375H11.2079C11.1669 1.82131 11.0104 2.53441 10.7837 3.125H3.21622Z"
                                                        fill="#02090F"/>
                                                  </svg>
                                                  Длительность — 1 год
                                              </p>
                                              <p className="raleway">Сентябрь 2019 — Октябрь 2020</p>
                                          </div>
                                          <div className="datePlace_place">
                                              <img src='/img/pin.svg' alt='icon'/>
                                              <div className="place_text">
                                                  <p className="asideMarker asideMarker_mt">
                                                      очно и дистанционно в zoom
                                                  </p>
                                              </div>
                                          </div>
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
                                                      Подготовка руководителей, которые должны обеспечить перевод исследовательской идеи в инновационную
                                                      технологию или продукт (прототип), генерировать нестандартные идеи, способствовать масштабированию инноваций,
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
                                                  <h4>Постановка управленческих и бизнес-моделей будущего как основа для разработки технологий, основанных на науке</h4>
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
                                          Директор Технологического парка ТюмГУ, эксперт по управлению крупными проектами во взаимодействии университет-индустрия
                                      </SpeakerCard>
                                      <SpeakerCard photo="/img/speaker_kizeev.png"
                                                   fullName="Вениамин Кизеев" position='руководитель проектной работы'
                                      >
                                          IPMA Level«B», член правления НП «СОВНЕТ», эксперт по управлению проектами и инновациями компании WINbd
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
                                      <SpeakerCard photo="/img/speaker_dobryakova.png"
                                                   fullName="Добрякова Галина Эдуардовна"
                                      >
                                          Эксперт по международной защите и трансферу технологий, основатель ireg.pro системы оформления прав на R&D
                                      </SpeakerCard>
                                      <SpeakerCard photo="/img/speaker_skobelev.png"
                                                   fullName="Скобелев Петр Олегович"
                                      >
                                          Доктор технических наук, президент / генеральный конструктор Группы компаний «Генезис знаний», Самара-Москва-Сколково, Россия
                                      </SpeakerCard>
                                      <SpeakerCard photo="/img/speaker_lavrov.png"
                                                   fullName="Лавров Олег Владимирович"
                                      >
                                          Президент Российской ассоциации менеджмента знаний «КМ Альянс», доктор медицинских наук
                                      </SpeakerCard>
                                      <SpeakerCard photo="/img/speaker_tatunashvili.png"
                                                   fullName="Татунашвили Леван Вахтангович"
                                      >
                                          Заместитель генерального директора по инновационной деятельности Технопарка Новосибирского Академгородка Академпарк
                                      </SpeakerCard>
                                      <SpeakerCard photo="/img/speaker_morozov.png"
                                                   fullName="Морозов Александр Андреевич"
                                      >
                                          Технологический брокер, специалист в области привлечения финансирования и вывода на рынок новых «железячных» продуктов и технологий
                                      </SpeakerCard>
                                      <SpeakerCard photo="/img/speaker_hanin.png"
                                                   fullName="Ханин Даниил Владимирович"
                                      >
                                          Интернет-предприниматель, запуск проектов в области бизнес аналитики, big-data, электронной-коммерции, рекламы; руководитель компании d2Decisions; эксперт ВШЭ, ФРИИ
                                      </SpeakerCard>
                                      <SpeakerCard photo="/img/speaker_poletaev.png"
                                                   fullName="Полетаев Дмитрий Александрович"
                                      >
                                          Эксперт по подготовке презентаций и публичных выступлений. Визитинг лектор МВА ТПУ
                                      </SpeakerCard>
                                      <SpeakerCard photo="/img/speaker_tsepes.png"
                                                   fullName="Ципес Григорий Львович"
                                      >
                                          Кандидат экономических наук, главный консультант Департамента развития и консалтинга IBS, вице-президент Ассоциации управления проектами СОВНЕТ
                                      </SpeakerCard>
                                      <SpeakerCard photo="/img/speaker_polyakova.png"
                                                   fullName="Полякова Наталия Андреевна"
                                      >
                                          Директор правовой дирекции АО «РВК», кандидат химических наук, доцент НИУ ВШЭ и МФТИ
                                      </SpeakerCard>
                                      <SpeakerCard photo="/img/speaker_sartory.png"
                                                   fullName="Сартори Андрей Владимирович"
                                      >
                                          К.ф.-м.н, доцент, предприниматель, руководитель отдела планирования НИОКР проектного направления Прорыв, Госкорпорация «Росатом»
                                      </SpeakerCard>
                                      <SpeakerCard photo="/img/speaker_fertman.png"
                                                   fullName="Фертман Александр Давидович"
                                      >
                                          Директор по науке технологиям и образованию Фонда «Сколково», заместитель руководителя рабочей группы Технет НТИ, доцент НИЯУ МИФИ
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
                                                   fullName="Вениамин Кизеев" position='руководитель'
                                      >
                                          IPMA Level«B», член правления НП «СОВНЕТ», эксперт по управлению проектами и инновациями компании WINbd
                                      </SpeakerCard>
                                      <SpeakerCard photo="/img/speaker_ababij.png"
                                                   fullName="Абабий Наталья Сергеевна"
                                      >
                                          Руководитель направления EdTech проектов Стартап-студии «Открытые инновации». Эксперт по разработке маркетинговых стратегий WINbd. Развитие собственных предпринимательских проектов
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
                                  <p className='asideMarker asideMarker_tiny'>Модуль 1 ноябрь</p>
                              </li>
                              <li className='i3_9'>
                                  <ul className='g3'>
                                      <li className='i3_12'>
                                          <ul className='g3'>
                                              <li className='i3_12'>
                                                  <h4>Стратегии генерации и реализации научно-технических проектов</h4>
                                              </li>
                                              <li className='i3_3'>
                                                  <p className="module_school">Стратегии генерации научно-технических проектов</p>
                                              </li>
                                              <li className='i3_3'>
                                                  <p className="module_school">Стратегии разработки научно-технических проектов</p>
                                              </li>
                                              <li className='i3_3'>
                                                  <p className="module_school">Стратегии работы с научно-техническими проектами на различных стадиях TRL</p>
                                              </li>
                                              <li className='i3_12'>
                                                  <p className="cursiv"><StrongText>Домашнее задание:</StrongText> каждый участник программы должен подготовить и/или найти минимум 3 индивидуальных проекта в
                                                      своей организации на различных стадиях TRL к следующему модулю.</p>
                                              </li>
                                          </ul>
                                      </li>
                                  </ul>
                              </li>
                              <li className='i3_3'>
                                  <p className='asideMarker asideMarker_tiny'>Модуль 2 декабрь</p>
                              </li>
                              <li className='i3_9'>
                                  <ul className='g3'>
                                      <li className='i3_12'>
                                          <ul className='g3'>
                                              <li className='i3_12'>
                                                  <h4>Экспертиза и упаковка научно-технических проектов</h4>
                                              </li>
                                              <li className='i3_3'>
                                                  <p className="module_school">Как провести экспертизу и выставить приоритеты в портфеле научно-технических проектов</p>
                                              </li>
                                              <li className='i3_3'>
                                                  <p className="module_school">Формат упаковки научно-технического проекта в зависимости от его степени зрелости</p>
                                              </li>
                                              <li className='i3_3'>
                                                  <p className="module_school">Распределение участников по группам в зависимости от тематики портфелей проектов</p>
                                              </li>
                                              <li className='i3_12'>
                                                  <p className="cursiv"><StrongText>Домашнее задание:</StrongText> сформировать портфель научно-технических проектов и
                                                      провести упаковку по выбранному направлению. Работа выполняется в группе.</p>
                                              </li>
                                          </ul>
                                      </li>
                                  </ul>
                              </li>
                              <li className='i3_3'>
                                  <p className='asideMarker asideMarker_tiny'>Модуль 3 февраль</p>
                              </li>
                              <li className='i3_9'>
                                  <ul className='g3'>
                                      <li className='i3_12'>
                                          <ul className='g3'>
                                              <li className='i3_12'>
                                                  <h4>Организация работы с партнерами для научно-технических проектов</h4>
                                              </li>
                                              <li className='i3_3'>
                                                  <p className="module_school">Работа с VC </p>
                                              </li>
                                              <li className='i3_3'>
                                                  <p className="module_school">Работа с корпоративными заказчиками</p>
                                              </li>
                                              <li className='i3_3'>
                                                  <p className="module_school">Работа с индустриальными партнерами</p>
                                              </li>
                                              <li className='i3_12'>
                                                  <p className="cursiv"><StrongText>Домашнее задание:</StrongText> каждому участнику
                                                      провести не менее 10 переговоров с потенциальными партнерами проекта.</p>
                                              </li>
                                          </ul>
                                      </li>
                                  </ul>
                              </li>
                              <li className='i3_3'>
                                  <p className='asideMarker asideMarker_tiny'>Модуль 4 март</p>
                              </li>
                              <li className='i3_9'>
                                  <ul className='g3'>
                                      <li className='i3_12'>
                                          <ul className='g3'>
                                              <li className='i3_12'>
                                                  <h4>Управление заинтересованными сторонами научно-технических проектов</h4>
                                              </li>
                                              <li className='i3_3'>
                                                  <p className="module_school">Определение заинтересованных сторон научно-технических проектов</p>
                                              </li>
                                              <li className='i3_3'>
                                                  <p className="module_school">Формирование плана взаимодействия с заинтересованными сторонами</p>
                                              </li>
                                              <li className='i3_3'>
                                                  <p className="module_school">Формирование дорожной карты развития научно-технических проектов</p>
                                              </li>
                                              <li className='i3_12'>
                                                  <p className="cursiv"><StrongText>Домашнее задание:</StrongText> первая
                                                      итерация по запуску и продвижению научно-технического проекта.</p>
                                              </li>
                                          </ul>
                                      </li>
                                  </ul>
                              </li>
                              <li className='i3_3'>
                                  <p className='asideMarker asideMarker_tiny'>Модуль 5 апрель</p>
                              </li>
                              <li className='i3_9'>
                                  <ul className='g3'>
                                      <li className='i3_12'>
                                          <ul className='g3'>
                                              <li className='i3_12'>
                                                  <h4>Управление научно-техническими проектами</h4>
                                              </li>
                                              <li className='i3_3'>
                                                  <p className="module_school">Введение в управление проектами</p>
                                              </li>
                                              <li className='i3_3'>
                                                  <p className="module_school">Научно-технические проекты и как управлять ими </p>
                                              </li>
                                              <li className='i3_3'>
                                                  <p className="module_school">Как строить отношения с пользователями проекта, и кто они </p>
                                              </li>
                                              <li className='i3_3'>
                                                  <p className="module_school">Как сформировать консорциум для поддержки своего проекта</p>
                                              </li>
                                              <li className='i3_3'>
                                                  <p className="module_school">Прототипы и лучшие практики управления научно-техническими проектами </p>
                                              </li>
                                              <li className='i3_3'>
                                                  <p className="module_school">Как управлять командой научно-технического проекта</p>
                                              </li>
                                              <li className='i3_3'>
                                                  <p className="module_school">Что ждет заказчик от проекта на различных стадиях </p>
                                              </li>
                                              <li className='i3_3'>
                                                  <p className="module_school">Источники финансирования научно-технических проектов</p>
                                              </li>
                                              <li className='i3_12'>
                                                  <p className="cursiv"><StrongText>Домашнее задание:</StrongText> работа в команде над научно-техническим проектом.</p>
                                              </li>
                                          </ul>
                                      </li>
                                  </ul>
                              </li>
                              <li className='i3_3'>
                                  <p className='asideMarker asideMarker_tiny'>Модуль 6 июнь</p>
                              </li>
                              <li className='i3_9'>
                                  <ul className='g3'>
                                      <li className='i3_12'>
                                          <ul className='g3'>
                                              <li className='i3_12'>
                                                  <h4>Экономика научно-технического проекта</h4>
                                              </li>
                                              <li className='i3_3'>
                                                  <p className="module_school">Экономическая оценка эффективности научно-технического проекта </p>
                                              </li>
                                              <li className='i3_3'>
                                                  <p className="module_school">Стратегии коммерциализации научно-технического проекта</p>
                                              </li>
                                              <li className='i3_3'>
                                                  <p className="module_school">Формирование инвестиционного предложения научно-технического проекта</p>
                                              </li>
                                              <li className='i3_12'>
                                                  <p className="cursiv"><StrongText>Домашнее задание:</StrongText> работа в команде
                                                      над формированием финальной версии бизнес-модели и инвестиционного предложения научно-технического проекта.</p>
                                              </li>
                                          </ul>
                                      </li>
                                  </ul>
                              </li>
                              <li className='i3_3'>
                                  <p className='asideMarker asideMarker_tiny'>Модуль 7 август</p>
                              </li>
                              <li className='i3_9'>
                                  <ul className='g3'>
                                      <li className='i3_12'>
                                          <ul className='g3'>
                                              <li className='i3_12'>
                                                  <h4>Международный трансфер технологий и защита интеллектуальной собственности</h4>
                                              </li>
                                              <li className='i3_3'>
                                                  <p className="module_school">Международный трансфер технологий </p>
                                              </li>
                                              <li className='i3_3'>
                                                  <p className="module_school">Правовые аспекты трансфера технологий</p>
                                              </li>
                                              <li className='i3_3'>
                                                  <p className="module_school">Управление интеллектуальной собственностью на международном рынке</p>
                                              </li>
                                              <li className='i3_12'>
                                                  <p className="cursiv"><StrongText>Домашнее задание:</StrongText> работа
                                                      в команде над формированием финальной версии плана шагов по защите интеллектуальной собственности.</p>
                                              </li>
                                          </ul>
                                      </li>
                                  </ul>
                              </li>
                              <li className='i3_3'>
                                  <p className='asideMarker asideMarker_tiny'>Модуль 8 октябрь</p>
                              </li>
                              <li className='i3_9'>
                                  <ul className='g3'>
                                      <li className='i3_12'>
                                          <ul className='g3'>
                                              <li className='i3_12'>
                                                  <h4>Защита результатов проекта</h4>
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
                      <div className='content pt0 mb6'>
                          <ul className='g3'>
                              <li className='i3_3'>
                              </li>
                              <li className='i3_9 border_top'>
                                  <h2>Итоги первого потока 2019-2020</h2>
                                  <p className="titleBlock">В Школе принимали участие сотрудники из ТюмГУ, ТИУ, ТюмГМУ,
                                      ХМГМА, СурГУ, ЮГУ, ТюмНЦ СО РАН и ООО «Инновационная компания «МЕТАКОН», АНО «Культура
                                      Сибири», ООО Группа компаний «СЕВЕР», ООО «Ивент» и ООО «Тёплый дом»</p>
                                  <ul className='g3'>
                                      <li className='i3_12'>
                                          <div className="result_numbers">
                                              <div className="result_item">
                                                  <p className="bigNumber">38</p>
                                                  <p className="number_description">участников</p>
                                              </div>
                                              <div className="result_item">
                                                  <p className="bigNumber">10</p>
                                                  <p className="number_description">проектов </p>
                                              </div>
                                              <div className="result_item">
                                                  <p className="bigNumber">12</p>
                                                  <p className="number_description">выиграные заявки на гранты и конкурсы</p>
                                              </div>
                                              <div className="result_item">
                                                  <p className="bigNumber">16<span className="bigNumber_mini">млн ₽</span></p>
                                                  <p className="number_description">Выигранных денег </p>
                                              </div>
                                              <div className="result_item">
                                                  <p className="bigNumber">22<span className="bigNumber_mini">млн ₽</span></p>
                                                  <p className="number_description">Привлеченные деньги от партнеров</p>
                                              </div>
                                          </div>
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

                                  <a href="/managementSchool" className='link_event link_event__noBorder raleway_bold pt2'>
                                      Расписание потока 2021-2022
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
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </Layout>
      </Page>
    )
}
