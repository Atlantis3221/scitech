import React from 'react'
import { Page } from '../../components/page'
import { Layout } from '../../components/layout'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/dist/client/router'
import Translator from '../../i18n/translator'

export default function DigitalProfile({ current }) {
  const { query: {lang: lang} } = useRouter()
  return (
    <Page>
      <Layout style={{
        backgroundImage: 'url(/img/gradients/digitalProfile_gradient.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '850px',
        backgroundPosition: '100% -7%',
      }}>
        <Helmet>
          <meta name="description" content={current["Цифровой профиль исследователя"]} />
          <meta name="keywords" content={current["Цифровой профиль исследователя"]} />
          <meta property="og:image" content="/img/appleIcon.png" />
          <meta property="og:url" content={`https://scitech.ru/digitalProfile`} />
          <meta property="og:title" content={current["Цифровой профиль исследователя"]} />
          <meta property="og:description" content={current["digitalProfileMeta"]} />
          <title>{current["Цифровой профиль исследователя"]}</title>
          <link rel="canonical" href={`https://scitech.ru/digitalProfile`} />
        </Helmet>

        <div className='show'>
          <div className='container relative'>
            <div className="colorSpot colorSpot__blue"></div>
            <div className='content pb0'>
              <ul className='g3 relative zIndex'>
                <li className='i3_3'>
                  <p className='asideMarker'></p>
                </li>
                <li className='i3_9'>
                  <h1>{current["Цифровой профиль исследователя"]} </h1>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='show'>
          <div className='container'>
            <div className='content'>
              <ul className='g3 relative'>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_mt1'>{current["О проекте"]}</p>
                </li>
                <li className='i3_9'>
                  <em className="pb3">{current["digitalProfileAbout1"]}</em>
                  <p>
                    <em className="pt2">{current["digitalProfileAbout2"]}</em>
                  </p>
                  <a href="http://lab.scienceteam.ru" className="btn btn__skyblue">{current["Перейти на сайт"]}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='show'>
          <div className='container'>
            <div className='content mb6'>
              <ul className='g3'>
                <li className='i3_3'></li>
                <li className='i3_9'>
                  <img loading="lazy" src="/img/digitalProfile.png" alt="digitalProfile.image" />
                  <p className="raleway">{current["Скриншот платформы"]}</p>
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
    props: { current: current["test"] },
  }
}