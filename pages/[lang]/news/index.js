import React, { useEffect, useState } from 'react'

import { Page } from '../../../components/page'
import { Layout } from '../../../components/layout'
import { NewsWidget } from './newsWidget'
import { Helmet } from 'react-helmet'
import { SchoolProject } from '../../../components/schoolProject'
import { ContentfulNewsWidget } from './contentfulNewsWidget'
import { getContentfulNews } from '../../../helpers/axios'
import { useRouter } from 'next/router'


export default function News({ data }) {
  const { query: {lang: lang} } = useRouter()
  const [allContentfulNews, setContentfulNews] = useState([])

  useEffect(() => {
    setContentfulNews(data)
  }, [])

  return (
    <Page>
      <Layout>
        <Helmet>
          <meta name="description" content='Новости центра' />
          <meta name="keywords" content='Новости центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
          <meta property="og:image" content="/img/appleIcon.png" />
          <meta property="og:url" content={`https://scitech.ru/news`} />
          <meta property="og:title" content='Новости центра' />
          <meta property="og:description" content='Новости центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
          <title>Новости центра</title>
          <link rel="canonical" href={`https://scitech.ru/news`} />
        </Helmet>

        <div className='show content'>
          <div className='container relative'>
              <ul className='g3'>
                <li className='i3_3'>
                </li>
                <li className='i3_9'>
                  <h1>Новости центра</h1>
                </li>
              </ul>
          </div>
        </div>

        <div className='show'>
          <div className='container'>
            <div className='content'>
              <ul className='g3'>
                <li className='i3_3'>
                  <a href={`/${lang}/news`} className='link_event link_event__toNews active'>Новости центра
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
                  <a href={`/${lang}/newsSMI`} className='link_event link_event__toNews'>СМИ о нас
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
                  <div className='newsCards_container'>
                    <SchoolProject>

                      {/*THESE ARE News from Contentful */}
                      <ContentfulNewsWidget isSMI={false} allContentfulNews={allContentfulNews} />

                      {/*THESE ARE News from website */}
                      <NewsWidget />

                    </SchoolProject>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </Page>
  )
}


export async function getServerSideProps() {
  const data = await getContentfulNews();

  return {
    props: { data: data.data },
  }
}
