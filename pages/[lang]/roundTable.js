import React from 'react'
import { Page } from '../../components/page'
import { Layout } from '../../components/layout'
import { EventItem, EventItem_Container } from '../../components/eventItem'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/dist/client/router'
import Translator from '../../i18n/translator'

export default function RoundTable({ modalForm }) {
  const { query: {lang: lang} } = useRouter()
  return (
    <Page>
      <Layout modalFormText={modalForm}>
        <Helmet>
          <meta name="description" content='Круглый стол «Трансфер университетских технологий. Будущее стартап-студий»' />
          <meta name="keywords" content='Круглый стол Центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
          <meta property="og:image" content="/img/appleIcon.png" />
          <meta property="og:url" content={`https://scitech.ru/roundTable`} />
          <meta property="og:title" content='Круглый стол «Трансфер университетских технологий. Будущее стартап-студий»' />
          <meta property="og:description" content='Круглый стол Центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
          <title>Круглый стол «Трансфер университетских технологий. Будущее стартап-студий»</title>
          <link rel="canonical" href={`https://scitech.ru/roundTable`} />
        </Helmet>

        <div className='show content'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker'>Круглый стол</p>
              </li>
              <li className='i3_9'>
                <div className='titleHero'>
                  <h1>Круглый стол «Трансфер университетских технологий. Будущее стартап-студий»</h1>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className='show content'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'></li>
              <li className='i3_9 wrapper_borderTop'>
                <ul className='g3'>
                  <li className='i3_12'>
                    <div className="schedule_box">
                      <div className="schedule_date">
                        <div className="datePlace_date">
                          <p className="date_day">20</p>
                          <span className="date_month">Окт 2021</span>
                        </div>
                      </div>

                      <div className="schedule_place ">
                        <div className={`place_text place_text_tiny`} style={{ maxWidth: '13rem' }}>
                          <div className="place_text_icon" style={{ flexDirection: 'column'}}>
                            <p className="schedule_time__tiny m0">11.00 - 12.00</p>
                            <p className="schedule_time__tiny mt0">МОСКОВСКОЕ ВРЕМЯ</p>
                          </div>
                        </div>
                      </div>

                      <div className="schedule_place ">
                        <div className={`place_text place_text_tiny`} style={{ maxWidth: '16rem' }}>
                          <div className="place_text_icon">
                            <img loading="lazy" src='/img/pin.svg' alt='icon'/>
                            <p className="schedule_time__tiny mt0">ОНЛАЙН И ОФЛАЙН</p>
                          </div>
                          <span className="schedule_box_description">Школа перспективных исследований ТюмГУ, ул. 8 марта, д. 2, корп. 1, 501 аудитория</span>
                        </div>
                      </div>

                      <div>
                        <p className="raleway">Прием заявок окончен</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className='show wrapper_about content'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker'>о мероприятии</p>
              </li>
              <li className='i3_9'>
                <p>
                  В последнее время в деятельности университетов все больше отмечается важность кооперации с представителями
                  реального сектора экономики и необходимость продвижения и коммерциализации университетских технологий.</p>
                <p>ЦРК Западно-Сибирского НОЦ реализуются Школа научного лидерства и Школа руководителей научно-технических
                  проектов. Данные Школы призваны вырастить лидеров, которые должны обеспечить создание прорывных мировых
                  технологий, перевод их в инновационные продукты и вывод новых продуктов на перспективные рынки.</p>
                <p>Цель круглого стола:</p>
                <p>— Обмен практиками и инструментами трансфера университетских технологий;</p>
                <p>— Формирование видения модели стартап-студии на базе университетов.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className='show wrapper_about content'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker'>Для кого</p>
              </li>
              <li className='i3_9'>
                <p>
                  — Представители институтов развития, инновационной инфраструктуры университетов, научно-образовательных
                  центров мирового уровня,</p>
                <p> — Руководители российских и зарубежных центров трансфера технологий и стартап-студий.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className='show content'>
          <div className='container pb3'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker asideMarker_mt_half'>Программа (московское время)</p>
              </li>
              <li className='i3_9'>
                <EventItem_Container>
                  <EventItem date='13:00 – 13:05' title="Приветственное слово от модератора круглого стола">
                    Модератор: Кизеев Вениамин Михайлович, эксперт по управлению проектами и инновациями WINbd
                  </EventItem>
                  <EventItem date='13:05 – 13:15' title="Приветственное слово и выступление от Министерства науки и высшего образования">
                    Инструменты государственной поддержки трансфера университетских технологий
                  </EventItem>
                  <EventItem date='13:15 – 13:30' title="Выступление представителя Фонда Сколково">
                    Опыт создания программ для коммерциализации научно-технических стартапов. IGTech программа
                  </EventItem>
                  <EventItem date='13:30 – 13:45' title="Выступление представителя Донского государственного технического университета">
                    Опыт создания инновационной среды для трансфера технологий. Промышленный коворкинг «Гараж»
                  </EventItem>
                  <EventItem date='13:45 – 14:00' title="Выступление представителя НИУ ВШЭ">
                    Бизнес-инкубатор как инструмент коммерциализации университетских технологий
                  </EventItem>
                  <EventItem date='14:00 – 14:15' title="Создание центров трансфера технологий и стартап-студий на базе университета ">
                    Кизеев Вениамин Михайлович, эксперт по управлению проектами и инновациями WINbd
                  </EventItem>
                  <EventItem date='14:15 – 14:30' title="Дискуссия между участниками. Подведение итогов">
                    Модератор: Кизеев Вениамин Михайлович, эксперт по управлению проектами и инновациями WINbd
                  </EventItem>
                </EventItem_Container>
              </li>
            </ul>
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