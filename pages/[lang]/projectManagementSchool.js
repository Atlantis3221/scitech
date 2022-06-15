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
import { speakers } from '../../data/experts'
import PageHelmet from '../../components/PageHelmet'
import { Partner } from '../../components/partner'

export default function projectManagementSchool({ data, modalForm, current }) {
  const {
    query: { lang: lang },
  } = useRouter()
  const { modalService, setRegModalState } = useContext(ModalsContext)

  const headInfo = {
    title: 'Школа управления проектами в медицине и биотехнологиях',
    link: 'https://scitech.ru/projectManagementSchool',
    keyword: 'schoolMeta',
    description: 'schoolMeta',
  }
  const openModal = () => {
    modalService.openModal('reg')
    setRegModalState({
      color: 'green',
      inputs: ['participationType', 'name', 'company', 'phone', 'email', 'confidential'],
      configName: 'scienceLeadSchoolNextSet',
      title: lang === 'ru' ? 'Регистрация' : 'Enquire about next enrolment period',
      isSent: false,
    })
  }

  return (
    <Page>
      {/* <Helmet>
        <meta name='description' content={current['schoolMeta']} />
        <meta name='keywords' content={current['schoolMeta']} />
        <meta property='og:image' content='/img/appleIcon.png' />
        <meta property='og:url' content='https://scitech.ru/projectManagementSchool' />
        <meta property='og:title' content={current['Школа управления проектами в медицине и биотехнологиях']} />
        <meta property='og:description' content={current['schoolMeta']} />
        <title>{current['Школа управления проектами в медицине и биотехнологиях']}</title>
        <link rel='canonical' href='https://scitech.ru/projectManagementSchool' />
      </Helmet> */}
      <PageHelmet {...headInfo} />

      <Layout
        style={{
          backgroundImage: 'url(/img/gradients/school_gradient.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '120% -5%',
        }}
        modalFormText={modalForm}
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
                        <li className='i3_12 flex_end'>
                          <Button bordered-green marginleft onClick={openModal}>
                            {current['Регистрация']}
                          </Button>
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
                      logo='/img/logo_tyumsmu.png'
                      link="https://www.tyumsmu.ru/"
                      name='Тюменский государственный медицинский университет'
                      alt='ТюмГМУ'
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
                      {speakers.map((speaker) => {
                        return (
                          <SpeakerCard photo={speaker.img} fullName={speaker.name}>
                            {speaker.description}
                          </SpeakerCard>
                        )
                      })}
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

        <div className='show'>
          <div className='container'>
            <div className='content'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'>Контакты</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_6'>
                          <p>
                            8 912 929 23 17
                            <br /> 8 912 997 29 28
                          </p>
                          <p>
                            <a href='mailto:GlushkovVS@tyumsmu.ru'>GlushkovVS@tyumsmu.ru</a>
                            <br />
                            <a href='mailto:egorovaaa@tyumsmu.ru'>egorovaaa@tyumsmu.ru</a>
                          </p>
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
