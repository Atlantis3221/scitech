import React from 'react'
import { Page } from '../components/page'
import { Layout } from '../components/layout'
import { SpeakerCard, SpeakerCards } from '../components/speakerCard'
import { Partner } from '../components/partner'
import { Schedule } from '../components/schedule'
import { Helmet } from 'react-helmet'

// const endEvent = Date.parse(new Date('10 28 2020'))  // 28-го октября 2020
// const today = Date.now()
// const isShowRegistrationButton = today < endEvent
const isShowRegistrationButton = false

export default function RecruitingPriceDevelopEvent(props) {
  return (
    <Page>
      <Layout>
        <Helmet>
          <meta name="description" content='«Стратегия управления компетенциями персонала в современном университете: рекрутинг, оценка, развитие, продвижение»' />
          <meta name="keywords" content='мероприятие Центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
          <meta property="og:image" content="/img/appleIcon.png" />
          <meta property="og:url" content={`https://scitech.ru/recruitingPriceDevelopEvent`} />
          <meta property="og:title" content='«Стратегия управления компетенциями персонала в современном университете: рекрутинг, оценка, развитие, продвижение»' />
          <meta property="og:description" content='мероприятие Центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
          <title>«Стратегия управления компетенциями персонала в современном университете: рекрутинг, оценка, развитие, продвижение»</title>
          <link rel="canonical" href={`https://scitech.ru/recruitingPriceDevelopEvent`} />
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
                    <Schedule dataFirst={['20', 'Ноя 2020']}
                              dataSecond={['19', 'Дек 2020']}
                              place={'онлайн, zoom'}
                              isShowButton={false}
                              individual={true}
                              showOrganizationField={true}
                              eventType={'recruitingPriceDevelopEvent'}
                              eventTitle="Регистрация"
                              eventLinkToTable="recruitingPriceDevelopEvent"
                    />
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
                  Программа обучения реализуется в модульном формате онлайн и пройдет в период с 20.11.2020 по
                  19.12.2020 года. Программу реализует группа отечественных и зарубежных экспертов, представляющих опыт
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
                <p className='asideMarker'>ОСНОВНАЯ КОМАНДА</p>
              </li>
              <li className='i3_9'>
                <SpeakerCards>
                  <SpeakerCard photo='/img/speaker_latyshev.png'
                               fullName='Андрей Латышев'
                               position="ведущий программы">
                    И.о. проректора по персоналу и организационному развитию ТюмГУ
                  </SpeakerCard>
                  <SpeakerCard photo='/img/speaker_irina.png'
                               fullName='Ирина Шрайбер'
                               position='эксперт'>
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
                <p>Заявки принимаются через заполнение <a href='/recruitingPriceDevelopEvent'>электронной формы.</a></p>
                <p>Справки и консультации по программе курсу и общим вопросам заключения договоров:</p>
                <p>Селиванова Наталья, e-mail: <a href='mailto:natalia.selivanova@scitech.ru'>natalia.selivanova@scitech.ru</a> </p>
                <p><a href="https://scitech.ru">Scitech.ru</a> - Информация о Центре развития компетенций</p>

                {/*{isShowRegistrationButton ? (*/}
                {/*  <div className='registerEventForm'>*/}
                {/*    <Modal*/}
                {/*      Trigger={props => (*/}
                {/*        <Button red onClick={props.onClick}>*/}
                {/*          Зарегистрироваться*/}
                {/*        </Button>*/}
                {/*      )}*/}
                {/*      Content={props => (*/}
                {/*        <div>*/}
                {/*          <div className='registerEventForm_title'>*/}
                {/*            Регистрация*/}
                {/*          </div>*/}
                {/*          /!*TODO: переделать на общую форму*!/*/}
                {/*          <RegisterEventForm*/}
                {/*            individual={true}*/}
                {/*            showOrganizationField={true}*/}
                {/*            hideParticipant={true}*/}
                {/*            eventType={'recruitingPriceDevelopEvent'}*/}
                {/*            onSubmit={(e, payload) => {*/}
                {/*              Requests.methods.insert({*/}
                {/*                group: 'registrations_recruitingPriceDevelopEvent',*/}
                {/*                payload,*/}
                {/*              })*/}
                {/*            }}*/}
                {/*          />*/}
                {/*        </div>*/}
                {/*      )}*/}
                {/*    />*/}
                {/*  </div>*/}
                {/*) : null}*/}
              </li>
            </ul>
          </div>
        </div>

      </Layout>
    </Page>
  )
}
