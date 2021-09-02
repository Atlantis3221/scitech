import React, { useContext, useState } from 'react'
import { SpeakerCard, SpeakerCards } from '../../components/speakerCard'
import { Partner } from '../../components/partner'
import { DateItem, DateSwitcher } from '../../components/dateSwicher/dateSwicher'
import { Helmet } from 'react-helmet'
import { EventItem, EventItem_Container } from '../../components/eventItem'
import { useRouter } from 'next/dist/client/router'
import { Layout } from '../../components/layout'
import { Page } from '../../components/page'
import Translator from '../../i18n/translator'
import ModalsContext from '../../components/modals/ModalContext'
import { Button } from '../../components/button'
import Link from 'next/link'

const day16 =  (<div className="day" id="16">
  <div className="event">
    <h4>
      День 1. 16 сентября 2021 года. Четверг.
    </h4>
    <EventItem_Container>
      <EventItem date_add='08:30 — 09:00'
                 title='Приветственный кофе'>
      </EventItem>
      <EventItem date_add='09:00 — 09:15'
                 title='Открытие программы. Обращение к участникам'>
      </EventItem>
      <EventItem date_add='09:15 — 11:15'
                 title='Модуль 1.'>
        <span className="eventItem_title mt0">Создание и развитие карбоновых полигонов и других климатических проектов:
          национальный и международный опыт. От глобальных вызовов к стратегии и тактике для России</span><br/>
        Спикер: Николай Дмитриевич Дурманов
      </EventItem>
      <EventItem date_add='11:15 — 11:30'
                 title='Кофе-брейк'>
      </EventItem>
      <EventItem date_add='11:30 — 12:00'
                 title='Установка на проектную работу'>
        Вдовин Евгений // Латышев Андрей
      </EventItem>
      <EventItem date_add='12:00 — 14:00'
                 title='Проектная работа. Первый такт'>
      </EventItem>
      <EventItem date_add='14:00 — 14:30'
                 title='Обед'>
      </EventItem>
      <EventItem date_add='14:30 – 16:30'
                 title='Модуль 2.'>
        <span className="eventItem_title mt0">Перспективные климатические проекты, технологии и оборудование. Организационные,
          кадровые решения, нормативно-регуляторная рамка и взаимодействие с ключевыми стейкхолдерами</span><br/>
        Спикеры: Николай Дмитриевич Дурманов // Андрей Толстиков
      </EventItem>
      <EventItem date_add='16:30 — 16:45'
                 title='Кофе-брейк'>
      </EventItem>
      <EventItem date_add='16:45 — 18:00'
                 title='Проектная работа. Второй такт'>
      </EventItem>
      <EventItem date_add='18:00 — 20:00'
                 title='Пленарные доклады команд'>
      </EventItem>
      <EventItem date_add='20:00 — 21:00'
                 title='Международная открытая лекция онлайн (рабочий язык: английский)'>
      </EventItem>
    </EventItem_Container>
  </div>
</div>)

const day17 =  (<div className="day" id="17">
  <div className="event">
    <h4>
      День 2. 17 сентября 2021 года. Пятница.
    </h4>
    <EventItem_Container>
      <EventItem date_add='08:30 — 09:00'
                 title='Приветственный кофе'>
      </EventItem>
      <EventItem date_add='09:00 — 11:00'
                 title='Модуль 3.'>
        <span className="eventItem_title mt0">Зеленая повестка и устойчивое развитие как драйвер развития человеческого
          капитала регионов и трансформации экономики</span><br/>
        Спикеры: Сергей Зенин // Ольга Захарова // Неля Рахимова // Филимонова Ирина // Максим Титов
      </EventItem>
      <EventItem date_add='11:00 — 11:30'
                 title='Установка на проектную работу'>
        Вдовин Евгений // Латышев Андрей
      </EventItem>
      <EventItem date_add='11:30 — 11:45'
                 title='Кофе-брейк'>
      </EventItem>
      <EventItem date_add='11:45 — 14:00'
                 title='Проектная работа. Третий такт'>
      </EventItem>
      <EventItem date_add='14:00 — 14:30'
                 title='Обед'>
      </EventItem>
      <EventItem date_add='14:30 – 16:30'
                 title='Модуль 4.'>
        <span className="eventItem_title mt0">Разработка и испытание технологий контроля баланса климатически активных газов
          природных экосистем и технологий захвата углерода из атмосферы и его депонирования в почве: карбоновые полигоны и карбоновые фермы</span><br/>
        Спикер: Помогаев Виталий Михайлович
      </EventItem>
      <EventItem date_add='16:30 — 16:45'
                 title='Кофе-брейк'>
      </EventItem>
      <EventItem date_add='16:45 — 18:00'
                 title='Проектная работа. Четвертый такт'>
      </EventItem>
      <EventItem date_add='18:00 — 20:00'
                 title='Пленарные доклады команд'>
      </EventItem>
      <EventItem date_add='20:00 — 21:00'
                 title='Международная открытая лекция онлайн (рабочий язык: английский)'>
      </EventItem>
    </EventItem_Container>
  </div>
</div>)

const day18 =  (<div className="day" id="18">
  <div className="event">
    <h4>
      День 3. 18 сентября 2021 года. Суббота.
    </h4>
    <EventItem_Container>
      <EventItem date_add='08:30 — 09:00'
                 title='Приветственный кофе'>
      </EventItem>
      <EventItem date_add='09:00 — 11:00'
                 title='Модуль 5.'>
        <span className="eventItem_title mt0">Нормативно-регуляторная рамка климатических проектов на федеральном и региональном уровне.
          Практический опыт работы с региональными властями, полномочия региональных властей</span><br/>
        Спикер: Ирина Ведерникова
      </EventItem>
      <EventItem date_add='11:00 — 11:30'
                 title='Установка на проектную работу'>
        Вдовин Евгений // Латышев Андрей
      </EventItem>
      <EventItem date_add='11:30 — 11:45'
                 title='Кофе-брейк'>
      </EventItem>
      <EventItem date_add='11:45 — 14:00'
                 title='Проектная работа. Пятый такт'>
      </EventItem>
      <EventItem date_add='14:00 — 14:30'
                 title='Обед'>
      </EventItem>
      <EventItem date_add='14:30 – 16:30'
                 title='Модуль 6.'>
        <span className="eventItem_title mt0">Практические кейсы и технологии биосеквестрации парниковых газов. Проекты полного цикла</span><br/>
        Спикеры: Сергей Верховец // Андрей Толстиков
      </EventItem>
      <EventItem date_add='16:30 — 16:45'
                 title='Кофе-брейк'>
      </EventItem>
      <EventItem date_add='16:45 — 18:00'
                 title='Проектная работа. Шестой такт'>
      </EventItem>
      <EventItem date_add='18:00 — 20:00'
                 title='Пленарные доклады команд'>
      </EventItem>
      <EventItem date_add='20:00 — 21:00'
                 title='Международная открытая лекция онлайн (рабочий язык: английский)'>
      </EventItem>
    </EventItem_Container>
  </div>
</div>)

const day19 =  (<div className="day" id="19">
  <div className="event">
    <h4>
      День 4. 19 сентября 2021 года. Воскресенье.
    </h4>
    <EventItem_Container>
      <EventItem date_add='08:00 — 09:00'
                 title='Централизованный трансфер участников обучения на Карбоновый полигон Западно-Сибирского НОЦ в Тюменской области'>
      </EventItem>
      <EventItem date_add='09:00 — 11:00'
                 title='Модуль 7.'>
        <span className="eventItem_title mt0">Декарбонизация экономики, низкоуглеродное производство, углеродные рынки,
          бизнес возможности и новые индустрии</span><br/>
        Спикер: Сергей Анатольевич Твердохлеб
      </EventItem>
      <EventItem date_add='11:00 — 13:00'
                 title='Подготовка финальных докладов'>
      </EventItem>
      <EventItem date_add='13:00 — 14:00'
                 title='Обед'>
      </EventItem>
      <EventItem date_add='14:00 — 17:00'
                 title='Доклады проектов команд участников обучения перед панелью экспертов'>
      </EventItem>
      <EventItem date_add='17:00 — 18:30'
                 title='Торжественное закрытие программы и подведение итогов. Вручение удостоверений. Общение участников и экспертов'>
      </EventItem>
      <EventItem date_add='18:30 — 19:30'
                 title='Централизованный трансфер участников обучения в г. Тюмень'>
      </EventItem>
    </EventItem_Container>
  </div>
</div>)

const days = {
  '16': day16,
  '17': day17,
  '18': day18,
  '19': day19,
}

export default function StrategicEducationalIntensive({  current, modalForm  }) {
  const { query: {lang: lang} } = useRouter()
  const [day, setDay] = useState('16')
  const {modalService, setRegModalState} = useContext(ModalsContext)

  const openModal = () => {
    modalService.openModal("reg")
    setRegModalState({
      color: "red",
      inputs: ["participationType","name", "role", "company", "phone", "email", "amount", "confidential"],
      configName: "strategicEducationalIntensive",
      title: lang === 'ru'
        ? 'Зарегистрироваться на Стратегический образовательный интенсив'
        : 'Registration for the Strategic Educational Intensive'
    })
  }

  return (
    <Page>
      <Helmet>
        <meta name="description" content="Стратегический образовательный интенсив" />
        <meta name="keywords" content="Стратегический образовательный интенсив" />
        <meta property="og:image" content="/img/appleIcon.png" />
        <meta property="og:url" content="https://scitech.ru/strategicEducationalIntensive" />
        <meta property="og:title" content="Стратегический образовательный интенсив"/>
        <meta property="og:description" content="Стратегический образовательный интенсив" />
        <title>Стратегический образовательный интенсив</title>
        <link rel="canonical" href="https://scitech.ru/strategicEducationalIntensive" />
      </Helmet>

      <Layout modalFormText={modalForm}>
        <div className='show content'>
          <div className='container relative'>
            <div className='colorSpot colorSpot__red'></div>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker'>{current["Первый в России"]} <br/> стратегический <br/> образовательный <br/>интенсив</p>
              </li>
              <li className='i3_9'>
                <div className='titleHero'>
                  <h1>Практика создания и развития карбоновых полигонов и сопутствующих климатических проектов: кадры, технологии, оборудование</h1>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className='show content'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'></li>
              <li className='i3_9 wrapper_borderTop'>
                <ul className='g3'>
                  <li className='i3_12'>
                    <div className="schedule_box">
                      <div className="schedule_date">
                        <p className="date_day">16</p>
                        <div className="date_wrapper">
                          <span className={`date_month 'date_month__wide'`}>Сен 2021</span>
                        </div>
                        <div className="sting">-</div>
                        <div className="schedule_date">
                          <p className="date_day">19</p>
                          <span className={`date_month date_month__wide'}`}>Сен 2021</span>
                        </div>
                      </div>

                      <div className="schedule_place ">
                        <div className={`place_text place_text_tiny`} style={{ maxWidth: '13rem' }}>
                          <div className="place_text_icon">
                            <img loading="lazy" src='/img/pin.svg' alt='icon'/>
                            <p className="schedule_time__tiny mt0">г. Тюмень. Оффлайн</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <Button red onClick={openModal}>{current["Зарегистрироваться"]}</Button>
                      </div>
                    </div>
                  </li>
                </ul>
                <p>
                    <a href="/docs/Strategic_Educational_Intensive.pptx" className="link_event" target="_blank">Скачать презентацию
                      <svg
                        width='12'
                        height='12'
                        viewBox='0 0 12 12'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        style={{ marginLeft: '0.5rem' }}
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M9.79972 3.68412L1.56172 11.8591L0.14209 10.4503L8.45638 2.19965L1.33524 2.19965L1.33524 0.199646L10.7997 0.199646L11.7997 0.199646V1.19965L11.7997 10.5789H9.79972L9.79972 3.68412Z'
                          fill='#E62C2C'
                        />
                      </svg>
                    </a>
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className='show wrapper_speakers content'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker'>Организаторы обучения</p>
              </li>
              <li className='i3_9'>
                <ul className='g3'>
                  <li className='i3_4'>
                    <Partner
                      logo='/img/logo_tumen_gov.svg'
                      link="https://www.utmn.ru/"
                      name={`Тюменский государственный университет`}
                      alt='Тюменский Государственный университет'
                    ></Partner>
                  </li>
                  <li className='i3_4'>
                    <Partner
                      logo='/img/NSU_logo.svg'
                      link="https://www.nsu.ru/n/"
                      name={`Новосибирский государственный университет`}
                      alt='Новосибирский Государственный университет'
                    ></Partner>
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
                <p className='asideMarker'>Стратегические партнеры</p>
              </li>
              <li className='i3_9'>
                <ul className='g3'>
                  <li className='i3_4'>
                    <Partner
                      logo='/img/SIBUR_logo.svg'
                      link="https://www.sibur.ru/"
                      name='ПАО «СИБУР»'
                      alt='ПАО «СИБУР»'
                      wide
                    ></Partner>
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
                <p className='asideMarker'>Оператор программы:</p>
              </li>
              <li className='i3_9'>
                <ul className='g3'>
                  {/*todo: add link*/}
                  <li className='i3_4'>
                    <Partner
                      logo='/img/sibnoc_black.svg'
                      link=""
                      name='АНО «Агентство развития научно-образовательных проектов Тюменской области»'
                      alt='АНО «Агентство развития научно-образовательных проектов Тюменской области»'
                      wide
                    ></Partner>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className='show wrapper_about content'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker'>Об интенсиве</p>
              </li>
              <li className='i3_9'>
                <p>
                  Стратегический образовательный интенсив (СОИ) организован как насыщенная образовательная программа, в
                  которой семинары и мастерские от ведущих экспертов дополняются сквозной проектной работой, организованной
                  в командах участников обучения. В финале программы слушатели проводят презентацию своего проекта перед
                  представителями органов государственной власти, индустриальных компаний и венчурных фондов, в том числе
                  с целью установить стратегические межрегиональные партнерства и привлечь дополнительное финансирование
                  для своих проектов.
                </p>
                <p>
                  <b>Целевая аудитория программы</b> – индивидуальные участники и команды, представляющие действующие и
                  перспективные карбоновые полигоны, климатические проекты, а также представители индустриальных компаний,
                  ответственные за развитие и внедрение «зеленых» технологий и проектов.
                </p>
                <p>Организаторы ожидают, что команды, представляющие различные регионы РФ, глубоко проработают в своем
                  проекте за время интенсивного обучения 4 темы:</p>
                <p>
                  1. Выяснят, как климатическая повестка и смена энергетического уклада скажутся на регионе, а также
                  как изменятся традиционные отрасли региона, какие отрасли пострадают сильнее всего. Как изменится энергетика
                  региона и какие решения могут быть приняты для повышения конкурентоспособности региональной экономики в этом аспекте.
                </p>
                <p>
                  2. Проведут проработку предложений по стратегическим ставкам для региона, власти, бизнеса и общества.
                  Ответят на вопросы, какие возможности открывают эти ставки и какие проблемы решают. Определят роль климатического
                  полигона в этих ставках и проработают перечень акторов, заинтересованных лиц и стейкхолдеров для развития
                  ключевых политик нового энергоперехода - экологической, социальной, а также человеческого капитала.
                </p>
                <p>
                  3. Сформулируют обязательства и ключевые показатели эффективности полигонов для власти и бизнеса в связи
                  со сделанными стратегическими ставками. Ответят на вопрос, какие ещё активности (в первую очередь
                  общественно-социальные) необходимо развивать в связи с климатической повесткой.
                </p>
                <p>
                  4. Разработают перечень конкретных бизнес-кейсов и решений, которые позволят обеспечить коммерциализацию
                  климатических проектов и прикладных научных исследований в интересах регионов присутствия.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className='wrapper_partners content'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker'>Генеральные эксперты</p>
              </li>
              <li className='i3_9'>
                <SpeakerCards>
                  <SpeakerCard photo='/img/durmanov.png' fullName='Николай Дмитриевич Дурманов'>
                    Специальный представитель Министерства науки и высшего образования РФ по вопросам биологической и
                    экологической безопасности, доктор медицинских наук, ведущий эксперт программы
                  </SpeakerCard>
                  <SpeakerCard photo='/img/tolstikov.png' fullName='Андрей Толстиков'>
                    Первый проректор ТюмГУ, руководитель проекта создания и функционирования карбонового полигона
                    Западно-Сибирского НОЦ в Тюменской области, кандидат биологических наук, научный руководитель программы
                  </SpeakerCard>
                  <SpeakerCard photo='/img/kuzyakov.png' fullName='Яков Викторович Кузяков'>
                    Заведующий кафедрами агропочвоведения и почв экосистем умеренных широт Университета Гёттингена,
                    Германия. Руководитель проекта "CarboRus" (2021-2023 гг.) по мегагранту Правительства РФ, проекта
                    "TerrArctic" (2020-2024 гг.) по мегагранту ЗапСибНОЦ Правительства Тюменской области
                  </SpeakerCard>
                </SpeakerCards>
              </li>
            </ul>
          </div>
        </div>

        <div className='wrapper_partners content'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker'>Эксперты</p>
              </li>
              <li className='i3_9'>
                <SpeakerCards>
                  <SpeakerCard photo='/img/speaker_latyshev.png' fullName='Андрей Латышев'>
                    Проректор ТюмГУ, руководитель Центра развития компетенций руководителей научных, научно-технических
                    проектов и лабораторий межрегионального Западно-Сибирского НОЦ, координатор коммуникаций с индустриальными
                    партнерами в рамках проекта создания и функционирования карбонового полигона Западно-Сибирского НОЦ в
                    Тюменской области, руководитель программы, модератор
                  </SpeakerCard>
                  <SpeakerCard photo='/img/vdovin.jpg' fullName='Евгений Вдовин'>
                    Зам. директора по научной работе Института математики им. С. Л. Соболева СО РАН, директор Математического
                    центра в Академгородке (НГУ + ИМ СО РАН), доктор физико-математических наук, руководитель проектной работы на программе
                  </SpeakerCard>
                  <SpeakerCard photo='/img/vederniko.png' fullName='Ирина Ведерникова '>
                    Директор Сахалинского климатического центра, эксперт программы
                  </SpeakerCard>
                  <SpeakerCard photo='/img/verhovec.png' fullName='Сергей Верховец'>
                    Директор Проектного офиса НОЦ мирового уровня «Енисейская Сибирь» (Первый климатический НОЦ)
                  </SpeakerCard>
                  <SpeakerCard photo='/img/zenin.png' fullName='Сергей Зенин '>
                    Директор Института государства и права, проректор ТюмГУ, кандидат юридических наук, эксперт программы, модератор
                  </SpeakerCard>
                  <SpeakerCard photo='/img/pomogeav.png' fullName='Виталий Помогаев'>
                    Проректор по экономике и информатизации Омского ГАУ им. П. А. Столыпина, кандидат экономических наук,
                    руководитель проекта Омского НОЦ «Оценка экологических отпечатков и расчет карбоновых тарифов», руководитель
                    проекта «Карбоновый полигон Омского ГАУ», эксперт программы
                  </SpeakerCard>
                  <SpeakerCard photo='/img/filimonove.jpg' fullName='Ирина Филимонова'>
                    Руководитель Центра экономики недропользования нефти и газа ИНГГ СО РАН, доктор экономических наук,
                    профессор, эксперт программы
                  </SpeakerCard>
                  <SpeakerCard photo='/img/titov_m.jpg' fullName='Максим Титов'>
                    Исполнительный директор исследовательского центра энергетической политики и международных отношений
                    (ИЦ ЭНЕРПО) Европейского университета в Санкт-Петербурге
                  </SpeakerCard>
                  <SpeakerCard photo='/img/harhordin.jpg' fullName='Олег Хархордин'>
                    Доктор философии (Ph.D, 1996, University of California, Berkeley), профессор факультета политических
                    наук Европейского университета в Санкт-Петербурге (ЕУСПб), основатель и руководитель исследовательского
                    центра Res Publica (ЕУСПб), специалист в области политической философии. <br/>
                    Лекция в программе: «Контракт с природой. Философия климата и человека»
                  </SpeakerCard>
                  <SpeakerCard photo='/img/luksha.jpg' fullName='Павел Лукша'>
                    к.э.н., профессор практики Московской школы управления СКОЛКОВО, эксперт Центра трансформации образования
                    СКОЛКОВО (SEDeC). Основатель инициативы Global Education
                    Futures. Автор методики Rapid Foresight, сооснователь и программный директор Форсайт-флота. <br/>
                    Лекция в программе: «Переход к регенеративной экономике как ставка для России»
                  </SpeakerCard>
                </SpeakerCards>
              </li>
            </ul>
          </div>
        </div>

        <div className='wrapper_partners content'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker'>Международные лекции</p>
              </li>
              <li className='i3_9'>
                <SpeakerCards>
                  <SpeakerCard fullName='Рафик Ислам'>
                    Профессор, директор Программы почвенных, водных и биоэнергетических ресурсов Университета штата Огайо
                    (США), руководитель проекта UniVIP ТюмГУ и Университета штата Огайо по гранту Американских Советов по
                    международному образованию
                  </SpeakerCard>
                  <SpeakerCard fullName='Отто Клемм'>
                    Профессор , руководитель группы климатологии, Институт наук о Земле, Вестфальский университет имени
                    Вильгельма, г. Мюнстер, Германия
                  </SpeakerCard>
                  <SpeakerCard fullName='Питер Фулé'>
                    Профессор, зав. лабораторией по изучению пожаров, климата и лесов, Институт лесоведения, Университет Северной Аризоны, г. Флагстафф (США)
                  </SpeakerCard>
                </SpeakerCards>
              </li>
            </ul>
          </div>
        </div>

        <div className='wrapper_program content'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker'>программа</p>
              </li>
              <li className='i3_9'>
                <DateSwitcher>
                  <DateItem active={day === '16'} onClick={e => setDay('16')} date={'16'} month={'сен'} />
                  <DateItem active={day === '17'} onClick={e => setDay('17')} date={'17'} month={'сен'} />
                  <DateItem active={day === '18'} onClick={e => setDay('18')} date={'18'} month={'сен'} />
                  <DateItem active={day === '19'} onClick={e => setDay('19')} date={'19'} month={'сен'} />
                </DateSwitcher>
                <br />
                <div className='days'>{days[day]}</div>
              </li>
            </ul>
          </div>
        </div>

        <div className='show wrapper_price content'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker'>ОРГАНИЗАЦИОННАЯ <br/> ИНФОРМАЦИЯ</p>
              </li>
              <li className='i3_9'>
                <p>По итогам программы участники обучения получат два удостоверения о повышении квалификации 52 часа от Тюменского
                  государственного университета и 38 часов от Новосибирского государственного университета.</p>
                <p>Проекты, получившие наиболее высокие оценки панели экспертов, получат памятные дипломы образовательного интенсива.</p>
                <p>Все участники обучения получат доступ к материалам
                  <a href="/docs/Strategic_Educational_Intensive.pdf" target="_blank" > I Международной научно-практической конференции
                  «Экосистемы будущего»</a>
                </p>
                <p>Участие в обучении предусматривает обязательную проектную работу. Проектная работа может быть организована
                  в сборных группах или в группе от одной организации региона.</p>
                <p>Стоимость участия в программе:</p>
                <p>– для 1 человека: 75 тыс. рублей.</p>
                <p>– для команды 5–7 человек от одной организации: 275 тыс. рублей.</p>
                <p>Количество мест в программе ограничено.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className='show'>
          <div className='container'>
            <div className='content'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'>Контактное лицо <br/> по всем вопросам</p>
                </li>
                <li className='i3_9'>
                  <div className="speakerCard">
                    <div className="card_photo">
                      <img src="/img/speaker_latyshev.png" alt="avatar" />
                    </div>
                    <div className="card_text">
                      <p className="card_title">
                        Латышев Андрей
                      </p>
                      <div className="socials">
                        <a href="mailto:a.s.latyshev@utmn.ru" className="socials_mail"></a>
                        <a href="tel:+7 905 089 67 47" className="socials_phone"></a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='wrapper_partners content' style={{ display: 'none' }}>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker'>Группа Модераторов</p>
              </li>
              <li className='i3_9'>
                <SpeakerCards>
                  <SpeakerCard photo='/img/speaker_latyshev.png' fullName='Андрей Латышев'>
                    Проректор ТюмГУ, руководитель Центра развития компетенций руководителей научных, научно-технических
                    проектов и лабораторий межрегионального Западно-Сибирского НОЦ, координатор коммуникаций с индустриальными
                    партнерами в рамках проекта создания и функционирования карбонового полигона Западно-Сибирского НОЦ в
                    Тюменской области, руководитель программы, модератор
                  </SpeakerCard>
                  <SpeakerCard photo='/img/zenin.png' fullName='Сергей Зенин'>
                    Директор Института государства и права, проректор ТюмГУ, кандидат юридических наук, эксперт программы, модератор
                  </SpeakerCard>
                  <SpeakerCard photo='/img/orlov.png' fullName='Сергей Орлов'>
                    Директор центра «Цифровой университет», доцент кафедры прикладной аэромеханики Физико-технического
                    факультета Томского государственного университета, кандидат физико-математических наук, модератор
                  </SpeakerCard>

                  {/*<SpeakerCard fullName='Ольга Яковлева'>*/}
                  {/*  начальник пресс-службы НГУ*/}
                  {/*</SpeakerCard>*/}
                  {/*<SpeakerCard fullName='Дмитрий Чуркин'>*/}
                  {/*  проректор по науке НГУ, куратор климатического центра НГУ*/}
                  {/*</SpeakerCard>*/}
                  {/*<SpeakerCard fullName='Сергей Ти'>*/}
                  {/*  помощник главного ученого секретаря СО РАН, программный директор Ассоциации выпускников "Союз НГУ"*/}
                  {/*</SpeakerCard>*/}
                </SpeakerCards>
              </li>
            </ul>
          </div>
        </div>

        <div className='show'>
          <div className='container'>
            <div className='content mb6'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'>Заявка на обучение</p>
                </li>
                <li className='i3_9'>
                  <div className="schedule_button">
                      <div className='registerEventForm'>
                        <Button red onClick={openModal}>{current["Зарегистрироваться"]}</Button>
                      </div>
                  </div>
                  <p style={{ marginTop: '3rem' }}>
                    <a className="link_event"
                       href="/docs/Strategic_Educational_Intensive.pptx" download>Скачать презентацию
                      <svg
                        width='12'
                        height='12'
                        viewBox='0 0 12 12'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        style={{ marginLeft: '0.5rem' }}
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M9.79972 3.68412L1.56172 11.8591L0.14209 10.4503L8.45638 2.19965L1.33524 2.19965L1.33524 0.199646L10.7997 0.199646L11.7997 0.199646V1.19965L11.7997 10.5789H9.79972L9.79972 3.68412Z'
                          fill='#E62C2C'
                        />
                      </svg>
                    </a>
                  </p>
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
  const {current} = Translator("test", ctx.params.lang)

  return {
    props: { current: current["test"], modalForm: current["modalForm"]  },
  }
}
