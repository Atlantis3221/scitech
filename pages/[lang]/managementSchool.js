import React, { useContext } from 'react'

import { Page } from '../../components/page'
import { Layout } from '../../components/layout'
import { SpeakerCards, SpeakerCard } from '../../components/speakerCard'
import { SchoolProject, SchoolProject_Card } from '../../components/schoolProject'
import { Helmet } from 'react-helmet'
import { Button } from '../../components/button'
import { useRouter } from 'next/dist/client/router'
import Translator from '../../i18n/translator'
import ModalsContext from '../../components/modals/ModalContext'

export default function ManagementSchool({  current, onClick, modalForm }) {
  const { query: {lang: lang} } = useRouter()
  const {modalService, setRegModalState} = useContext(ModalsContext)

  const openModal = () => {
    modalService.openModal("reg")
    setRegModalState({
      color: "violet",
      inputs: ["participationType","name", "company", "phone", "email", "confidential"],
      configName: "managementSchoolMyRegion",
      title: lang === 'ru'? 'Заказать проведение в моем регионе': 'Enquire about next enrolment period'
    })
  }
  return (
    <Page>
      <Helmet>
        <meta name="description"
              content={current["managementMeta"]} />
        <meta name="keywords" content={current["managementMeta"]} />
        <meta property="og:image" content="/img/appleIcon.png" />
        <meta property="og:url" content="https://scitech.ru/managementSchool" />
        <meta property="og:title" content={current["Школа руководителей научно-технологических проектов"]} />
        <meta property="og:description"
              content={current["managementMeta"]} />
        <title>{current["Школа руководителей научно-технологических проектов"]}</title>
        <link rel="canonical" href="https://scitech.ru/managementSchool" />
      </Helmet>

      <Layout style={{
        backgroundImage: 'url(/img/gradients/school_gradient_viol.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '120% -5%',
      }} modalFormText={modalForm}>
        <div className='show wrapper_hero'>
          <div className='container relative'>
            <div className="colorSpot colorSpot__violet"></div>
            <div className='content'>
              <ul className='g3 relative'>
                <li className='i3_3'>
                  <p className='asideMarker'>{current["Образовательный проект"]}</p>
                </li>
                <li className='i3_9'>
                  <h1>{current["Школа руководителей"]}</h1>
                  <h1>{current["научно-технических проектов"]}</h1>
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
                </li>
                <li className='i3_9 wrapper_borderTop relative'>
                  <ul className='g3'>
                    <li className='i3_12 flex_between'>
                      <div>
                        <p className="asideMarker">
                          <svg width="14" height="16" viewBox="0 0 14 16" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M9.52047 6.33759C10.5813 5.37044 12.0158 4.06241 12.1466 0.9375H13.0938V0H0.90625V0.9375H1.85341C1.98416 4.06241 3.41872 5.37044 4.47953 6.33759C5.19112 6.98637 5.59375 7.38347 5.59375 8C5.59375 8.61653 5.19112 9.01363 4.47953 9.66241C3.41872 10.6296 1.98416 11.9376 1.85341 15.0625H0.90625V16H13.0938V15.0625H12.1466C12.0158 11.9376 10.5813 10.6296 9.52047 9.66241C8.80888 9.01363 8.40625 8.61653 8.40625 8C8.40625 7.38347 8.80888 6.98637 9.52047 6.33759ZM6.53125 11.5137C6.38647 11.5436 6.24344 11.587 6.10384 11.6448L3.23269 12.8329C3.70156 11.6407 4.45675 10.9518 5.11116 10.3552C5.84147 9.68937 6.53125 9.06047 6.53125 8V11.5137ZM8.88884 10.3552C9.54325 10.9518 10.2984 11.6407 10.7673 12.8328L7.89616 11.6447C7.75656 11.587 7.61353 11.5435 7.46875 11.5137V8C7.46875 9.06047 8.15853 9.68937 8.88884 10.3552ZM3.21622 3.125C2.98956 2.53441 2.83303 1.82131 2.79206 0.9375H11.2079C11.1669 1.82131 11.0104 2.53441 10.7837 3.125H3.21622Z"
                              fill="#02090F" />
                          </svg>
                          {current["Длительность — 1 год"]}
                        </p>
                        <p className="raleway">{current["Февраль"]} 2021 - {current["Февраль"]} 2022</p>
                      </div>
                      <div className="datePlace_place mt_low">
                        <img src='/img/pin.svg' alt='icon' />
                        <div className="place_text">
                          <p className="asideMarker asideMarker_mt">
                            {current["онлайн"]}, {current["оффлайн"]}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="raleway">{current["Прием заявок окончен"]}</p>
                      </div>
                    </li>
                    <li className='i3_12 flex_end m0'>
                            <Button bordered-violet marginleft onClick={openModal}>
                              {current["Заказать проведение в моем регионе"]}
                            </Button>
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
                  <p className='asideMarker'>{current["О проекте"]}</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <em>
                            {current["managementSchoolAbout"]}
                            <p><em>{current["Основные идеи школы:"]}</em></p>
                          </em>
                        </li>
                        <li className='i3_6'>
                          <h4>{current["managementSchoolAbout1"]}</h4>
                          <h4>{current["managementSchoolAbout2"]}</h4>
                          <h4>{current["managementSchoolAbout3"]}</h4>
                        </li>
                        <li className='i3_6'>
                          <h4>{current["managementSchoolAbout4"]}</h4>
                          <h4>{current["managementSchoolAbout5"]}</h4>
                          <h4>{current["managementSchoolAbout6"]}</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
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
                  <p className='asideMarker'>{current["Команда"]}</p>
                </li>
                <li className='i3_9'>
                  <SpeakerCards>
                    <SpeakerCard photo="/img/speaker_golubev.png"
                                 fullName={current["Евгений Голубев"]} position={current["ментор"]}
                    >
                      {current["Директор Технологического парка ТюмГУ, эксперт по управлению крупными проектами во взаимодействии университет-индустрия"]}
                    </SpeakerCard>
                    <SpeakerCard photo="/img/speaker_kizeev.png"
                                 fullName={current["Вениамин Кизеев"]} position={current["руководитель проектной работы"]}
                    >
                      {current["IPMA Level«B», член правления НП «СОВНЕТ», эксперт по управлению проектами и инновациями компании WINbd"]}
                    </SpeakerCard>
                  </SpeakerCards>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {lang === 'ru' ? (
        <div className='show'>
          <div className='container'>
            <div className='content'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'>Основные эксперты</p>
                </li>
                <li className='i3_9'>
                  <SpeakerCards>
                    <SpeakerCard photo="/img/speaker_skobelev.png"
                                 fullName="Скобелев Петр Олегович"
                    >
                      Доктор технических наук, президент / генеральный конструктор Группы компаний «Генезис знаний»,
                      Самара-Москва-Сколково, Россия
                    </SpeakerCard>
                    <SpeakerCard photo="/img/speaker_lavrov.png"
                                 fullName="Лавров Олег Владимирович"
                    >
                      Президент Российской ассоциации менеджмента знаний «КМ Альянс», доктор медицинских наук
                    </SpeakerCard>
                    <SpeakerCard photo="/img/speaker_tatunashvili.png"
                                 fullName="Татунашвили Леван Вахтангович"
                    >
                      Заместитель генерального директора по инновационной деятельности Технопарка Новосибирского
                      Академгородка Академпарк
                    </SpeakerCard>
                    <SpeakerCard photo="/img/speaker_poletaev.png"
                                 fullName="Полетаев Дмитрий Александрович"
                    >
                      Эксперт по подготовке презентаций и публичных выступлений. Визитинг лектор МВА ТПУ
                    </SpeakerCard>
                    <SpeakerCard photo="/img/speaker_tsepes.png"
                                 fullName="Ципес Григорий Львович"
                    >
                      Кандидат экономических наук, главный консультант Департамента развития и консалтинга IBS,
                      вице-президент Ассоциации управления проектами СОВНЕТ
                    </SpeakerCard>
                    <SpeakerCard photo="/img/speaker_sartory.png"
                                 fullName="Сартори Андрей Владимирович"
                    >
                      К.ф.-м.н, доцент, предприниматель, руководитель отдела планирования НИОКР проектного направления
                      Прорыв, Госкорпорация «Росатом»
                    </SpeakerCard>
                    <SpeakerCard photo="/img/speaker_fertman.png"
                                 fullName="Фертман Александр Давидович"
                    >
                      Директор по науке технологиям и образованию Фонда «Сколково», заместитель руководителя рабочей
                      группы Технет НТИ, доцент НИЯУ МИФИ
                    </SpeakerCard>
                    <SpeakerCard photo='/img/speaker_walker.png'
                                 fullName='Уолкер Спенсер'>
                      Менеджер Центра коммерциализации и трансфера технологий Университета Юты, член правления DFFCU и возглавляет кафедру
                    </SpeakerCard>
                    <SpeakerCard photo='/img/speaker_kashirskih.png'
                                 fullName='Егор Каширских'>
                      Директор ООО ИНПЦ «Иннотех» Член совета объединения «Сибирская биотехнологическая инициатива».
                      Член Совета директоров АО «Кузбасский Технопарк», Директор по НИОКР ООО «Биотехнологии»
                    </SpeakerCard>
                    <SpeakerCard photo='/img/speaker_rozhdestvenskij.png'
                                 fullName='Игорь Рождественский'>
                      Кандидат физ.-мат. наук PhD. Со-основатель и член Правления Ассоциации Брокеров Инноваций и Технологий.
                      Член Международного Комитета International Technology Transfer Network (Китай)
                    </SpeakerCard>
                    <SpeakerCard photo='/img/speaker_gareev.png'
                                 fullName='Гареев Арсен'>
                      Директор Центра управления технологическим развитием НТИ, АО «РВК» Руководит проектом по
                      сопровождению и мониторингу деятельности Центров НТИ
                    </SpeakerCard>
                  </SpeakerCards>
                </li>
              </ul>
            </div>
          </div>
        </div>) : null}

        {lang === 'ru' ? (
        <div className='show wrapper_speakers'>
          <div className='container'>
            <div className='content'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'>основные модераторы</p>
                </li>
                <li className='i3_9'>
                  <SpeakerCards>
                    <SpeakerCard photo="/img/speaker_kizeev.png"
                                 fullName="Кизеев Вениамин Михайлович" position='руководитель'
                    >
                      IPMA Level«B», член правления НП «СОВНЕТ», эксперт по управлению проектами и инновациями компании
                      WINbd
                    </SpeakerCard>
                    <SpeakerCard photo="/img/speaker_panteleev.png"
                                 fullName="Пантелеев Сергей Анатольевич"
                    >
                      Руководитель проектов WINbd, эксперт по развитию проектов и экосистем, тренер, преподаватель, консультант
                    </SpeakerCard>
                    <SpeakerCard photo="/img/speaker_ahmetova.png"
                                 fullName="Ахметова Полина Андреевна"
                    >
                      Директор Стартап-студии «Открытые инновации», менеджер проектов WINbd
                    </SpeakerCard>
                  </SpeakerCards>
                </li>
              </ul>
            </div>
          </div>
        </div>) : null}

        <div className='show'>
          <div className='container'>
            <div className='content pt0'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_tiny asideMarker_mt'>{current["Модуль"]} 1</p>
                  <p className='asideMarker asideMarker_mt1'>20 {current["марта"]} - 2 {current["апреля"]} 2021</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4 className="mt1">{current["managementModule1"]}</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_tiny asideMarker_mt'>{current["Модуль"]} 2</p>
                  <p className='asideMarker asideMarker_mt1'>17 - 22 {current["мая"]} 2021</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4 className="mt1">{current["managementModule2"]}</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_tiny asideMarker_mt'>{current["Модуль"]} 3</p>
                  <p className='asideMarker asideMarker_mt1'>13 - 21 {current["июля"]} 2021</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4 className="mt1">{current["managementModule3"]}</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_tiny asideMarker_mt'>{current["Модуль"]} 4</p>
                  <p className='asideMarker asideMarker_mt1'>24 - 31 {current["августа"]} 2021</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4 className="mt1">{current["managementModule4"]}</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_tiny asideMarker_mt'>{current["Модуль"]} 5</p>
                  <p className='asideMarker asideMarker_mt1'>19 - 27 {current["Октября"]} 2021</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4 className="mt1">{current["managementModule5"]}</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_tiny asideMarker_mt'>{current["Модуль"]} 6</p>
                  <p className='asideMarker asideMarker_mt1'>16 - 24 {current["ноября"]} 2021</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4 className="mt1">{current["managementModule6"]}</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_tiny asideMarker_mt'>{current["Модуль"]} 7</p>
                  <p className='asideMarker asideMarker_mt1'>17 - 22 {current["января"]} 2022</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4 className="mt1">{current["managementModule7"]}</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_tiny asideMarker_mt'>{current["Модуль"]} 8</p>
                  <p className='asideMarker asideMarker_mt1'>19 - 22 {current["февраля"]} 2022</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4 className="mt1">{current["managementModule8"]}</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='i3_3'> </li>
                {lang === 'ru' ? (
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <p>Для команд и индивидуальных участников от организаций Западно-Сибирского НОЦ обучение
                             является безвозмездным, направляющая организация обязуется обеспечить полноценное участие
                             сотрудников в обучении. Для команд и индивидуальных участников не от организаций
                             Западно-Сибирского НОЦ участие платное.</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>) : null}
              </ul>
            </div>
          </div>
        </div>

        <div className='show wrapper_results'>
          <div className='container'>
            <div className='content pt0'>
              <ul className='g3'>
                <li className='i3_3'>
                </li>
                <li className='i3_9 border_top'>
                  <h2>{current["Итоги первого потока 2019-2020"]}</h2>
                  <p className="titleBlock">{current["managementSchoolRes"]}</p>
                  <a href={`/${lang}/managementSchool2019-2020`} className='link_event link_event__noBorder raleway_bold mt_low'>
                    {current["Полное расписание первого потока 2019-2020"]}
                    <svg
                      width='12'
                      height='12'
                      viewBox='0 0 12 12'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M9.79972 3.68412L1.56172 11.8591L0.14209 10.4503L8.45638 2.19965L1.33524 2.19965L1.33524 0.199646L10.7997 0.199646L11.7997 0.199646V1.19965L11.7997 10.5789H9.79972L9.79972 3.68412Z'
                        fill='#E62C2C'
                      />
                    </svg></a>

                  <ul className='g3'>
                    <li className='i3_12'>
                      <div className="result_numbers">
                        <div className="result_item">
                          <p className="bigNumber">38</p>
                          <p className="number_description">{current["участников выпустились"]}</p>
                        </div>
                        <div className="result_item">
                          <p className="bigNumber">10</p>
                          <p className="number_description">{current["проектов"]} </p>
                        </div>
                        <div className="result_item">
                          <p className="bigNumber">17</p>
                          <p className="number_description">{current["выигранных грантов"]}</p>
                        </div>
                        <div className="result_item">
                          <p className="bigNumber">74<span className="bigNumber_mini">{current["млн"]} ₽</span></p>
                          <p className="number_description">{current["выигранных денег"]} </p>
                        </div>
                        <div className="result_item">
                          <p className="bigNumber">295<span className="bigNumber_mini">{current["млн"]} ₽</span></p>
                          <p className="number_description">{current["привлеченные деньги от партнеров"]}</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {lang ==='ru' ? (
        <div className='show wrapper_feedback content mt_half'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker'>отзывы</p>
              </li>
              <li className='i3_9'>
                <p className='feedback_name feedback_name_pt_low'>Козин Евгений Сергеевич, к.т.н., доцента ФГБОУ ВО
                  «Тюменский государственный университет»</p>
                <p className='feedBack_title'>
                  Школа руководителей же показала нам другой способ работы над проектами – «от рынка», который
                  предполагает сначала произвести анализ проблем и потребностей участников рынка, а уже затем, в случае
                  успешной проверки жизнеспособности научной идеи, - ее техническую реализацию и инженерную проработку.
                </p>
                <div className='feedBack_descript_container'>
                  <p className='feedBack_descript'>
                    Обучение в Школе руководителей научно-технических проектов для меня и команды нашего проекта
                    «FaceDrive» позволило по-новому посмотреть на университетские научно-технические проекты. В
                    академической среде мы привыкли развивать проекты «от идеи», прорабатывая конструкцию либо
                    технологию какого-либо изобретения. Школа руководителей же показала нам другой способ работы над
                    проектами – «от рынка», который предполагает сначала произвести анализ проблем и потребностей
                    участников рынка, а уже затем, в случае успешной проверки жизнеспособности научной идеи, - ее
                    техническую реализацию и инженерную проработку.
                    <br />
                    Полученный нами опыт уже трансформировался в успешное руководство несколькими студенческими
                    проектными командами, дошедшими до финалов научных конкурсов и конференций. Кроме того, полученная
                    информация легла в основу методического сопровождения управления проектами нескольких
                    образовательных программ университета, а также дала существенный толчок развитию нашего проекта
                    «FaceDrive».
                  </p>
                  <p className='feedBack_descript'>Обучение в Школе проходило в различных форматах – от многочисленных
                    лекций и мастер-классов признанных отечественных и зарубежных экспертов в области управления
                    научно-техническими проектами, так и в режиме воркшопов и командной проектной работы по тематикам,
                    связанным с научными интересами ее участников.
                    <br />
                    Руководство и преподавательский состав Школы проделало огромную работу по организации столь
                    насыщенной и информативной образовательной программы с практическим уклоном в сторону
                    научно-технического предпринимательства, предоставив, по сути, готовый алгоритм к развитию
                    собственного проекта, его «упаковке» и доведению до получения первой прибыли. За это им огромное
                    спасибо и дальнейших успехов в развитии!</p>
                </div>

                <p className='feedback_name'>Такмашева Ирина Вениаминовна, зам.проректора по научной работе ФГБОУ ВО
                  «Югорский государственный университет»</p>
                <p className='feedBack_title'>
                  На мой взгляд, содержание курса является уникальным именно за счет интеграции опыта лидеров в
                  различных областях, в том числе зарубежных лидеров и экспертов.
                </p>
                <div className='feedBack_descript_container'>
                  <p className='feedBack_descript'>
                    Обучение проходило по модульному принципу и включало в себя 7 модулей, при этом каждый модуль
                    сопровождался экспертными лекциями, проектной работой, рекомендациями менторов. Итоговым
                    мероприятием курса стала защита проектов перед представителями бизнеса, государства и научного
                    сообщества.
                    <br />
                    Данный образовательный курс помог мне и членам моей команды не просто запустить проект «Цифровая
                    Lean-лаборатория» и добиться существенных результатов, но и развить проектную культуру,
                    дизайн-мышление, креативность и коммуникативность.
                  </p>
                  <p className='feedBack_descript'>
                    На мой взгляд, содержание курса является уникальным именно за счет интеграции опыта лидеров в
                    различных областях, в том числе зарубежных лидеров и экспертов. На модулях были представлены
                    инструменты и механизмы создания первоклассных команд проектов, выбора сценариев и стратегий
                    развития проектов, оценки потенциала проекта и выявления не столько краткосрочной, сколько
                    долгосрочной ценности для клиента или бизнес-партнера.
                    <br />
                    Рекомендую всем пройти данный курс, а менторам и экспертам желаю вдохновения, процветания и
                    реализации амбициозных замыслов.
                  </p>
                </div>

                <p className='feedback_name'>Илья Анисимов, профессор кафедры эксплуатации автомобильного транспорта
                  ФГБОУ ВО «Тюменский индустриальный университет»</p>
                <p className='feedBack_title'>Дорогие друзья, те, кто только начинает или планирует начать обучение в
                  этой школе. Могу только порадоваться за вас, что вы окунетесь в это море новых знаний и выйдите из
                  него уже хорошо подготовленным технологическим менеджером. </p>
                <div className='feedBack_descript_container'>
                  <p className='feedBack_descript'>
                    Начиная обучение в Школе я относился к происходящему с иронией. Думал, чему меня еще могут научить,
                    если я уже сам прошел через все круги ада, когда придумал, разработал, сделал, вывел на рынок и стал
                    успешно продавать оборудование. Но начав обучение, осознал, что знаний моих не так и много, а опыт
                    сложился из набитых шишек. Их бы не было, обладай я знаниями, полученными в Школе.
                    <br />
                    Следующий этап осознания пришел тогда, когда понял, что мы здесь не развлекаемся, а реально работаем
                    над проектом. Итогом этой работы может быть реальный инвестор, который поверит в твою разработку или
                    у тебя есть шанс войти в НОЦ со своим проектом. После этого осознания началась другая, тяжелая,
                    дистанционная, но интересная жизнь.
                  </p>
                  <p className='feedBack_descript'>
                    В итоге мы поняли, что не надо придумывать за рынок, что ему нужно, нужно понимать проблемы рынка.
                    Мы поняли фин. модель, бизнес-модель, франшизы, юнит-экономику, технологические цепочки, ораторское
                    искусство, правильные презентации, разобрались, кто такой CusDev, TRL, ЛПР, кривая Гартнера и многое
                    другое.Подводя итог, можно сказать: спикеры, менторы, модераторы, эксперты, все очень грамотные
                    люди, которые дадут вам, если вы сами этого захотите, очень много. И пройдя Школу, вы сможете
                    оценить свой уровень до и после неё. И приятно удивитесь.
                    <br/>
                    Всем удачи и много денег)
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>) : null}

        <div className='show'>
          <div className='container mt_half'>
            <div className='content'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'>{current["проекты 1 потока"]}</p>
                </li>
                <li className='i3_9'>
                  <SchoolProject>
                    <SchoolProject_Card
                      violet
                      image='/img/managementSchoolProjects/DLLProject.png'
                      link="/managementSchoolProjects/DLLProject"
                    >
                      {current["Digital Lean-Lab (DLL): электронная образовательная платформа"]}
                    </SchoolProject_Card>
                    <SchoolProject_Card
                      violet
                      image='/img/managementSchoolProjects/ElectroBase.png'
                      link="/managementSchoolProjects/ElectroBase"
                    >
                      {current["Мобильная многофункциональная электрическая платформа с дистанционным управлением ElectroBase"]}
                    </SchoolProject_Card>
                    <SchoolProject_Card
                      violet
                      image='/img/managementSchoolProjects/FaceDrive.png'
                      link="/managementSchoolProjects/FaceDrive"
                    >
                      {current["FaceDrive - Услуга по идентификации водителя транспортного средства путём распознавания его лица"]}
                    </SchoolProject_Card>
                    <SchoolProject_Card
                      violet
                      image='/img/managementSchoolProjects/BioPlantsSecure.png'
                      link="/managementSchoolProjects/BioPlantsSecure"
                    >
                      {current["Интеллектуальная система биологической защиты растений"]}
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