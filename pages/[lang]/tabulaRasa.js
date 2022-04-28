import React, { useEffect, useState } from 'react'
import { Page } from '../../components/page'
import { Layout } from '../../components/layout'
import { SpeakerCard, SpeakerCards } from '../../components/speakerCard'
import { Partner } from '../../components/partner'
import { StrongText } from '../../components/strongText'
import { SchoolProject } from '../../components/schoolProject'
import { Helmet } from 'react-helmet'
import { getContentfulNews } from '../../helpers/axios'
import { useRouter } from 'next/dist/client/router'
import Translator from '../../i18n/translator'
import ContentfulNewsWidget from './news/contentfulNewsWidget'
import NewsSMIWidget from './newsSMI/newsSMIWidget'

export default function TabulaRasa({  data, modalForm  }) {
  const { query: {lang: lang} } = useRouter()
  const [allContentfulNews, setContentfulNews] = useState([])

  useEffect(() => {
    setContentfulNews(data)
  }, [])

  return (
    <Page>
      <Layout style={{
        backgroundImage: 'url(/img/gradients/tabula_gradient.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '110% -7%'
      }} modalFormText={modalForm}>
        <Helmet>
          <meta name="description" content='Tabula Rasa' />
          <meta name="keywords" content='Образовательный проект Центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
          <meta property="og:image" content="/img/appleIcon.png" />
          <meta property="og:url" content={`https://scitech.ru/tabulaRasa`} />
          <meta property="og:title" content='Tabula Rasa' />
          <meta property="og:description" content='Образовательный проект Центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
          <title>Tabula Rasa</title>
          <link rel="canonical" href={`https://scitech.ru/tabulaRasa`} />
        </Helmet>

        <div className='show content'>
          <div className='container relative'>
            <ul className='g3 zIndex'>
              <li className='i3_3'>
                <p className='asideMarker'>Образовательный проект</p>
              </li>
              <li className='i3_9'>
                <div className='titleHero'>
                  <h1>Tabula Rasa</h1>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className='show content'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'></li>
              <li className='i3_9 wrapper_borderTop zIndex'>
                <ul className='g3'>
                  <li className='i3_12 flex_between'>
                    <div>
                      <p className='asideMarker'>
                        <svg
                          width='14'
                          height='16'
                          viewBox='0 0 14 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M9.52047 6.33759C10.5813 5.37044 12.0158 4.06241 12.1466 0.9375H13.0938V0H0.90625V0.9375H1.85341C1.98416 4.06241 3.41872 5.37044 4.47953 6.33759C5.19112 6.98637 5.59375 7.38347 5.59375 8C5.59375 8.61653 5.19112 9.01363 4.47953 9.66241C3.41872 10.6296 1.98416 11.9376 1.85341 15.0625H0.90625V16H13.0938V15.0625H12.1466C12.0158 11.9376 10.5813 10.6296 9.52047 9.66241C8.80888 9.01363 8.40625 8.61653 8.40625 8C8.40625 7.38347 8.80888 6.98637 9.52047 6.33759ZM6.53125 11.5137C6.38647 11.5436 6.24344 11.587 6.10384 11.6448L3.23269 12.8329C3.70156 11.6407 4.45675 10.9518 5.11116 10.3552C5.84147 9.68937 6.53125 9.06047 6.53125 8V11.5137ZM8.88884 10.3552C9.54325 10.9518 10.2984 11.6407 10.7673 12.8328L7.89616 11.6447C7.75656 11.587 7.61353 11.5435 7.46875 11.5137V8C7.46875 9.06047 8.15853 9.68937 8.88884 10.3552ZM3.21622 3.125C2.98956 2.53441 2.83303 1.82131 2.79206 0.9375H11.2079C11.1669 1.82131 11.0104 2.53441 10.7837 3.125H3.21622Z'
                            fill='#02090F'
                          />
                        </svg>
                        Длительность — 2 года
                      </p>
                      <p className='raleway'>Ноябрь 2020 — Июнь 2021</p>
                    </div>
                    <div className='datePlace_place mt_low'>
                      <img src='/img/pin.svg' alt='icon' />
                      <div className='place_text'>
                        <p className='asideMarker asideMarker_place'>очно и дистанционно в zoom</p>
                      </div>
                    </div>
                    <div>
                      <p className="raleway">Прием заявок окончен</p>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className='show'>
          <div className='container'>
            <div className='content'>
              <ul className='g3'>
                <li className='i3_3'></li>
                <li className='i3_9'>
                  <h2>Итоги первого этапа отбора участников</h2>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <div className='result_numbers'>
                        <div className='result_item'>
                          <p className='bigNumber'>440</p>
                          <p className='number_description'>Заявок</p>
                        </div>
                        <div className='result_item'>
                          <p className='bigNumber'>47</p>
                          <p className='number_description'>Организаций участников</p>
                        </div>
                        <div className='result_item'>
                          <p className='bigNumber'>4</p>
                          <p className='number_description'>Человека на место</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='show wrapper_about content'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker'>о проекте</p>
              </li>
              <li className='i3_9 '>
                <em>
                  Образовательно-акселерационная программа по подготовке аспирантов к современным формам научной деятельности.
                </em>
                <ul className='g3'>
                  <li className='i3_6'>
                    <h4>Выполняем задачи университетов и институтов</h4>
                    <p className="mt_tiny">— Раннее выявление талантов;</p>
                    <p className="m0">— Гранты и статьи от молодежи;</p>
                    <p className="m0">— Вовлеченность и репутация;</p>
                    <p className="m0">— Эффективная аспирантура; </p>
                    <p className="m0">— Рост конкурентоспособности. </p>
                  </li>
                  <li className='i3_6'>
                    <h4>Помогаем аспирантам</h4>
                    <p className="mt_tiny">— Карьерное и личное развитие;</p>
                    <p className="m0">— Опыт статей и грантов;</p>
                    <p className="m0">— Рост ключевых компетенций;</p>
                    <p className="m0">— Networking и стажировки;</p>
                    <p className="m0">— Научные связи. Команда. </p>
                  </li>
                  <li className='i3_6'>
                    <h4>100 участников</h4>
                    <p className="mt_tiny">Конкурсный отбор из организаций участников Западно-Сибирского НОЦ и других вузов и научных
                      организаций. Мы ждём аспирантов 1-3 года обучения с мотивацией к развитию в науке, с опытом
                      участия в проектах, с умением ставить и достигать цели, работать в команде.  </p>
                  </li>
                  <li className='i3_6'>
                    <h4>Команда — источник изменений</h4>
                    <p className="mt_tiny">Мы развиваем и команду, и людей в групповых проектах и по индивидуальной программе развития.</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className='show wrapper_speakers content'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker'>операторы</p>
              </li>
              <li className='i3_9'>
                <ul className='g3'>
                  <li className='i3_4'>
                    <Partner
                      logo='/img/logo_noc.svg'
                      link="https://scitech.ru/"
                      name='Центр развития компетенций руководителей Западно-Сибирского НОЦ'
                      alt='Центр развития компетенций'
                      wide
                    ></Partner>
                  </li>
                  <li className='i3_4'>
                    <Partner
                      logo='/img/logo_tumen_gov.svg'
                      link="https://www.utmn.ru/"
                      name='Тюменский государственный университет'
                      alt='Тюменский государственный университет'
                      wide
                    ></Partner>
                  </li>
                  <li className='i3_4'>
                    <Partner
                      logo='/img/logo_surgu.svg'
                      link="http://www.surgu.ru/index"
                      name='Сургутский государственный университет'
                      alt='Сургутский государственный университет'
                      wide
                    ></Partner>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className='wrapper_partners content'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker'>Основная команда</p>
              </li>
              <li className='i3_9'>
                <SpeakerCards>
                  <SpeakerCard photo='/img/speaker_bezuevskaya.png' fullName='Безуевская Валерия' position="руководитель">
                    К. н., проректор по развитию СурГУ
                  </SpeakerCard>
                  <SpeakerCard order2 photo='/img/speaker_teslinov.png' fullName='Андрей Теслинов' position="научный руководитель">
                    Доктор технических наук, генеральный директор НКГ DBA — concept, Executive Professor ИБДА РАНХиГС
                  </SpeakerCard>
                  <SpeakerCard order4 photo='/img/speaker_latyshev.png' fullName='Андрей Латышев' position="идеолог">
                    Руководитель ЦРК, и.о. проректора по персоналу и организационному развитию ТюмГУ
                  </SpeakerCard>
                  <SpeakerCard order1 photo='/img/speaker_tereshcenko.png' fullName='Терещенко Владимир' position="руководитель проектной работы">
                    Директор ЦКИ СурГУ
                  </SpeakerCard>
                  <SpeakerCard order3 photo='/img/speaker_panteleeva.png' fullName='Пантелеева Ирина' position="руководитель проектной работы">
                    Исполнительный директор «Краевой фонд науки», обеспечение коммуникации
                  </SpeakerCard>
                </SpeakerCards>
              </li>
            </ul>
          </div>
        </div>

        <div className='show content'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker asideMarker_tiny'>отбор</p>
              </li>
              <li className='i3_9'>
                <h4>Отбор участников</h4>
                <p className="cursiv raleway m1"><StrongText> 28.10 - 5.11 (включительно)</StrongText> Первый этап отбора – участвует 427 человек</p>
                <p className="cursiv raleway m1"><StrongText> 5.11 - 8.11</StrongText> Работа по оценке эссе и конкурсных документов</p>
                <p className="cursiv raleway m1"> <StrongText>9.11 - 15.11 (включительно)</StrongText> Второй этап отбора – участвует до 250 человек</p>
                <p className="raleway m1">Участников ожидают:</p>
                <p className="raleway m0">– Онлайн интервью длительностью до 1 часа</p>
                <p className="raleway m0">– Обязательная регистрация в информационной системе цифрового профиля </p>
                <p className="raleway m0">– Прохождение тестирования по компетенциям и командным ролям</p>
                <p className="cursiv raleway m1"><StrongText>16.11  - 18.11 (включительно)</StrongText> Комиссия подводит итоги и объявляет список участников проекта – 120 человек</p>
                <p className="cursiv raleway m1"><StrongText>23.11 – 28.11</StrongText> Стартует первый модуль. Онлайн</p>
              </li>
              <li className='i3_3'>
                <p className='asideMarker asideMarker_tiny'>Модуль 1</p>
                <p className='asideMarker asideMarker_mt'>18.11–22.11</p>
              </li>
              <li className='i3_9'>
                <ul className='g3'>
                  <li className='i3_12'>
                    <ul className='g3'>
                      <li className='i3_12'>
                        <h4>Введение и формирование команд</h4>
                      </li>
                      <li className='i3_3'>
                        <p className="module_school">Оценка компетенций по модели LAUNCH </p>
                      </li>
                      <li className='i3_3'>
                        <p className="module_school">Формирование индивидуальных программ развития участников и команд </p>
                      </li>
                      <li className='i3_3'>
                        <p className="module_school">Тренинг «Целеполагание и личная эффективность молодого ученого в современном мире» </p>
                      </li>
                      <li className='i3_3'>
                        <p className="module_school">Подключение к демоверсии цифрового двойника исследователя  </p>
                      </li>
                      <li className='i3_12'>
                        <p className="cursiv raleway"><StrongText>Практика: </StrongText>межмодульная работа</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className='i3_3'>
                <p className='asideMarker asideMarker_tiny'>Модуль 2</p>
                <p className='asideMarker asideMarker_mt'>февраль, 2021</p>
              </li>
              <li className='i3_9'>
                <ul className='g3'>
                  <li className='i3_12'>
                    <ul className='g3'>
                      <li className='i3_12'>
                        <h4>Современные научные компетенции и этика ученого</h4>
                      </li>
                      <li className='i3_3'>
                        <p className="module_school">Тренинг «Работа с базами данных для повышения успеха научно-исследовательского проекта»</p>
                      </li>
                      <li className='i3_3'>
                        <p className="module_school">Академическое письмо</p>
                      </li>
                      <li className='i3_3'>
                        <p className="module_school">Современный научный протокол и этика научного исследования</p>
                      </li>
                      <li className='i3_12'>
                        <p className="cursiv raleway"><StrongText>А.Г. Теслинов: </StrongText>онлайн-мастерская системного подхода к исследованию сложной реальности  </p>
                      </li>
                      <li className='i3_12'>
                        <p className="cursiv raleway"><StrongText>Практика: </StrongText>уточнение параметров проекта с помощью наставника</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className='i3_3'>
                <p className='asideMarker asideMarker_tiny'>Модуль 3</p>
                <p className='asideMarker asideMarker_mt'>апрель 2021</p>
              </li>
              <li className='i3_9'>
                <ul className='g3'>
                  <li className='i3_12'>
                    <ul className='g3'>
                      <li className='i3_12'>
                        <h4>Грантовая деятельность и фандрайзинг</h4>
                      </li>
                      <li className='i3_12'>
                        <p className="cursiv raleway"><StrongText>А.Г. Теслинов: </StrongText>онлайн-мастерская системного подхода к исследованию сложной реальности  </p>
                      </li>
                      <li className='i3_12'>
                        <p className="cursiv raleway"><StrongText>Практика: </StrongText>межмодульная работа</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className='i3_3'>
                <p className='asideMarker asideMarker_tiny'>Модуль 4</p>
                <p className='asideMarker asideMarker_mt'>июнь 2021</p>
              </li>
              <li className='i3_9'>
                <ul className='g3'>
                  <li className='i3_12'>
                    <ul className='g3'>
                      <li className='i3_12'>
                        <h4>Управление проектами и знаниями в науке</h4>
                      </li>
                      <li className='i3_12'>
                        <p className="cursiv raleway"><StrongText>А.Г. Теслинов: </StrongText>онлайн-мастерская системного подхода к исследованию сложной реальности  </p>
                      </li>
                      <li className='i3_12'>
                        <p className="cursiv raleway"><StrongText>Практика: </StrongText>межмодульная работа</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className='i3_3'>
                <p className='asideMarker asideMarker_tiny'>Модуль 5</p>
                <p className='asideMarker asideMarker_mt'>сентябрь 2021</p>
              </li>
              <li className='i3_9'>
                <ul className='g3'>
                  <li className='i3_12'>
                    <ul className='g3'>
                      <li className='i3_12'>
                        <h4>Форсайт. Сети и коммуникации</h4>
                      </li>
                      <li className='i3_12'>
                        <p className="cursiv raleway"><StrongText>Практика: </StrongText>межмодульная работа</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className='i3_3'>
                <p className='asideMarker asideMarker_tiny'>Модуль 6</p>
                <p className='asideMarker asideMarker_mt'>ноябрь 2021</p>
              </li>
              <li className='i3_9'>
                <ul className='g3'>
                  <li className='i3_12'>
                    <ul className='g3'>
                      <li className='i3_12'>
                        <h4>Защита проектов 1 года. Заявки на гранты</h4>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className='i3_3'>
                <p className='asideMarker asideMarker_tiny'>Модуль 7</p>
                <p className='asideMarker asideMarker_mt'>февраль 2022</p>
              </li>
              <li className='i3_9'>
                <ul className='g3'>
                  <li className='i3_12'>
                    <ul className='g3'>
                      <li className='i3_12'>
                        <h4>Акселерация диссертационного исследования как успешный проект</h4>
                      </li>
                      <li className='i3_12'>
                        <p className="cursiv raleway"><StrongText>Практика: </StrongText>межмодульная работа</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className='i3_3'>
                <p className='asideMarker asideMarker_tiny'>Модуль 8</p>
                <p className='asideMarker asideMarker_mt'>апрель 2022</p>
              </li>
              <li className='i3_9'>
                <ul className='g3'>
                  <li className='i3_12'>
                    <ul className='g3'>
                      <li className='i3_12'>
                        <h4>Мастерская системного подхода к исследованию сложной реальности А.Г. Теслинова</h4>
                      </li>
                      <li className='i3_12'>
                        <p className="cursiv raleway"><StrongText>Практика: </StrongText>межмодульная работа, подготовка проектов, статей, заявок на гранты</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className='i3_3'>
                <p className='asideMarker asideMarker_tiny'>Модуль 9</p>
                <p className='asideMarker asideMarker_mt'>июнь 2022</p>
              </li>
              <li className='i3_9'>
                <ul className='g3'>
                  <li className='i3_12'>
                    <ul className='g3'>
                      <li className='i3_12'>
                        <h4>Финал: защиты проектов 2 года, карьерные решения, публикации исследований</h4>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="wrapper_partners content">
          <div className="container mb6">
            <ul className="g3">
              <li className="i3_3">
                <p className="asideMarker">Публикации СМИ</p>
              </li>
              <li className="i3_9">
                <SchoolProject>

                  {/*THESE ARE News from Contentful */}
                  <ContentfulNewsWidget isSMI={true} pageToShow={'tabulaRasa'} allContentfulNews={allContentfulNews} />

                  {/*THESE ARE News from website */}
                  <NewsSMIWidget pageToShow={'tabulaRasa'}/>

                </SchoolProject>
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </Page>
  )
}

export async function getServerSideProps(ctx) {
  const data = await getContentfulNews();
  const {current} = Translator("test", ctx.params.lang)
  return {
    props: { data: data.data, modalForm: current["modalForm"]  },
  }
}