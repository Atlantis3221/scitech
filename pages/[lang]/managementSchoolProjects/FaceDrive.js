import React from 'react'

import { Page } from '../../../components/page'
import { Layout } from '../../../components/layout'
import { SpeakerCards, SpeakerCard } from '../../../components/speakerCard'
import { SchoolProject, SchoolProject_Card } from '../../../components/schoolProject'
import { StrongText } from '../../../components/strongText'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/dist/client/router'

export default function FaceDrive(props) {
  const { query: {lang: lang} } = useRouter()
  return (
    <Page>
      <Layout style={{
        backgroundImage: 'url(/img/gradients/school_gradient_viol.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '120% -10%',
      }}>
        <Helmet>
          <meta name="description" content='FaceDrive - Услуга по идентификации водителя транспортного средства путём распознавания его лица' />
          <meta name="keywords" content='проект школы руководителей научно-технических проектов центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
          <meta property="og:image" content="/img/appleIcon.png" />
          <meta property="og:url" content={`https://scitech.ru/managementSchoolProjects/FaceDrive`} />
          <meta property="og:title" content='FaceDrive - Услуга по идентификации водителя транспортного средства путём распознавания его лица' />
          <meta property="og:description" content='проект школы руководителей научно-технических проектов центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
          <title>FaceDrive - Услуга по идентификации водителя транспортного средства путём распознавания его лица</title>
          <link rel="canonical" href={`https://scitech.ru/managementSchoolProjects/FaceDrive`} />
        </Helmet>

        <div className='show wrapper_hero'>
          <div className='container relative'>
            <div className='content'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'>проект школы руководителей научно-технических проектов
                  </p>
                  <p className='asideMarker'>поток 2019–2020</p>
                </li>
                <li className='i3_9'>
                  <h1>FaceDrive - Услуга по идентификации водителя транспортного средства путём распознавания его
                    лица</h1>
                  <img loading="lazy" className="pt2 mb0" src="/img/managementSchoolProjects/FaceDrive.png"
                       alt="FaceDrive - Услуга по идентификации водителя транспортного средства путём распознавания его лица" />
                  <div className="mt_big">
                    <h4 className="raleway"><StrongText>Проблема:</StrongText> Компании-собственники транспортных
                      средств сталкиваются с незаконной передачей права управления третьим лицам, что приводит к рискам
                      репутационных и финансовых потерь.</h4>
                    <h4 className="raleway"><StrongText>Проект позволяет решить указанную проблему и достичь
                      показателей:
                    </StrongText></h4>
                    <h4 className="raleway"><StrongText>На мировом уровне:</StrongText>
                      <p>- снижение аварийности автомобильного транспорта</p>
                    </h4>
                    <h4 className="raleway"><StrongText>На уровне РФ:</StrongText>
                      <p>- соблюдение законодательства в области автомобильного транспорта;</p>
                      <p>- интеграция высокотехнологических разработок в транспортную сферу.</p>
                    </h4>
                    <h4 className="raleway"><StrongText>НОЦ/регион:</StrongText>
                      <p>- количество высокопроизводительных рабочих мест во внебюджетном секторе экономики.</p>
                      <p>- объём инвестиций в основной капитал</p>
                    </h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='show wrapper_speakers'>
          <div className='container'>
            <div className='content'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'>Команда</p>
                </li>
                <li className='i3_9'>
                  <SpeakerCards>
                    <SpeakerCard photo="/img/managementSchoolProjects/kozin_evgenij.png"
                                 fullName="Козин Евгений"
                                 email="kozines@tyuiu.ru"
                                 phone="+7-912-924-39-91"
                    >
                      Лидер проекта, программист
                    </SpeakerCard>
                    <SpeakerCard photo="/img/managementSchoolProjects/bazanov_artyom.png"
                                 fullName="Базанов Артем"
                    >
                      Предприниматель
                    </SpeakerCard>
                    <SpeakerCard photo="/img/managementSchoolProjects/ilyuhin_artem.png"
                                 fullName="Ильюхин Артем"
                    >
                      Коммуникации, продажи
                    </SpeakerCard>
                    <SpeakerCard photo="/img/managementSchoolProjects/sapozenkov_nikolay.png"
                                 fullName="Сапоженков Николай"
                    >
                      Инженер
                    </SpeakerCard>
                    <SpeakerCard photo="/img/managementSchoolProjects/dergousov_andrey.png"
                                 fullName="Дергоусов Андрей"
                    >
                      Привлекаемый специалист
                    </SpeakerCard>
                    <SpeakerCard photo="/img/managementSchoolProjects/panfilov_alexander.png"
                                 fullName="Панфилов Александр"
                    >
                      Привлекаемый специалист
                    </SpeakerCard>
                    <SpeakerCard photo="/img/managementSchoolProjects/korchagin_vladislav.png"
                                 fullName="Корчагин Владислав"
                    >
                      Привлекаемый специалист
                    </SpeakerCard>
                  </SpeakerCards>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='show'>
          <div className='container'>
            <div className='content'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_mt_low'>дорожная карта</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3 border_top border_right'>
                        <li className='i3_4'>
                          <p className="raleway raleway_bold relative roarMap_title"><span
                            className="roadMap_circle"></span>2020</p>
                          <p className="raleway">Июль - На основе технологии Face Recognition разработаны MVP бортовой системы,
                            серверной части , а также модуля сбора статистики.</p>
                        </li>
                        <li className='i3_4'>
                          <p className="raleway raleway_bold relative roarMap_title">2021</p>
                          <p className="raleway">Май - Внедрение системы FaceDrive на 1000 единиц транспорта ООО «76 Ойл
                            Тюмень». Работа
                          </p>
                          <p className="raleway">Август - Начало разработки приложения под платформу Wialon Apps.</p>
                          <p className="raleway">Октябрь - Проведение переговоров о размещении FaceDrive на платформе Wialon
                            Apps</p>
                          <p className="raleway">Октябрь 2021 - Октябрь 2023 - Последовательные переговоры и заключение договоров с 50
                            интеграторами</p>
                        </li>
                        <li className='i3_4'>
                          <p className="raleway raleway_bold relative roarMap_title">2022</p>
                          <p className="raleway">Январь - Размещение приложения на платформе Wialon Apps.</p>
                          <p className="raleway">Март - Расширение потребителей использования FaceDrive, презентация фирмам
                            такси, каршеринга, топливозаправки.</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='show'>
          <div className='container'>
            <div className='content pt0'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'>Фандрайзинг</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <p>Выиграно два конкурса, в результате получено 100 тыс. р. </p>
                          <p>В виде технологического оборудования и компонентов привлечено 50 тыс. р.</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='show'>
          <div className='container'>
            <div className='content pt0'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'>руководитель</p>
                </li>
                <li className='i3_9'>
                  <SpeakerCards>
                    <SpeakerCard photo="/img/managementSchoolProjects/kozin_evgenij.png"
                                 fullName="Козин Евгений"
                                 email="kozines@tyuiu.ru"
                                 phone="+7-912-924-39-91"
                    >
                      Лидер проекта, программист
                    </SpeakerCard>
                  </SpeakerCards>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='show'>
          <div className='container'>
            <div className='content'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_mt1'>другие проекты первого потока</p>
                </li>
                <li className='i3_9'>
                  <SchoolProject>
                    <SchoolProject_Card
                      violet
                      image='/img/managementSchoolProjects/DLLProject.png'
                      link="/managementSchoolProjects/DLLProject"
                    >
                      Digital Lean-Lab (DLL): электронная образовательная платформа
                    </SchoolProject_Card>
                    <SchoolProject_Card
                      violet
                      image='/img/managementSchoolProjects/ElectroBase.png'
                      link="/managementSchoolProjects/ElectroBase"
                    >
                      Мобильная многофункциональная электрическая платформа с дистанционным управлением ElectroBase
                    </SchoolProject_Card>
                    <SchoolProject_Card
                      violet
                      image='/img/managementSchoolProjects/BioPlantsSecure.png'
                      link="/managementSchoolProjects/BioPlantsSecure"
                    >
                      Интеллектуальная система биологической защиты растений
                    </SchoolProject_Card>
                  </SchoolProject>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </Page>
  )
}
