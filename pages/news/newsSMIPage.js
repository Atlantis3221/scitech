import React from 'react'

import { Page } from '../../components/page'
import { Layout } from '../../components/layout'
import { NewsSMIWidget } from '../newsSMI/newsSMIWidget'
import { Helmet } from 'react-helmet'

export function NewsSMIPage(props) {
  return (
    <Page>
      <Layout>
        <Helmet>
          <meta name="description" content='СМИ о нас' />
          <meta name="keywords" content='СМИ Новости центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
          <meta property="og:image" content="/img/meta-image.jpg" />
          <meta property="og:url" content={`https://scitech.ru/news`} />
          <meta property="og:title" content='СМИ о нас' />
          <meta property="og:description" content='СМИ Новости центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
          <title>СМИ о нас</title>
          <link rel="canonical" href={`https://scitech.ru/news`} />
        </Helmet>

        <div className='show content'>
          <div className='container relative'>
              <ul className='g3'>
                <li className='i3_3'>
                </li>
                <li className='i3_9'>
                  <h1>СМИ о нас</h1>
                </li>
              </ul>
          </div>
        </div>

        <div className='show'>
          <div className='container'>
            <div className='content'>
              <ul className='g3'>
                <li className='i3_3'>
                  <a href="/news" className='link_event link_event__toNews'>Новости центра
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
                  <a href="/newsSMI" className='link_event link_event__toNews active'>СМИ о нас
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
                <li className='i3_9'>
                  <NewsSMIWidget />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </Page>
  )
}
