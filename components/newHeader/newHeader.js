import React from 'react'
import Link from 'next/link'

export const NewHeader = () => {

  return (
    <header>
      <div className='container'>
        <div className='content'>
          <div className='section_container header_container'>
            <aside className='section_aside'>
              <Link href="/">
                <a>
                  <img className='brand' loading="lazy" src='/img/logo.svg' alt=''/>
                </a>
              </Link>
            </aside>
            <div className='section_content'>
              <input type='checkbox' className='hamburger_toggler'/>
              <div className='hamburger'>
                <div/>
              </div>
              <nav className='navigation'>
                <Link href="/">
                  <a className='navigation_logo'>
                    <img className='brand' loading="lazy" src='/img/logo.svg' alt=''/>
                  </a>
                </Link>
                <ul className='navigation_list'>
                  <li>
                    <Link href={'/developmentProjects'}>
                      <a className={'navigation_link'}>
                        Проекты</a>
                    </Link>
                  </li>

                  <li>
                    <Link href={'/grants'}>
                      <a className={'navigation_link'}>
                        Гранты</a>
                    </Link>
                  </li>

                  <li>
                    <Link href={'/vacancies'}>
                      <a className={'navigation_link'}>
                        Вакансии и стажировки
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href={'/news'}>
                      <a  className={'navigation_link'}>Новости</a>
                    </Link>
                  </li>

                  <li>
                    <Link href={'/reports'}>
                      <a  className={'navigation_link'}>Отчеты</a>
                    </Link>
                  </li>
                </ul>
                <div className='navigation_email flex'>
                  <div className="languages">
                    <Link href="/ru.scitech.ru">
                      <a className="navigation_link" style={{ marginRight: '.2rem' }}>
                        Руc
                      </a>
                    </Link>
                    /
                    <Link href="/en.scitech.ru">
                      <a className="navigation_link" style={{ marginLeft: '.3rem' }}>
                        Eng
                      </a>
                    </Link>
                  </div>


                  <p className='mobileOnly'>Тюмень - Сургут</p>
                  <a className='link_data mobileRed raleway_bold' href='mailto:cdc@scitech.ru'>
                    cdc@scitech.ru
                  </a>
                  <a className='mobileOnly' href="https://t.me/scitechru" target="_blank">
                    <img className="ml1" src="/img/icons/telegram.svg" loading="lazy" alt="telegram" />
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
