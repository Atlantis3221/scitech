import React, { useContext, useState } from 'react'
import Link from 'next/link'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/router'
import Translator from '../../../i18n/translator'
import { Layout } from '../../../components/layout'
import { getContentfulVacancies, getDefineVacancy } from '../../../helpers/axios'
import { EN_LANG, RU_LANG } from '../../../lib/constants'
import { transformContentfulVacancies } from '../../../helpers/transformContentfulVacancies'
import { Button } from '../../../components/button'
import VacanciesWidget from './vacanciesWidget'
import ModalsContext from '../../../components/modals/ModalContext'

const Vacancy = ({modalForm, data, allVacancies}) => {
  const router = useRouter()
  const { lang } = router.query
  const [inputEmailValue, setInputEmailValue] = useState('')
  const {modalService, setRegModalState} = useContext(ModalsContext)

  const openModal = () => {
    modalService.openModal("reg")
    setRegModalState({
      color: "red",
      inputs: ["name", "file", "comment", "confidential"],
      configName: "becomeClient",
      title: lang === 'ru'? 'Подать резюме': 'Provide a CV',
      subtitle: 'Мы формируем базу резюме, но не публикуем ее в общий доступ'
    })
  }

  const saveToServer = (e) => {
    e.preventDefault()
    if(inputEmailValue) {
      setIsSend(true)
      e.target.classList.toggle('footer_form__success')
    }
  }

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
              <li className='i3_3 mt-8 flex flex-column pt2'>
                <a href={data?.employerWebsite} className="schedule_link schedule_link_normal mb-2">
                  <div className="vacancySidebar_logo">
                    <img src={data?.employerImage} alt="vacancy_logo" />
                  </div>
                  <p className='vacancies_description'>{data?.employerName}</p>
                  <p className='vacancies_description'>{data?.location}</p>
                </a>

                <div className="mb-4 pr-12 pt-8">
                  <Link href={`/${lang}/vacancies`}>
                    <a className='raleway link_event link_event__noBorder raleway_bold pr-12'>
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
                  <VacanciesWidget allVacancies={allVacancies} />
                </div>
              </li>
              <li className='i3_9 vacancyDescr'>
                <Link href={`/${lang}/vacancies`}>
                  <a className="raleway_bold backArrow">
                    <img src="/img/icons/arrow_black.svg" alt="backArrow" />
                    Вакансии
                  </a>
                </Link>
                <h1 className="pt-2">{data?.vacancyName}</h1>
                {data?.location && <p className="description_text raleway flex">
                  <span className="block w-6 mr-2"><img src='/img/icons/location.svg' alt='icon'/></span>
                  {data?.location}
                </p>}
                {data?.salary && <p className="description_text raleway flex">
                  <span className="block w-6 mr-2"><img src='/img/icons/money.svg' alt='icon'/></span>
                  {`${data?.salary} ₽`}
                </p>}

                <li className='i3_12'>
                  {data?.vacancyDescription?.map(text => (
                    <p dangerouslySetInnerHTML={{__html: text?.text}}></p>
                  ))}
                </li>

                <li className='i3_12 mt-10 mb-14'>
                  <Button red onClick={() => {openModal()}}>Откликнуться</Button>
                </li>
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
  const data = JSON.stringify(await getContentfulVacancies());
  const allVacancies = data?.data?.map(v => transformContentfulVacancies(v))
  const ruPaths = allVacancies?.map((vacancy) => ({
    params: { lang: RU_LANG, vacancy: vacancy?.vacancyURL ?? '1' }
  })) ?? []
  const enPaths = allVacancies?.map((vacancy) => ({
    params: { lang: EN_LANG, vacancy: vacancy?.vacancyURL ?? '1' }
  })) ?? []
  return { fallback: 'blocking', paths: [] }
}

export async function getStaticProps(ctx) {
  const { vacancy } = ctx.params
  const allVacancies = await getContentfulVacancies();
  const defineVacancy = await getDefineVacancy(vacancy)
  const {current} = Translator("test", ctx.params.lang)
  return {
    props: {
      data: transformContentfulVacancies(defineVacancy?.data),
      allVacancies: allVacancies?.data,
      current: current["test"],
      modalForm: current["modalForm"]
    },
    revalidate: 42,
  }
}