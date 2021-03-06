import React from 'react'
import { Page } from '../../components/page'
import { Layout } from '../../components/layout'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/dist/client/router'
import Translator from '../../i18n/translator'

export default function FlagmanSchoolPresentation({  modalForm }) {
  const { query: {lang: lang} } = useRouter()
  return (
    <Page>
      <Layout modalFormText={modalForm}>
        <Helmet>
          <meta name="description" content='Онлайн-презентация флагманских школ ЦРК' />
          <meta name="keywords" content='мероприятие Центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
          <meta property="og:image" content="/img/appleIcon.png" />
          <meta property="og:url" content={`https://scitech.ru/flagmanSchoolPresentation`} />
          <meta property="og:title" content='Онлайн-презентация флагманских школ ЦРК' />
          <meta property="og:description" content='мероприятие Центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
          <title>Онлайн-презентация флагманских школ ЦРК</title>
          <link rel="canonical" href={`https://scitech.ru/flagmanSchoolPresentation`} />
        </Helmet>

        <div className='show'>
          <div className='container relative'>
            <div className='content pb0'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'>мероприятие</p>
                </li>
                <li className='i3_9'>
                  <h1>Онлайн-презентация флагманских школ ЦРК </h1>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='show content'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'></li>
              <li className='i3_9 wrapper_borderTop'>
                <ul className='g3'>
                  <li className='i3_12 flex_end'>
                    <div className="schedule_box">
                      <div className="schedule_date">
                        <div className="datePlace_date">
                          <p className="date_day">11</p>
                          <span className="date_month">Фев 2021</span>
                        </div>
                      </div>

                      <div className="schedule_place ">
                        <div className={`place_text place_text_tiny`} style={{ maxWidth: '13rem' }}>
                          <div className="place_text_icon" style={{ flexDirection: 'column'}}>
                            <p className="schedule_time__tiny m0">14:00 — 15:30</p>
                            <p className="schedule_time__tiny mt0">МОСКОВСКОЕ ВРЕМЯ</p>
                          </div>
                        </div>
                      </div>

                      <div className="schedule_place ">
                        <div className={`place_text place_text_tiny`} style={{ maxWidth: '16rem' }}>
                          <div className="place_text_icon">
                            <img loading="lazy" src='/img/pin.svg' alt='icon'/>
                            <p className="schedule_time__tiny mt0">ОНЛАЙН, ПЛОЩАДКА LEADER ID</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <a href="https://vk.com/video-29346_456239410" className="btn btn__red">перейти к трансляции</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className='show'>
          <div className='container'>
            <div className='content'>
              <ul className='g3 relative'>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_mt1'>о мероприятии</p>
                </li>
                <li className='i3_9'>
                  <em className="pb3">11 февраля пройдет онлайн-презентация флагманских программ Центра развития
                    компетенций: Школы научного лидерства и Школы руководителей научно-технических проектов. В 14:00 по
                    московскому времени в прямом эфире можно будет узнать детали набора и задать интересующие
                    вопросы.</em>
                  <p>
                    <em className="pt2">Трансляция состоится на площадке Leader ID. Присоединяйтесь!</em>
                  </p>
                  <p>
                    <em className="pt2">Узнать подробнее о программах и зарегистрироваться в <a href={`/${lang}/school`}>Школу научного
                      лидерства</a>, в <a href={`/${lang}/managementSchool`}>Школу руководителей научно-технических проектов</a></em>
                  </p>
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
                  <img loading="lazy" src="/img/news/news04-02-onlinePresentation.jpg" alt="FlagmanSchoolPresentation.image" />
                  <p className="raleway">Есть вопрос? Напишите нам: <a
                    href="mailto:cdc@scitech.ru">cdc@scitech.ru</a> (в теме письма просим указать “Набор в Школы ЦРК
                    2021/2022”)</p>
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
    props: { current: current["test"], modalForm: current["modalForm"]  },
  }
}