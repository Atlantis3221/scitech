import React from 'react'
import { Schedule } from '../../components/schedule'
import { Helmet } from 'react-helmet'
import { Partner } from '../../components/partner'
import { EventItem_guest, EventItem_guests } from '../../components/eventItem'
import { StrongText } from '../../components/strongText'
import { Page } from '../../components/page'
import { Layout } from '../../components/layout'
import { useRouter } from 'next/dist/client/router'

export default function ScientificPracticalConference(props) {
  const { query: {lang: lang} } = useRouter()
  return (
    <Page>
      <Layout>
        <Helmet>
          <meta name="description" content='II Международная научно-практическая конференция Центра развития компетенций
Западно-Сибирского межрегионального научно-образовательного центра мирового уровня «Наука. Лидерство. Общество – 2050»
«Science. Leadership. Society – 2050» «SLS2050»' />
          <meta name="keywords" content='II Международная научно-практическая конференция Центра развития компетенций
Западно-Сибирского межрегионального научно-образовательного центра мирового уровня «Наука. Лидерство. Общество – 2050»
«Science. Leadership. Society – 2050» «SLS2050»' />
          <meta property="og:image" content="/img/appleIcon.png" />
          <meta property="og:url" content={`https://scitech.ru/scientificPracticalConference`} />
          <meta property="og:title" content='II Международная научно-практическая конференция Центра развития компетенций
Западно-Сибирского межрегионального научно-образовательного центра мирового уровня «Наука. Лидерство. Общество – 2050»
«Science. Leadership. Society – 2050» «SLS2050»' />
          <meta property="og:description" content='II Международная научно-практическая конференция Центра развития компетенций
Западно-Сибирского межрегионального научно-образовательного центра мирового уровня «Наука. Лидерство. Общество – 2050»
«Science. Leadership. Society – 2050» «SLS2050»' />
          <title>II Международная научно-практическая конференция Центра развития компетенций
            Западно-Сибирского межрегионального научно-образовательного центра мирового уровня «Наука. Лидерство. Общество – 2050»
            «Science. Leadership. Society – 2050» «SLS2050»</title>
          <link rel="canonical" href={`https://scitech.ru/scientificPracticalConference`} />
        </Helmet>

        <div className='show'>
          <div className='container relative'>
            <div className='content pb0'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'>конференция</p>
                </li>
                <li className='i3_9'>
                  <h1>II Международная научно-практическая конференция
                    Центра развития компетенций
                    Западно-Сибирского межрегионального
                    научно-образовательного центра мирового уровня
                  </h1>
                  <h1>«Наука. Лидерство. Общество – 2050»</h1>
                  <h1>«Science. Leadership. Society – 2050»</h1>
                  <h1>«SLS2050»</h1>
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
                    <Schedule dataFirst={[18,' Окт 2021 ']}
                              dataSecond={[23,'Окт 2021']}
                              place={'онлайн'}
                              isShowButton={true}
                              eventLinkToTableTitle={'Зарегистрироваться'}
                              showOrganizationField={true}
                              showAskIsSpeakerButton={true}
                              individual={true}
                              eventType={'scientificPracticalConference'}
                              eventTitle="Зарегистрироваться на мероприятие II Международная научно-практическая конференция «Наука. Лидерство. Общество – 2050»"
                              eventLinkToTable="scientificPracticalConference"
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
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_mt_half'>о конференции</p>
                </li>
                <li className='i3_9'>
                  <p>Вторая международная конференция пройдет в рамках обсуждения перспективных вопросов развития
                    человечества в условиях меняющегося мира, экзистенциальных угроз – изменения климата, социальных катастроф,
                    драматичных потрясений в области биобезопасности и роли науки в борьбе с этими угрозами.</p>
                  <p>Традиционно важной частью конференции станут выступления с открытыми лекциями ученых мирового уровня,
                    круглые столы с представителями науки, власти, бизнеса и общественности, а также встречи представителей
                    центров развития компетенций сети НОЦ и других институтов развития о подходах, практиках и вызовах в
                    работе с человеческим капиталом в сфере исследования и разработок. </p>
                  <p>«Человек и перспективы человечества в динамично меняющемся мире» – тематический фокус нашей конференции,
                    которая состоится 18-23 октября 2021 года. </p>
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
                  <p className='asideMarker'>ЦЕЛЬ КОНФЕРЕНЦИИ</p>
                </li>
                <li className='i3_9'>
                  <p>Организовать международный диалог о будущем человечества и науки в перспективе до 2050 года. </p>
                  <p>Объединить на площадке конференции ведущих мировых ученых, руководителейнаучных организаций и ведущих
                    университетов, представителей органов государственной власти и бизнеса, что позволит участникам конференции
                    обсудить актуальные вызовы научно-технологического развития, сформировать и укрепить консорциумы для
                    реализации прорывных исследований и разработок в соответствии с национальными целями РФ.</p>
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
                  <p className='asideMarker'>ПРОЕКТ СОДЕРЖАНИЯ КОНФЕРЕНЦИИ</p>
                </li>
                <li className='i3_9'>
                  <p className='mb0'><StrongText>3 круглых стола</StrongText> с экспертами мирового уровня по следующим тематикам:</p>
                  <EventItem_guests guests=''>
                    <EventItem_guest>
                        Человеческий капитал как важная составляющая трансформации и инновационного развития науки и технологий
                        в повестке научно-образовательных центров мирового уровня.
                    </EventItem_guest>
                    <EventItem_guest>
                      Интеграция России в мировую климатическую повестку. Развитие и формирование карбоновых полигонов.
                      Зеленые ценности и устойчивое развитие.
                    </EventItem_guest>
                    <EventItem_guest>
                      Арктика и человек в Арктике. Вызовы будущего
                    </EventItem_guest>
                  </EventItem_guests>
                  <p><StrongText> Лекции</StrongText> международных и российских экспертов.</p>
                  <p><StrongText>Мини-конференции</StrongText> ведущих исследовательских команд.</p>
                  <p><StrongText>Дискуссии</StrongText> с привлечением широкого круга профессиональной общественности.</p>
                  <p><StrongText>Обсуждение</StrongText> международного опыта и трансляция его в отечественную практику.</p>
                  <p><StrongText>Активизация совместного поиска</StrongText> и разработка эффективных моделей сотрудничества науки, органов власти и бизнес-структур.</p>
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
                  <p className='asideMarker'>ЦЕЛЕВАЯ АУДИТОРИЯ</p>
                </li>
                <li className='i3_9'>
                  <p>— Представители Министерства науки и высшего образования Российской Федерации;</p>
                  <p>— Представители органов власти регионов НОЦ;</p>
                  <p>— Представители НОЦ и ЦРК РФ;</p>
                  <p>— Представители научно-экспертного сообщества;</p>
                  <p>— Представители крупного бизнеса.</p>
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
                  <p className='asideMarker'>ИНФОРМАЦИЯ О ПРЕДЫДУЩЕЙ КОНФЕРЕНЦИИ</p>
                </li>
                <li className='i3_9'>
                  <p>
                    <a href={`/${lang}/events`} className="mt_low">I Международная научно-практическая конференция Центра развития компетенций Западно-Сибирского
                      межрегионального научно-образовательного центра мирового уровня «Наука. Лидерство. Общество», 2020 год. </a>
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
                  <p className="">Запросы на участие в конференции, предложения о партнерстве и вопросы принимаются по электронному
                    адресу: <a href="mailto:cdc@scitech.ru" className="raleway_bold">cdc@scitech.ru</a></p>
                </li>
              </ul>
            </div>
          </div>
        </div>

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

      </Layout>
    </Page>
  )
}
