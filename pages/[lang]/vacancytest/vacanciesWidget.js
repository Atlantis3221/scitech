import React from 'react'
import { useRouter } from 'next/router'

const VacanciesWidget = props => {
  const { query: {lang: lang} } = useRouter()
  const {vacanciesCount = 3, allVacancies = []} = props
  return (
    <>
      {Boolean(allVacancies.length) && allVacancies.map((vac, i) => {
        if (i< vacanciesCount) {
          return (
            <a href={`/${lang}/vacancies/${vac?.vacancyURL}`}
               className='i3_4 vacancies_linkLi'
               key={vac?.vacancyURL}
               style={{ paddingLeft: 0 }}>
              <div className='vacancies_logo'>
                <img loading="lazy" src={vac?.image} alt="img" />
              </div>
              <div className='vacancies_text'>
                <p className='vacancies_title mb-0 mt-0'>{vac?.name}</p>
                <p className='vacancies_description mt-0'>{vac?.employer}</p>
              </div>
            </a>
          )
        }
      })
      }
    </>
  )
}

export default VacanciesWidget