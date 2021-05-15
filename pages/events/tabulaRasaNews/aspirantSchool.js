import React from 'react'

import { Page } from '../../../components/page'
import { Layout } from '../../../components/layout'
import { StrongText } from '../../../components/strongText'
import { Helmet } from 'react-helmet'

export default function AspirantSchool(props) {
  return (
    <Page>
      <Layout>
        <Helmet>
          <meta name="description" content='Аспирантская школа «Tabula Rasa»' />
          <meta name="keywords" content='Новости Центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
          <meta property="og:image" content="/img/meta-image.jpg" />
          <meta property="og:url" content={`https://scitech.ru/tabulaRasa/newsSMI_aspirantSchool`} />
          <meta property="og:title" content='Аспирантская школа «Tabula Rasa»' />
          <meta property="og:description" content='Новости Центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
          <title>Аспирантская школа «Tabula Rasa»</title>
          <link rel="canonical" href={`https://scitech.ru/tabulaRasa/newsSMI_aspirantSchool`} />
        </Helmet>

        <div className='show wrapper_hero'>
          <div className='container'>
            <div className='content pb0'>
              <ul className='g3'>
                <li className='i3_3'>
                </li>
                <li className='i3_9'>
                  <h1>Аспирантская школа «Tabula Rasa»</h1>
                  <p className="raleway raleway__grey">02 декабря 2020</p>
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
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <img loading="lazy" src="/img/newsSMI/roadMapofGrowth.png" alt="AspirantSchool" />
                          <p>В Сургутском госуниверситете 30 ноября дан старт образовательному проекту «Tabula Rasa» в
                            рамках деятельности Сургутского ядра Центра Развития Компетенций Западно-Сибирского НОЦ,
                            реализуемый в формате модульной школы по подготовке аспирантов к современным формам научной
                            деятельности. Проект реализуется на базе одного из самых крупных университетов Югры. В нем
                            начали обучение участники из 32 университетов России. Программа проекта включает девять
                            модулей обучения, межмодульную работу, эксклюзивные онлайн-курсы, мастерские, тренинги. К
                            инновационному интенсиву привлечены лучшие эксперты и практики ведущих
                            научно-образовательных организаций России и компаний реального сектора экономики.</p>
                          <p>Организаторы Школы делают ставку на раннее развитие компетенций участников школы по лучшим
                            современным стандартам до уровня, позволяющего эффективно вести мультидисциплинарные научные
                            исследования индивидуально и в составе сформированных команд. С 30 ноября по 5 декабря на
                            конкурсной основе проходит формирование команд научных проектов из аспирантов 1–3-х годов
                            обучения. При этом участники, успешно прошедшие отбор на эту уникальную программу, обучатся
                            бесплатно (за счет средств проекта).</p>
                          <p>На открытии школы гостей и участников приветствовали руководитель проекта – проректор по
                            развитию СурГУ <StrongText>Валерия Безуевская</StrongText>; директор Центра компьютерного
                            инжиниринга СурГУ <StrongText>Владимир
                              Терещенко</StrongText>; идеолог проекта <StrongText>Андрей Латышев</StrongText>;
                            исполнительный директор «Краевой фонд науки» (г.
                            Красноярск), <StrongText>Ирина Пантелеева</StrongText> (сопровождение проектов).</p>
                          <p><StrongText>Владимир Терещенко</StrongText> сообщил, как выстроен 6-дневный интенсив, по
                            итогам которого будет
                            сформировано 15 проектных команд в области научных интересов и перспектив страны, а
                            возможно, и всего мира.</p>
                        </li>
                        <li className='i3_12'>
                          <a
                            href="http://www.surgu.ru/ru/news/education/2020/12/2682-aspirantskaya-shkola-tabula-rasa"
                            className='link_event link_event__noBorder raleway_bold mt_low'>
                            Источник: Новости СурГУ
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
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </Page>
  )
}
