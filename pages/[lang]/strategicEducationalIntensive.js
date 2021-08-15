import React, { useState } from 'react'
import { SpeakerCard, SpeakerCards } from '../../components/speakerCard'
import { Partner } from '../../components/partner'
import { DateItem, DateSwitcher } from '../../components/dateSwicher/dateSwicher'
import { Schedule } from '../../components/schedule'
import { Helmet } from 'react-helmet'
import { EventItem, EventItem_Container } from '../../components/eventItem'
import { useRouter } from 'next/dist/client/router'
import { Layout } from '../../components/layout'
import { Page } from '../../components/page'


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
                 title='Лекция 1.'>
        <p className="eventItem_title mt0">Создание и развития карбоновых полигонов и других климатических проектов
          национальный и международный опыт. От глобальных вызовов к стратегии и тактике для России.</p>
        Спикер. Николай Дмитриевич Дурманов
      </EventItem>
      <EventItem date_add='11:15 — 11:30'
                 title='Кофе-брейк'>
      </EventItem>
      <EventItem date_add='11:30 — 12:00'
                 title='Установка на проектную работу'>
        Вдовин Евгений // Латышев Андрей
      </EventItem>
      <EventItem date_add='12:00 — 14:00'
                 title='Проектная работа. Первый такт.'>
      </EventItem>
      <EventItem date_add='14:00 — 14:30'
                 title='Обед'>
      </EventItem>
      <EventItem date_add='14:30 – 16:30'
                 title='Лекция 2.'>
        <p className="eventItem_title mt0">Перспективные климатические проекты, технологии и оборудование. Организационные,
          кадровые решения, нормативно-регуляторная рамка и взаимодействие с ключевыми стейкхолдерами</p>
        Спикеры. Николай Дмитриевич Дурманов // Андрей Толстиков
      </EventItem>
      <EventItem date_add='16:30 — 16:45'
                 title='Кофе-брейк'>
      </EventItem>
      <EventItem date_add='16:45 — 18:00'
                 title='Проектная работа. Второй такт.'>
      </EventItem>
      <EventItem date_add='18:00 — 20:00'
                 title='Пленарные доклады команд'>
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
                 title='Лекция 3.'>
        <p className="eventItem_title mt0">Зеленая повестка и устойчивое развитие как драйвер развития человеческого
          капитала регионов и трансформации экономики.</p>
        Сергей Зенин // Ольга Захарова // Неля Рахимова // Филимонова Ирина
      </EventItem>
      <EventItem date_add='11:00 — 11:30'
                 title='Установка на проектную работу'>
        Вдовин Евгений // Латышев Андрей
      </EventItem>
      <EventItem date_add='11:30 — 11:45'
                 title='Кофе-брейк'>
      </EventItem>
      <EventItem date_add='11:45 — 14:00'
                 title='Проектная работа. Третий такт.'>
      </EventItem>
      <EventItem date_add='14:00 — 14:30'
                 title='Обед'>
      </EventItem>
      <EventItem date_add='14:30 – 16:30'
                 title='Лекция 4.'>
        <p className="eventItem_title mt0">Направления деятельности карбоновых полигонов и типовые участники
          «производственной цепочки» климатических проектов: карбоновые станции, фермы, заводы по переработки биомассы и др.</p>
        Спикеры. Помогаев Виталий Михайлович
      </EventItem>
      <EventItem date_add='16:30 — 16:45'
                 title='Кофе-брейк'>
      </EventItem>
      <EventItem date_add='16:45 — 18:00'
                 title='Проектная работа. Второй такт.'>
      </EventItem>
      <EventItem date_add='18:00 — 20:00'
                 title='Пленарные доклады команд'>
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
                 title='Лекция 5.'>
        <p className="eventItem_title mt0"> Нормативно-регуляторная рамка климатических проектов на федеральном и региональном
          уровне. Практический опыт работы с региональными властями, полномочия региональных властей.</p>
        Спикер. Ирина Ведерникова
      </EventItem>
      <EventItem date_add='11:00 — 11:30'
                 title='Установка на проектную работу'>
        Вдовин Евгений // Латышев Андрей
      </EventItem>
      <EventItem date_add='11:30 — 11:45'
                 title='Кофе-брейк'>
      </EventItem>
      <EventItem date_add='11:45 — 14:00'
                 title='Проектная работа. Третий такт.'>
      </EventItem>
      <EventItem date_add='14:00 — 14:30'
                 title='Обед'>
      </EventItem>
      <EventItem date_add='14:30 – 16:30'
                 title='Лекция 6.'>
        <p className="eventItem_title mt0">Практические кейсы и технологии биосеквестрации парниковых газов. Проекты полного цикла.</p>
        Спикеры. Сергей Верховец // Андрей Толстиков
      </EventItem>
      <EventItem date_add='16:30 — 16:45'
                 title='Кофе-брейк'>
      </EventItem>
      <EventItem date_add='16:45 — 18:00'
                 title='Проектная работа. Второй такт.'>
      </EventItem>
      <EventItem date_add='18:00 — 20:00'
                 title='Пленарные доклады команд'>
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
                 title='Лекция 7.'>
        <p className="eventItem_title mt0">Декарбонизация экономики, низкоуглеродное производство, углеродные рынки,
          бизнес возможности и новые индустрии.</p>
        Спикер. Сергей Анатольевич Твердохлеб
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
                 title='Торжественное закрытие программы и подведение итогов. Вручение удостоверений. Общение участников и экспертов.'>
      </EventItem>
      <EventItem date_add='18:30 — 19:30'
                 title='Централизованный трансфер участников обучения в г. Тюмень.'>
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

export default function StrategicEducationalIntensive(props) {
  const { query: {lang: lang} } = useRouter()
  const [day, setDay] = useState('16')

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

      <Layout>
        <div className='show content'>
          <div className='container relative'>
            <div className='colorSpot colorSpot__red'></div>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker'>Первый в России,   <br/> стратегический образовательный <br/>интенсив</p>
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
                    {/*TODO: переделать на общую форму*/}
                    <Schedule  dataFirst={[16, 'Сен 2021']}
                               dataSecond={[19, 'Сен 2021']}
                               place={'г. Тюмень. Очная программа обучения. '}
                               isShowButton={true}
                               showSituation={true}
                               showOrganizationField={true}
                               hideParticipant={false}
                               showAdditionalNameFields={true}
                               eventTitle="Зарегистрироваться на Стратегический образовательный интенсив."
                               eventLinkToTable="strategicEducationalIntensive"
                               eventType={'strategicEducationalIntensive'}
                    />
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
                <p className='asideMarker'>Организаторы обучения</p>
              </li>
              <li className='i3_9'>
                <ul className='g3'>
                  {/*<li className='i3_4'>*/}
                  {/*  <Partner*/}
                  {/*    logo='/img/?.svg'*/}
                  {/*    link=""*/}
                  {/*    name='АНО «Агентство развития научно-образовательных проектов Тюменской области»'*/}
                  {/*    alt='АНО «Агентство развития научно-образовательных проектов Тюменской области»'*/}
                  {/*    wide*/}
                  {/*  ></Partner>*/}
                  {/*</li>*/}
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
                      logo='/img/NSU_logo.svg'
                      link="https://www.nsu.ru/n/"
                      name='Новосибирский Государственный Университет'
                      alt='Новосибирский Государственный Университет'
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
                  {/*<li className='i3_4'>*/}
                  {/*  <Partner*/}
                  {/*    logo='/img/?.svg'*/}
                  {/*    link="https://minobrnauki.gov.ru/"*/}
                  {/*    name='Министерство науки и высшего образования РФ'*/}
                  {/*    alt='Министерство науки и высшего образования РФ'*/}
                  {/*    wide*/}
                  {/*  ></Partner>*/}
                  {/*</li>*/}
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
                      logo='/img/ano_logo.svg'
                      link=""
                      // name='АНО «Агентство развития научно-образовательных проектов Тюменской области»'
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
                  Стратегический образовательный интенсив (СОИ) организован как насыщенная образовательная программа,
                  в которой семинары и мастерские от ведущих экспертов дополняются сквозной проектной работой, организованной
                  в командах участников обучения. В финале программы слушатели проводят презентацию своего проекта перед
                  представителями органов государственной власти, индустриальных компаний и венчурных фондов, в том числе
                  с целью установить стратегические межрегиональные партнерства и привлечь дополнительное финансирование
                  в свои проекты.
                </p>
                <p>
                  <b>Целевая аудитория программы</b> – лица и команды, представляющие действующие и перспективные карбоновые
                  полигоны, климатические проекты, а также представители индустриальных компаний ответственные за развитие
                  и внедрение «зеленых» технологий и проектов.
                </p>
                <p>Организаторы ожидают, что команды представляющие различные регионы РФ глубоко проработают в своем
                  проекте за время интенсивного обучения 4 вопроса:</p>
                <p>
                  1. Как климатическая повестка и смена энергетического уклада скажутся на регионе, как изменятся
                  традиционные отрасли региона, какие отрасли пострадают сильнее всего. Как изменится энергетика региона и
                  какие решения могут быть приняты для повышения конкурентоспособности региональной экономики в этом аспекте.
                </p>
                <p>
                  2. Проведут проработку предложений по стратегическим ставкам для региона, власти, бизнеса и общества.
                  Ответят на вопросы, какие возможности открывают эти ставки и какие проблемы решат. Определят роль
                  климатического полигона в этих ставках и проработают перечень акторов, заинтересованных лиц и стейкхолдеров
                  для развития ключевых политик нового энергоперехода: экологической, социальной, человеческого капитала.
                </p>
                <p>
                  3. Сформулируют обязательства и ключевые показатели эффективности полигонов для власти и бизнеса в связи
                  с сделанными стратегическими ставками. Ответят на вопрос какие ещё активности (в первую очередь общественно-социальные)
                  необходимо развивать в связи с климатической повесткой.
                </p>
                <p>
                  4. Разработают перечень конкретных бизнес-кейсов и решений, которые позволят обеспечить коммерциализацию
                  климатических проектов и прикладных научных исследований в интересах регионов присутствия.
                </p>
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

        <div className='wrapper_partners content'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker'>Эксперты</p>
              </li>
              <li className='i3_9'>
                <SpeakerCards>
                  <SpeakerCard photo='/img/durmanov.png' fullName='Николай Дмитриевич Дурманов'>
                    Специальный представитель Министерства науки и высшего образования РФ по вопросам биологической и
                    экологической безопасности, доктор медицинских наук, ведущий эксперт программы.
                  </SpeakerCard>
                  <SpeakerCard photo='/img/tolstikov.png' fullName='Андрей Толстиков'>
                    Первый проректор ТюмГУ, Руководитель проекта создания и функционирования карбонового полигона
                    Западно-Сибирского НОЦ в Тюменской области, кандидат биологических наук, научный руководитель программы.
                  </SpeakerCard>
                  {/*<SpeakerCard photo='/img/?.png' fullName='Сергей Анатольевич Твердохлеб '>*/}
                  {/*  -*/}
                  {/*</SpeakerCard>*/}
                  <SpeakerCard photo='/img/speaker_latyshev.png' fullName='Андрей Латышев'>
                    Проректор ТюмГУ, Руководитель центра развития компетенций руководителей научных, научно-технических
                    проектов и лабораторий, координатор коммуникаций с индустриальными партнерами в рамках проекта создания и
                    функционирования карбонового полигона Западно-Сибирского НОЦ в Тюменской области, руководитель программы, модератор.
                  </SpeakerCard>
                  <SpeakerCard photo='/img/vdovin.png' fullName='Евгений Вдовин'>
                    Зам. директора по научной работе ИМ СО РАН, директор Математического центра в Академгородке (НГУ + ИМ СО РАН),
                    доктор физико-математических наук, руководитель проектной работы на программе
                  </SpeakerCard>
                  <SpeakerCard photo='/img/vederniko.png' fullName='Ирина Ведерникова '>
                    Директор Сахалинского климатического центра, эксперт программы
                  </SpeakerCard>
                  <SpeakerCard photo='/img/verhovec.png' fullName='Сергей Верховец'>
                    Директор Института лесных технологий, СибГУ им. Решетнева,  кандидат сельскохозяйственных наук, куратор
                    проекта по установке вышки Zotto, мониторингу баланса ПГ и получению карбоновых кредитов для Русал
                  </SpeakerCard>
                  <SpeakerCard photo='/img/zenin.png' fullName='Сергей Зенин '>
                    Директор Института государства и права, проректор ТюмГУ, кандидат юридических наук, эксперт программы, модератор.
                  </SpeakerCard>
                  <SpeakerCard photo='/img/pomogeav.png' fullName='Помогаев Виталий '>
                    Проректор по экономике и информатизации ОМГАУ им. П.А. Столыпина, эксперт программы.
                  </SpeakerCard>
                  <SpeakerCard photo='/img/filimonove.png' fullName='Филимонова Ирина Викторовна'>
                    Доктор экономических наук, профессор, руководитель Центра экономики недропользования нефти и газа ИНГГ
                    СО РАН, эксперт программы.
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
                <p className='asideMarker'>Группа Модераторов </p>
              </li>
              <li className='i3_9'>
                <SpeakerCards>
                  <SpeakerCard photo='/img/speaker_latyshev.png' fullName='Андрей Латышев'>
                    Проректор ТюмГУ, Руководитель центра развития компетенций руководителей научных, научно-технических
                    проектов и лабораторий, координатор коммуникаций с индустриальными партнерами в рамках проекта создания и
                    функционирования карбонового полигона Западно-Сибирского НОЦ в Тюменской области, руководитель программы, модератор.
                  </SpeakerCard>
                  <SpeakerCard photo='/img/vdovin.png' fullName='Евгений Вдовин'>
                    Зам. директора по научной работе ИМ СО РАН, директор Математического центра в Академгородке (НГУ + ИМ СО РАН),
                    доктор физико-математических наук, руководитель проектной работы на программе
                  </SpeakerCard>
                  <SpeakerCard photo='/img/zenin.png' fullName='Сергей Зенин '>
                    Директор Института государства и права, проректор ТюмГУ, кандидат юридических наук, эксперт программы, модератор.
                  </SpeakerCard>
                  {/*<SpeakerCard photo='/img/?.png' fullName='Сергей Орлов '>*/}
                  {/*  -*/}
                  {/*</SpeakerCard>*/}
                </SpeakerCards>
              </li>
            </ul>
          </div>
        </div>

        <div className='show wrapper_price content'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker'>ОРГАНИЗАЦИОННАЯ ИНФОРМАЦИЯ</p>
              </li>
              <li className='i3_9'>
                <p>По итогам СОИ участники обучения получат удостоверения о повышении квалификации 36 часов от Тюменского
                  государственного университета и Новосибирского государственного университета.</p>
                <p>Участие в обучении предусматривает обязательную проектную работу, проектная работа может быть организована
                  в сборных группах или в группе от одной организации региона.</p>
                <p>Стоимость участия в программе</p>
                <p>– для 1 человека, 50 тыс. рублей.</p>
                <p>– для команды 5 – 7 человек от одной организации, 200 тыс. рублей.</p>
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
                  <p className='asideMarker'>Контактное лицо по всем вопросам:</p>
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

        <div className='show'>
          <div className='container'>
            <div className='content mb6'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'>Заявка на обучение:</p>
                </li>
                <li className='i3_9'>
                  <div className="schedule_button">
                      <div className='registerEventForm'>
                        {/*Todo: add registration form as above the page*/}
                        {/*<Modal*/}
                        {/*  Trigger={props => (*/}
                        {/*    <Button red onClick={props.onClick}>Зарегистрироваться</Button>*/}
                        {/*  )}*/}
                        {/*  Content={props => (*/}
                        {/*    <div>*/}
                        {/*      <div className='registerEventForm_title'>*/}
                        {/*        Зарегистрироваться на Стратегический образовательный интенсив.*/}
                        {/*      </div>*/}
                        {/*      <RegisterEventForm*/}
                        {/*        showSituation={true}*/}
                        {/*        showOrganizationField={true}*/}
                        {/*        hideParticipant={false}*/}
                        {/*        showAdditionalNameFields={true}*/}
                        {/*        eventTitle="Зарегистрироваться на Стратегический образовательный интенсив."*/}
                        {/*        eventLinkToTable="strategicEducationalIntensive"*/}
                        {/*        eventType={'strategicEducationalIntensive'}*/}
                        {/*        onSubmit={(e, payload) => {*/}
                        {/*          Requests.methods.insert({*/}
                        {/*            group: `registrations_strategicEducationalIntensive`,*/}
                        {/*            payload,*/}
                        {/*          })*/}
                        {/*        }}*/}
                        {/*      />*/}
                        {/*    </div>*/}
                        {/*  )}*/}
                        {/*/>*/}
                      </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </Layout>
    </Page>
  )
}
