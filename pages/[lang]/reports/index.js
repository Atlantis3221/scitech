import React from 'react'

import { Page } from '../../../components/page'
import { Layout } from '../../../components/layout'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/router'
import Translator from '../../../i18n/translator'

export default function Reports({ current, modalForm }) {
  const { query: {lang: lang} } = useRouter()
  return (
    <Page>
      <Layout modalFormText={modalForm}>
        <Helmet>
          <meta name="description" content={current["Отчеты о деятельности Центра"]} />
          <meta name="keywords" content={current["ReportsMeta"]} />
          <meta property="og:image" content="/img/appleIcon.png" />
          <meta property="og:url" content={`https://scitech.ru/reports`} />
          <meta property="og:title" content={current["Отчеты о деятельности Центра"]} />
          <meta property="og:description" content={current["ReportsMeta"]} />
          <title>{current["Отчеты о деятельности Центра"]}</title>
          <link rel="canonical" href={`https://scitech.ru/reports`} />
        </Helmet>

        <div className='show content reports_header'>
          <div className='container relative'>
            <ul className='g3'>
              <li className='i3_3'>
              </li>
              <li className='i3_9'>
                <h1>{current["Отчеты о деятельности Центра"]}</h1>
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
                  <h2>{current["Итоги и результаты"]} 2019-2020</h2>
                  <p className='flex'>
                     <span style={{ marginRight: '0.5rem'}}>
                        <img src='/img/download.svg' alt='icon' />
                     </span>
                     <a href="/docs/Broshura_SHNL.pdf" target="_blank">{current["Буклет с итогами года PDF"]}</a>
                  </p>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <div className='result_numbers'>
                        <div className='result_item'>
                          <p className='bigNumber'>250</p>
                          <p className='number_description'>{current["Человек прошли обучение"]}</p>
                        </div>
                        <div className='result_item'>
                          <p className='bigNumber'>80+</p>
                          <p className='number_description'>{current["Млн руб. дополнительного финансирования привлечено"]}</p>
                        </div>
                        <div className='result_item'>
                          <p className='bigNumber'>100</p>
                          <p className='number_description'>{current["Экспертов"]}</p>
                        </div>
                        <div className='result_item'>
                          <p className='bigNumber'>18</p>
                          <p className='number_description'>{current["Новых научных проектов"]}</p>
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

export async function getServerSideProps(ctx) {
  const {current} = Translator("test", ctx.params.lang)

  return {
    props: { current: current["test"], modalForm: current["modalForm"] },
  }
}