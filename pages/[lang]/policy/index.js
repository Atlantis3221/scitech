import React from 'react'

import { Page } from '../../../components/page'
import { Layout } from '../../../components/layout'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/router'
import Translator from '../../../i18n/translator'

export default function Policy({ current, modalForm }) {
  const { query: {lang: lang} } = useRouter()
  return (
    <Page>
      <Layout modalFormText={modalForm}>
        <Helmet>
          <meta name="description" content={current["Политика в отношении обработки персональных данных"]} />
          <meta name="keywords" content={current["Политика в отношении обработки персональных данных"]} />
          <meta property="og:image" content="/img/appleIcon.png" />
          <meta property="og:url" content={`https://scitech.ru/policy`} />
          <meta property="og:title" content={current["Политика в отношении обработки персональных данных"]} />
          <meta property="og:description" content={current["Политика в отношении обработки персональных данных"]} />
          <title>{current["Политика в отношении обработки персональных данных"]}</title>
          <link rel="canonical" href={`https://scitech.ru/policy`} />
        </Helmet>

        <div className='show wrapper_hero'>
          <div className='container relative'>
            <div className="colorSpot colorSpot__red_low"></div>
            <div className='content'>
              <ul className='g3 relative'>
                <li className='i3_3'>
                </li>
                <li className='i3_9'>
                  <h1>{current["Политика в отношении обработки персональных данных"]}</h1>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='show'>
          <div className='container'>
            <div className='content pb0'>
              <ul className='g3'>
                <li className='i3_3'>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4 className="mt0">1. {current["Общие положения"]}</h4>
                          <p>{current["policy1"]}</p>
                          <p>1.1. {current["policy11"]}</p>
                          <p>1.2. {current["policy12"]} <a href="https://scitech.ru">https://scitech.ru</a>.</p>
                          <p>1.3. {current["policy13"]} <a href="http://sdo.mck72.ru">http://sdo.mck72.ru</a></p>
                          <p>1.4. {current["policy14"]}</p>
                        </li>
                      </ul>
                    </li>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4>2. {current["policy2"]}</h4>
                          <p>2.1. {current["policy21"]}</p>
                          <p>2.2. {current["policy22"]}</p>
                          <p>2.3. {current["policy23"]}</p>
                          <p>2.4. {current["policy24"]}</p>
                          <p>2.5. {current["policy25"]}</p>
                          <p>2.6. {current["policy26"]}</p>
                          <p>2.7. {current["policy27"]}</p>
                          <p>2.8. {current["policy28"]}</p>
                          <p>2.9. {current["policy29"]}</p>
                          <p>2.10. {current["policy210"]}</p>
                          <p>2.11. {current["policy211"]}</p>
                          <p>2.12. {current["policy212"]}</p>
                          <p>2.13. {current["policy213"]}</p>
                        </li>
                      </ul>
                    </li>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4>3. {current["policy3"]}</h4>
                          <p>3.1. {current["policy31"]}</p>
                          <p>3.2. {current["policy32"]}</p>
                          <p>3.3. {current["policy33"]}</p>
                          <p>3.4. {current["policy34"]}</p>
                          <p>3.5. {current["policy35"]}</p>
                        </li>
                      </ul>
                    </li>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4>4. {current["policy4"]}</h4>
                          <p>4.1. {current["policy41"]}</p>
                          <p>4.2. {current["policy42"]}</p>
                          <p>4.3. {current["policy43"]}</p>
                        </li>
                      </ul>
                    </li>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4>5. {current["policy5"]}</h4>
                          <p>5.1. {current["policy51"]}</p>
                          <p>5.2. {current["policy52"]}</p>
                        </li>
                      </ul>
                    </li>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4>6. {current["policy6"]}</h4>
                          <p>{current["policy60"]}</p>
                          <p>6.1. {current["policy61"]}</p>
                          <p>6.2. {current["policy62"]}</p>
                          <p>6.3. {current["policy63"]}</p>
                          <p>6.4. {current["policy64"]}</p>
                        </li>
                      </ul>
                    </li>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4>7. {current["policy7"]}</h4>
                          <p>7.1. {current["policy71"]}</p>
                          <p>7.2. {current["policy72"]}</p>
                        </li>
                      </ul>
                    </li>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12 mb6'>
                          <h4>8. {current["policy8"]}</h4>
                          <p>8.1. {current["policy81"]}</p>
                          <p>8.2. {current["policy82"]}</p>
                          <p>8.3. {current["policy83"]}</p>
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


export async function getServerSideProps(ctx) {
  const {current} = Translator("test", ctx.params.lang)

  return {
    props: { current: current["test"], modalForm: current["modalForm"] },
  }
}