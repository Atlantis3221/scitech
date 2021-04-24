import React from 'react'
import { Page } from '../../components/page'
import { Layout } from '../../components/layout'
import { EventItem, EventItem_Container } from '../../components/eventItem'
import { Schedule } from '../../components/schedule'
import { SchoolProject, SchoolProject_Card } from '../../components/schoolProject'
import { Helmet } from 'react-helmet'

const endEvent = Date.parse(new Date('10 20 2020'))  // 20-го октября 2020
const today = Date.now()
// const isShowRegistrationButton = today < endEvent
const isShowRegistrationButton = true

export default function ProjectsDefense(props) {
  return (
    <Page>
      <Layout>
        <Helmet>
          <meta name="description" content='Защита проектов Школы научного лидерства и Школы руководителей научно-технических проектов' />
          <meta name="keywords" content='мероприятие Центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
          <meta property="og:image" content="/img/meta-image.jpg" />
          <meta property="og:url" content={`https://scitech.ru/projectsDefense`} />
          <meta property="og:title" content='Защита проектов Школы научного лидерства и Школы руководителей научно-технических проектов' />
          <meta property="og:description" content='мероприятие Центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
          <title>Защита проектов Школы научного лидерства и Школы руководителей научно-технических проектов</title>
          <link rel="canonical" href={`https://scitech.ru/projectsDefense`} />
        </Helmet>

        <div className='show content'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker'>мероприятие</p>
              </li>
              <li className='i3_9'>
                <div className='titleHero'>
                  <h1>Защита проектов Школы научного лидерства и Школы руководителей научно-технических проектов</h1>
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
                  <li className='i3_12 flex_end'>
                    {/*TODO: переделать на общую форму*/}
                    <Schedule  dataFirst={[20, 'Окт 2020']}
                               place={'онлайн, zoom'}
                               time="8.30 - 20.00"
                               isShowButton={true}
                               eventLinkToTable="https://youtu.be/m196uVLvDTo"
                    />
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
                <p className='asideMarker'>о мероприятии</p>
              </li>
              <li className='i3_9'>
                <p>
                  В ходе защит будут представлены результаты восьми лучших проектов Школы научного лидерства и Школы
                  руководителей научно-технических проектов, претендующих на включение в программу НОЦ и работающих
                  на развитие научно-технического и предпринимательского потенциала регионов Западно-Сибирского НОЦ.</p>
                <p>На защитах проектов будет присутствовать руководство регионов НОЦ.</p>
                <p>Тюменский государственный университет стоял у истоков создания Западно-Сибирского НОЦ и ЦРК, как его
                  неотъемлемой части. Действующие сотрудники ТюмГУ играют определяющую роль в успешном развитии ЦРК,
                  а слушатели, представляющие ТюмГУ, составляют значительное и наиболее активное число от более чем
                  80-ти участников проекта.</p>
                <p>За прошедший календарный год участники обучения подготовили иопубликовали более 35 научных статей
                  и привлекли в свои проекты более 60 миллионов рублей дополнительного финансирования из различных
                  источников. </p>
              </li>
            </ul>
          </div>
        </div>

        <div className='show content'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker asideMarker_mt_half'>Программа (московское время)</p>
              </li>
              <li className='i3_9'>
                <EventItem_Container>
                  <EventItem date='07:00 – 10:00' title="Защиты ">
                  </EventItem>
                </EventItem_Container>
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
                  <SchoolProject_Card
                    red
                    arrow
                    image='/img/newsSMI/firstCover.jpg'
                    link="/projectsDefense/newsSMI_firstEdition"
                    time="20 октября 2020"
                  >
                    Первый выпуск и защиты лучших научных и научно-технических проектов ЦРК Западно-Сибирского
                    НОЦ // leader-id
                  </SchoolProject_Card>
                  <SchoolProject_Card
                    red
                    arrow
                    image='/img/newsSMI/TumenDefence.jpg'
                    link="/projectsDefense/newsSMI_TumenDefence"
                    time="20 октября 2020"
                  >
                    В Тюмени состоялась защита проектов центра развития компетенции // Тюменская область сегодня
                  </SchoolProject_Card>
                  <SchoolProject_Card
                    red
                    arrow
                    image='/img/newsSMI/TumenDefenceRusnews.jpg'
                    link="/projectsDefense/newsSMI_TumenDefenceRusnews"
                    time="21 октября 2020"
                  >
                    В Тюмени прошла защита проектов для Западно-Сибирского НОЦ // Российская газета
                  </SchoolProject_Card>
                </SchoolProject>
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </Page>
  )
}
