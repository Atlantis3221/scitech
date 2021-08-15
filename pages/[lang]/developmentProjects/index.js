import React, { useState } from 'react'

import { Page } from '../../../components/page'
import { Layout } from '../../../components/layout'
import { ProjectGrowthCard, ProjectGrowthCardContainer } from '../../../components/projectGrowthCard'
import { projectGrowth } from '../../../data/projectGrowth'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/dist/client/router'

export default function DevelopmentProjects(props) {
  const { query: {lang: lang} } = useRouter()

  const [projectsType, setProjectsType] = useState(null)
  const [projectTime, setProjectTime] = useState(null)
  const [isShowSpinner, setIsShowSpinner] = useState(false)

  const [isShowMobileFilters, setIsShowMobileFilters] = useState(false)

  const changeType = (type, name) => {
    setIsShowSpinner(true)
    setTimeout(() => {
      setIsShowSpinner(false)
    }, 600)
    if(type === 'type') {
      setProjectsType(name)
    } else {
      setProjectTime(name)
    }
    setIsShowMobileFilters(false)
  }

  const toggleFilterList = () => {
    setIsShowMobileFilters(true)
  }

  return (
    <Page>
      <Layout>
        <Helmet>
          <meta name="description" content='Проекты развития' />
          <meta name="keywords" content='Проекты развития' />
          <meta property="og:image" content="/img/appleIcon.png" />
          <meta property="og:url" content={`https://scitech.ru/developmentProjects`} />
          <meta property="og:title" content='Проекты развития' />
          <meta property="og:description" content='Проекты развития' />
          <title>Проекты развития</title>
          <link rel="canonical" href={`https://scitech.ru/developmentProjects`} />
        </Helmet>

        <div className={`mobileFilters ${isShowMobileFilters? 'mobileFilters_shown': ''}`}>
          <button className={'mobileFilters_closeBtn'}
                  onClick={() => setIsShowMobileFilters(false)}
          >x</button>
          <p className="mobileFilters_title raleway raleway_bold">Фильтры</p>
          <p className="raleway raleway_bold">Время старта</p>
          <p className={`tabLinks ${projectTime === 'now' ? 'tabLinks__active' : ''}`}
             onClick={() => changeType('time', 'now')}>Идет набор</p>
          <p className={`tabLinks ${projectTime === 'thisMonth' ? 'tabLinks__active' : ''}`}
             onClick={() => changeType('time', 'thisMonth')}>В этом месяце</p>
          <p className={`tabLinks ${projectTime === 'past' ? 'tabLinks__active' : ''}`}
             onClick={() => changeType('time','past')}>Прошедшие</p>
          <p className={`tabLinks ${projectTime === 'inProcess' ? 'tabLinks__active' : ''}`}
             onClick={() => changeType('time','inProcess')}>В процессе</p>

          <p className="raleway raleway_bold pt2">Тип проекта</p>
          <p className={`tabLinks ${projectsType === 'school' ? 'tabLinks__active' : ''}`}
             onClick={() => changeType('type','school')}>Школа</p>
          <p className={`tabLinks ${projectsType === 'courses' ? 'tabLinks__active' : ''}`}
             onClick={() => changeType('type', 'courses')}>Курсы и мероприятия</p>
          <p className={`tabLinks ${projectsType === 'services' ? 'tabLinks__active' : ''}`}
             onClick={() => changeType('type','services')}>Сервисы</p>
        </div>
        <div className='show content'>
          <div className='container relative'>
            <ul className='g3'>
              <li className='i3_3'>
              </li>
              <li className='i3_9'>
                <h1>Проекты развития</h1>
              </li>
            </ul>
          </div>
        </div>

        <div className='show'>
          <div className='container'>
            <div className='content filterContent'>
              <ul className='g3'>
                <li className='i3_3 filtersProjects'>
                  <p className="raleway raleway_bold">Время старта</p>
                  <p className={`tabLinks ${projectTime === 'now' ? 'tabLinks__active' : ''}`}
                     onClick={() => changeType('time', 'now')}>Идет набор</p>
                  <p className={`tabLinks ${projectTime === 'thisMonth' ? 'tabLinks__active' : ''}`}
                     onClick={() => changeType('time', 'thisMonth')}>В этом месяце</p>
                  <p className={`tabLinks ${projectTime === 'past' ? 'tabLinks__active' : ''}`}
                     onClick={() => changeType('time','past')}>Прошедшие</p>
                  <p className={`tabLinks ${projectTime === 'inProcess' ? 'tabLinks__active' : ''}`}
                     onClick={() => changeType('time','inProcess')}>В процессе</p>

                  <p className="raleway raleway_bold pt2">Тип проекта</p>
                  <p className={`tabLinks ${projectsType === 'school' ? 'tabLinks__active' : ''}`}
                     onClick={() => changeType('type','school')}>Школа</p>
                  <p className={`tabLinks ${projectsType === 'courses' ? 'tabLinks__active' : ''}`}
                     onClick={() => changeType('type', 'courses')}>Курсы и мероприятия</p>
                  <p className={`tabLinks ${projectsType === 'services' ? 'tabLinks__active' : ''}`}
                     onClick={() => changeType('type','services')}>Сервисы</p>

                  <br/>
                  <a href={`/${lang}/vacancies`} className='raleway link_event link_event__noBorder raleway_bold pt2'>
                    Вакансии и стажировки
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
                    </svg></a>
                  {/*<VacanciesWidget vacanciesCount={3} />*/}
                </li>
                <li className='i3_9 mb6 smallScreen_fullWidth'>
                  <button className={'btn btn__bordered filterBtn'}
                          onClick={() => toggleFilterList()}
                  >Фильтры</button>

                  <div className="activeFilterTabs">
                    <p className={projectTime === 'now' ? 'activeFilterTab' : 'activeFilterTab__hidden'}>Идет набор<span
                      className="activeFilterTab-closeBtn"
                      onClick={() => changeType('time', null)}>x</span></p>
                    <p className={projectTime === 'thisMonth' ? 'activeFilterTab' : 'activeFilterTab__hidden'}>В этом месяце <span
                      className="activeFilterTab-closeBtn"
                      onClick={() => changeType('time', null)}>x</span></p>
                    <p className={projectTime === 'past' ? 'activeFilterTab' : 'activeFilterTab__hidden'}>Прошедшие <span
                      className="activeFilterTab-closeBtn"
                      onClick={() => changeType('time', null)}>x</span></p>
                    <p className={projectTime === 'inProcess' ? 'activeFilterTab' : 'activeFilterTab__hidden'}>В процессе <span
                      className="activeFilterTab-closeBtn"
                      onClick={() => changeType('time', null)}>x</span></p>

                    <p className={projectsType === 'school' ? 'activeFilterTab' : 'activeFilterTab__hidden'}>Школа <span
                      className="activeFilterTab-closeBtn"
                      onClick={() => changeType('type', null)}>x</span></p>
                    <p className={projectsType === 'courses' ? 'activeFilterTab' : 'activeFilterTab__hidden'}>Курсы и
                      мероприятия <span className="activeFilterTab-closeBtn"
                                        onClick={() => changeType('type', null)}>x</span>
                    </p>
                    <p className={projectsType === 'services' ? 'activeFilterTab' : 'activeFilterTab__hidden'}>Сервисы <span
                      className="activeFilterTab-closeBtn"
                      onClick={() => changeType('type', null)}>x</span></p>
                  </div>

                  {!isShowSpinner ? <ProjectGrowthCardContainer>
                      {projectGrowth.map(el => (
                        <ProjectGrowthCard link={el.link}
                                           key={el._id}
                                           cardType={el.cardType}
                                           isShown={[projectTime, projectsType]}
                                           image={el.image}
                                           title={el.title}
                                           name={el.name}
                                           deadline={el.deadline}
                                           projectDate={el.projectDate}
                                           location={el.location}
                        > </ProjectGrowthCard>
                      ))}
                    </ProjectGrowthCardContainer>
                    :
                    <div className="spiner_container">
                      <img src="/img/icons/spiner.gif" loading="lazy" alt="spiner" />
                    </div>}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </Page>
  )
}
