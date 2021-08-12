import React from 'react'
import { Page } from '../components/page'
import { Layout } from '../components/layout'
import { SpeakerCard, SpeakerCards } from '../components/speakerCard'
import { Partner } from '../components/partner'
import { StrongText } from '../components/strongText'
import { Helmet } from 'react-helmet'
import { Button } from '../components/button'

export default function AccelerationProgram(props) {
  return (
    <Page>
      <Layout style={{
        backgroundImage: 'url(/img/gradients/accelerationProgram.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '120% -10%'
      }}>
        <Helmet>
          <meta name="description" content='Акселерационная программа' />
          <meta name="keywords" content='Образовательный проект Центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
          <meta property="og:image" content="/img/appleIcon.png" />
          <meta property="og:url" content={`https://scitech.ru/accelerationProgram`} />
          <meta property="og:title" content='Акселерационная программа' />
          <meta property="og:description" content='Образовательный проект Центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
          <title>Акселерационная программа</title>
          <link rel="canonical" href={`https://scitech.ru/accelerationProgram`} />
        </Helmet>

        <div className='show content'>
          <div className='container relative'>
            <ul className='g3 zIndex'>
              <li className='i3_3'>
                <p className='asideMarker'>Образовательный проект</p>
              </li>
              <li className='i3_9'>
                <div className='titleHero'>
                  <h1>Акселерационная программа</h1>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className='show content'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'></li>
              <li className='i3_9 wrapper_borderTop zIndex'>
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
                        Длительность — 2 модуля
                      </p>
                      <p className='raleway'>Июль 2020 — Ноябрь 2020</p>
                    </div>
                    <div className='datePlace_place mt_low'>
                      <img src='/img/pin.svg' alt='icon' loading="lazy" />
                      <div className='place_text'>
                        <p className='asideMarker asideMarker_place'>очно и дистанционно в zoom</p>
                      </div>
                    </div>
                  </li>
                  {/* @todo: add Modal pop-up*/}

                            <Button orange onClick={props.onClick}>
                              Записаться на следующий набор
                            </Button>

                  {/*          <div>*/}
                  {/*            <div className='registerEventForm_title'>*/}
                  {/*              Регистрация*/}
                  {/*            </div>*/}
                  {/*            <RegisterEventForm*/}
                  {/*              hideParticipant={true}*/}
                  {/*              isTheme={true}*/}
                  {/*              isTraineeship={true}*/}
                  {/*              isTraineeshipYear={true}*/}
                  {/*              eventType={'accelerationProgramNextSet'}*/}
                  {/*              onSubmit={(e, payload) => {*/}
                  {/*                Requests.methods.insert({*/}
                  {/*                  group: 'registrations_accelerationProgram',*/}
                  {/*                  payload,*/}
                  {/*                })*/}
                  {/*                // props.close()*/}
                  {/*              }}*/}
                  {/*            />*/}
                  {/*          </div>*/}

                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className='show wrapper_about content'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker'>о проекте</p>
              </li>
              <li className='i3_9 '>
                <p>
                  <em>
                    Управление научно-техническими проектами рассматриваеться как комплексный управленческий инструмент,
                    включающий в себя необходимость рассмотрения современных инструментов управления  проектами,
                    а также рассмотрения специфики научно-технических проектов.
                  </em>
                </p>
                <p>
                  <em>
                    Управление научно-техническими проектами на стадии реализации сталкивается как со сложностями в коммуникациях
                    между различными участниками, кросс-функциональными командами, консорциумами, а также внешними заинтересованными
                    сторонами, так и с необходимостью управления содержанием, сроками, финансами в ситуации высокой
                    неопределенности, изменчивости и рискованности.
                  </em>
                </p>
                <ul className='g3'>
                  <li className='i3_6'>
                    <h4>Цель программы:</h4>
                    <p className="mt_tiny">— Предоставить проектным командам инструменты для эффективного управления научно-техническими проектами.</p>
                    <p className="m0">— Обеспечить акселерацию реализации действующих научно-технических проектов. </p>
                  </li>
                  <li className='i3_6'>
                    <h4>Форматы работы:</h4>
                    <p className="mt_tiny">— Лекции по соответствующим тематикам.</p>
                    <p className="m0">— Практические кейсы - презентация практического опыта успешного руководства научно-техническими проектами. </p>
                    <p className="m0">— Проектная работа, в которой участники в группах работают с модераторами для улучшения собственных проектов. </p>
                    <p className="m0">— Консультации с экспертами по узким вопросам работы команд.  </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className='show wrapper_speakers content'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker'>операторы</p>
              </li>
              <li className='i3_9'>
                <ul className='g3'>
                  <li className='i3_4'>
                    <Partner
                      logo='/img/logo_noc.svg'
                      link="https://scitech.ru/"
                      name='Центр развития компетенций руководителей Западно-Сибирского НОЦ'
                      alt='Центр развития компетенций'
                      wide
                    ></Partner>
                  </li>
                  <li className='i3_4'>
                    <Partner
                      logo='/img/logo_tumen_gov.svg'
                      link="https://www.utmn.ru/"
                      name='Тюменский государственный университет'
                      alt='Тюменский государственный университет'
                      wide
                    ></Partner>
                  </li>
                  <li className='i3_4'>
                    <Partner
                      logo='/img/logo-winbd.png'
                      link="https://winbd.ru/"
                      name='Компания WINbd'
                      alt='компания WINbd'
                    ></Partner>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className='wrapper_partners content'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker'>Основные модераторы</p>
              </li>
              <li className='i3_9'>
                <SpeakerCards>
                  <SpeakerCard photo='/img/speaker_kizeev.png' fullName='Вениамин Кизеев' position='руководитель'>
                    IPMA Level«B», член правления НП «СОВНЕТ», эксперт по управлению проектами и инновациями компании WINbd
                  </SpeakerCard>
                  <SpeakerCard photo="/img/speaker_ababij.png"
                               fullName="Абабий Наталья Сергеевна"
                  >
                    Руководитель направления EdTech проектов Стартап-студии «Открытые инновации». Эксперт по разработке маркетинговых
                    стратегий WINbd. Развитие собственных предпринимательских проектов
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

        <div className='show content'>
          <div className='container mb6'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker asideMarker_mt1'>Модуль 1</p>
              </li>
              <li className='i3_9'>
                <ul className='g3'>
                  <li className='i3_12'>
                    <ul className='g3'>
                      <li className='i3_12'>
                      </li>
                      <li className='i3_3'>
                        <p className="module_school">Границы применимости различных методологий управления проектами </p>
                      </li>
                      <li className='i3_3'>
                        <p className="module_school">Управление различными объектами проектной деятельности </p>
                      </li>
                      <li className='i3_3'>
                        <p className="module_school">Планирование и система мониторинга и контроля в научно-техническом проекте </p>
                      </li>
                      <li className='i3_3'>
                        <p className="module_school">Бережливый НИОКР  </p>
                      </li>
                      <li className='i3_3'>
                        <p className="module_school">Управление портфелем Научно-технических проектов </p>
                      </li>
                      <li className='i3_3'>
                        <p className="module_school">Управление ожиданиями и коммуникациями с заинтересованными сторонами </p>
                      </li>
                      <li className='i3_3'>
                        <p className="module_school">Управление научно-техническими проектами (в том числе и на основе ТРИЗ)</p>
                      </li>
                      <li className='i3_12'>
                        <p className="cursiv raleway"><StrongText>Проектная работа: </StrongText>упаковка устава проекта.</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className='i3_3 mt'>
                <p className='asideMarker asideMarker_mt1'>Модуль 2</p>
              </li>
              <li className='i3_9 mt'>
                <ul className='g3'>
                  <li className='i3_12'>
                    <ul className='g3'>
                      <li className='i3_12'>
                      </li>
                      <li className='i3_3'>
                        <p className="module_school">Гибкие методологии управления проектами</p>
                      </li>
                      <li className='i3_3'>
                        <p className="module_school">Выстраивание стратегии развития проекта на основе TRL</p>
                      </li>
                      <li className='i3_3'>
                        <p className="module_school">Анализ рынка и конкурентный анализ </p>
                      </li>
                      <li className='i3_3'>
                        <p className="module_school">Бизнес-модели для научно-технических проектов</p>
                      </li>
                      <li className='i3_3'>
                        <p className="module_school">Защита интеллектуальной собственности</p>
                      </li>
                      <li className='i3_3'>
                        <p className="module_school">Привлечение финансов в проекты. Источники и инструменты</p>
                      </li>
                      <li className='i3_3'>
                        <p className="module_school">Привлечение инвестиций в проекты</p>
                      </li>
                      <li className='i3_3'>
                        <p className="module_school">Работа с заинтересованными сторонами. Партнерства. Поиск ресурсов в команду</p>
                      </li>
                      <li className='i3_3'>
                        <p className="module_school">Управление компетенциями научно-технической команды</p>
                      </li>
                      <li className='i3_12'>
                        <p className="cursiv raleway"><StrongText>Проектная работа: </StrongText>упаковка стратегии развития проекта.</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </Page>
  )
}
