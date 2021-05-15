import React from 'react'
import { Layout } from '../../components/layout'
import { newsSMI } from '../../data/newsSMI'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/router'

import '../../styles/fonts.css'
import '../../styles/reset.less'
import '../../styles/sciteam.less'
import '../../styles/form.less'
import '../../styles/home.less'
import '../../styles/grid2.less'
import '../../styles/textPopup.less'
import '../../styles/variables.less'

const NewsSMI = props => {
  const router = useRouter()
  const { id } = router.query

  const data = newsSMI.findById(id)

  return (
    <Layout>
      <Helmet>
        <meta name="description" content={data?.title} />
        <meta name="keywords" content={data?.title} />
        <meta property="og:image" content="/img/meta-image.jpg" />
        <meta property="og:url" content={`https://scitech.ru/newsSMI/${data?._id}`} />
        <meta property="og:title" content={data?.title} />
        <meta property="og:description" content={data?.title} />
        <title>{data?.title}</title>
        <link rel="canonical" href={`https://scitech.ru/newsSMI/${data?._id}`} />
      </Helmet>

      <div className='show wrapper_hero'>
        <div className='container'>
          <div className='content'>
            <ul className='g3'>
              <li className='i3_3'>
              </li>
              <li className='i3_9'>
                <h1>{data?.title}</h1>
                <p className="raleway raleway__grey">{data?.date}</p>
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
                <ul className='g3'>
                  <li className='i3_12 mb6'>
                    <ul className='g3'>
                      <li className='i3_12'>
                        <img loading="lazy" src={data?.image} alt="newsPicture" style={{height: '35rem'}} />
                        <div
                          className='newsText'
                          dangerouslySetInnerHTML={{ __html: data?.description }}
                        />
                        <a
                          href={data?.sourceLink}
                          className='link_event link_event__noBorder raleway_bold mt_low'>
                          Источник: {data?.source}
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
  )
}

export default NewsSMI
