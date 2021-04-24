import React, { useState } from 'react'
import Link from 'next/link'

import './newHeader.less'
import { className } from '../../helpers/className'
import { Submenu } from '../submenu'
import { Button } from '../button'
import { StrongText } from '../strongText'
import { RegisterEventForm } from '../forms/registerEventForm/registerEventForm'

export const NewHeader = () => {

  const [isShownProjects, setIsShownProjects] = useState(true)
  const [isShownEvents, setIsShownEvents] = useState(true)

  const [keepOpenSubmenu, setKeepOpenSubmenu] = useState(false)

  const askQuestionOnClick = (onClick) => {
    onClick()
    setKeepOpenSubmenu(true)
  }

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
              <nav className='navigation' onMouseOver={() => setKeepOpenSubmenu(false)}>
                <Link href="/">
                  <a className='navigation_logo'>
                    <img className='brand' loading="lazy" src='/img/logo.svg' alt=''/>
                  </a>
                </Link>
                <ul className='navigation_list'>
                  {/*<li>*/}
                  {/*  <span className={'navigation_link'}>Проекты</span>*/}
                  {/*  <input type='checkbox' className='submenu_toogler' name='first'*/}
                  {/*         onChange={() => setIsShownProjects(!isShownProjects)}*/}
                  {/*  />*/}
                  {/*  <Submenu opened={keepOpenSubmenu} isShown={isShownProjects}>*/}
                  {/*    <div className='submenu_contentContainer'>*/}
                  {/*      <div className='submenu_projectsContainer'>*/}
                  {/*        <a href='/school' className='submenu_firstLink'>*/}
                  {/*          Школа научного лидерства*/}
                  {/*        </a>*/}
                  {/*        <a href='/managementSchool' className='submenu_thirdLink'>*/}
                  {/*          Школа руководителей научно-технических проектов*/}
                  {/*        </a>*/}
                  {/*        <a href='/tabulaRasa' className='submenu_fourthLink'>*/}
                  {/*          Tabula Rasa*/}
                  {/*        </a>*/}
                  {/*        <a href='/accelerationProgram' className='submenu_secondLink'>*/}
                  {/*          Акселерационная программа*/}
                  {/*        </a>*/}

                  {/*      </div>*/}
                  {/*      <div className='submenu_footer'>*/}
                  {/*        <div>*/}
                  {/*          <StrongText>Поможем подобрать программу</StrongText>*/}
                  {/*        </div>*/}
                  {/*        <div className='submenu_grayText'>*/}
                  {/*          Расскажем про расписание ближайших проектов и новых продуктов*/}
                  {/*        </div>*/}

                  {/*        <div className={`registerEventForm mt_low`}>*/}
                  {/*          <Modal*/}
                  {/*            Trigger={props => (*/}
                  {/*              <Button bordered onClick={() => askQuestionOnClick(props.onClick)}>*/}
                  {/*                Отправить вопрос*/}
                  {/*              </Button>*/}
                  {/*            )}*/}
                  {/*            Content={props => (*/}
                  {/*              <div>*/}
                  {/*                <div className='registerEventForm_title'>*/}
                  {/*                  Отправить вопрос*/}
                  {/*                </div>*/}
                  {/*                <RegisterEventForm*/}
                  {/*                  hideParticipant={true}*/}
                  {/*                  showCommentsField={true}*/}
                  {/*                  askAQuestion={true}*/}
                  {/*                  onSubmit={(e, payload) => {*/}
                  {/*                    Requests.methods.insert({*/}
                  {/*                      group: 'registrations_askForQuestion',*/}
                  {/*                      payload,*/}
                  {/*                    })*/}
                  {/*                    setTimeout(() => {*/}
                  {/*                      setKeepOpenSubmenu(false)*/}
                  {/*                      props.close()*/}
                  {/*                    }, 2000)*/}
                  {/*                  }}*/}
                  {/*                />*/}
                  {/*              </div>*/}
                  {/*            )}*/}
                  {/*          />*/}
                  {/*        </div>*/}

                  {/*      </div>*/}
                  {/*    </div>*/}
                  {/*  </Submenu>*/}
                  {/*</li>*/}
                  {/*<li>*/}
                  {/*  <input type='checkbox' className='submenu_toogler' name='second'*/}
                  {/*         onChange={() => setIsShownEvents(!isShownEvents)}*/}
                  {/*  />*/}
                  {/*  <span className={'navigation_link'}>Мероприятия</span>*/}
                  {/*  <Submenu isShown={isShownEvents}>*/}
                  {/*    <div className='submenu_contentContainer flex'>*/}
                  {/*      <div className='submenu_column_flex'>*/}
                  {/*        <p className='asideMarker asideMarker_mt_low'>Ближайшие</p>*/}
                  {/*        <div className='nearest_block'>*/}
                  {/*          <a href='/onlineForumConsortium' className='submenu_columnLink'>*/}
                  {/*            Онлайн-форум «Научно-образовательные консорциумы. Программы НОЦ и ПСАЛ как драйверы развития экономики»*/}
                  {/*          </a>*/}
                  {/*          <span className='nearest_time'>1 квартал 2021</span>*/}
                  {/*        </div>*/}
                  {/*      </div>*/}

                  {/*      <div className='submenu_column_flex'>*/}
                  {/*        <p className='asideMarker asideMarker_mt_low archive_link'>Архив</p>*/}
                  {/*        <div className='archive_links'>*/}
                  {/*          <a href='/events' className='archive_name'>*/}
                  {/*            Международная конференция «Наука. Лидерство. Общество» (Science. Leadership. Society)*/}
                  {/*          </a>*/}
                  {/*          <a href='/roundTable' className='archive_name'>*/}
                  {/*            Круглый стол «Трансфер университетских технологий. Будущее стартап-студий»*/}
                  {/*          </a>*/}
                  {/*          <a href='/projectsDefense' className='archive_name'>*/}
                  {/*            Защита проектов Школы научного лидерства и Школы руководителей научно-технологических проектов*/}
                  {/*          </a>*/}
                  {/*          <a href='/recruitingPriceDevelopEvent' className='archive_name'>*/}
                  {/*            «Стратегия управления компетенциями персонала в современном университете: рекрутинг,*/}
                  {/*            оценка, развитие, продвижение»*/}
                  {/*          </a>*/}
                  {/*          <a href='/gameMethodsInEducation' className='archive_name'>*/}
                  {/*            Игровые методы в образовании. Принципы. Теория. Практика*/}
                  {/*          </a>*/}
                  {/*        </div>*/}
                  {/*      </div>*/}
                  {/*    </div>*/}
                  {/*  </Submenu>*/}
                  {/*</li>*/}

                  <li>
                    <Link href={'/developmentProjects'}>
                      <a className={'navigation_link'}>
                        Проекты развития</a>
                    </Link>
                  </li>

                  {/*<li>*/}
                  {/*  <Link href={'/vacancies'} className={'navigation_link'} activeClassName='navigation_link__active'>*/}
                  {/*    Вакансии и стажировки*/}
                  {/*  </Link>*/}
                  {/*</li>*/}

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
                <div className='navigation_email'>
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
