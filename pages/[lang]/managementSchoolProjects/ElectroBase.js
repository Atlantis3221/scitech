import React from 'react'

import { Page } from '../../../components/page'
import { Layout } from '../../../components/layout'
import { SpeakerCards, SpeakerCard } from '../../../components/speakerCard'
import { SchoolProject, SchoolProject_Card } from '../../../components/schoolProject'
import { StrongText } from '../../../components/strongText'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/dist/client/router'
import Translator from '../../../i18n/translator'

export default function ElectroBase({ modalForm }) {
  const { query: {lang: lang} } = useRouter()
  return (
    <Page>
      <Layout style={{
        backgroundImage: 'url(/img/gradients/school_gradient_viol.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '120% -10%',
      }} modalFormText={modalForm}>
        <Helmet>
          <meta name="description" content='Мобильная многофункциональная электрическая платформа с дистанционным управлением ElectroBase' />
          <meta name="keywords" content='проект школы руководителей научно-технических проектов центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
          <meta property="og:image" content="/img/appleIcon.png" />
          <meta property="og:url" content={`https://scitech.ru/managementSchoolProjects/ElectroBase`} />
          <meta property="og:title" content='Мобильная многофункциональная электрическая платформа с дистанционным управлением ElectroBase' />
          <meta property="og:description" content='проект школы руководителей научно-технических проектов центра развития компетенций руководителей научных и научно-технических проектов и лабораторий межрегионального Западно-Сибирского научно-образовательного центра мирового уровня' />
          <title>Мобильная многофункциональная электрическая платформа с дистанционным управлением ElectroBase</title>
          <link rel="canonical" href={`https://scitech.ru/managementSchoolProjects/ElectroBase`} />
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
                  <h1>Мобильная многофункциональная электрическая платформа с дистанционным управлением ElectroBase</h1>
                  <img loading="lazy" className="pt2 mb0" src="/img/managementSchoolProjects/ElectroBase.png"
                       alt="Мобильная многофункциональная электрическая платформа с дистанционным управлением ElectroBase" />
                  <div className="mt_big">
                    <h4 className="raleway"><StrongText>Суть проекта:</StrongText> простая, надежная, ремонтопригодная
                      электрическая платформа с дистанционным управлением и большим набором навесного оборудования для
                      выполнения работ в строительстве, благоустройстве, сельском хозяйстве.</h4>
                    <h4 className="raleway"><StrongText>Конечный продукт:</StrongText> Мобильная многофункциональная
                      электрическая платформа с дистанционным управлением ElectroBase. Данная платформа поможет снизить
                      эксплуатационные затраты, повысить удобства использования, надежности и ремонтопригодности средств
                      малой механизации в любых условиях эксплуатации.
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
                    <SpeakerCard photo="/img/managementSchoolProjects/anisimov_ilya.png"
                                 fullName="Анисимов Илья"
                                 email="tkcc@list.ru"
                                 phone="+7-912-926-33-03"
                    >
                      Лидер проекта
                    </SpeakerCard>
                    <SpeakerCard photo="/img/managementSchoolProjects/kostin_vadim.png"
                                 fullName="Костин Вадим"
                    >
                      Инженер проекта
                    </SpeakerCard>
                    <SpeakerCard photo="/img/managementSchoolProjects/orlov_vladimir.png"
                                 fullName="Орлов Владимир"
                    >
                      Инженер – энергетик
                    </SpeakerCard>
                    <SpeakerCard photo="/img/managementSchoolProjects/gusev_mihail.png"
                                 fullName="Гусев Михаил"
                    >
                      Инженер - программист
                    </SpeakerCard>
                    <SpeakerCard photo="/img/managementSchoolProjects/vyazovikov_alexander.png"
                                 fullName="Вязовиков Александр"
                    >
                      Инженер – конструктор
                    </SpeakerCard>
                    <SpeakerCard photo="/img/managementSchoolProjects/paukov_alexej.png"
                                 fullName="Пауков Алексей"
                    >
                      Инженер - строитель
                    </SpeakerCard>
                    <SpeakerCard photo="/img/managementSchoolProjects/voskanyan_armen.png"
                                 fullName="Восканян Армен"
                    >
                      Специалист по продажам
                    </SpeakerCard>
                    <SpeakerCard photo="/img/managementSchoolProjects/gazizulin_vasil.png"
                                 fullName="Газизулин Василь"
                    >
                      Специалист по франшизе
                    </SpeakerCard>
                    <SpeakerCard photo="/img/managementSchoolProjects/gorbunova_anastasiya.png"
                                 fullName="Горбунова Анастасия"
                    >
                      Администратор проекта
                    </SpeakerCard>
                    <SpeakerCard photo="/img/managementSchoolProjects/evstopov_stanislav.png"
                                 fullName="Евстропов Станислав"
                    >
                      Инженер - электроник
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
                            className="roadMap_circle"></span>
                            Достигнуты следующие результаты:</p>
                          <p className="raleway">1. Разработан лабораторный образец системы дистанционного управления
                            электрическим двигателем.</p>
                          <p className="raleway">2. Разработана система управления электродвигаталем постоянного
                            тока.</p>
                          <p className="raleway">3. Произведен подбор аккумуляторной батареи для заданных параметров по
                            времени работы с учетом нагрузки.</p>
                          <p className="raleway">4. Проведены ходовые испытания платформы с различной степенью загрузки,
                            подтверждены теоретические характеристики.</p>
                          <p className="raleway">5. Подписано соглашение с ООО «ПромЛАЗЕР» г. Пермь о совместном
                            производстве данной платформы.</p>
                          <p className="raleway">6. Заключено соглашение со Стартап-студией «Открытые инновации» о
                            совместной работе над проектом.</p>
                          <p className="raleway">7. Подана заявка на программу Старт-1. Тема: Разработка системы управления
                            электрическим двигателем для средств малой механизации.</p>
                        </li>
                        <li className='i3_4'>
                          <p className="raleway raleway_bold relative roarMap_title">Ожидаемый результат в 2023 г.:</p>
                          <p className="raleway">Наша «must have» многофункциональная электрическая платформа с
                            дистанционным управлением Electro Base начинает производиться на всех континентах по
                            мастер-франшизе. Она используется для перевозки сахарного тростника в Доминиканской
                            республике, перевозит в автоматическом режиме воду в республике Мали, разминирует минные
                            поля после войны в Лаосе, привозит корм кенгуру в национальных парках Австралии,
                            используется на фермах в Аргентине, работает на стройках в Испании, в России убирают снег на
                            даче, сидя за компьютером дома.
                          </p>
                          <p className="raleway">Продажи многофункциональной электрической платформы ElectroBase с
                            дистанционным управлением составляют до 2000 ед. в год, оборот компании составляет $6,9
                            млн/год.</p>
                        </li>
                        <li className='i3_4'>

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
                          <p>- Количество привлеченных партнеров - 3</p>
                          <p>- Сумма привлеченная от партнеров – 300 т.р.</p>
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
                    <SpeakerCard photo="/img/managementSchoolProjects/anisimov_ilya.png"
                                 fullName="Анисимов Илья"
                                 email="tkcc@list.ru"
                                 phone="+7-912-926-33-03"
                    >
                      Лидер проекта
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
                  <p className='asideMarker asideMarker_mt1'>Сайт</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <a href="https://vk.com/mobelplat"
                             className="raleway raleway_bold">Ссылка на страницу ВК: https://vk.com/mobelplat</a>
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
                      image='/img/managementSchoolProjects/FaceDrive.png'
                      link="/managementSchoolProjects/FaceDrive"
                    >
                      FaceDrive - Услуга по идентификации водителя транспортного средства путём распознавания его лица
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

export async function getServerSideProps(ctx) {
  const {current} = Translator("test", ctx.params.lang)

  return {
    props: { current: current["test"], modalForm: current["modalForm"]  },
  }
}