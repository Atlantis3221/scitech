import React from 'react'
import { Page } from '../components/page'
import { Layout } from '../components/layout'
import { SpeakerCard, SpeakerCards } from '../components/speakerCard'
import { Partner } from '../components/partner'
import { EventItem, EventItem_Container } from '../components/eventItem'
import { StrongText } from '../components/strongText'
import { Schedule } from '../components/schedule'
import { Helmet } from 'react-helmet'
import { Button } from '../components/button'

const endEvent = Date.parse(new Date('10 28 2020'))  // 28-го октября 2020
const today = Date.now()
// const isShowRegistrationButton = today < endEvent
const isShowRegistrationButton = true

export default function OnlineForumConsortium(props) {
  return (
    <Page>
      <Layout>
        <Helmet>
          <meta name="description" content='Онлайн-форум «Научно-образовательные консорциумы. Программы НОЦ и приоритет 2030»' />
          <meta name="keywords" content='тренинг Центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
          <meta property="og:image" content="/img/appleIcon.png" />
          <meta property="og:url" content={`https://scitech.ru/onlineForumConsortium`} />
          <meta property="og:title" content='Онлайн-форум «Научно-образовательные консорциумы. Программы НОЦ и приоритет 2030»' />
          <meta property="og:description" content='тренинг Центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
          <title>Онлайн-форум «Научно-образовательные консорциумы. Программы НОЦ и приоритет 2030»</title>
          <link rel="canonical" href={`https://scitech.ru/onlineForumConsortium`} />
        </Helmet>

        <div className='show content'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker'>тренинг</p>
              </li>
              <li className='i3_9'>
                <div className='titleHero'>
                  <h1>Онлайн-форум «Научно-образовательные консорциумы. Программы НОЦ и приоритет 2030»</h1>
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

                    {/* @todo: add Modal pop-up*/}

                    <Schedule dataFirst={[null, 'октябрь 2021', '(дата уточняется)']}
                              time={'8:30 - 20:00'}
                              place={'онлайн, zoom'}
                              isShowButton={isShowRegistrationButton}
                              showAskIsSpeakerButton={true}
                              individual={true}
                              showOrganizationField={true}
                              eventType={'onlineForumConsortium'}
                              eventTitle="Зарегистрироваться на мероприятие Онлайн-форум «Научно-образовательные консорциумы. Программы НОЦ и приоритет 2030»"
                              eventLinkToTable="onlineForumConsortium"
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
              </li>
              <li className='i3_9'>
                <div className="frame">
                  <h4>Уважаемые коллеги!</h4>
                  <span>
                    Мы переносим форум из-за сложной санитарно-эпидемиологической обстановки и в соответствии с Рекомендациями по профилактике COVID-19, а также с непредвиденными изменениями в расписании ключевых спикеров.
                  </span>
                </div>
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
                  Приглашаем принять участие в онлайн-форуме «Научно-образовательные консорциумы. Программы НОЦ и приоритет 2030»,
                  который состоится в октябре 2021 года (дата уточняется).
                </h2>
                <p>
                  <StrongText>Цель форума</StrongText> – представление и обсуждение лучших практик в области построения
                  эффективных консорциумов
                  организаций науки, образования и бизнеса (включая индустрии), в том числе в контексте существующих и
                  проектируемых Научно-образовательных центров мирового уровня (НОЦ). В рамках форума предполагаются
                  визионерские лекции, обсуждение проблемных вопросов, экспертные дискуссии и панельные доклады.
                </p>
                <p>
                  В работе форума примут участие эксперты федерального и мирового уровня, ключевые представители
                  действующих
                  и проектируемых НОЦ, ректоры ведущих вузов, представители Минобрнауки РФ, представители президентской
                  платформы «Россия – страна возможностей», приглашены: Ракова М.Н., вице-президент, руководитель
                  дивизиона
                  «Цифровые образовательные платформы» ПАО «Сбербанк»; Алашкевич М.Ю., старший вице-президент ВЭБ.РФ;
                  Анисимов Н.Ю., ректор ДВФУ; Черникова А.А., ректор НИТУ «МИСИС»; Короткова И.В., генеральный директор
                  «Инконсалт К»; Песков Д.Н., специальный представитель президента России по вопросам цифрового и
                  технологического развития; Фрумин И.Д., научный руководитель Института образования НИУ ВШЭ.
                </p>
                <p className="cursiv">Ключевые организаторы мероприятия:</p>
                <p className="m0">— АНО «Агентство развития научно-образовательных проектов»;</p>
                <p className="m0">— Правительство Тюменской области;</p>
                <p className="m0">— Центр комплексного развития компетенций Западно-Сибирского НОЦ;</p>
                <p className="m0">— Экспертно-аналитический центр «Научно-образовательная политика»;</p>
                <p className="m0">— Тюменский государственный университет;</p>
                <p className="mt0">— АНО «Россия – страна возможностей».</p>
                <p>Заявки на включение в работу форума с докладами могут быть поданы на почту ЦРК Западно-Сибирского НОЦ
                  – <a className="raleway raleway_bold" href="mailto:cdc@scitech.ru">cdc@scitech.ru</a> до 25.09.2021
                  согласно указанной форме. Обновленная
                  программа с указанием всех ключевых
                  спикеров и тематик докладов будет дополнительно разослана и представлена на сайте
                  <a className="raleway raleway_bold" href="https://scitech.ru/"> scitech.ru </a>
                  не позднее 26.09.2021.</p>
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
                  <li className='i3_3'>
                    <Partner
                      logo='/img/logo_tumen_government.svg'
                      link="http://admtyumen.ru/"
                      name='Правительство Тюменской области'
                      alt='Правительство Тюменской области'
                      wide
                    ></Partner>
                  </li>
                  <li className='i3_3'>
                    <Partner
                      link="https://ноц.рф/centers/zapadno-sibirskii-mejregionalnii-nauchno-obrazovatelnii-centr-mirovogo-urovnya"
                      name='Западно-Сибирский межрегиональный научно-образовательный центр мирового уровня'
                      wide
                    ></Partner>
                  </li>
                  <li className='i3_3'>
                    <Partner
                      logo='/img/logo_russia.svg'
                      link="https://rsv.ru/"
                      name='АНО «Россия — страна возможностей»'
                      alt='АНО «Россия — страна возможностей»'
                      wide
                    ></Partner>
                  </li>
                  <li className='i3_3'>
                    <Partner
                      name='Экспертно-аналитический центр «Научно-образовательная политика» '
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
                <p className='asideMarker'>Модератор</p>
              </li>
              <li className='i3_9'>
                <SpeakerCards>
                  <SpeakerCard photo='/img/moderator_evgeny_szhenov.png' fullName='Евгений Сжёнов'
                               position="научный руководитель">
                    Экспертно-аналитического центра «Научно-образовательная политика», ведущий эксперт Института
                    образования НИУ ВШЭ
                  </SpeakerCard>
                  <SpeakerCard photo='/img/speaker_irina.png'
                               fullName='Ирина Шрайбер'>
                    Д.физ.-мат.н., научный сотрудник Европейского центра ядерных исследований (ЦЕРН,
                    Женева)
                  </SpeakerCard>
                  <SpeakerCard photo='/img/speaker_latyshev.png' fullName='Андрей Латышев'>
                    И.о. проректора по персоналу и организационному развитию Тюменского государственного университета,
                    лидер проекта Центр Развития Компетенций руководителей Западно-Сибирского НОЦ
                  </SpeakerCard>
                </SpeakerCards>
              </li>
            </ul>
          </div>
        </div>

        <div className='show wrapper_price content'>
          <div className='container pb3'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker asideMarker_mt_half'>Программа (московское время)</p>
              </li>
              <li className='i3_9'>
                <h4>
                  ЧАСТЬ 1. «Научно-образовательные консорциумы – стратегия развития»
                </h4>
                <EventItem_Container>
                  <EventItem date='08:30–09:30' bottom>Визионерская лекция</EventItem>
                  <EventItem date='09:30' bottom>Приветственные слова</EventItem>
                  <EventItem date='10:00–10:45' bottom>Экспертная лекция</EventItem>
                  <EventItem date='11:00–12:00' bottom>Доклады участников форума (регламент до 15 минут)</EventItem>
                  <EventItem date='12:00' bottom>Панельная дискуссия</EventItem>
                </EventItem_Container>
                <h4>
                  ЧАСТЬ 2. «Программы НОЦ и ПСАЛ как драйверы развития экономики»
                </h4>
                <EventItem_Container>
                  <EventItem date='13:30–14:15' bottom>Экспертная лекция</EventItem>
                  <EventItem date='14:15–15:30' bottom>Доклады участников форума (регламент до 15 минут)</EventItem>
                  <EventItem date='15:30' bottom>Панельная дискуссия</EventItem>
                </EventItem_Container>
                <h4>
                  ЧАСТЬ 3. «Развитие человеческого капитала в условиях трансформации высшего образования в России»
                </h4>
                <EventItem_Container>
                  <EventItem date='17:00–17:45' bottom>Экспертная лекция</EventItem>
                  <EventItem date='17:45–19:00' bottom>Доклады участников форума (регламент до 15 минут)</EventItem>
                  <EventItem date='19:00' bottom>Панельная дискуссия</EventItem>
                  <EventItem date='20:00' bottom>Визионерская лекция</EventItem>
                </EventItem_Container>

                  <div className='registerEventForm pt2'>
                    {/* @todo: add Modal pop-up*/}

                        <Button red onClick={props.onClick}>
                          Зарегистрироваться
                        </Button>

                    {/*    <div>*/}
                    {/*      <div className='registerEventForm_title'>*/}
                    {/*        Зарегистрироваться на мероприятие Онлайн-форум «Научно-образовательные консорциумы.*/}
                    {/*        Программы НОЦ и приоритет 2030»*/}
                    {/*      </div>*/}
                    {/*      <RegisterEventForm*/}
                    {/*        onSubmit={(e, payload) => {*/}
                    {/*          Requests.methods.insert({*/}
                    {/*            group: 'registrations_onlineForumConsortium',*/}
                    {/*            payload,*/}
                    {/*          })*/}
                    {/*          props.close()*/}
                    {/*        }}*/}
                    {/*      />*/}
                    {/*    </div>*/}
                  </div>
              </li>
            </ul>
          </div>
        </div>

      </Layout>
    </Page>
  )
}
