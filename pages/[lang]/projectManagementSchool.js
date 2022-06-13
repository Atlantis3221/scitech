import React, { useContext } from 'react'

import { Page } from '../../components/page'
import { Layout } from '../../components/layout'
import { SpeakerCards, SpeakerCard } from '../../components/speakerCard'
import { SchoolProject, SchoolProject_Card } from '../../components/schoolProject'
import { Helmet } from 'react-helmet'
import { Button } from '../../components/button'
import { useRouter } from 'next/dist/client/router'
import Translator from '../../i18n/translator'
import ModalsContext from '../../components/modals/ModalContext'
import ContentfulSchoolProjectsWidget from './projectsSchool/contentfulSchoolProjectsWidget'
import { EN_LANG, RU_LANG } from '../../lib/constants'
import { getContentfulSchoolProjects } from '../../helpers/axios'

export default function projectManagementSchool({ data, current }) {
  const {
    query: { lang: lang },
  } = useRouter()

  const schoolProjects = [
    {
      image: '/img/schoolProjects/projectGrowth_image.png',
      link: '/schoolProjects/professionalGrowth',
      text: 'professionalGrowth',
    },
    { image: '/img/schoolProjects/ecoSafety_image.png', link: '/schoolProjects/ecoSafety', text: 'ecoSafety' },
    { image: '/img/schoolProjects/diseaseRisk.png', link: '/schoolProjects/diseaseRisk', text: 'diseaseRisk' },
    {
      image: '/img/schoolProjects/greenTransformation.png',
      link: '/schoolProjects/greenTransformation',
      text: 'greenTransformation',
    },
    {
      image: '/img/schoolProjects/smartCitiesInArctic.png',
      link: '/schoolProjects/smartCitiesInArctic',
      text: 'smartCitiesInArctic',
    },
    { image: '/img/schoolProjects/sihirtyaNation.png', link: '/schoolProjects/sihirtyaNation', text: 'sihirtyaNation' },
    {
      image: '/img/schoolProjects/wisdomAsTheBasis.png',
      link: '/schoolProjects/wisdomAsTheBasis',
      text: 'wisdomAsTheBasis',
    },
    {
      image: '/img/schoolProjects/integration_image.svg',
      link: '/schoolProjects/integrationOfGreenTechnologies',
      text: 'integrationOfGreenTechnologies',
    },
  ]

  return (
    <Page>
      <Helmet>
        <meta name='description' content={current['schoolMeta']} />
        <meta name='keywords' content={current['schoolMeta']} />
        <meta property='og:image' content='/img/appleIcon.png' />
        <meta property='og:url' content='https://scitech.ru/school' />
        <meta property='og:title' content={current['Школа управления проектами в медицине и биотехнологиях']} />
        <meta property='og:description' content={current['schoolMeta']} />
        <title>{current['Школа управления проектами в медицине и биотехнологиях']}</title>
        <link rel='canonical' href='https://scitech.ru/school' />
      </Helmet>

      <Layout
        style={{
          backgroundImage: 'url(/img/gradients/school_gradient.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '120% -5%',
        }}
      >
        <div className='show wrapper_hero'>
          <div className='container relative'>
            <div className='colorSpot colorSpot__green colorSpot__green'></div>
            <div className='spot'></div>
            <div className='content pb0'>
              <ul className='g3 zIndex'>
                <li className='i3_3'>
                  <p className='asideMarker'>{current['Образовательный проект']}</p>
                </li>
                <li className='i3_9'>
                  <h1>{current['Школа управления проектами в медицине и биотехнологиях']}</h1>
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
                <li className='i3_9 wrapper_borderTop zIndex'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12 flex_between'>
                          <div>
                            <p className='raleway'>
                              {current['Июнь']} 2022 - {current['Декабрь']} 2022
                            </p>
                          </div>
                          <div className='datePlace_place mt_low'>
                            <img src='/img/pin.svg' alt='icon' />
                            <div className='place_text'>
                              <p className='asideMarker asideMarker_place'>
                                {current['онлайн']}, {current['оффлайн']}
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
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
                  <p className='asideMarker'>{current['О проекте']}</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <em className='zIndex'>{current['projectManagementSchoolAbout1']}</em>
                        </li>
                        <li className='i3_12'>
                          <h4>{current['Результаты программы']}</h4>
                          <p>{current['projectManagementSchoolAbout2']}</p>
                          <p>{current['projectManagementSchoolAbout3']}</p>
                          <p>{current['projectManagementSchoolAbout4']}</p>
                          <p>{current['projectManagementSchoolAbout5']}</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {lang === 'ru' ? (
          <div className='show'>
            <div className='container'>
              <div className='content'>
                <ul className='g3'>
                  <li className='i3_3'>
                    <p className='asideMarker'>Основные эксперты</p>
                  </li>
                  <li className='i3_9'>
                    <SpeakerCards>
                      <SpeakerCard photo='/img/new_speaker_kizeev.png' fullName='Вениамин Кизеев'>
                        Член совета директоров Академии управления WINbd, к.э.н., MBA, Certified Project Director
                        (IPMA_A)
                      </SpeakerCard>
                      <SpeakerCard photo='/img/new_speaker_kobyakova.png' fullName='Ольга Кобякова'>
                        доктор медицинских наук, профессор MBA, директор ФГБУ «ЦНИИОИЗ» Минздрава России
                      </SpeakerCard>
                      <SpeakerCard photo='/img/new_speaker_lavrov.png' fullName='Олег Лавров'>
                        Президент Ассоциации «KM-Альянс», д.м.н, профессор МВА, аккредитация в Knowledge Management
                      </SpeakerCard>
                      <SpeakerCard photo='/img/new_speaker_gareev.png' fullName='Арсен Гареев'>
                        Директор Центра управления технологическим развитием НТИ, АО «Российская венчурная компания»
                      </SpeakerCard>
                      <SpeakerCard photo='/img/new_speaker_fertman.png' fullName='Александр Фертман'>
                        Директор по науке, технологиям и образованию Фонда "Сколково", кандидат физ.-мат. наук
                      </SpeakerCard>
                      <SpeakerCard photo='/img/new_speaker_rojdestvenskiy.png' fullName='Игорь Рождественский'>
                        Кандидат физ.-мат. наук PhD Со-основатель и член Правления Ассоциации Брокеров Инноваций и
                        Технологий, член Международного Комитета International Technology Transfer Network (Китай)
                      </SpeakerCard>
                      <SpeakerCard photo='/img/new_speaker_schayhutdinov.png' fullName='Ильдар Шайхутдинов'>
                        Член Генерального совета общероссийской общественной организации «Деловая Россия», Генеральный
                        директор АО «Институт финансового развития бизнеса»
                      </SpeakerCard>
                      <SpeakerCard photo='/img/new_speaker_chyulok.png' fullName='Александр Чулок'>
                        Кандидат экономических наук, Директор Центра научно-технологического прогнозирования НИУ ВШЭ
                      </SpeakerCard>
                      <SpeakerCard photo='/img/new_speaker_knyazev.png' fullName='Алексей Князев'>
                        Заведующий лабораторией каталитических исследований ТГУ, директор томского Инжирингового
                        химико-технологического центра (ИХТЦ)
                      </SpeakerCard>
                      <SpeakerCard order4 photo='/img/new_speaker_kashirskih.png' fullName='Егор Каширских'>
                        Директор ООО ИНПЦ «Иннотех», Член совета объединения «Сибирская биотехнологическая инициатива»,
                        Член Совета директоров АО «Кузбасский Технопарк», Директор по НИОКР ООО «Биотехнологии»
                      </SpeakerCard>
                    </SpeakerCards>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : null}

        <div className='show'>
          <div className='container'>
            <div className='content'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_tiny asideMarker_mt'>{current['Модуль']} 1</p>
                  <p className='asideMarker asideMarker_mt1'>{current['июнь']} 2022</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4 className='mt1'>{current['Генерация идей и проектных инициатив']}</h4>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Федеральная повестка и задачи в области здоровьесбережения</p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Проектные тренды в сфере здоровьесбережения</p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Выбор фокуса исследований</p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>
                            Тенденции и изменения в подходах к запуску и управлению проектами
                          </p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_tiny asideMarker_mt'>{current['Модуль']} 2</p>
                  <p className='asideMarker asideMarker_mt1'>{current['август']} 2022</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4 className='mt1'>{current['Формирование востребованного проекта/продукта']}</h4>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Определение заинтересованных сторон проектов</p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>
                            Формирование плана взаимодействия с заинтересованными сторонами и плана коммуникаций
                          </p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Ключевые проблемы пользователей</p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Формирование продуктовых гипотез и их тестирование</p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Формирование ценностного предложения</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_tiny asideMarker_mt'>{current['Модуль']} 3</p>
                  <p className='asideMarker asideMarker_mt1'>{current['сентябрь']} 2022</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4 className='mt1'>{current['Факторы успеха в управлении проектом']}</h4>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Структурная декомпозиция работ (продуктовая)</p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Вехи/ дорожная карта проекта</p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>План-график проекта</p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Команда проекта, выявление дефицитов команды проекта</p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Матрица ответственности</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_tiny asideMarker_mt'>{current['Модуль']} 4</p>
                  <p className='asideMarker asideMarker_mt1'>{current['октябрь']} 2022</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4 className='mt1'>
                            {current['Управление ценностью в проектах и способы привлечения финансирования']}
                          </h4>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Выявление критериев успешности проекта</p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Социально-экономическая оценка эффективности проекта</p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>
                            Повышение ценности проекта (PMF) для различных заинтересованных сторон
                          </p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Управление ресурсами</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_tiny asideMarker_mt'>{current['Модуль']} 5</p>
                  <p className='asideMarker asideMarker_mt1'>{current['ноябрь']} 2022</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4 className='mt1'>{current['Продвижение проекта для получения ресурсов']}</h4>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Дорожная карта проекта</p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Экономическая эффективность</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_tiny asideMarker_mt'>{current['Модуль']} 6</p>
                  <p className='asideMarker asideMarker_mt1'>{current['декабрь']} 2022</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4 className='mt1'>{current['Питч-сессия']}</h4>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>
                            Доклады: команды представляют проекты партнерам, заказчикам и инвесторам
                          </p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Подведение итогов программы</p>
                        </li>
                        <li className='i3_3'>
                          <p className='module_school'>Награждение лучших команд и участников</p>
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

export async function getStaticPaths() {
  return { fallback: 'blocking', paths: [{ params: { lang: RU_LANG } }, { params: { lang: EN_LANG } }] }
}

export async function getStaticProps(ctx) {
  const data = await getContentfulSchoolProjects()

  const { current } = Translator('test', ctx.params.lang)
  return {
    props: { data: data.data, modalForm: current['modalForm'], current: current['test'] },
    revalidate: 42,
  }
}
