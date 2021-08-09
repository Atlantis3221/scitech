import React from 'react'

import { Page } from '../components/page'
import { Layout } from '../components/layout'
import { Project, Project_Card } from '../components/project'
import { SpeakerCard } from '../components/speakerCard'
import { HomeNewsWidget } from '../components/newsLine'
import Link from "next/link";


import Head from 'next/head'

const HomePage = (props) => {
  return (
      <Page>
        <Head>
          <meta name="description" content="Развитие кадрового потенциала в сфере исследований и разработок в Тюменской области, Ханты-Мансийском автономном округе – Югре и Ямало-Ненецком автономном округе" />
          <meta name="keywords" content="наука в россии, развитие науки в тюмене, школа научного лидерства " />
          <meta property="og:image" content="/img/meta-image.jpg" />
          <meta property="og:url" content="https://scitech.ru/" />
          <meta property="og:title" content="Центр развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня" />
          <meta property="og:description" content="Развитие кадрового потенциала в сфере исследований и разработок в Тюменской области, Ханты-Мансийском автономном округе – Югре и Ямало-Ненецком автономном округе" />
          <title>Центр развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня</title>
          <link rel="canonical" href="https://scitech.ru/" />
        </Head>

        <Layout style={{
          backgroundImage: 'url(/img/gradients/gradient_main.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '100% 0%'
        }}>
          <div className='show'>
            <div className='container relative'>
              {/*<p className='flex absoluteLinkToDocument'>*/}
              {/*   <span>*/}
              {/*      <img src='/img/download.svg' alt='icon' />*/}
              {/*   </span>*/}
              {/*   <a href="/docs/Broshura_SHNL.pdf" target="_blank">Буклет о Центре в  PDF</a>*/}
              {/*</p>*/}
              <div className='content'>
                <ul className='g3 relative'>
                  <li className='i3_3'></li>
                  <li className='i3_9'>
                    <h1>Центр развития компетенций</h1>
                    <h3>
                      руководителей научных и научно-технических проектов и лабораторий межрегионального
                      Западно-Сибирского научно-образовательного центра мирового уровня
                    </h3>
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
                    <p className='asideMarker'>предстоящие события</p>
                  </li>
                  <li className='i3_9'>
                    <ul className='g3'>
                      <li className='i3_4'>
                        <div className='link_toEvent'>
                          <Link href="/developmentProjectZima">
                          <a className='link_event'>
                            «Западно-Сибирский инновационный межрегиональный акселератор научно-технических проектов» (ЗИМА 21)
                            {/*TODO: change svg*/}
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
                            </svg>
                          </a>
                          </Link>
                          <div className='link_data'>Март 2021 - Октябрь 2021</div>
                        </div>
                      </li>
                      <li className='i3_4'>
                        <div className='link_toEvent'>
                          <Link href="/school">
                          <a className='link_event'>
                            Школа научного лидерства
                            {/*TODO: change svg*/}
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
                            </svg>
                          </a>
                          </Link>
                          <div className='link_data'>Февраль 2021 - Февраль 2022</div>
                        </div>
                      </li>
                      <li className='i3_4'>
                        <div className='link_toEvent'>
                          <Link href="/managementSchool">
                          <a className='link_event'>
                            Школа руководителей научно-технологических проектов
                            {/*TODO: change svg*/}
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
                            </svg>
                          </a>
                          </Link>
                          <div className='link_data'>Февраль 2021 - Февраль 2022</div>
                        </div>
                      </li>
                      <li className='i3_4'>
                        <div className='link_toEvent'>
                          <Link href="/tabulaRasa">
                          <a className='link_event'>
                            Tabula Rasa
                            {/*TODO: change svg*/}
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
                            </svg>
                          </a>
                          </Link>
                          <div className='link_data'>Ноябрь 2020 — Июнь 2022</div>
                        </div>
                      </li>
                      <li className='i3_4'>
                        <div className='link_toEvent'>
                          <Link href="/onlineForumConsortium">
                          <a className='link_event'>
                            Онлайн-форум «Научно-образовательные консорциумы. Программы НОЦ и приоритет 2030»
                            {/*TODO: change svg*/}
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
                            </svg>
                          </a>
                          </Link>
                          <div className='link_data'>1 квартал 2021 (дата уточняется)</div>
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
                    <p className='asideMarker'>прошедшие события</p>
                  </li>
                  <li className='i3_9'>
                    <ul className='g3'>
                      <li className='i3_4'>
                        <div className='link_toEvent'>
                          <Link href="/flagmanSchoolPresentation">
                          <a className='link_event'>
                            Онлайн-презентация флагманских школ ЦРК
                            {/*TODO: change svg*/}
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
                            </svg>
                          </a>
                          </Link>
                          <div className='link_data'>11 февраля 2021</div>
                        </div>
                      </li>
                      <li className='i3_4'>
                        <div className='link_toEvent'>
                          <Link href="/roundTable">
                          <a className='link_event'>
                            Круглый стол «Трансфер университетских технологий. Будущее стартап-студий»
                            {/*TODO: change svg*/}
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
                            </svg>
                          </a>
                          </Link>
                          <div className='link_data'>20 октября</div>
                        </div>
                      </li>
                      <li className='i3_4'>
                        <div className='link_toEvent'>
                          <Link href="/events">
                          <a className='link_event'>
                            Международная конференция «Наука. Лидерство. Общество»
                            {/*TODO: change svg*/}
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
                            </svg>
                          </a>
                          </Link>
                          <div className='link_data'>24 - 28 августа</div>
                        </div>
                      </li>
                      <li className='i3_2'>
                        <Link href="/developmentProjects">
                          <a className='btn btn__red mt'>
                            Посмотреть всё
                          </a>
                        </Link>
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
                    <p className='asideMarker'>последние новости</p>
                  </li>
                  <li className='i3_9'>
                    <ul className='g3 mainPageLinks'>
                      <HomeNewsWidget newsCount={3} />
                      <li className='i3_2'>
                        <Link href="/news">
                        <a className='btn btn__red mt'>
                          Посмотреть все новости
                        </a>
                        </Link>
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
                    <p className='asideMarker'>О центре</p>
                  </li>
                  <li className='i3_9'>
                    <ul className='g3'>
                      <li className='i3_8'>
                        <ul className='g3'>
                          <li className='i3_12'>
                            <em>
                              Наша цель — опережающее развитие кадрового потенциала в сфере исследований и разработок в
                              Тюменской области, Ханты-Мансийском автономном округе – Югре и Ямало-Ненецком автономном
                              округе, реализация образовательной функции и развитие человеческого капитала трех регионов.
                            </em>
                          </li>
                          <li className='i3_6 mb1'>
                            Фокус деятельности — Тюменская область, Ханты-Мансийский автономный округ — Югра и
                            Ямало-Ненецкий автономный округ.
                            <p>Головная организация:</p>
                            <a href='http://sibnoc.ru' target={'_blank'}>
                              <img src='/img/sibnoc.svg' alt='logo' /></a>
                          </li>
                          <li className='i3_6'>
                            Центр расположен в Тюмени и Сургуте — это два административно самостоятельных офиса,
                            объединенных единой методологией оценки компетенций и набором образовательных технологий.
                          </li>
                        </ul>
                      </li>
                      <li className='i3_4'>
                        <img className='_responsive' src='/img/map.svg' alt='' />
                      </li>
                      <li className='i3_4'>
                        <img className='_responsive' loading="lazy" src='/img/photo_1.jpg' alt='' />
                        <p className='raleway m1'>
                          Дискуссии и защиты проектных идей являются одним из методов развития компетенций ЦРК
                        </p>
                      </li>
                      <li className='i3_8'>
                        <img src='/img/photo_2.jpg' loading="lazy" alt='' />
                        <p className='raleway m1'>Руководители ЦРК комментируют предзащиту участников проекта</p>
                      </li>
                      <li className='i3_12'>
                        <img className='_responsive' loading="lazy" src='/img/photo_3.jpg' alt='' />
                        <p className='raleway m1'>
                          Ментор Школы научного лидерства Ирина Шрайбер с участниками проекта Школы
                        </p>
                        {/*<p className='flex'>*/}
                        {/*  <span>*/}
                        {/*    <img src='/img/download.svg' alt='icon' />*/}
                        {/*  </span>*/}
                        {/*  <a href="/docs/Broshura_SHNL.pdf" target="_blank">Буклет о Центре в  PDF</a>*/}
                        {/*</p>*/}
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='show wrapper_partners'>
            <div className='container'>
              <div className='content'>
                <ul className='g3'>
                  <li className='i3_3'>
                    <p className='asideMarker'>Партнеры</p>
                  </li>
                  <li className='i3_7'>
                    <ul className='flex_centred'>
                      <li>
                        <a href='https://winbd.ru' target='_blank'>
                          <img loading="lazy" className='partnerLogo partnerLogo_small' src='/img/logo_1.svg' alt='' />
                        </a>
                      </li>
                      <li>
                        <a href='https://www.sovnet.ru' target='_blank'>
                          <img loading="lazy" className='partnerLogo' src='/img/logo_2.svg' alt='' />
                        </a>
                      </li>
                      <li>
                        <a href='https://scienceteam.ru' target='_blank'>
                          <img loading="lazy" className='partnerLogo partnerLogo_middle' src='/img/logo_3.svg' alt='' />
                        </a>
                      </li>
                      <li>
                        <a href='https://spb.hse.ru' target='_blank'>
                          <img loading="lazy" className='partnerLogo partnerLogo_middle' src='/img/logo_4.svg' alt='' />
                        </a>
                      </li>
                      <li>
                        <a href='https://www.utmn.ru' target='_blank'>
                          <img loading="lazy" className='partnerLogo partnerLogo_middle' src='/img/logo_5.svg' alt='' />
                        </a>
                      </li>
                      <li>
                        <a href='http://www.surgu.ru/index' target='_blank'>
                          <img loading="lazy" className='partnerLogo partnerLogo_middle' src='/img/logo_6.svg' alt='' />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className='i3_2'>
                    <a href='mailto:cdc@scitech.ru' className='btn btn__red mt'>
                      Стать партнером
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Project>
            <Project_Card
                title='Школа научного лидерства'
                durations='длительность - 1 год'
                description='Февраль 2021 - Февраль 2022'
                gradient='url(/img/projectGradients/group_green.svg)'
                gradient_spot="/img/projectGradients/miniGreen.svg"
                arrowColor="#309D64"
                link="/school"
            >
              <SpeakerCard photo='/img/speaker_irina.png' fullName='Ирина Шрайбер' position='ментор' white>
                Ph. D., кандидат физико-математических наук, ученый, исследователь, лектор
              </SpeakerCard>
              <SpeakerCard photo='/img/roman_osvald.png' fullName='Роман Оствальд' position='руководитель проектной работы' white>
                Канд. хим. наук. Проректор СурГУ по науке и технологиям. Руководитель проектной работы SLS
              </SpeakerCard>
            </Project_Card>
            <Project_Card
                title='Школа руководителей научно-технических проектов'
                durations='длительность - 1 год'
                description='Февраль 2021 - Февраль 2022'
                gradient='url(/img/projectGradients/group_pink.svg)'
                gradient_spot="/img/projectGradients/miniBlue.svg"
                arrowColor="#761D82"
                link="/managementSchool"
            >
              <SpeakerCard photo='/img/speaker_golubev.png' fullName='Евгений Голубев' position='ментор' white>
                Директор Технологического парка ТюмГУ, эксперт по управлению крупными проектами во взаимодействии
                университет - индустрия
              </SpeakerCard>
              <SpeakerCard
                  photo='/img/speaker_kizeev.png'
                  fullName='Вениамин Кизеев'
                  white
              >
                IPMA Level«B», член правления НП «СОВНЕТ», эксперт по управлению проектами и инновациями компании WINbd
              </SpeakerCard>
            </Project_Card>
            <Project_Card
                title='Tabula Rasa'
                durations='длительность - 2 года'
                description="Ноябрь 2020 — Июнь 2022"
                gradient='url(/img/projectGradients/group_rasa.svg)'
                gradient_spot="/img/projectGradients/miniAqua.svg"
                arrowColor="#56E39F"
                link="/tabulaRasa"
            >
              <SpeakerCard photo='/img/speaker_bezuevskaya.png' fullName='Безуевская Валерия' position='руководитель' white>
                К. н., проректор по развитию СурГУ
              </SpeakerCard>
              <SpeakerCard photo='/img/speaker_teslinov.png' fullName='Андрей Теслинов' position='научный руководитель' white>
                Д. т. н., генеральный директор НКГ DBA
              </SpeakerCard>
              <SpeakerCard photo='/img/speaker_latyshev.png' fullName='Андрей Латышев' position='идеолог' white>
                Руководитель ЦРК
              </SpeakerCard>
              <SpeakerCard photo='/img/speaker_tereshcenko.png' fullName='Терещенко Владимир' position='руководитель проектной работы' white>
                Директор ЦКИ СурГУ
              </SpeakerCard>
              <SpeakerCard photo='/img/speaker_panteleeva.png' fullName='Пантелеева Ирина' position='руководитель проектной работы' white>
                Исполнительный директор «Краевой фонд науки»
              </SpeakerCard>
            </Project_Card>
            <Project_Card
                title='Цифровой профиль исследователя'
                durations=''
                description=""
                gradient='url(/img/projectGradients/group_blue.svg)'
                gradient_spot="/img/projectGradients/miniPink.svg"
                arrowColor="#3E92CC"
                link="/digitalProfile"
            >
              <p>Прототип платформы комплексной оценки и развития компетенций управления сложными
                научно-техническими проектами и программами, с возможностями удаленного доступа и обработки
                цифрового следа. </p>
              <p>Интерактивная ИТ-платформа с современными интерфейсами позволяет обрабатывать
                информацию о текущей и прогнозной компетенции пользователей, на основе сквозной технологии работы с
                данными, обеспечивать управление развитием и обучением персонала, формировать проектные команды и
                оценивать перспективы развития конкретных пользователей.</p>
            </Project_Card>
            <Project_Card
                title='Акселерационная программа'
                durations='длительность - 2 модуля'
                description='Июль 2020 — Ноябрь 2020'
                gradient='url(/img/projectGradients/group_orange.svg)'
                gradient_spot="/img/projectGradients/miniOrange.svg"
                arrowColor="#FF9852"
                link="/accelerationProgram"
            >
              <SpeakerCard photo='/img/speaker_latyshev.png' fullName='Андрей Латышев' position='руководитель' white>
                Руководитель ЦРК, и.о. проректора по персоналу и организационному развитию ТюмГУ
              </SpeakerCard>
              <SpeakerCard photo='/img/speaker_kizeev.png'
                           fullName='Вениамин Кизеев'
                           position='руководитель'
                           white>
                IPMA Level«B», член правления НП «СОВНЕТ», эксперт по управлению проектами и инновациями компании WINbd
              </SpeakerCard>
              <SpeakerCard photo='/img/speaker_golubev.png' fullName='Евгений Голубев' positon='ментор' white>
                Директор Технологического парка ТюмГУ, эксперт по управлению крупными проектами во взаимодействии
                университет - индустрия
              </SpeakerCard>
            </Project_Card>
            <Project_Card
                title='Step into Russian Arctic'
                durations=''
                gradient='url(/img/projectGradients/group_darkgreen.svg)'
                opacity={0.4}
                isInProcess='Программа в разработке'
            >
              <p>Уникальная модульная программа по подготовке людей для управления широким спектром проектов в Арктической
                зоне РФ. Выпускники смогут на новом уровне подходить к решению задач, связанных с эффективным и
                результативным управлением в данном регионе.</p>
            </Project_Card>
          </Project>
          <div className='show wrapper_about'>
            <div className='container'>
              <div className='content'>
                <div className='section_container'>
                  <aside className='section_aside'>
                    <p className='asideMarker'>Основатели и менторы о центре</p>
                  </aside>
                  <div className='section_content'>
                    <div className='quotes_wrapper'>
                      <div className='quote_container'>
                        <div className='quote_photoContainer'>
                          <img loading="lazy" src='/img/quotes/author_1.png' alt='Author_1' />
                        </div>
                        <div className='quote_content'>
                          <div className='quote_author'>
                            Антон Машуков, генеральный директор АНО «Агентство развития научно-образовательных проектов»
                          </div>
                          <div className='quote_title'>
                            <em>
                              Именно от качества команды зависит успех любого научного или технологического проекта.
                            </em>
                          </div>
                          <div className='quote_description'>
                            Центр развития компетенций — наш ответ на вопрос, как правильно формировать и развивать
                            проектные команды. В этой логике ЦРК — один из важнейших проектов нашего НОЦ.
                          </div>
                        </div>
                      </div>
                      <div className='quote_container'>
                        <div className='quote_photoContainer'>
                          <img loading="lazy" src='/img/quotes/author_2.png' alt='Author_1' />
                        </div>
                        <div className='quote_content'>
                          <div className='quote_author'>
                          <span>
                            <Link href="/experts/latishev"><a>Андрей Латышев</a></Link>, руководитель ЦРК
                          </span>
                            <span className='quote_authorDescription'>
                            И.о. проректора по персоналу и организационному развитию ТюмГУ
                          </span>
                          </div>
                          <div className='quote_title'>
                            <em>
                              В ЦРК запланирован значительный спектр задач от повышения профессиональной компетентности до
                              формирования информационной системы управления знаниями.
                            </em>
                          </div>
                          <div className='quote_description'>
                            В ЦРК запланирован значительный спектр задач от повышения профессиональной и управленческой
                            компетентности руководителей научных, научно-технических проектов и лабораторий в соответствии
                            со Стратегией научно-технологического развития Российской Федерации до формирования
                            информационной системы управления знаниями на принципах цифровых двойников, позволяющей
                            оперативно оценивать и управлять человеческим капиталом в рамках Западно-Сибирского
                            межрегионального научно-образовательного центра мирового уровня.
                          </div>
                        </div>
                      </div>
                      <div className='quote_container'>
                        <div className='quote_photoContainer'>
                          <img loading="lazy" src='/img/quotes/author_3.png' alt='Author_1' />
                        </div>
                        <div className='quote_content'>
                          <div className='quote_author'>
                          <span>
                            <Link href="/experts/shreyber"><a>Ирина Шрайбер</a></Link>, ментор и лектор образовательных проектов ЦРК
                          </span>
                            <span className='quote_authorDescription'>
                            Ph. D., кандидат физико-математических наук, ученый, исследователь
                          </span>
                          </div>
                          <div className='quote_title'>
                            <em>
                              Одни из основополагающих принципов Школы Научного Лидерства – междисциплинарность и
                              межкультурность.
                            </em>
                          </div>
                          <div className='quote_description'>
                            Научное лидерство как концепция руководства должна позволять немедленную адаптацию
                            исследований и их реализацию в условиях непредвиденных изменений глобального масштаба.
                            В том числе в условиях ограниченных ресурсов. Работа нашей
                            Школы учит действовать и в таких условиях.
                            {/*<div className='quote_descriptionCol'>*/}
                            {/*  Научное лидерство как концепция руководства должна позволять немедленную адаптацию*/}
                            {/*  исследований и их реализацию в условиях непредвиденных изменений глобального масштаба.*/}
                            {/*</div>*/}
                            {/*<div className='quote_descriptionCol'>*/}
                            {/*  В том числе в условиях ограниченных ресурсов. Работа нашей Школы учит действовать в том*/}
                            {/*  числе в таких условиях*/}
                            {/*</div>*/}
                          </div>
                        </div>
                      </div>
                      <div className='quote_container'>
                        <div className='quote_photoContainer'>
                          <img loading="lazy" src='/img/quotes/author_4.png' alt='Author_1' />
                        </div>
                        <div className='quote_content'>
                          <div className='quote_author'>
                          <span>
                            <Link href="/experts/golubev"><a>Евгений Голубев</a></Link>, ментор Школы руководителей
                            научно-технических проектов
                          </span>
                            <span className='quote_authorDescription'>
                            Директор Технологического парка ТюмГУ, эксперт по управлению крупными проектами во
                            взаимодействии университет-индустрия, управлению результатами разработок в университетах и
                            их трансферу для использования обществом
                          </span>
                          </div>
                          <div className='quote_title'>
                            <em>
                              Инновационное развитие региона основано сквозных практиках управления технологическими
                              проектами для университетов и бизнеса
                            </em>
                          </div>
                          <div className='quote_description'>
                            Директор Технологического парка ТюмГУ, эксперт по управлению крупными проектами во
                            взаимодействии университет - индустрия, управлению результатами разработок в университетах и
                            их трансферу для использования обществом Инновационное развитие региона основано сквозных
                            практиках управления технологическими проектами для университетов и бизнеса. Реализация
                            проектов по созданию новых продуктов и технологий — это основная форма работы консорциума
                            Западно-Сибирского научно-образовательного центра…
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </Page>
  )
}

export default HomePage
