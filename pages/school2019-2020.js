import React from 'react'

import { Page } from '../components/page'
import { Layout } from '../components/layout'
import { SpeakerCards, SpeakerCard } from '../components/speakerCard'
import { SchoolProject, SchoolProject_Card } from '../components/schoolProject'
import { StrongText } from '../components/strongText'
import { Helmet } from 'react-helmet'

export default function School2019_2020(props) {
  return (
    <Page>
      <Helmet>
        <meta name="description" content="Школа воспитывает современное поколение научных лидеров, способных управлять научными процессами" />
        <meta name="keywords" content="школа научного лидерства,  шнл, Система компетенций LAUNCH, Форсайт" />
        <meta property="og:image" content="/img/meta-image.jpg" />
        <meta property="og:url" content="https://scitech.ru/school" />
        <meta property="og:title" content="Школа научного лидерства Science leadership school" />
        <meta property="og:description" content="Школа воспитывает современное поколение научных лидеров, способных управлять научными процессами" />
        <title>Школа научного лидерства Science leadership school</title>
        <link rel="canonical" href="https://scitech.ru/school" />
      </Helmet>

      <Layout style={{
        backgroundImage: 'url(/img/gradients/school_gradient.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '120% -5%'
      }}>
        <div className='show wrapper_hero'>
          <div className='container relative'>
            <div className='colorSpot colorSpot__green colorSpot__green' style={{ left: '7.7rem'}}></div>
            <div className='spot'></div>
            <div className='content pb0'>
              <ul className='g3 zIndex'>
                <li className='i3_3'>
                  <p className='asideMarker'>Образовательный проект</p>
                </li>
                <li className='i3_9'>
                  <h1>Школа научного лидерства</h1>
                  <h1>Science leadership school</h1>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='show'>
          <div className='container'>
            <div className='content'>
              <ul className='g3'>
                <li className='i3_3'></li>
                <li className='i3_9 wrapper_borderTop zIndex'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12 flex_end'>
                          <div>
                            <p className='asideMarker'>
                              {/*TODO: change svg*/}
                              <svg
                                width='14'
                                height='16'
                                viewBox='0 0 14 16'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  d='M9.52047 6.33759C10.5813 5.37044 12.0158 4.06241 12.1466 0.9375H13.0938V0H0.90625V0.9375H1.85341C1.98416 4.06241 3.41872 5.37044 4.47953 6.33759C5.19112 6.98637 5.59375 7.38347 5.59375 8C5.59375 8.61653 5.19112 9.01363 4.47953 9.66241C3.41872 10.6296 1.98416 11.9376 1.85341 15.0625H0.90625V16H13.0938V15.0625H12.1466C12.0158 11.9376 10.5813 10.6296 9.52047 9.66241C8.80888 9.01363 8.40625 8.61653 8.40625 8C8.40625 7.38347 8.80888 6.98637 9.52047 6.33759ZM6.53125 11.5137C6.38647 11.5436 6.24344 11.587 6.10384 11.6448L3.23269 12.8329C3.70156 11.6407 4.45675 10.9518 5.11116 10.3552C5.84147 9.68937 6.53125 9.06047 6.53125 8V11.5137ZM8.88884 10.3552C9.54325 10.9518 10.2984 11.6407 10.7673 12.8328L7.89616 11.6447C7.75656 11.587 7.61353 11.5435 7.46875 11.5137V8C7.46875 9.06047 8.15853 9.68937 8.88884 10.3552ZM3.21622 3.125C2.98956 2.53441 2.83303 1.82131 2.79206 0.9375H11.2079C11.1669 1.82131 11.0104 2.53441 10.7837 3.125H3.21622Z'
                                  fill='#02090F'
                                />
                              </svg>
                              Длительность — 1 год
                            </p>
                            <p className='raleway'>Сентябрь 2019 — Октябрь 2020</p>
                          </div>
                          <div className='datePlace_place mt_low'>
                            <img src='/img/pin.svg' alt='icon' />
                            <div className='place_text'>
                              <p className='asideMarker asideMarker_place'>очно и дистанционно в zoom</p>
                            </div>
                          </div>
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
                  <p className='asideMarker'>О проекте</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <em className="zIndex">
                            Школа воспитывает современное поколение научных лидеров, способных управлять научными
                            процессами, генерировать нестандартные научные решения и выводить на рынок передовые
                            научно-исследовательские проекты.
                          </em>
                        </li>
                        <li className='i3_6'>
                          <h4>Сообщество международного уровня</h4>
                          <p>
                            Мы привлекаем научных лидеров разных стран с целью повышения конкурентоспособности России в
                            мировой программе научных исследований
                          </p>
                        </li>
                        <li className='i3_6'>
                          <h4>Научный лидер — эффективный руководитель</h4>
                          <p>
                            Научный лидер умеет решать научно-исследовательские задачи в условиях ограниченности или
                            отсутствия ресурсов, а также в условиях непредвиденных изменений мирового масштаба
                            (COVID-19){' '}
                          </p>
                        </li>
                        <li className='i3_6'>
                          <h4 className='mt0'>Постоянный обмен опытом</h4>
                          <p>
                            Создаем культуру международного и междисциплинарного научного взаимодействия, передачи
                            знаний на локальном, региональном, федеральном и международном уровнях{' '}
                          </p>
                        </li>
                        <li className='i3_6'>
                          <h4 className='mt0'>Междисциплинарная команда</h4>
                          <p>
                            Это эффективный инструмент для создания инновационных научных идей и реализации актуальных
                            научно-исследовательских проектов, удовлетворяющих запросам всего общества
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

        <div className='show wrapper_speakers'>
          <div className='container'>
            <div className='content'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'>Команда</p>
                </li>
                <li className='i3_9'>
                  <SpeakerCards>
                    <SpeakerCard photo='/img/speaker_irina.png' fullName='Ирина Шрайбер' position='ментор'>
                      Ph. D., кандидат физико-математических наук, ученый, исследователь, лектор
                    </SpeakerCard>
                    <SpeakerCard photo='/img/speaker_sorokin.png' fullName='Александр Сорокин' position=''>
                      Руководитель проектной работы (2019/2020)
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
                    <SpeakerCard photo='/img/speaker_chulok.png' fullName='Александр Чулок'>
                      Кандидат экономических наук, Директор Центра научно-технологического прогнозирования НИУ ВШЭ
                    </SpeakerCard>
                    <SpeakerCard photo='/img/speaker_kiselev.png' fullName='Максим Киселев'>
                      Ph. D. (Yale), Professor of the Practice; Mentor, SKOLKOVO Foundation; Center for Entrepreneurship
                      and Innovation
                    </SpeakerCard>
                    <SpeakerCard photo='/img/speaker_bruno.png' fullName='Andy Bruno'>
                      Associate Professor and Director of Graduate Studies, Ph. D. (University of Illinois), автор
                      монографии «The Nature of Soviet Power: An Arctic Environmental History»
                    </SpeakerCard>
                    <SpeakerCard photo='/img/speaker_smith.png' fullName='Laurence C. Smith'>
                      Ph. D. (Cornell University). John Atwater and Diana Nelson Chair of Environmental Studies in the
                      IBES and the DEEPS at Brown University, автор монографии «The World in 2050: Four Forces Shaping
                      Civilization's Northern Future»
                    </SpeakerCard>
                    <SpeakerCard photo='/img/speaker_teslinov.png' fullName='Андрей Теслинов'>
                      Доктор технических наук, генеральный директор НКГ «DBA—concept», Executive Professor ИБДА РАНХиГС
                    </SpeakerCard>
                    <SpeakerCard photo='/img/speaker_falcovich.png' fullName='Юлия Фалькович'>
                      Кандидат педагогических наук, Директор Центра научной интеграции НИУ ВШЭ
                    </SpeakerCard>
                    <SpeakerCard photo='/img/speaker_kizeev.png' fullName='Вениамин Кизеев'>
                      IPMA Level«B», член правления НП «СОВНЕТ», эксперт по управлению проектами и инновациями компании WINbd
                    </SpeakerCard>
                    <SpeakerCard photo='/img/speaker_walker.png' fullName='Уолкер Спенсер'>
                      Head of Deseret First Financial Services, менеджер Центра коммерциализации и трансфера технологий
                      Университета Юты, Член правления DFFCU. 2015-2018 управляющий партнер в Main Street Capital
                      Partners
                    </SpeakerCard>
                    <SpeakerCard photo='/img/speaker_irina.png' fullName='Ирина Шрайбер' position='ментор'>
                      Ph. D., кандидат физико-математических наук, ученый, исследователь, лектор
                    </SpeakerCard>
                    <SpeakerCard order4 photo='/img/speaker_latyshev.png' fullName='Андрей Латышев' position="идеолог">
                      Руководитель ЦРК, и.о. проректора по персоналу и организационному развитию ТюмГУ
                    </SpeakerCard>
                    <SpeakerCard photo='/img/speaker_sorokin.png' fullName='Александр Сорокин' position=''>
                      Руководитель проектной работы (2019/2020)
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
                  <p className='asideMarker asideMarker_tiny'>Модуль 1 сентябрь</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4>Научное лидерство в современном мире</h4>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Форсайт — ключевая компетенция ученого </p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Лидерские качества ученого </p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Пси-фактор в экономике технологий</p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Коммуникации ученого и общества </p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Коммуникации, коллаборации и тактика переговоров </p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Как включаться в глобальные повестки </p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Система компетенций LAUNCH</p>
                        </li>
                        <li className='i3_12 raleway_big'>
                          <p className="cursiv"><StrongText>Практика:</StrongText>  принципы и практика взаимодействия. Защита учебных проектов. </p>
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
                          <h4>Командное лидерство и управление в организации</h4>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Лидерство в научной среде </p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Управление научным коллективом, управление конфликтами </p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Мастер-класс: «Практики управления и развития человеческого капитала» </p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Мозговой штурм «Развитие человеческого капитала в НОЦ» </p>
                        </li>
                        <li className='i3_12 raleway_big'>
                          <p className="cursiv"><StrongText> Открытые лекции:</StrongText>
                            <p className="m0">— Земля – воздух – чем поделимся. Мифы и реальность о «человеческом факторе»;</p>
                            <p className="m0">— Человеческий капитал как драйвер развития организаций и регионов;</p>
                            <p className="m0">— Как измерить наше сознание. Модель «7 уровней сознания» Ричарда Барретта.</p>
                          </p>
                        </li>
                        <li className='i3_12 raleway_big'>
                          <p className="cursiv"><StrongText>Практика:</StrongText> защита учебных проектов. </p>
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
                          <h4>Управление в науке и научный протокол</h4>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Стратегии повышения публикационной активности</p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Инструменты для управления научно-исследовательской деятельностью</p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Аннотация и заголовок — ключевые элементы научного текста </p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Мастер-класс «Экосистема открытой науки. Научные тренды»</p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Организация научного текста и использование источников</p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Позиционирование: как понять, что о себе рассказать </p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Система управления знаниями для научных команд</p>
                        </li>
                        <li className='i3_12 raleway_big'>
                          <p className="cursiv"><StrongText> Открытые лекции:</StrongText>
                            <p className="m0">— Стратегии создания городов в нефтегазовом регионе российского Севера;</p>
                            <p className="m0">— Образ Сибирского Севера в природно-географическом и социально-экономическом пространстве СССР: экология и идеология.</p>
                          </p>
                        </li>
                        <li className='i3_12 raleway_big'>
                          <p className="cursiv"><StrongText>Практика:</StrongText> проектная работа в командах. Экспертиза проектов.</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_tiny'>Модуль 4 апрель</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4>Фандрайзинг, финансирование и работа с фондами</h4>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Смета и бюджет проекта</p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Успешные грантовые заявки: социальные, точные и гуманитарные науки </p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Спонсорство и партнерство </p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Специфика работы Российского фонда фундаментальных исследований и фонда РНФ</p>
                        </li>
                        <li className='i3_12 raleway_big'>
                          <p className="cursiv"><StrongText>Защита проектов:</StrongText> смета, ресурсы, риски.</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_tiny'>Модуль 5 Май</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4>Основы проектного управления</h4>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Финансы для нефинасовых менеджеров </p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Вехи и дорожная карта</p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Agile, SCRUM, Бэклог продукта </p>
                        </li>
                        <li className='i3_12 raleway_big'>
                          <p className="cursiv"><StrongText>Защита проектов:</StrongText> концепция и цели проекта, смета, устав, показатели, планирование коммуникаций, вехи, ресурсы, риски.</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_tiny'>Модуль 6 Июнь</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4>Планирование научных результатов и трансфер технологий</h4>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Управление научно- исследовательской деятельностью</p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Ученый и переговоры: аргументация, конфликты, управление голосом</p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Трансфер технологий и базовые правила в патентной защите</p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Взаимодействие ученого и бизнеса </p>
                        </li>
                        <li className='i3_12 raleway_big'>
                          <p className="cursiv"><StrongText>Практика:</StrongText> работа по грантовым заявкам, защита результатов работы над обзорными статьями и портфолио команд Школы.</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_tiny'>Модуль 7 Август</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4>Научные сети и коммуникации в современном мире</h4>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Внешняя коммуникационная поддержка исследований</p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Игровая симуляция </p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Transmedia Storytelling в просветительских проектах </p>
                        </li>
                        <li className='i3_12 raleway_big'>
                          <p className="cursiv"><StrongText> Открытые лекции:</StrongText>
                            <p className="m0">— About International academic collaborations in the Arctic (in English);</p>
                            <p className="m0">— Социально-экономическое развитие Западной Сибири в первой четверти 21 века — вызовы, ответы и ограничения;</p>
                            <p className="m0">— Working together for the future of Siberia and the Arctic: networking to record, understand and respond to environmental changes (in English);</p>
                            <p className="m0">— Knowledge transfer. Science and society (in English);</p>
                            <p className="m0">— Живые системы в городах и города внутри живых систем: взгляд в 2050;</p>
                            <p className="m0">— Глобальная и российская повестка в области экологически устойчивого, низкоуглеродного развития: усилия международных организаций, правительств, бизнеса и общественных организаций;</p>
                            <p className="m0">— Искусственный интеллект в медицинских хронобиологических исследованиях. Перспективы и основные препятствия (in English);</p>
                            <p className="m0">— Стратегии активного и здорового долголетия: научные перспективы и современные практики;</p>
                            <p className="m0">— Wisdom Science in a Polarized World: Knowns and Unknowns (in English).</p>
                          </p>
                        </li>
                        <li className='i3_12 raleway_big'>
                          <p className="cursiv"><StrongText>Предзащиты групповых проектов.</StrongText></p>
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
                          <h4><a href='/projectsDefense'>Публичные защиты проектов и подведение итогов школы</a></h4>
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
            <div className='content'>
              <ul className='g3'>
                <li className='i3_3'></li>
                <li className='i3_9 border_top'>
                  <h2>Итоги первого потока 2019-2020</h2>
                  <p className='titleBlock'>
                    В потоке принимали участие научные сотрудники и исследователи из различных университетов ХМАО, ЯНАО
                    и Тюмени
                  </p>

                  <ul className='g3'>
                    <li className='i3_12'>
                      <div className='result_numbers'>
                        <div className='result_item'>
                          <p className='bigNumber'>46</p>
                          <p className='number_description'>участников</p>
                        </div>
                        <div className='result_item'>
                          <p className='bigNumber'>9</p>
                          <p className='number_description'>проектов </p>
                        </div>
                        <div className='result_item'>
                          <p className='bigNumber'>35</p>
                          <p className='number_description'>статей в научных журналах</p>
                        </div>
                        <div className='result_item'>
                          <p className='bigNumber'>10</p>
                          <p className='number_description'>грантовых заявок </p>
                        </div>
                        <div className='result_item'>
                          <p className='bigNumber'>11</p>
                          <p className='number_description'>повышений до руководителей</p>
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
