import React, { useEffect, useState } from 'react'

import { Page } from '../../components/page'
import { Layout } from '../../components/layout'
import { Project, Project_Card } from '../../components/project'
import { SpeakerCard } from '../../components/speakerCard'
import { HomeNewsWidget } from '../../components/newsLine'
import Head from 'next/head'
import { getContentfulNews } from '../../helpers/axios'
import Translator from "../../i18n/translator"
import { useRouter } from 'next/dist/client/router'

const HomePage = ({  data, current, modalForm  }) => {
  const { query: {lang: lang} } = useRouter()
  const [allContentfulNews, setContentfulNews] = useState([])

  useEffect(() => {
    setContentfulNews(data)
  }, [])

  return (
      <Page>
        <Head>
          <meta name="description" content={current["metaDescription"]} />
          <meta name="keywords" content={current["keywords"]} />
          <meta property="og:image" content="/img/appleIcon.png" />
          <meta property="og:url" content="https://scitech.ru/" />
          <meta property="og:title" content="" />
          <meta property="og:description" content={current["metaDescription"]} />
          <title>{current["pageTitle"]}</title>
          <link rel="canonical" href="https://scitech.ru/" />
          <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
        </Head>

        <Layout style={{
          backgroundImage: 'url(/img/gradients/gradient_main.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '100% 0%'
        }}
          modalFormText={modalForm}
        >
          <div className='show'>
            <div className='container relative'>
              <div className='content'>
                <ul className='g3 relative news-flex-reverse'>
                  <li className='i3_3'>
                    <p className='asideMarker'>{current["Головная организация:"]}</p>
                    <div className='mt mb1'>
                      <a href='http://sibnoc.ru' target={'_blank'}  className='sibnoc_link'>
                        {lang === 'ru' ? <img src='/img/sibnoc_black.svg' alt='logo' /> : (
                          <p>The world-class West Siberian Interregional Scientific and Educational Centre</p>
                        )}
                      </a>
                    </div>
                  </li>
                  <li className='i3_9'>
                    <h1>{current["Центр развития компетенций"]}</h1>
                    <h3>
                      {current["руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня"]}
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
                    <p className='asideMarker'>{current["предстоящие события"]}</p>
                  </li>
                  <li className='i3_9'>
                    <ul className='g3'>
                      
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {lang === 'en'? (
            <div className='show'>
              <div className='container'>
                <div className='content'>
                  <ul className='g3'>
                    <li className='i3_3'>
                      <p className='asideMarker'>Current activities</p>
                    </li>
                    <li className='i3_9'>
                      <ul className='g3 mainPageLinks'>
                        <li className='i3_4'>
                          <div className='link_toEvent'>
                            <a href={`/${lang}/school`} className='link_event'>
                              {current["Школа научного лидерства"]}
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
                            <div className='link_data'>{current["Февраль"]} 2021 - {current["Февраль"]} 2022</div>
                          </div>
                        </li>
                        <li className='i3_4'>
                        <div className='link_toEvent'>
                          <a href={`/${lang}/recruitingPriceDevelopEvent`} className='link_event'>
                            {current["Стратегия управления компетенциями персонала в современном университете: рекрутинг, оценка, развитие, продвижение"]}
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
                          <div className='link_data' style={{ textTransform: 'capitalize' }}>6 {current["ноября"]} - 18 {current["Декабря"]} 2021</div>
                        </div>
                      </li>
                      {lang === 'ru'? ( <>
                      <li className='i3_4'>
                        <div className='link_toEvent'>
                          <a href={`/${lang}/developmentProjectZima`} className='link_event'>
                            {current["«Западно-Сибирский инновационный межрегиональный акселератор научно-технических проектов» (ЗИМА 21)"]}
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
                          <div className='link_data'>{current["Март"]} 2021 - {current["Октябрь"]} 2021</div>
                        </div>
                      </li>
                      <li className='i3_4'>
                        <div className='link_toEvent'>
                          <a href={`/${lang}/school`} className='link_event'>
                            {current["Школа научного лидерства"]}
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
                          <div className='link_data'>{current["Февраль"]} 2021 - {current["Февраль"]} 2022</div>
                        </div>
                      </li>
                      <li className='i3_4'>
                        <div className='link_toEvent'>
                          <a href={`/${lang}/managementSchool`} className='link_event'>
                            {current["Школа руководителей научно-технологических проектов"]}
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
                          <div className='link_data'>{current["Февраль"]} 2021 - {current["Февраль"]} 2022</div>
                        </div>
                      </li>
                      <li className='i3_4'>
                        <div className='link_toEvent'>
                          <a href={`/${lang}/tabulaRasa`} className='link_event'>
                            Tabula Rasa
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
                          <div className='link_data'>{current["Ноябрь"]} 2020 — {current["Июнь"]} 2021</div>
                        </div>
                      </li>
                      </>) : null}
                        <li className='i3_4'>
                          <div className='link_toEvent'>
                            <a href={`/${lang}/managementSchool`} className='link_event'>
                              {current["Школа руководителей научно-технологических проектов"]}
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
                            <div className='link_data'>{current["Февраль"]} 2021 - {current["Февраль"]} 2022</div>
                          </div>
                        </li>
                        <li className='i3_4'>
                          <div className='link_toEvent'>
                            <a href={`/${lang}/tabulaRasa`} className='link_event'>
                              Tabula Rasa
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
                            <div className='link_data'>{current["Ноябрь"]} 2020 — {current["Июнь"]} 2022</div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>) : null }

          {lang === 'ru'? (
          <div className='show'>
            <div className='container'>
              <div className='content'>
                <ul className='g3'>
                  <li className='i3_3'>
                    <p className='asideMarker'>{current["прошедшие события"]}</p>
                  </li>
                  <li className='i3_9'>
                    <ul className='g3'>
                      {lang === 'ru'? ( <>
                        <li className='i3_4'>
                          <div className='link_toEvent'>
                            <a href={`/${lang}/scientificPracticalConference`} className='link_event'>
                              {current["II Международная научно-практическая конференция «Наука. Лидерство. Общество – 2050»"]}
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
                            <div className='link_data'>18 - 22 {current["Октября"]} 2021</div>
                          </div>
                        </li>
                        <li className='i3_4'>
                          <div className='link_toEvent'>
                            <a href={`/${lang}/strategicEducationalIntensive`} className='link_event'>
                              {current["Стратегический образовательный интенсив: Практика создания и развития карбоновых полигонов и сопутствующих климатических проектов: кадры, технологии, оборудование"]}
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
                            <div className='link_data'>16 - 19 {current["Сентября"]} 2021</div>
                          </div>
                        </li>
                      </>) : null}
                      <li className='i3_4'>
                        <div className='link_toEvent'>
                          <a href={`/${lang}/flagmanSchoolPresentation`} className='link_event'>
                            {current["Онлайн-презентация флагманских школ ЦРК"]}
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
                          <div className='link_data'>11 {current["февраля"]} 2021</div>
                        </div>
                      </li>
                      {/*<li className='i3_4'>*/}
                      {/*  <div className='link_toEvent'>*/}
                      {/*    <a href={`/${lang}/roundTable`} className='link_event'>*/}
                      {/*      {current["Круглый стол «Трансфер университетских технологий. Будущее стартап-студий»"]}*/}
                      {/*      <svg*/}
                      {/*        width='12'*/}
                      {/*        height='12'*/}
                      {/*        viewBox='0 0 12 12'*/}
                      {/*        fill='none'*/}
                      {/*        xmlns='http://www.w3.org/2000/svg'*/}
                      {/*      >*/}
                      {/*        <path*/}
                      {/*          fillRule='evenodd'*/}
                      {/*          clipRule='evenodd'*/}
                      {/*          d='M9.79972 3.68412L1.56172 11.8591L0.14209 10.4503L8.45638 2.19965L1.33524 2.19965L1.33524 0.199646L10.7997 0.199646L11.7997 0.199646V1.19965L11.7997 10.5789H9.79972L9.79972 3.68412Z'*/}
                      {/*          fill='#E62C2C'*/}
                      {/*        />*/}
                      {/*      </svg>*/}
                      {/*    </a>*/}
                      {/*    <div className='link_data'>20 {current["Октября"]}</div>*/}
                      {/*  </div>*/}
                      {/*</li>*/}
                      {lang !== 'ru'? (<li className='i3_4'>
                        <div className='link_toEvent'>
                          <a href={`/${lang}/events`} className='link_event'>
                            {current["Международная конференция «Наука. Лидерство. Общество»"]}
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
                          <div className='link_data'>24 - 28 {current["августа"]}</div>
                        </div>
                      </li>
                        ) : null}
                      <li className='i3_12'>
                        <a href={`/${lang}/developmentProjects`} className='btn btn__red mt'>
                          {current["Посмотреть всё"]}
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>) : null }

          {lang === 'ru'? (
          <div className='show'>
            <div className='container'>
              <div className='content'>
                <ul className='g3'>
                  <li className='i3_3'>
                    <p className='asideMarker'>{current["последние новости"]}</p>
                  </li>
                  <li className='i3_9'>
                    <ul className='g3 mainPageLinks'>
                      <HomeNewsWidget newsCount={3} allContentfulNews={allContentfulNews} />
                      <li className='i3_2'>
                        <a href={`/${lang}/news`} className='btn btn__red mt'>
                          {current["Посмотреть все новости"]}
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>) : null }

          <div className='show'>
            <div className='container'>
              <div className='content'>
                <ul className='g3'>
                  <li className='i3_3'>
                    <p className='asideMarker'>{current["О центре"]}</p>
                  </li>
                  <li className='i3_9'>
                    <ul className='g3'>
                      <li className='i3_8'>
                        <ul className='g3'>
                          <li className='i3_12'>
                            <em>
                              {current["Наша цель — опережающее развитие кадрового потенциала в сфере исследований и разработок в Тюменской области, Ханты-Мансийском автономном округе – Югре и Ямало-Ненецком автономном округе, реализация образовательной функции и развитие человеческого капитала трех регионов."]}
                            </em>
                          </li>
                          <li className='i3_6'>
                            {current["Фокус деятельности — Тюменская область, Ханты-Мансийский автономный округ — Югра и Ямало-Ненецкий автономный округ."]}
                          </li>
                          <li className='i3_6'>
                            {current["Центр расположен в Тюмени и Сургуте — это два административно самостоятельных офиса, объединенных единой методологией оценки компетенций и набором образовательных технологий."]}
                          </li>
                        </ul>
                      </li>
                      <li className='i3_4'>
                        <div className="mainPage_map_wrapper">
                          <a href="http://sibnoc.ru" className="mainPage_map">
                          </a>
                          <a href='http://sibnoc.ru' className='link_event redLink'>
                            {current["Перейти на сайт НОЦ"]}
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
                        </div>
                      </li>
                      <li className='i3_4'>
                        <img className='_responsive' loading="lazy" src='/img/photo_1.jpg' alt='' />
                        {lang === 'ru'? ( <p className='raleway'>
                          {current["Дискуссии и защиты проектных идей являются одним из методов развития компетенций ЦРК"]}
                        </p> ): null}
                      </li>
                      <li className='i3_8'>
                        <img src='/img/photo_2.jpg' loading="lazy" alt='' style={{ maxHeight: '400px'}} />
                        {lang === 'ru'? (<p className='raleway'>{current["Руководители ЦРК комментируют предзащиту участников проекта"]}</p> ): null}
                      </li>
                      <li className='i3_12'>
                        <img className='_responsive' loading="lazy" src='/img/photo_3.jpg' alt='' />
                        {lang === 'ru'? ( <p className='raleway'>
                          {current["Ментор Школы научного лидерства Ирина Шрайбер с участниками проекта Школы"]}
                        </p> ): null}
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
                    <p className='asideMarker'>{current["Партнеры"]}</p>
                  </li>
                  <li className='i3_7'>
                    <ul className='flex_centred' style={{ display: 'flex', alignItems: 'center' }}>
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
                      {current["Стать партнером"]}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Project>
            <Project_Card
              title={current["Школа научного лидерства"]}
              durations={current["длительность - 1 год"]}
              description={`${current["Февраль"]} 2021 - ${current["Февраль"]} 2022`}
              gradient='url(/img/projectGradients/group_green.svg)'
              gradient_spot="/img/projectGradients/miniGreen.svg"
              arrowColor="#309D64"
              link={`/${lang}/school`}
            >
              <SpeakerCard photo='/img/speaker_irina.png' fullName={current["Ирина Шрайбер"]} position={current["ментор"]} white>
                {current["Ph. D., кандидат физико-математических наук, ученый, исследователь, лектор"]}
              </SpeakerCard>
              <SpeakerCard photo='/img/roman_osvald.png' fullName={current["Роман Оствальд"]} position={current["руководитель проектной работы"]} white>
                {current["Канд. хим. наук. Проректор СурГУ по науке и технологиям. Руководитель проектной работы SLS"]}
              </SpeakerCard>
            </Project_Card>
            <Project_Card
              title={current["Школа руководителей научно-технологических проектов"]}
              durations={current["длительность - 1 год"]}
              description={`${current["Февраль"]} 2021 - ${current["Февраль"]} 2022`}
              gradient='url(/img/projectGradients/group_pink.svg)'
              gradient_spot="/img/projectGradients/miniBlue.svg"
              arrowColor="#761D82"
              link={`/${lang}/managementSchool`}
            >
              <SpeakerCard photo='/img/speaker_golubev.png' fullName={current["Евгений Голубев"]} position={current["ментор"]} white>
                {current["Директор Технологического парка ТюмГУ, эксперт по управлению крупными проектами во взаимодействии университет - индустрия"]}
              </SpeakerCard>
              <SpeakerCard
                photo='/img/speaker_kizeev.png'
                fullName={current["Вениамин Кизеев"]}
                white
              >
                {current["IPMA Level«B», член правления НП «СОВНЕТ», эксперт по управлению проектами и инновациями компании WINbd"]}
              </SpeakerCard>
            </Project_Card>
            <Project_Card
              title={current["Tabula Rasa"]}
              durations={current["длительность - 2 года"]}
              description={`${current["Ноябрь"]} 2020 — ${current["Июнь"]} 2022`}
              gradient='url(/img/projectGradients/group_rasa.svg)'
              gradient_spot="/img/projectGradients/miniAqua.svg"
              arrowColor="#56E39F"
              link={`/${lang}/tabulaRasa`}
            >
              <SpeakerCard photo='/img/speaker_bezuevskaya.png' fullName={current["Безуевская Валерия"]} position={current["руководитель"]} white>
                {current["К. н., проректор по развитию СурГУ"]}
              </SpeakerCard>
              <SpeakerCard photo='/img/speaker_teslinov.png' fullName={current["Андрей Теслинов"]} position={current["научный руководитель"]} white>
                {current["Д. т. н., генеральный директор НКГ DBA"]}
              </SpeakerCard>
              <SpeakerCard photo='/img/speaker_latyshev.png' fullName={current["Андрей Латышев"]} position={current["идеолог"]} white>
                {current["Руководитель ЦРК, проректор ТюмГУ"]}
              </SpeakerCard>
              <SpeakerCard photo='/img/speaker_tereshcenko.png' fullName={current["Терещенко Владимир"]} position={current["руководитель проектной работы"]} white>
                {current["Директор ЦКИ СурГУ"]}
              </SpeakerCard>
              <SpeakerCard photo='/img/speaker_panteleeva.png' fullName={current["Пантелеева Ирина"]} position={current["руководитель проектной работы"]} white>
                {current["Исполнительный директор «Краевой фонд науки»"]}
              </SpeakerCard>
            </Project_Card>
            <Project_Card
              title={current["Цифровой профиль исследователя"]}
              durations=''
              description=""
              gradient='url(/img/projectGradients/group_blue.svg)'
              gradient_spot="/img/projectGradients/miniPink.svg"
              arrowColor="#3E92CC"
              link={`/${lang}/digitalProfile`}
            >
              <p>{current["Прототип платформы комплексной оценки и развития компетенций управления сложными научно-техническими проектами и программами, с возможностями удаленного доступа и обработки цифрового следа."]} </p>
              <p>{current["digitalProfPro"]}</p>
            </Project_Card>

            {lang === 'ru'? ( <>
            <Project_Card
              title={current["Акселерационная программа"]}
              durations={current["длительность - 2 модуля"]}
              description={`${current["Июль"]} 2020 — ${current["Ноябрь"]} 2020`}
              gradient='url(/img/projectGradients/group_orange.svg)'
              gradient_spot="/img/projectGradients/miniOrange.svg"
              arrowColor="#FF9852"
              link={`/${lang}/accelerationProgram`}
            >
              <SpeakerCard photo='/img/speaker_latyshev.png' fullName={current["Андрей Латышев"]} position={current["руководитель"]} white>
                {current["Руководитель ЦРК, проректор ТюмГУ"]}
              </SpeakerCard>
              <SpeakerCard photo='/img/speaker_kizeev.png'
                           fullName={current["Вениамин Кизеев"]}
                           position={current["руководитель"]}
                           white>
                {current["IPMA Level«B», член правления НП «СОВНЕТ», эксперт по управлению проектами и инновациями компании WINbd"]}
              </SpeakerCard>
              <SpeakerCard photo='/img/speaker_golubev.png' fullName={current["Евгений Голубев"]} positon={current["ментор"]} white>
                {current["Директор Технологического парка ТюмГУ, эксперт по управлению крупными проектами во взаимодействии университет - индустрия"]}
              </SpeakerCard>
            </Project_Card>
            <Project_Card
              title={current["Step into Russian Arctic"]}
              durations=''
              gradient='url(/img/projectGradients/group_darkgreen.svg)'
              opacity={0.4}
              isInProcess={current["Программа в разработке"]}
            >
              <p>{current["Уникальная модульная программа по подготовке людей для управления широким спектром проектов в Арктической зоне РФ. Выпускники смогут на новом уровне подходить к решению задач, связанных с эффективным и результативным управлением в данном регионе."]}</p>
            </Project_Card>
            </>) : null}
          </Project>

          {lang === 'ru'? (
          <div className='show wrapper_about'>
            <div className='container'>
              <div className='content'>
                <div className='section_container'>
                  <aside className='section_aside'>
                    <p className='asideMarker'>{current["Основатели и менторы о центре"]}</p>
                  </aside>
                  <div className='section_content'>
                    <div className='quotes_wrapper'>
                      <div className='quote_container'>
                        <div className='quote_photoContainer'>
                          <img loading="lazy" src='/img/quotes/author_1.png' alt='Author_1' />
                        </div>
                        <div className='quote_content'>
                          <div className='quote_author'>
                            {current["Антон Машуков, генеральный директор АНО «Агентство развития научно-образовательных проектов»"]}
                          </div>
                          <div className='quote_title'>
                            <em>
                              {current["Именно от качества команды зависит успех любого научного или технологического проекта."]}
                            </em>
                          </div>
                          <div className='quote_description'>
                            {current["Центр развития компетенций — наш ответ на вопрос, как правильно формировать и развивать проектные команды. В этой логике ЦРК — один из важнейших проектов нашего НОЦ."]}
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
                            <a href={`${lang}/experts/latishev`}>{current["Андрей Латышев"]}</a>, {current["Руководитель ЦРК, проректор ТюмГУ"]}
                          </span>
                            <span className='quote_authorDescription'>
                          </span>
                          </div>
                          <div className='quote_title'>
                            <em>
                              {current["В ЦРК запланирован значительный спектр задач от повышения профессиональной компетентности до формирования информационной системы управления знаниями."]}
                            </em>
                          </div>
                          <div className='quote_description'>
                            {current["review1"]}
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
                            <a href={`${lang}/experts/shreyber`}>{current["Ирина Шрайбер"]}</a>, {current["ментор и лектор образовательных проектов ЦРК"]}
                          </span>
                            <span className='quote_authorDescription'>
                            {current["Ph. D., кандидат физико-математических наук, ученый, исследователь"]}
                          </span>
                          </div>
                          <div className='quote_title'>
                            <em>
                              {current["Одни из основополагающих принципов Школы Научного Лидерства – междисциплинарность и межкультурность."]}
                            </em>
                          </div>
                          <div className='quote_description'>
                            {current["review2"]}
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
                            <a href={`${lang}/experts/golubev`}>{current["Евгений Голубев"]}</a>, {current["ментор Школы руководителей научно-технических проектов"]}
                          </span>
                            <span className='quote_authorDescription'>
                            {current["golubevPro"]}
                          </span>
                          </div>
                          <div className='quote_title'>
                            <em>
                              {current["Инновационное развитие региона основано сквозных практиках управления технологическими проектами для университетов и бизнеса"]}
                            </em>
                          </div>
                          <div className='quote_description'>
                            {current["golubevReview"]}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> ) : null}

        </Layout>
      </Page>
  )
}

export default HomePage

export async function getServerSideProps(ctx) {
  const data = await getContentfulNews();
  const {current} = Translator("test", ctx.params.lang) 
  console.log(data)

  return {
    props: { data: data.data, current: current["test"], modalForm: current["modalForm"]  },
  }
}