import React from 'react'
import Link from 'next/link'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/router'
import Translator from '../../../i18n/translator'
import { Layout } from '../../../components/layout'
import { getContentfulVacancies, getDefineVacancy } from '../../../helpers/axios'
import { EN_LANG, RU_LANG } from '../../../lib/constants'
import { transformContentfulVacancies } from '../../../helpers/transformContentfulVacancies'

const Vacancy = ({modalForm, data}) => {
  const router = useRouter()
  const { lang } = router.query
  console.log(data)

  return (
    <Layout modalFormText={modalForm}>
      <Helmet>
        <meta name="description" content={data?.vacancyName} />
        <meta name="keywords" content={data?.vacancyName} />
        <meta property="og:image" content="/img/appleIcon.png" />
        <meta property="og:url" content={`https://scitech.ru/ru/vacancies/${data?.vacancyURL}`} />
        <meta property="og:title" content={data?.vacancyName} />
        <meta property="og:description" content={data?.vacancyName} />
        <title>{data?.vacancyName}</title>
        <link rel="canonical" href={`https://scitech.ru/ru/vacancies/${data?.vacancyURL}`} />
      </Helmet>

      <div className='show wrapper_hero'>
        <div className='container'>
          <div className='content'>
            <ul className='g3'>
              <li className='i3_3 vacancySidebar'>
                <a href={data?.employerWebsite}>
                  <div className="vacancySidebar_logo">
                    <img src={data?.employerImage} alt="vacancy_logo" />
                  </div>
                  <p className='vacancies_title'>{data?.employerName}</p>
                  <p className='vacancies_description'>{data?.location}</p>
                </a>
              </li>
              <li className='i3_9 vacancyDescr'>
                <Link href={`/${lang}/vacancies`}>
                  <a className="raleway_bold backArrow">
                    <img src="/img/icons/arrow_black.svg" alt="backArrow" />
                    Вакансии
                  </a>
                </Link>
                <h1>{data?.vacancyName}</h1>
                {data?.location && <p className="description_text">
                  <span className="icon"><img src='/img/icons/location.svg' alt='icon'/></span>
                  {data?.location}
                </p>}
                {data?.salary && <p className="description_text">
                  <span className="icon"><img src='/img/icons/money.svg' alt='icon'/></span>
                  {data?.salary}
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
                <Link href={`/${lang}/vacancies`}>
                  <a className='raleway link_event link_event__noBorder raleway_bold pt2'>
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
                </Link>
                {/*<VacanciesWidget vacanciesCount={3} />*/}
              </li>
              <li className='i3_9'>
                <ul className='g3'>
                  <li className='i3_12 mb6'>
                    <ul className='g3'>
                      <li className='i3_12'>
                        {data?.vacancyDescription?.map(text => (
                          <p>{text?.text}</p>
                        ))}
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

export default Vacancy

export async function getStaticPaths() {
  const data = await getContentfulVacancies();
  const allVacancies = data.data
  const ruPaths = allVacancies.map((vacancy) => {
    return {
      params: { vacancy: vacancy.vacancyURL, lang: RU_LANG}
    }
  })
  const enPaths = allVacancies.map((vacancy) => ({
    params: { vacancy: vacancy.vacancyURL, lang: EN_LANG}
  }))
  return { fallback: 'blocking', paths: [...ruPaths, ...enPaths] }  // fix that shit
}

export async function getStaticProps(ctx) {
  const { vacancy } = ctx.params
  const defineVacancy = await getDefineVacancy(vacancy)
  const {current} = Translator("test", ctx.params.lang)
  return {
    props: { data: transformContentfulVacancies(defineVacancy.data), current: current["test"], modalForm: current["modalForm"]  },
    revalidate: 42,
  }
}