import React from 'react'

import { Page } from '../../../components/page'
import { Layout } from '../../../components/layout'
import { Helmet } from 'react-helmet'

export function FirstEdition(props) {
  return (
    <Page>
      <Layout>
        <Helmet>
          <meta name="description" content='Первый выпуск и защиты лучших научных и научно-технических проектов ЦРК Западно-Сибирского НОЦ' />
          <meta name="keywords" content='Новости Центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
          <meta property="og:image" content="/img/meta-image.jpg" />
          <meta property="og:url" content={`https://scitech.ru/projectsDefense/newsSMI_firstEdition`} />
          <meta property="og:title" content='Первый выпуск и защиты лучших научных и научно-технических проектов ЦРК Западно-Сибирского НОЦ' />
          <meta property="og:description" content='Новости Центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
          <title>Первый выпуск и защиты лучших научных и научно-технических проектов ЦРК Западно-Сибирского НОЦ</title>
          <link rel="canonical" href={`https://scitech.ru/projectsDefense/newsSMI_firstEdition`} />
        </Helmet>

        <div className='show wrapper_hero'>
          <div className='container'>
            <div className='content pb0'>
              <ul className='g3'>
                <li className='i3_3'>
                </li>
                <li className='i3_9'>
                  <h1>Первый выпуск и защиты лучших научных и научно-технических проектов ЦРК Западно-Сибирского
                    НОЦ</h1>
                  <p className="raleway raleway__grey">20 октября 2020</p>
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
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <img loading="lazy" src="/img/newsSMI/firstCover.jpg" alt="firstCover" />
                          <p>Процедура защит пройдет 20 октября 2020 года на базе Школы перспективных исследований
                            Тюменского государственного университета, ул. 8 марта, д. 2, корп. 1, в 501 аудитории с
                            09.00 до 12.00 в смешанном режиме онлайн и офлайн.
                          </p>
                          <p>ЦРК является одним из лидирующих центров развития компетенций в составе первых пяти НОЦ.
                            Методические подходы к организации системных проектов развития человеческого капитала в
                            сфере исследований и разработок востребованы и масштабируются в другие регионы.
                          </p>
                          <p>По предварительным результатам, за прошедший календарный год участники обучения подготовили
                            и опубликовали более 35 научных статей и привлекли в свои проекты более 60 миллионов рублей
                            дополнительного финансирования из различных источников. </p>
                          <p>Трансляция будет вестись на страницу Тюменского государственного университета социальной
                            сети «ВКонтакте»: https://vk.com/tyumen.university
                          </p>
                          <p>По вопросам обращайтесь по почте cdc@scitech.ru с темой письма «Участие в защитах
                            20.10».</p>
                        </li>
                        <li className='i3_12'>
                          <a
                            href="https://leader-id.ru/event/60026/"
                            className='link_event link_event__noBorder raleway_bold mt_low'>
                            Источник: leader-id
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
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </Page>
  )
}
