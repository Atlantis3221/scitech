import React from 'react'

import { Page } from '../../../components/page'
import { Layout } from '../../../components/layout'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/router'

export default function Reports(props) {
  const { query: {lang: lang} } = useRouter()
  return (
    <Page>
      <Layout>
        <Helmet>
          <meta name="description" content='Отчеты о деятельности Центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
          <meta name="keywords" content='Отчеты о деятельности Центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
          <meta property="og:image" content="/img/appleIcon.png" />
          <meta property="og:url" content={`https://scitech.ru/reports`} />
          <meta property="og:title" content='Отчеты о деятельности Центра' />
          <meta property="og:description" content='Отчеты о деятельности Центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
          <title>Отчеты о деятельности Центра</title>
          <link rel="canonical" href={`https://scitech.ru/reports`} />
        </Helmet>

        <div className='show content reports_header'>
          <div className='container relative'>
            <ul className='g3'>
              <li className='i3_3'>
              </li>
              <li className='i3_9'>
                <h1>Отчеты о деятельности Центра</h1>
              </li>
            </ul>
          </div>
        </div>

        <div className='show'>
          <div className='container'>
            <div className='content'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className="asideMarker">2019–2020</p>
                </li>
                <li className='i3_9'>
                  <h2>Итоги и результаты 2019-2020</h2>
                  <p className='flex'>
                     <span>
                        <img src='/img/download.svg' alt='icon' />
                     </span>
                     <a href="/docs/Broshura_SHNL.pdf" target="_blank">Буклет с итогами года PDF</a>
                  </p>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <div className='result_numbers'>
                        <div className='result_item'>
                          <p className='bigNumber'>250</p>
                          <p className='number_description'>Человек прошли обучение</p>
                        </div>
                        <div className='result_item'>
                          <p className='bigNumber'>80+</p>
                          <p className='number_description'>Млн руб. дополнительного финансирования привлечено</p>
                        </div>
                        <div className='result_item'>
                          <p className='bigNumber'>100</p>
                          <p className='number_description'>Экспертов</p>
                        </div>
                        <div className='result_item'>
                          <p className='bigNumber'>18</p>
                          <p className='number_description'>Новых научных проектов</p>
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
                </li>
                <li className='i3_9 mb6'>
                  <ul className='g3'>
                    <li className='i3_6'>
                      <img loading="lazy" className='_responsive' src='/img/reports/reports1.png' alt='' />
                    </li>
                    <li className='i3_6'>
                      <img loading="lazy" className='_responsive' src='/img/reports/reports2.png' alt='' />
                    </li>
                    <li className='i3_6'>
                      <img loading="lazy" className='_responsive' src='/img/reports/reports3.png' alt='' />
                    </li>
                    <li className='i3_6'>
                      <img loading="lazy" className='_responsive' src='/img/reports/reports4.png' alt='' />
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
