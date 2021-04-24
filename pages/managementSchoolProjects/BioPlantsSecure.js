import React from 'react'

import { Page } from '../../components/page'
import { Layout } from '../../components/layout'
import { SpeakerCards, SpeakerCard } from '../../components/speakerCard'
import { SchoolProject, SchoolProject_Card } from '../../components/schoolProject'
import { StrongText } from '../../components/strongText'
import { Helmet } from 'react-helmet'

export default function BioPlantsSecure(props) {
  return (
    <Page>
      <Layout style={{
        backgroundImage: 'url(/img/gradients/school_gradient_viol.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '120% -10%',
      }}>
        <Helmet>
          <meta name="description" content='Интеллектуальная система биологической защиты растений' />
          <meta name="keywords" content='проект школы руководителей научно-технических проектов центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
          <meta property="og:image" content="/img/meta-image.jpg" />
          <meta property="og:url" content={`https://scitech.ru/managementSchoolProjects/BioPlantsSecure`} />
          <meta property="og:title" content='Интеллектуальная система биологической защиты растений' />
          <meta property="og:description" content='проект школы руководителей научно-технических проектов центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
          <title>Интеллектуальная система биологической защиты растений</title>
          <link rel="canonical" href={`https://scitech.ru/managementSchoolProjects/BioPlantsSecure`} />
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
                  <h1>Интеллектуальная система биологической защиты растений</h1>
                  <img loading="lazy" className="pt2 mb0" src="/img/managementSchoolProjects/BioPlantsSecure.png"
                       alt="Интеллектуальная система биологической защиты растений" />
                  <div className="mt_big">
                    <h4 className="raleway">Проект представляет собой программно-аппаратный комплекс, автоматизирующий
                      интеллектуальный сбор, обработку и визуализацию фитосанитарной информации об экосистемах
                      промышленных теплиц для разработки и реализации мер профилактики и борьбы с наиболее
                      распространёнными заболеваниями и вредителями продовольственных растений.</h4>
                    <h4 className="raleway"><StrongText>Конечный продукт:</StrongText> программный пакет, включающий в
                      себя нейросеть, алгоритмы интеллектуальной обработки данных, формирование отчётов и методы
                      распознавания образов.
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
                    <SpeakerCard photo="/img/managementSchoolProjects/prohoshin_alexey.png"
                                 fullName="Прохошин Алексей"
                                 email="s.prokhoshin@utmn.ru"
                                 phone="+7-932-320-02-30"
                    >
                      Лидер проекта (ТМ), программист
                    </SpeakerCard>
                    <SpeakerCard photo="/img/managementSchoolProjects/kadyseva_anastasiya.png"
                                 fullName="Кадысева Анастасия"
                    >
                      Научное администрирование проекта
                    </SpeakerCard>
                    <SpeakerCard photo="/img/managementSchoolProjects/viktorova_nataliya.png"
                                 fullName="Викторова Наталья"
                    >
                      Бухгалтерское сопровождение
                    </SpeakerCard>
                    <SpeakerCard photo="/img/managementSchoolProjects/tomilov_alexey.png"
                                 fullName="Томилов Алексей"
                    >
                      Customer development, продажи
                    </SpeakerCard>
                    <SpeakerCard photo="/img/managementSchoolProjects/parfenov_evgeniy.png"
                                 fullName="Парфенов Евгений"
                    >
                      Продвижение и PR
                    </SpeakerCard>
                    <SpeakerCard photo="/img/managementSchoolProjects/safonov_taras.png"
                                 fullName="Сафонов Тарас"
                    >
                      Эксперт в области моделирования распространения заболеваний и вредителей
                    </SpeakerCard>
                    <SpeakerCard photo="/img/managementSchoolProjects/belyakova_nataliya.png"
                                 fullName="Белякова Наталья"
                    >
                      Эксперт в области разработки средств биологической защиты
                    </SpeakerCard>
                    <SpeakerCard photo="/img/managementSchoolProjects/zuravlev_alexander.png"
                                 fullName="Журавлёв Александр"
                    >
                      Разработчик нейронных сетей
                    </SpeakerCard>
                  </SpeakerCards>
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
                          <p><StrongText>Достигнуты следующие результаты:</StrongText></p>
                          <p>1. Разработан прототип программного обеспечения V 1.0</p>
                          <p>2. Проведено испытание прототипа аппаратного сбора данных V 1.0</p>
                          <p><StrongText>Ожидаемый результат в 2023 г.:</StrongText></p>
                          <p>Расширенный функционал Web-сервиса принятия решений биологической защиты теплиц, в том
                            числе система оценки эффективности новых препаратов с построением экономической модели
                            принятых решений.
                          </p>
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
                    <SpeakerCard photo="/img/managementSchoolProjects/prohoshin_alexey.png"
                                 fullName="Прохошин Алексей"
                                 email="s.prokhoshin@utmn.ru"
                                 phone="+7-932-320-02-30"
                    >
                      Лидер проекта (ТМ), программист
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
                      image='/img/managementSchoolProjects/FaceDrive.png'
                      link="/managementSchoolProjects/FaceDrive"
                    >
                      FaceDrive - Услуга по идентификации водителя транспортного средства путём распознавания его лица
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
