import React from 'react'
import { Page } from '../../components/page'
import { Layout } from '../../components/layout'
import { SpeakerCard, SpeakerCards } from '../../components/speakerCard'
import { Partner } from '../../components/partner'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/dist/client/router'
import Translator from '../../i18n/translator'


export default function RecruitingPriceDevelopEvent({ modalForm }) {
  const { query: {lang: lang} } = useRouter()
  return (
    <Page>
      <Layout modalFormText={modalForm}>
        <Helmet>
          <meta name="description" content='«Стратегия управления компетенциями персонала в современном университете: рекрутинг, оценка, развитие, продвижение»' />
          <meta name="keywords" content='мероприятие Центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
          <meta property="og:image" content="/img/appleIcon.png" />
          <meta property="og:url" content={`https://scitech.ru/ru/recruitingPriceDevelopEvent`} />
          <meta property="og:title" content='«Стратегия управления компетенциями персонала в современном университете: рекрутинг, оценка, развитие, продвижение»' />
          <meta property="og:description" content='мероприятие Центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
          <title>«Стратегия управления компетенциями персонала в современном университете: рекрутинг, оценка, развитие, продвижение»</title>
          <link rel="canonical" href={`https://scitech.ru/ru/recruitingPriceDevelopEvent`} />
        </Helmet>

        <div className='show content'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker'>мероприятие</p>
              </li>
              <li className='i3_9'>
                <div className='titleHero'>
                  <h1>«Стратегия управления компетенциями персонала в современном университете: рекрутинг, оценка,
                    развитие, продвижение».</h1>
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
                      <div className="datePlace_text">
                      <div className="datePlace_date">
                        <p className="date_day">6</p>
                        <span className="date_month">Ноя 2021 </span>
                      </div>
                          <div className="sting">-</div>
                          <div className="datePlace_date">
                            <p className="date_day">18</p>
                            <span className="date_month">Дек 2021</span>
                          </div>
                      </div>

                      <div className="schedule_place">
                        <div className={`place_text '}`}>
                          <div className="place_text_icon">
                            <img loading="lazy" src='/img/pin.svg' alt='icon'/>
                            <p className="schedule_time__tiny mt0">онлайн, zoom</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        {/*<p className="raleway">Прием заявок окончен</p>*/}
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
                <h2>
                  Приглашаем сотрудников вузов, ответственных за повышение конкурентоспособности и развитие
                  человеческого капитала, к участию в новой программе.
                </h2>
                <p>Тюменский государственный университет, совместно с Центром развития компетенций Западно-Сибирского
                  НОЦ (далее – ЦРК) приглашает к участию в программе обучения «Стратегия управления компетенциями
                  персонала в современном университете: рекрутинг, оценка, развитие, продвижение».
                </p>
                <p>
                  Программа обучения реализуется в модульном формате онлайн и пройдет в период с 06.11.2021 по
                  18.12.2021 года. Программу реализует группа отечественных и зарубежных экспертов, представляющих опыт
                  ведущих университетов и научных центров по заявленной проблематике.
                </p>
                <p>Обучение будет проводиться в формате интенсивных семинаров, мозговых штурмов, кейс-практик и
                  системной проектной работы, в ходе которой под контролем модераторов будут прорабатываться реальные
                  проекты в области развития человеческого капитала для внедрения в организационные практики ваших
                  организаций. Дополнительно в ходе обучения будет проведен обучающий модуль «Стратегия проектирования,
                  создания и развития центра компетенций руководителей научных, научно-технических проектов и
                  лабораторий», основанный на опыте создания и развития ЦРК Западно-Сибирского НОЦ.</p>
                <p>Целевой аудиторией программы «Стратегия управления компетенциями персонала в современном
                  университете: рекрутинг, оценка, развитие, продвижение» являются проректора, ответственные за
                  программы развития в университете, начальники профильных управлений и отделов, все лица,
                  заинтересованные в разработке эффективных стратегий по развитию человеческого капитала в рамках
                  программ НОЦ и ПСАЛ.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className='show wrapper_speakers content'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker'>Организаторы</p>
              </li>
              <li className='i3_9'>
                <ul className='g3'>
                  <li className='i3_3'>
                    <Partner
                      logo='/img/logo_noc.svg'
                      link="https://scitech.ru/"
                      name='Центр развития компетенций руководителей Западно-Сибирского НОЦ'
                      alt='Центр развития компетенций'
                      wide
                    ></Partner>
                  </li>
                  <li className='i3_3'>
                    <Partner
                      logo='/img/logo_tumen_gov.svg'
                      link="https://www.utmn.ru/"
                      name='Тюменский государственный университет'
                      alt='Тюменский государственный университет'
                      wide
                    ></Partner>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className='wrapper_partners content'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker'>Ведущий программы</p>
              </li>
              <li className='i3_9'>
                {/*<SpeakerCards>*/}
                {/*  <SpeakerCard photo='/img/speaker_latyshev.png'*/}
                {/*               fullName='Андрей Латышев'*/}
                {/*               position="ведущий программы">*/}
                {/*    И.о. проректора по персоналу и организационному развитию ТюмГУ*/}
                {/*  </SpeakerCard>*/}
                {/*</SpeakerCards>*/}
                <div className="speakerCard">
                  <div className="card_photo">
                    <img src="/img/speaker_latyshev.png" alt="avatar" />
                  </div>
                  <div className="card_text">
                    <p className="card_title">
                      Андрей Латышев
                    </p>
                    <div className="socials" style={{ display: 'flex', flexDirection: 'column'}}>
                      <p>И.о. проректора по персоналу и организационному развитию ТюмГУ</p>
                      <div style={{ display: 'flex' }}>
                        <a href="mailto:a.s.latyshev@utmn.ru" className="socials_mail"></a>
                        <a href="tel:+7 905 089 67 47" className="socials_phone"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className='wrapper_partners content'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker'>Спикеры</p>
              </li>
              <li className='i3_9'>
                <SpeakerCards>
                  <SpeakerCard photo='/img/speaker_irina.png'
                               fullName='Ирина Шрайбер' >
                    Ph. D., кандидат физико-математических наук, физик-ядерщик, ЦЕРН (CERN, Geneva, Switzerland), ментор
                    Школы научного лидерства ЦРК Западно-Сибирского НОЦ, популяризатор науки
                  </SpeakerCard>
                  <SpeakerCard photo='/img/speaker_scherbenokAndrei.png'
                               fullName='Андрей Щербенок'
                               position="эксперт">
                    Кандидат филологических наук, Ph. D. по критической теории и киноведению (Беркли), профессор Школы
                    управления Сколково, директор School of Advanced Studies UTMN
                  </SpeakerCard>
                  <SpeakerCard photo='/img/roman_osvald.png'
                               fullName='Роман Оствальд'
                               position="эксперт">
                    Канд. хим. наук. Проректор СурГУ по науке и технологиям. Руководитель проектной работы SLS
                  </SpeakerCard>
                  <SpeakerCard photo='/img/speaker_klimovaTatiana.png'
                               fullName='Татьяна Владимировна Климова'
                               position="эксперт">
                    Начальник управления персонала
                  </SpeakerCard>
                  <SpeakerCard photo='/img/speaker_ishmuratovaTatiana.png'
                               fullName='Татьяна Владимировна Ишмуратова'
                               position="эксперт">
                    Начальник центра Управления академического развития / Центра по работе с группами высокого профессионального потенциала
                  </SpeakerCard>
                  <SpeakerCard photo='/img/speaker_prosjaeva.png'
                               fullName='Наталья Владимировна Прощаева'
                               position="эксперт">
                    Заместитель начальника Управления кадров и социальной политики НИТУ МИСИС
                  </SpeakerCard>
                  <SpeakerCard photo='/img/speaker_drugova.png'
                               fullName='Елена Анатольевна Другова'
                               position="эксперт">
                    Кандидат философских наук, директор Научно-образовательного центра "Институт передовых технологий
                    обучения" Томского государственного университета.
                  </SpeakerCard>
                  <SpeakerCard photo='/img/speaker_sorokin.png' fullName='Александр Сорокин' position=''>
                    Руководитель проектной работы (2019/2020)
                  </SpeakerCard>
                </SpeakerCards>
              </li>
            </ul>
          </div>
        </div>

        <div className='wrapper_partners content'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker'>приглашенные эксперты</p>
              </li>
              <li className='i3_9'>
                <SpeakerCards>
                  <SpeakerCard photo='/img/speaker_romanchuk.jpg' fullName='Иван Романчук' >
                    К.ю.н., Ректор Тюменского Государственного Университета
                  </SpeakerCard>
                  <SpeakerCard photo='/img/speaker_kizeev.png' fullName='Вениамин Кизеев'>
                    IPMA Level«B», член правления НП «СОВНЕТ», эксперт по управлению проектами и инновациями компании WINbd
                  </SpeakerCard>
                  <SpeakerCard photo='/img/speaker_yudkevich.jpg' fullName='Мария Юдкевич' >
                    К.э.н., Проректор НИУ ВШЭ, Директор Института институциональных исследований НИУ ВШЭ
                  </SpeakerCard>
                  <SpeakerCard photo='/img/speaker_borovikov.jpg' fullName='Юрий Боровиков' >
                    Д.т.н., профессор, и.о. Ректора Новгородского университета им. Ярослава Мудрого
                  </SpeakerCard>
                  <SpeakerCard photo='/img/speaker_kiselev.png' fullName='Максим Киселев'>
                    Ph. D. (Yale), Professor of the Practice; Mentor, SKOLKOVO Foundation; Center for Entrepreneurship
                    and Innovation
                  </SpeakerCard>
                </SpeakerCards>
              </li>
            </ul>
          </div>
        </div>

        <div className='show wrapper_price content'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker asideMarker_mt_half'>Программа</p>
              </li>
              <li className='i3_9'>
                <p className='flex'>
                  <span>
                     <img src='/img/download.svg' alt='icon' />
                  </span>
                  <a href="/docs/recruitingPriceDevelopProgram.docx" target="_blank">План программы</a>
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className='show wrapper_price content'>
          <div className='container pb3'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker'>ОРГАНИЗАЦИОННАЯ ИНФОРМАЦИЯ</p>
              </li>
              <li className='i3_9'>
                <p>Место проведения: дистанционно, онлайн на платформе Zoom.</p>
                <p>Стоимость обучения на курсе: </p>
                <p>- 19 000 &#x20bd; для одного участника.</p>
                <p>- 15 000 &#x20bd; для одного участника, представляющего организации участников Западно-Сибирского НОЦ.</p>
                <p>- 30 000 &#x20bd; для группы от 3 до 4 человек от одной организации.</p>
                <p>Заявки принимаются через заполнение <a href={`/${lang}/recruitingPriceDevelopEvent`}>электронной формы.</a></p>
                <p>Справки и консультации по программе курсу и общим вопросам заключения договоров:</p>
                <p>Селиванова Наталья, e-mail: <a href='mailto:natalia.selivanova@scitech.ru'>natalia.selivanova@scitech.ru</a> </p>
                <p><a href="https://scitech.ru">Scitech.ru</a> - Информация о Центре развития компетенций</p>
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