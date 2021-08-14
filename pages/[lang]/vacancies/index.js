import React, { useState } from 'react'

import { Page } from '../../../components/page'
import { Layout } from '../../../components/layout'
import { Helmet } from 'react-helmet'
import { vacancies } from '../../../data/vacancies'
import { InputSelect } from '../../../components/inputs/inputSelect'
import useTranslate from '../../../i18n/translator'
import { useRouter } from 'next/router'

export default function Vacancies({current}) {
  const { query: {lang: lang} } = useRouter()
  const [vacanciesType, setVacanciesType] = useState('vacancies')
  const [vacanciesCountry, setVacanciesCountry] = useState('all')
  const [isShowSpinner, setIsShowSpinner] = useState(false)

  const [isShowMobileFilters, setIsShowMobileFilters] = useState(false)

  const vacanciesCountries = [
    { title: 'Все', _id: 'all' },
    { title: 'Москва', _id: 'Москва' },
    { title: 'Тюмень', _id: 'Тюмень' }
  ]

  const changeType = (type, name) => {
    setIsShowSpinner(true)
    setTimeout(() => {
      setIsShowSpinner(false)
    }, 600)
    if(type === 'type') {
      setVacanciesType(name)
    }
    if(type === 'city') {
      setVacanciesCountry(name)
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
          <meta name="description" content='Вакансии' />
          <meta name="keywords" content='Вакансии' />
          <meta property="og:image" content="/img/appleIcon.png" />
          <meta property="og:url" content={`https://scitech.ru/developmentProjects`} />
          <meta property="og:title" content='Вакансии' />
          <meta property="og:description" content='Вакансии' />
          <title>Вакансии</title>
          <link rel="canonical" href={`https://scitech.ru/vacancies`} />
        </Helmet>

        <div className={`mobileFilters ${isShowMobileFilters? 'mobileFilters_shown': ''}`}>
          <button className={'mobileFilters_closeBtn'}
                  onClick={() => setIsShowMobileFilters(false)}
          >x</button>
          <p className="mobileFilters_title raleway raleway_bold">Фильтры</p>
          <p className="raleway raleway_bold">Тип</p>
          <p className={`tabLinks ${vacanciesType === 'vacancies' ? 'tabLinks__active' : ''}`}
             onClick={() => changeType('type', 'vacancies')}>Вакансии</p>
          <p className={`tabLinks ${vacanciesType === 'internships' ? 'tabLinks__active' : ''}`}
             onClick={() => changeType('type', 'internships')}>Стажировки</p>
        </div>

        <div className='show content'>
          <div className='container relative'>
              <ul className='g3'>
                <li className='i3_3'>
                </li>
                <li className='i3_9'>
                  <h1>Вакансии и стажировки</h1>
                  <h2>{current["title1"]}</h2>
                </li>
              </ul>
          </div>
        </div>

        <div className='show'>
          <div className='container'>
            <div className='content'>
              <ul className='g3'>
                <li className='i3_3 filtersProjects'>
                  <p className="raleway raleway_bold">Тип</p>
                  <p className={`tabLinks ${vacanciesType === 'vacancies' ? 'tabLinks__active' : ''}`}
                     onClick={() => changeType('type', 'vacancies')}>Вакансии</p>
                  <p className={`tabLinks ${vacanciesType === 'internships' ? 'tabLinks__active' : ''}`}
                     onClick={() => changeType('type', 'internships')}>Стажировки</p>

                  <p className="raleway raleway_bold pt2">Регион</p>
                  <InputSelect value={vacanciesCountry}
                               options={vacanciesCountries}
                               onChange={(e) => changeType('city', e.target.value)}/>
                  {/*<InputCheckbox name={'city'} description={'Только удаленная работа'} />*/}
                </li>

                <li className='i3_9 mb6'>
                  <button className={'btn btn__bordered filterBtn'}
                          onClick={() => toggleFilterList()}
                  >Фильтры</button>

                  <div className="activeFilterTabs">
                    <p className={vacanciesType === 'vacancies' ? 'activeFilterTab' : 'activeFilterTab__hidden'}>Вакансии
                      <span className="activeFilterTab-closeBtn" onClick={() => changeType('type', null)}>x</span></p>
                    <p className={vacanciesType === 'internships' ? 'activeFilterTab' : 'activeFilterTab__hidden'}>Стажировки
                      <span className="activeFilterTab-closeBtn" onClick={() => changeType('type', null)}>x</span>
                    </p>
                  </div>

                  {/*{!isShowSpinner ? <ProjectGrowthCardContainer>*/}
                  {/*    {vacancies.map(el => (*/}
                  {/*      <ProjectGrowthCard link={el.link}*/}
                  {/*                         key={el._id}*/}
                  {/*                         cardType={el.cardType}*/}
                  {/*                         isShown={[vacanciesType, vacanciesCountry]}*/}
                  {/*                         image={el.image}*/}
                  {/*                         title={el.title}*/}
                  {/*                         price={el.price}*/}
                  {/*                         location={el.location}*/}
                  {/*      > </ProjectGrowthCard>*/}
                  {/*    ))}*/}
                  {/*  </ProjectGrowthCardContainer>*/}
                  {/*  :*/}
                  {/*  <div className="spiner_container">*/}
                  {/*    <img src="/img/icons/spiner.gif" alt="spiner" />*/}
                  {/*  </div>}*/}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </Page>
  )
}

export async function getServerSideProps(ctx) {
  const {current} = useTranslate("test", ctx.params.lang) 

  return {
    props: { current: current["test"]  },
  }
}