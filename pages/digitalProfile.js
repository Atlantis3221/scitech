import React from 'react'
import { Page } from '../components/page'
import { Layout } from '../components/layout'
import { Helmet } from 'react-helmet'

export default function DigitalProfile(props) {
  return (
    <Page>
      <Layout style={{
        backgroundImage: 'url(/img/gradients/digitalProfile_gradient.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '850px',
        backgroundPosition: '100% -7%',
      }}>
        <Helmet>
          <meta name="description" content='Цифровой профиль исследователя' />
          <meta name="keywords" content='Партнерский проект Центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
          <meta property="og:image" content="/img/meta-image.jpg" />
          <meta property="og:url" content={`https://scitech.ru/digitalProfile`} />
          <meta property="og:title" content='Цифровой профиль исследователя' />
          <meta property="og:description" content='Партнерский проект Центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
          <title>Цифровой профиль исследователя</title>
          <link rel="canonical" href={`https://scitech.ru/digitalProfile`} />
        </Helmet>

        <div className='show'>
          <div className='container relative'>
            <div className="colorSpot colorSpot__blue" style={{ left: '7.7rem'}}></div>
            <div className='content pb0'>
              <ul className='g3 relative zIndex'>
                <li className='i3_3'>
                  <p className='asideMarker'></p>
                </li>
                <li className='i3_9'>
                  <h1>Цифровой профиль исследователя </h1>
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
                  <p className='asideMarker asideMarker_mt1'>о проекте</p>
                </li>
                <li className='i3_9'>
                  <em className="pb3">Прототип платформы комплексной оценки и развития компетенций управления сложными
                    научно-техническими проектами и программами, с возможностями удаленного доступа и обработки
                    цифрового следа.</em>
                  <p>
                    <em className="pt2">Интерактивная ИТ-платформа с современными интерфейсами позволяет обрабатывать
                      информацию о текущей и прогнозной компетенции пользователей, на основе сквозной технологии работы с
                      данными, обеспечивать управление развитием и обучением персонала, формировать проектные команды и
                      оценивать перспективы развития конкретных пользователей.</em>
                  </p>
                  <a href="http://lab.scienceteam.ru" className="btn btn__skyblue">Перейти на сайт</a>
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
                  <p className="raleway">Скриншот платформы</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </Layout>
    </Page>
  )
}
