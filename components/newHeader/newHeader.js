import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const NewHeader = () => {
  const router = useRouter()
  const { lang } = router.query
  const pathname = router.pathname

  const changeLang = (lang) => {
    let path = router.asPath.split("/")
    path.splice(1,1, lang)
    router.push(path.join("/"))
  }

  return (
    <header>
      <div className='container'>
        <div className='content'>
          <div className='section_container header_container'>
            <aside className='section_aside'>
              <Link href={`/${lang}/`}>
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
                <Link href={`/${lang}/`}>
                  <a className='navigation_logo'>
                    <img className='brand' loading="lazy" src='/img/logo.svg' alt=''/>
                  </a>
                </Link>
                <ul className='navigation_list'>
                  <li>
                    <Link href={`/${lang}/developmentProjects`}>
                      <a className={`navigation_link ${(/developmentProjects/ig).test(pathname) ? 'active' : ''}`} >
                        {lang === 'ru'? 'Проекты': 'Projects'}</a>
                    </Link>
                  </li>

                  <li>
                    <Link href={`/${lang}/grants`}>
                      <a className={`navigation_link ${(/grants/ig).test(pathname) ? 'active' : ''}`} >
                        {lang === 'ru'? 'Гранты': 'Grants'}</a>
                    </Link>
                  </li>

                  <li>
                    <Link href={`/${lang}/vacancies`}>
                      <a className={`navigation_link ${(/vacancies/ig).test(pathname) ? 'active' : ''}`} >
                        {lang === 'ru'? 'Вакансии и стажировки': 'Vacancies and internships'}
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href={`/${lang}/news`}>
                      <a  className={`navigation_link ${(/news/ig).test(pathname) ? 'active' : ''}`} >{lang === 'ru'? 'Новости': 'News'}</a>
                    </Link>
                  </li>

                  <li>
                    <Link href={`/${lang}/reports`}>
                      <a  className={`navigation_link ${(/reports/ig).test(pathname) ? 'active' : ''}`} >{lang === 'ru'? 'Отчеты': 'Reports'}</a>
                    </Link>
                  </li>
                </ul>
                <div className='navigation_email'>
                  <div className="languages">
                      <a 
                      onClick={
                        () => {
                          changeLang("ru")
                        }
                      }
                      className={`navigation_link navigation_link_lang ${lang === 'ru' ? 'active lang' : ''}`} style={{ marginRight: '.2rem' }}>
                        Руc
                      </a>
                      <a 
                      onClick={
                        () => {
                          changeLang("en")
                        }
                      }
                      className={`navigation_link navigation_link_lang ${lang === 'en' ? 'active lang' : ''}`} style={{ marginLeft: '.3rem' }}>
                        Eng
                      </a>
                  </div><br/>


                  <p className='mobileOnly'>Тюмень - Сургут</p>
                  <a className='link_data mobileRed raleway_bold' href='mailto:cdc@scitech.ru'>
                    cdc@scitech.ru
                  </a><br/>
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
