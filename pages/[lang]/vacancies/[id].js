import React from 'react'
import { Layout } from '../../../components/layout'
import { vacanciesPage } from '../../../data/vacanciesPage'
import { Helmet } from 'react-helmet'
import '../../styles/vacancies.less'
import { VacanciesWidget } from './vacanciesWidget'

const VacancyById = props => {
  const data = vacanciesPage.findById(props.vacancy)

  return (
    <Layout>
      <Helmet>
        <meta name="description" content={data.title} />
        <meta name="keywords" content={data.title} />
        <meta property="og:image" content="/img/appleIcon.png" />
        <meta property="og:url" content={`https://scitech.ru/news/${data._id}`} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.title} />
        <title>{data.title}</title>
        <link rel="canonical" href={`https://scitech.ru/news/${data._id}`} />
      </Helmet>

      <div className='show wrapper_hero'>
        <div className='container'>
          <div className='content'>
            <ul className='g3'>
              <li className='i3_3 vacancySidebar'>
                <div className="vacancySidebar_logo">
                  <img src={data.image} alt="vacancy_logo" />
                </div>
                <p className='vacancies_title'>{data.title}</p>
                <p className='vacancies_description'>{data.description}</p>
              </li>
              <li className='i3_9 vacancyDescr'>
                <a href={'/vacancies'} className="raleway_bold backArrow">
                  <img src="/img/icons/arrow_black.svg" alt="backArrow" />
                  Вакансии
                </a>
                <h1>{data.title}</h1>
                {data.location && <p className="description_text">
                  <span className="icon"><img src='/img/icons/location.svg' alt='icon'/></span>
                  {data.location}
                </p>}
                {data.price && <p className="description_text">
                  <span className="icon"><img src='/img/icons/money.svg' alt='icon'/></span>
                  {data.price}
                </p>}
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
                <a href="/vacancies" className='raleway link_event link_event__noBorder raleway_bold pt2'>
                  Другие вакансии и стажировки
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
              <li className='i3_9'>
                <ul className='g3'>
                  <li className='i3_12 mb6'>
                    <ul className='g3'>
                      <li className='i3_12'>
                        <div
                          className='newsText'
                          dangerouslySetInnerHTML={{ __html: data.description }}
                        />
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
  )
}

export default Id
