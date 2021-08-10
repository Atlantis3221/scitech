import React from 'react'
import { vacancies } from '../../data/vacancies'

export const VacanciesWidget = props => {
  const { vacsCount = vacancies.length, _id } = props

  const getVacancies = (vacs, currentId, newsCount) => {
    let filteredVacs = vacs
    if (currentId) {
      filteredVacs = vacs.filter(item => item._id !== currentId)
    }
    return filteredVacs.slice(0, newsCount)
  }

  return (
    <>
      {getVacancies(vacancies, _id, vacsCount).map((vac, i) => {
          return (
            <a href={`/vacancies/${vac._id}`} className='i3_4 vacancies_linkLi' key={vac._id} style={{ paddingLeft: 0 }}>
              <div className='vacancies_logo'>
                <img loading="lazy" src={vac.image} alt="" />
              </div>
              <div className='vacancies_text'>
                <p className='vacancies_title'>{vac.title}</p>
                <p className='vacancies_description'>{vac.description}</p>
              </div>
            </a>
          )
      })
      }
    </>
  )
}