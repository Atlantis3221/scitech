import React, { useContext } from 'react'
import { Schedule } from '../../components/schedule'
import { Helmet } from 'react-helmet'
import { Partner } from '../../components/partner'
import { EventItem_guest, EventItem_guests } from '../../components/eventItem'
import { StrongText } from '../../components/strongText'
import { Page } from '../../components/page'
import { Layout } from '../../components/layout'
import { useRouter } from 'next/dist/client/router'
import Translator from '../../i18n/translator'
import { Button } from '../../components/button'
import ModalsContext from '../../components/modals/ModalContext'

export default function ScientificPracticalConference({ current, onClick }) {
  const { query: {lang: lang} } = useRouter()
  const {modalService, setRegModalState} = useContext(ModalsContext)

  const openModal = () => {
    modalService.openModal("reg")
    setRegModalState({
      color: "red",
      inputs: ["name", "role", "company", "phone", "email", "speaker", "confidential"],
      configName: "scientificPracticalConference",
      title: "Зарегистрироваться на Стратегический образовательный интенсив"
    })
  }
  return (
    <Page>
      <Layout>
        <Helmet>
          <meta name="description" content={current["scientificPracticalConferenceTitle"]} />
          <meta name="keywords" content={current["scientificPracticalConferenceTitle"]} />
          <meta property="og:image" content="/img/appleIcon.png" />
          <meta property="og:url" content={`https://scitech.ru/scientificPracticalConference`} />
          <meta property="og:title" content={current["scientificPracticalConferenceTitle"]} />
          <meta property="og:description" content={current["scientificPracticalConferenceTitle"]} />
          <title>{current["scientificPracticalConferenceTitle"]}</title>
          <link rel="canonical" href={`https://scitech.ru/scientificPracticalConference`} />
        </Helmet>

        <div className='show'>
          <div className='container relative'>
            <div className='content pb0'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'>{current["конференция"]}</p>
                </li>
                <li className='i3_9'>
                  <h1>{current["scientificPracticalConferenceTitle"]}
                  </h1>
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
                        <p className="date_day">18</p>
                        <div className="date_wrapper">
                          <span className={`date_month 'date_month__wide'`}>{current["Окт"]} 2021</span>
                        </div>
                            <div className="sting">-</div>
                            <div className="schedule_date">
                              <p className="date_day">23</p>
                              <span className={`date_month date_month__wide'}`}>{current["Окт"]} 2021</span>
                            </div>
                      </div>

                      <div className="schedule_place">
                        <div className={`place_text '}`}>
                          <div className="place_text_icon">
                            <img loading="lazy" src='/img/pin.svg' alt='icon'/>
                            <p className="schedule_time__tiny mt0">{current["онлайн"]}</p>
                          </div>
                        </div>
                      </div>

                        <div className="schedule_button">
                            <div className='registerEventForm'>
                              <Button red onClick={openModal}>{current["Зарегистрироваться"]}</Button>
                              {/*@todo REPLACE with new from*/}
                              {/*<a href={'/'} className="btn btn__red">{current["scienceLeadSocRegistr"]}</a>*/}
                              {/*          hideParticipant={true}*/}
                              {/*          individual={individual}*/}
                              {/*          showOrganizationField={showOrganizationField}*/}
                              {/*          askIsSpeaker={showAskIsSpeakerButton}*/}
                              {/*          isSpeaker={showAskIsSpeakerButton}*/}
                              {/*          eventType={eventType}*/}

                            </div>
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
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_mt_half'>{current["о конференции"]}</p>
                </li>
                <li className='i3_9'>
                  <p>{current["scientificPracticalConferenceA"]}</p>
                  <p>{current["scientificPracticalConferenceB"]}</p>
                  <p>{current["scientificPracticalConferenceC"]} </p>
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
                  <p className='asideMarker'>{current["ЦЕЛЬ КОНФЕРЕНЦИИ"]}</p>
                </li>
                <li className='i3_9'>
                  <p>{current["scientificPracticalConference-aim1"]} </p>
                  <p>{current["scientificPracticalConference-aim2"]}</p>
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
                  <p className='asideMarker'>{current["ПРОЕКТ СОДЕРЖАНИЯ КОНФЕРЕНЦИИ"]}</p>
                </li>
                <li className='i3_9'>
                  <p className='mb0'><StrongText>{current["3 круглых стола"]}</StrongText> {current["с экспертами мирового уровня по следующим тематикам:"]}</p>
                  <EventItem_guests guests=''>
                    <EventItem_guest>
                      {current["roundtable-1"]}
                    </EventItem_guest>
                    <EventItem_guest>
                      {current["roundtable-2"]}
                    </EventItem_guest>
                    <EventItem_guest>
                      {current["roundtable-3"]}
                    </EventItem_guest>
                  </EventItem_guests>
                  <p><StrongText> {current["Лекции"]}Лекции</StrongText> {current["международных и российских экспертов."]}</p>
                  <p><StrongText>{current["Мини-конференции"]}</StrongText> {current["ведущих исследовательских команд."]}</p>
                  <p><StrongText>{current["Дискуссии"]}</StrongText> {current["с привлечением широкого круга профессиональной общественности."]}</p>
                  <p><StrongText>{current["Обсуждение"]}</StrongText> {current["международного опыта и трансляция его в отечественную практику."]}</p>
                  <p><StrongText>{current["Активизация совместного поиска"]}</StrongText> {current["и разработка эффективных моделей сотрудничества науки, органов власти и бизнес-структур."]}</p>
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
                  <p className='asideMarker'>{current["ЦЕЛЕВАЯ АУДИТОРИЯ"]}</p>
                </li>
                <li className='i3_9'>
                  <p>— {current["Представители Министерства науки и высшего образования Российской Федерации;"]}</p>
                  <p>— {current["Представители органов власти регионов НОЦ;"]}</p>
                  <p>— {current["Представители НОЦ и ЦРК РФ;"]}</p>
                  <p>— {current["Представители научно-экспертного сообщества;"]}</p>
                  <p>— {current["Представители крупного бизнеса."]}</p>
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
                  <p className='asideMarker'>{current["ИНФОРМАЦИЯ О ПРЕДЫДУЩЕЙ КОНФЕРЕНЦИИ"]}</p>
                </li>
                <li className='i3_9'>
                  <p>
                    <a href={`/${lang}/events`} className="mt_low">{current["previousScienceLeadSoc"]} </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='show'>
          <div className='container'>
            <div className='content'>
              <ul className='g3'>
                <li className='i3_3'></li>
                <li className='i3_9'>
                  <p className="">{current["scienceLeadSocRequest"]} <a href="mailto:cdc@scitech.ru" className="raleway_bold">cdc@scitech.ru</a></p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {lang === 'ru' ? (
        <div className="wrapper_partners content mb6">
          <div className="container">
            <ul className="g3">
              <li className="i3_3">
                <p className="asideMarker">ГЕНЕРАЛЬНЫЕ Партнеры</p>
              </li>
              <li className="i3_9">
                <ul className="g3">
                  <li className="i3_4">
                    <Partner
                      logo='/img/logo_tumen_gov.svg'
                      link="https://www.utmn.ru/"
                      name='Тюменский государственный университет'
                      alt='Тюменский государственный университет'
                      wide
                    ></Partner>
                  </li>
                  <li className='i3_4'>
                    <Partner
                      logo='/img/logo_nop.svg'
                      name='Экспертно-аналитический центр «Научно-образовательная политика» '
                      alt='«Научно-образовательная политика»'
                      wide
                    ></Partner>
                  </li>
                  <li className='i3_4'>
                    <Partner
                      logo='/img/sibnoc_black.svg'
                      link="http://sibnoc.ru"
                      name='Западно-Сибирский научно-образовательный центр мирового уровня'
                      alt='Западно-Сибирский научно-образовательный центр мирового уровня'
                      wide
                    ></Partner>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        ) : null}
      </Layout>
    </Page>
  )
}


export async function getServerSideProps(ctx) {
  const {current} = Translator("test", ctx.params.lang)

  return {
    props: { current: current["test"]  },
  }
}
