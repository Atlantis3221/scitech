import React from 'react'
import { Page } from '../../components/page'
import { Layout } from '../../components/layout'
import { Schedule } from '../../components/schedule'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/dist/client/router'

export default function FlagmanSchoolPresentation(props) {
  const { query: {lang: lang} } = useRouter()
  return (
    <Page>
      <Layout>
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
                    <Schedule dataFirst={[11, 'Фев 2021']}
                              place={'онлайн, площадка Leader ID'}
                              isShowButton={true}
                              time={'14:00 — 15:30'}
                              eventLinkToTable="https://vk.com/video-29346_456239410"
                    />
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
