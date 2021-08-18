import React, { useContext, useEffect, useState } from 'react'
import { Page } from '../../components/page'
import { Layout } from '../../components/layout'
import { Helmet } from 'react-helmet'
import { SchoolProject } from '../../components/schoolProject'
import { NewsSMIWidget } from './newsSMI/newsSMIWidget'
import { Button } from '../../components/button'
import { getContentfulNews } from '../../helpers/axios'
import { useRouter } from 'next/dist/client/router'
import { ContentfulNewsWidget } from './news/contentfulNewsWidget'
import Translator from '../../i18n/translator'
import ModalsContext from '../../components/modals/ModalContext'

export default function DevelopmentProjectZima({  data, current, modalForm  }) {
  const { query: {lang: lang} } = useRouter()
  const [allContentfulNews, setContentfulNews] = useState([])
  const {modalService, setRegModalState} = useContext(ModalsContext)

  const openModal = () => {
    modalService.openModal("reg")
    setRegModalState({
      color: "green",
      inputs: ["participationType","name", "company", "phone", "email", "confidential"],
      configName: "developmentProjectZima",
      title: lang === 'ru'? 'Сообщить о следующем наборе': 'Enquire about next enrolment period',
      isSent: false
    })
  }

  useEffect(() => {
    setContentfulNews(data)
  }, [])

  return (
    <Page>
      <Layout modalFormText={modalForm}>
        <Helmet>
          <meta name="description" content={current["zime"]}/>
          <meta name="keywords" content={current["zime"]} />
          <meta property="og:image" content="/img/appleIcon.png" />
          <meta property="og:url" content={`https://scitech.ru/developmentProjectZima`} />
          <meta property="og:title" content={current["zime"]}/>
          <meta property="og:description" content={current["zime"]} />
          <title>{current["zime"]}</title>
          <link rel="canonical" href={`https://scitech.ru/developmentProjectZima`} />
        </Helmet>

        <div className='show'>
          <div className='container relative'>
            <div className='content pb0'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'>{current["акселератор"]}</p>
                </li>
                <li className='i3_9'>
                  <h1>{current["zima"]}</h1>
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
                        <p className=" date_month" style={{ margin: '0 0.5rem', width: 'unset'}}>{current["Март"]} 2021 </p>
                        <div className="sting"> -</div>
                        <p className=" date_month" style={{ width: 'unset'}}> {current["Окт"]} 2021</p>
                      </div>

                      <div className="schedule_place">
                        <div className={`place_text '}`}>
                          <div className="place_text_icon">
                            <img loading="lazy" src='/img/pin.svg' alt='icon'/>
                            <p className="schedule_time__tiny mt0">{current["онлайн"]}</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="raleway">{current["Прием заявок окончен"]}</p>
                      </div>
                    </div>
                  </li>
                  <li className='i3_12 flex_end m0'>
                      <div className="schedule_button">
                        <div className='registerEventForm'>
                          <Button bordered-green onClick={openModal}>
                            {current["Сообщить о следующем наборе"]}
                          </Button>
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
                  <p className='asideMarker asideMarker_mt1'>{current["О проекте"]}</p>
                </li>
                <li className='i3_9'>
                  <p>{current["zimeAbout1"]}</p>
                  <p>{current["zimeAbout2"]}</p>
                  <p>— {current["zimeAbout3"]}</p>
                  <p>— {current["zimeAbout4"]}</p>
                  <p>— {current["zimeAbout5"]}</p>
                  <p>— {current["zimeAbout6"]}</p>
                  <p>— {current["zimeAbout7"]}</p>
                  <p>— {current["zimeAbout8"]}</p>
                  <p>{current["zimeAbout9"]}</p>
                  <p>— {current["zimeAbout10"]}</p>
                  <p>— {current["zimeAbout11"]}</p>
                  <p>— {current["zimeAbout12"]}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {lang === 'ru' ? (
        <div className='show'>
          <div className='container'>
            <div className='content'>
              <ul className='g3 relative'>
                <li className='i3_3'>
                  <p className='asideMarker'></p>
                </li>
                <li className='i3_9'>
                  <em className="raleway_bold">Базовые требования к проектам и условия участия для прохождения ЭТАПА 0 (технический отбор)</em>
                  <p>Участниками акселератор могут стать юридические и физические лица любого региона или страны, представляющие
                    научно-технические проекты, находящиеся в стадии готовности не ниже TRL–2 (проведены исследования,
                    доказывающие принципиальную осуществимость технологии) и/или TRL–3 (экспериментальное или теоретическое
                    подтверждение концепции).</p>
                  <p>Команда заявителей должна определить потенциально возможные направления коммерциализации перспективных
                    технологий, которые будут получены в результате проекта.</p>
                  <p>Проект должен находится минимум в одной из 6 фокусных тематик, обозначенных выше.</p>
                  <p>Команда заявителей должна заполнить анкету участника и направить ее в адрес организаторов не позднее
                    30 апреля 2021 года. <a className="raleway_bold" href='https://docs.google.com/forms/d/e/1FAIpQLSfJfJjrG1F8ROcIZICMe2bmfxSXfOwriXWgfDVDyyCIbNCY1Q/viewform'>ЗИМА 21. Технический Отбор.</a></p>
                  <p>Количество лиц, заявленных как команда для акселерации, не может быть менее 3х человек.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>) : null}

        {lang === 'ru' ? (
        <div className='show'>
          <div className='container'>
            <div className='content'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_tiny asideMarker_mt1'>Этап 0</p>
                  <p className='asideMarker asideMarker_mt1'>31 марта – 23 мая 2021</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <p className='m0'>Проекты для участия в программе акселерации будут приниматься с 31 марта по 23 мая 2021 года.
                            Обязательные условия для прохождения технического отбора:</p>
                        </li>
                        <li className='i3_12'>
                          <p className='m0'>Подача информации о проекте в формате, установленном организаторами <a className="" href='https://docs.google.com/forms/d/e/1FAIpQLSfJfJjrG1F8ROcIZICMe2bmfxSXfOwriXWgfDVDyyCIbNCY1Q/viewform'>(ЗИМА 21. Технический Отбор).</a> </p>
                        </li>
                        <li className='i3_12'>
                          <p className='m0'>Регистрация участников в <a className="" href='http://lab.scienceteam.ru/nocPortal/#/PersonLogin'>цифровом профиле исследователя</a> до 23 мая 2021 года. </p>
                        </li>
                        <li className='i3_12'>
                          <p className='m0'>Уточнение проектных идей (в контакте с организаторами при необходимости).</p>
                        </li>
                        <li className='i3_12'>
                          <p className='m0 pb3'>Соответствие проектов требованиям по TRL и фокусным тематикам ЗИМА 21.</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_tiny asideMarker_mt1'>Этап 1</p>
                  <p className='asideMarker asideMarker_mt1'>24 мая – 5 июля 2021</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <p className='m0'>Оценка проектных идей, экспертиза, обратная связь командам. </p>
                        </li>
                        <li className='i3_12'>
                          <p className='m0'>Проведение диагностики и самодиагностики компетенций участников (в рамках системы тестирования и аудита компетенций команд).</p>
                        </li>
                        <li className='i3_12'>
                          <p className='m0 pb3'>Определение до 30-ти перспективных команд и проектов, получающих право перехода во второй этап акселерации.</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_tiny asideMarker_mt1'>Этап 2</p>
                  <p className='asideMarker asideMarker_mt1'>5 июля – 29 августа 2021</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <p className='m0'>Целевая проработка параметров проектов, привлечение узких экспертов, консультации команд и проектов
                            со стороны Западно-Сибирского НОЦ.</p>
                        </li>
                        <li className='i3_12'>
                          <p className='m0'>Организация коммуникаций с потенциальными заказчиками со стороны власти и индустрии, рассмотрение
                            потенциальных инвестиций в проекты.</p>
                        </li>
                        <li className='i3_12'>
                          <p className='m0'>Формирование пула заинтересованных сторон.</p>
                        </li>
                        <li className='i3_12'>
                          <p className='m0 pb3'>Определение до 15-ти перспективных команд и проектов, получающих право перехода в третий этап акселерации.
                            Команды, которые не проходят в третий этап, имеют право на этой стадии быть включенными в профильные
                            Школы ЦРК для дополнительной проработки программы проектов.</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_tiny asideMarker_mt1'>Этап 3</p>
                  <p className='asideMarker asideMarker_mt1'>30 августа – 20 октября 2021</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <p className='m0'>Обучение команд, прошедших в финал. Реализация экспресс-программы глубокой акселерации компетенций
                            команд финалистов по следующей программе:</p>
                        </li>
                        <li className='i3_12'>
                          <p className='m0'>Постановка целей и разработка плана развития: стратегия развития, дорожная карта, команда
                            (дополнение, определение ролей).</p>
                        </li>
                        <li className='i3_12'>
                          <p className='m0'>Выявление целевой аудитории, оценка рынков, выявление жизнеспособности, оценка затрат/доходов,
                            определение востребованности и ценности продукта/предложения.</p>
                        </li>
                        <li className='i3_12'>
                          <p className='m0'>Деловые коммуникации, взаимодействие с органами власти региона, современное продвижение проекта,
                            навыки презентации и публичных выступлений, переговоры.</p>
                        </li>
                        <li className='i3_12'>
                          <p className='m0'>Правовая база. РИД.</p>
                        </li>
                        <li className='i3_12'>
                          <p className='m0'>Финансовый менеджмент и привлечение инвестиций.</p>
                        </li>
                        <li className='i3_12'>
                          <p className='m0 pb3'>На данном этапе также предусмотрено проведение переговоров с потенциальными партнерами, заказчиками,
                            заинтересованными сторонами.</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_tiny asideMarker_mt1'>Этап 4</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3 pb3'>
                        <li className='i3_12'>
                          <p className='m0'>После прохождения обучения, по итогам промежуточного представления проектов, до 10 команд будут
                            допущены на финальную защиту проектов перед руководством (Наблюдательным и Управляющим Советами)
                            Западно-Сибирского НОЦ с целью определения победителей акселератора (первое, второе, третье места
                            и номинации). Представление проектов финалистов и победителей в публичном формате пройдет,
                            ориентировочно, 21 октября 2021 года (дата может быть уточнена).</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <p>
                    <a href="/docs/polozhenie_utv.pdf" download className='link_event link_event__noBorder raleway_bold mt_low'>
                      Положение о научно-техническом акселераторе «Западно-Сибирский инновационный межрегиональный акселератор научно-технических проектов» (ЗИМА21)
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
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>) : null}

        <div className='show'>
          <div className='container'>
            <div className='content mb6'>
              <ul className='g3'>
                <li className='i3_3'></li>
                <li className='i3_9'>
                  <p className="">{current["Вопросы для уточнения и обсуждение партнерств:"]}</p>
                  <div className="speakerCard">
                    <div className="card_photo">
                      <img src="/img/speaker_latyshev.png" alt="avatar" />
                    </div>
                    <div className="card_text">
                      <p className="card_title">
                        {current["Латышев Андрей, Проректор, Тюменский Государственный Университет"]}
                      </p>
                      <p className="card_about"> {current["Руководитель ЦРК, Западно-Сибирский НОЦ."]}</p>
                      <div className="socials">
                        <a href="mailto:a.s.latyshev@utmn.ru" className="socials_mail"></a>
                        <a href="tel:+7 905 089 67 47" className="socials_phone"></a>
                      </div>
                    </div>
                  </div>
                  <p><a className="raleway_bold" href="https://www.utmn.ru">https://www.utmn.ru</a></p>
                  <p><a className="raleway_bold" href="https://scitech.ru/">https://scitech.ru/</a></p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {lang === 'ru' ? (
        <div className="wrapper_partners content">
          <div className="container mb6">
            <ul className="g3">
              <li className="i3_3">
                <p className="asideMarker">Публикации СМИ</p>
              </li>
              <li className="i3_9">
                <SchoolProject>
                  {/*THESE ARE News from Contentful */}
                  <ContentfulNewsWidget isSMI={true} pageToShow={'developmentProjectZima'} allContentfulNews={allContentfulNews}  />

                  {/*THESE ARE News from website */}
                  <NewsSMIWidget pageToShow={'developmentProjectZima'}/>
                </SchoolProject>
              </li>
            </ul>
          </div>
        </div>) : null}


      </Layout>
    </Page>
  )
}


export async function getServerSideProps(ctx) {
  const data = await getContentfulNews();
  const {current} = Translator("test", ctx.params.lang)

  return {
    props: { data: data.data, current: current["test"], modalForm: current["modalForm"]  },
  }
}