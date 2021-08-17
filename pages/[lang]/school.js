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

export default function School({ current, modalForm }) {
  const { query: {lang: lang} } = useRouter()
  const {modalService, setRegModalState} = useContext(ModalsContext)

  const openModal = () => {
    modalService.openModal("reg")
    setRegModalState({
      color: "green",
      inputs: ["participationType","name", "company", "phone", "email", "confidential"],
      configName: "scienceLeadSchoolNextSet",
      title: lang === 'ru'? 'Сообщить о следующем наборе': 'Enquire about next enrolment period',
      isSent: false
    })
  }
  return (
    <Page>
      <Helmet>
        <meta name="description" content={current["schoolMeta"]} />
        <meta name="keywords" content={current["schoolMeta"]}  />
        <meta property="og:image" content="/img/appleIcon.png" />
        <meta property="og:url" content="https://scitech.ru/school" />
        <meta property="og:title" content={current["Школа научного лидерства Science leadership school"]} />
        <meta property="og:description"
              content={current["schoolMeta"]}  />
        <title>{current["Школа научного лидерства Science leadership school"]}</title>
        <link rel="canonical" href="https://scitech.ru/school" />
      </Helmet>

      <Layout style={{
        backgroundImage: 'url(/img/gradients/school_gradient.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '120% -5%',
      }} modalFormText={modalForm}>
        <div className='show wrapper_hero'>
          <div className='container relative'>
            <div className='colorSpot colorSpot__green colorSpot__green'></div>
            <div className='spot'></div>
            <div className='content pb0'>
              <ul className='g3 zIndex'>
                <li className='i3_3'>
                  <p className='asideMarker'>{current["Образовательный проект"]}</p>
                </li>
                <li className='i3_9'>
                  {lang === 'ru' ? <h1>Школа научного лидерства</h1> : null}
                  <h1>Science leadership school</h1>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='show'>
          <div className='container'>
            <div className='content'>
              <ul className='g3'>
                <li className='i3_3'></li>
                <li className='i3_9 wrapper_borderTop zIndex'>
                  <ul className='g3'>
                    <li className='i3_12'>
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
                              {current["Длительность — 1 год"]}
                            </p>
                            <p className='raleway'>{current["Февраль"]} 2021 - {current["Февраль"]} 2022</p>
                          </div>
                          <div className='datePlace_place mt_low'>
                            <img src='/img/pin.svg' alt='icon' />
                            <div className='place_text'>
                              <p className='asideMarker asideMarker_place'>{current["онлайн"]}, {current["оффлайн"]}</p>
                            </div>
                          </div>
                          <div>
                            <p className="raleway">{current["Прием заявок окончен"]}</p>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className='i3_12 flex_end'>
                            <Button bordered-green marginleft onClick={openModal}>
                              {current["Сообщить о следующем наборе"]}
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
                          <em className="zIndex">
                            {current["school-about1"]}
                          </em>
                        </li>
                        <li className='i3_6'>
                          <h4>{current["Сообщество международного уровня"]}</h4>
                          <p>
                            {current["school-about2"]}
                          </p>
                        </li>
                        <li className='i3_6'>
                          <h4>{current["Научный лидер — эффективный руководитель"]}</h4>
                          <p>
                            {current["school-about3"]}
                          </p>
                        </li>
                        <li className='i3_6'>
                          <h4 className='mt0'>{current["Постоянный обмен опытом"]}</h4>
                          <p>
                            {current["school-about4"]}
                          </p>
                        </li>
                        <li className='i3_6'>
                          <h4 className='mt0'>{current["Междисциплинарная команда"]}</h4>
                          <p>
                            {current["school-about5"]}
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

        <div className='show wrapper_speakers'>
          <div className='container'>
            <div className='content'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'>{current["Команда"]}</p>
                </li>
                <li className='i3_9'>
                  <SpeakerCards>
                    <SpeakerCard photo='/img/speaker_irina.png' fullName={current["Ирина Шрайбер"]} position={current["ментор"]}>
                      {current["Ph. D., кандидат физико-математических наук, ученый, исследователь, лектор"]}
                    </SpeakerCard>
                    <SpeakerCard photo='/img/roman_osvald.png' fullName={current["Роман Оствальд"]} position={current["руководитель проектной работы"]}>
                      {current["Канд. хим. наук. Проректор СурГУ по науке и технологиям. Руководитель проектной работы SLS"]}
                    </SpeakerCard>
                  </SpeakerCards>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {lang === 'ru'? (
        <div className='show'>
          <div className='container'>
            <div className='content'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'>Основные эксперты</p>
                </li>
                <li className='i3_9'>
                  <SpeakerCards>
                    <SpeakerCard photo='/img/speaker_chulok.png' fullName='Александр Чулок'>
                      Кандидат экономических наук, Директор Центра научно-технологического прогнозирования НИУ ВШЭ
                    </SpeakerCard>
                    <SpeakerCard photo='/img/speaker_kiselev.png' fullName='Максим Киселев'>
                      Ph. D. (Yale), Professor of the Practice; Mentor, SKOLKOVO Foundation; Center for Entrepreneurship
                      and Innovation
                    </SpeakerCard>
                    <SpeakerCard photo='/img/speaker_bruno.png' fullName='Andy Bruno'>
                      Associate Professor and Director of Graduate Studies, Ph. D. (University of Illinois), автор
                      монографии «The Nature of Soviet Power: An Arctic Environmental History»
                    </SpeakerCard>
                    <SpeakerCard photo='/img/speaker_smith.png' fullName='Laurence C. Smith'>
                      Ph. D. (Cornell University). John Atwater and Diana Nelson Chair of Environmental Studies in the
                      IBES and the DEEPS at Brown University, автор монографии «The World in 2050: Four Forces Shaping
                      Civilization's Northern Future»
                    </SpeakerCard>
                    <SpeakerCard photo='/img/speaker_teslinov.png' fullName='Андрей Теслинов'>
                      Доктор технических наук, генеральный директор НКГ «DBA—concept», Executive Professor ИБДА РАНХиГС
                    </SpeakerCard>
                    <SpeakerCard photo='/img/speaker_falcovich.png' fullName='Юлия Фалькович'>
                      Кандидат педагогических наук, Директор Центра научной интеграции НИУ ВШЭ
                    </SpeakerCard>
                    <SpeakerCard photo='/img/speaker_kizeev.png' fullName='Вениамин Кизеев'>
                      IPMA Level«B», член правления НП «СОВНЕТ», эксперт по управлению проектами и инновациями компании
                      WINbd
                    </SpeakerCard>
                    <SpeakerCard photo='/img/speaker_walker.png' fullName='Уолкер Спенсер'>
                      Head of Deseret First Financial Services, менеджер Центра коммерциализации и трансфера технологий
                      Университета Юты, Член правления DFFCU. 2015-2018 управляющий партнер в Main Street Capital
                      Partners
                    </SpeakerCard>
                    <SpeakerCard photo='/img/speaker_irina.png' fullName='Ирина Шрайбер' position='ментор'>
                      Ph. D., кандидат физико-математических наук, ученый, исследователь, лектор
                    </SpeakerCard>
                    <SpeakerCard order4 photo='/img/speaker_latyshev.png' fullName='Андрей Латышев' position="идеолог">
                      Руководитель ЦРК, проректор ТюмГУ
                    </SpeakerCard>
                    <SpeakerCard photo='/img/roman_osvald.png' fullName='Роман Оствальд' position='руководитель проектной работы'>
                      Канд. хим. наук. Проректор СурГУ по науке и технологиям. Руководитель проектной работы SLS
                    </SpeakerCard>
                  </SpeakerCards>
                </li>
              </ul>
            </div>
          </div>
        </div>) : null}

        <div className='show'>
          <div className='container'>
            <div className='content'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_tiny'>{current["Модуль"]} 1</p>
                  <p className='asideMarker asideMarker_mt1'>20 - 28 {current["марта"]} 2021</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4>{current["Лидерство и эффективная командная работа в научной среде. Форсайт в науке"]}</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_tiny'>{current["Модуль"]} 2</p>
                  <p className='asideMarker asideMarker_mt1'>15 - 23 {current["мая"]} 2021</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4>{current["Научный протокол и управление знаниями. Академическое письмо."]}</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_tiny'>{current["Модуль"]} 3</p>
                  <p className='asideMarker asideMarker_mt1'>11 - 30 {current["июля"]} 2021</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4>{current["Проектное управление в науке. Разработка и создание устава проекта."]}</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_tiny'>{current["Модуль"]} 4</p>
                  <p className='asideMarker asideMarker_mt1'>21 - 29 {current["августа"]} 2021</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4>{current["Фандрайзинг, финансирование и работа с грантовыми фондами. Научная экспертиза"]}</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_tiny'>{current["Модуль"]} 5</p>
                  <p className='asideMarker asideMarker_mt1'>17 - 29 {current["Октября"]} 2021</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4>{current["Коммуникации ученого в современном мире: власть, бизнес, социум"]}</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_tiny'>{current["Модуль"]} 6</p>
                  <p className='asideMarker asideMarker_mt1'>20 - 28 {current["ноября"]} 2021</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4>{current["Стратегия управления научно-исследовательской деятельностью. Трансфер технологий"]}</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_tiny'>{current["Модуль"]} 7</p>
                  <p className='asideMarker asideMarker_mt1'>15 - 23 {current["января"]} 2022</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4>{current["Линейное управление в научных и научно-технических проектах, центрах, лабораториях"]}</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_tiny'>{current["Модуль"]} 8</p>
                  <p className='asideMarker asideMarker_mt1'>19 - 22 {current["февраля"]} 2022</p>
                </li>
                <li className='i3_9'>
                  <ul className='g3'>
                    <li className='i3_12'>
                      <ul className='g3'>
                        <li className='i3_12'>
                          <h4>{current["Подготовка к защитам и защиты проектов"]}</h4>
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
            <div className='content'>
              <ul className='g3'>
                <li className='i3_3'></li>
                <li className='i3_9 border_top'>
                  <h2>{current["Итоги первого потока"]} 2019-2020</h2>
                  <p className='titleBlock'>
                    {current["schoolStreamres"]}
                  </p>
                  <a href={`/${lang}/school2019_2020`} className='link_event link_event__noBorder raleway_bold mt_low'>
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
                      <div className='result_numbers'>
                        <div className='result_item'>
                          <p className='bigNumber'>46</p>
                          <p className='number_description'>{current["участников"]}</p>
                        </div>
                        <div className='result_item'>
                          <p className='bigNumber'>9</p>
                          <p className='number_description'>{current["проектов"]} </p>
                        </div>
                        <div className='result_item'>
                          <p className='bigNumber'>35</p>
                          <p className='number_description'>{current["статей в научных журналах"]}</p>
                        </div>
                        <div className='result_item'>
                          <p className='bigNumber'>10</p>
                          <p className='number_description'>{current["грантовых заявок"]} </p>
                        </div>
                        <div className='result_item'>
                          <p className='bigNumber'>11</p>
                          <p className='number_description'>{current["повышений до руководителей"]}</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {lang === 'ru' ? (
        <div className='show wrapper_feedback content mt_half'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker'>отзывы</p>
              </li>
              <li className='i3_9'>
                <p className='feedback_name feedback_name_pt_low'>Захаров Антон Викторович – кандидат педагогических наук, начальник научного
                  отдела Ишимского педагогического института им. П.П. Ершова, участник проекта «Разработка модели
                  зеленой трансформации региона: ценности, практики, социально-экономические эффекты».</p>
                <p className='feedBack_title'>
                  Любой прогресс, начинается с мечты. Думаю, что каждый, кто оказался участником Школы научного
                  лидерства пришел на нее с большим желанием реализовать собственные научные идеи.
                </p>
                <div className='feedBack_descript_container'>
                  <p className='feedBack_descript'>
                    Полагаю, что никто из участников не подозревал, что через год учебы и работы над своими проектами в
                    Школе мы сможем получать такие высокие результаты. Идея данной Школы - это опережающая подготовка
                    лидеров в научных исследованиях нового формата, готовых работать в логике инновационного процесса.
                    Это значит последовательного воплощения научных идей в инновации, разработку технологии их
                    производства, вывод исследовательского продукта на рынок. Подобная логика «исследование - инновации
                    - производство - рынок» легла в основу модулей Школы научного лидерства и позволила вновь созданным
                    командам практически с нуля получить серьезные результаты.
                  </p>
                  <p className='feedBack_descript'>Наш проект «Разработка модели зеленой трансформации региона:
                    ценности, практики, социально-экономические эффекты» дошел до итоговой защиты как один из
                    перспективных и отличающийся необходимыми результатами. За время обучения в школе нам удалось
                    подготовить более 10 научных статей, обеспечить привлечение НИОКР и выиграть грант РФФИ. Самое
                    главное, у нас получилось собрать уникальную, дружную, междисциплинарную команду проекта готовую
                    работать в рамках Западно-Сибирского Межрегионального научно-образовательного центра.
                    <br />
                    Мы благодарим всех экспертов, которые оказали содействие нашим поискам, членам других команд за
                    продуктивную коммуникацию и руководителям школы (А. Латышев, И.Шрайбер, А. Сорокин) за высокий
                    уровень организации Школы, желание помочь, и профессионализм.</p>
                </div>

                <p className='feedback_name'>Участник проекта «Многоуровневая система оценки риска развития заболевай
                  работников в Арктике»</p>
                <p className='feedBack_title'>
                  Занятия с компетентными специалистами помогли полноценно доработать проект, определить основные этапы
                  и шаги в его реализации.
                </p>
                <div className='feedBack_descript_container'>
                  <p className='feedBack_descript'>
                    Школа научных лидеров предоставила возможности для продвижения научного проекта нашей команды.
                    Занятия с компетентными специалистами помогли полноценно доработать проект, определить основные
                    этапы и шаги в его реализации. Начиная с первого модуля, мы корректировали и видоизменяли структуру
                    проекта таким образом, чтобы он был понятен не только узким медицинским специалистам. Рекомендации
                    спикеров и экспертов позволили оформить презентационный материал, раскрывающий суть нашего проекта и
                    четко в сжатой форме обосновать необходимость его реализации. Представление проекта с последующим
                    обсуждением помогло становлению необходимых компетенций публичных выступлений и взаимодействия с
                    широким кругом аудитории.
                  </p>
                  <p className='feedBack_descript'>
                    Важным для нас как исследователей была трансформация понимания научного проекта, который должен быть
                    реализован в конкретном продукте. Это позволило по-другому посмотреть на нашу научную работу с
                    формированием понимания потребностей конечных потребителей, ключевых заинтересованных лиц и главное
                    лиц принимающих решения. Если вы хотите, чтобы ваши научные исследования нашли практическую
                    реализацию, то школа научного лидерства это именно та площадка, где это возможно реализовать!
                  </p>
                </div>

                <p className='feedback_name'>Участник проекта «Интеграция зеленых технологий в устойчивое развитие
                  Арктики»</p>
                <p className='feedBack_title'>Главный драйвер Школы - её организаторы, менторы, наставники. Люди,
                  которые верят в свое дело, живут им. </p>
                <div className='feedBack_descript_container'>
                  <p className='feedBack_descript'>
                    Школа научных лидеров - уникальная возможность погрузиться в атмосферу творчества и исследования,
                    встретить близких по духу людей, развивать свои лидерские качества, получить практические навыки
                    организации научной работы в коллективе.
                    <br />
                    Необходимо масштабировать в системе высшего образования, в институтах академической науки,
                    исследовательской среде.
                  </p>
                  <p className='feedBack_descript'>
                    Время полное идей, увлекательного интеллектуального общения, новых (!) знаний, смелых проектов,
                    осознания важности и значимости того, что ты делаешь в науке. Расширяет горизонты, учит создавать
                    академические исследовательские команды и достигать значимых результатов.
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
                      image='/img/schoolProjects/projectGrowth_image.png'
                      link={`/schoolProjects/professionalGrowth`}
                    >
                      {current["professionalGrowth"]}
                    </SchoolProject_Card>
                    <SchoolProject_Card
                      image='/img/schoolProjects/ecoSafety_image.png'
                      link="/schoolProjects/ecoSafety"
                    >
                      {current["ecoSafety"]}
                    </SchoolProject_Card>
                    <SchoolProject_Card
                      image='/img/schoolProjects/diseaseRisk.png'
                      link="/schoolProjects/diseaseRisk"
                    >
                      {current["diseaseRisk"]}
                    </SchoolProject_Card>
                    <SchoolProject_Card
                      image='/img/schoolProjects/greenTransformation.png'
                      link="/schoolProjects/greenTransformation"
                    >
                      {current["greenTransformation"]}
                    </SchoolProject_Card>
                    <SchoolProject_Card
                      image='/img/schoolProjects/smartCitiesInArctic.png'
                      link="/schoolProjects/smartCitiesInArctic"
                    >
                      {current["smartCitiesInArctic"]}
                    </SchoolProject_Card>
                    <SchoolProject_Card
                      image='/img/schoolProjects/sihirtyaNation.png'
                      link="/schoolProjects/sihirtyaNation"
                    >
                      {current["sihirtyaNation"]}
                    </SchoolProject_Card>
                    <SchoolProject_Card
                      image='/img/schoolProjects/wisdomAsTheBasis.png'
                      link="/schoolProjects/wisdomAsTheBasis"
                    >
                      {current["wisdomAsTheBasis"]}
                    </SchoolProject_Card>
                    <SchoolProject_Card
                      image='/img/schoolProjects/integration_image.svg'
                      link="/schoolProjects/integrationOfGreenTechnologies"
                    >
                      {current["integrationOfGreenTechnologies"]}
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
    props: { current: current["test"], modalForm: current["modalForm"] },
  }
}
