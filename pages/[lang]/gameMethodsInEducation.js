import React, { useState } from 'react'
import { Page } from '../../components/page'
import { Layout } from '../../components/layout'
import { Day7, Day11, Day18, Day25, Day29, Day2, Day9, Day16, Day23, Day30 } from '../../components/events/newEventDays'
import { SpeakerCard, SpeakerCards } from '../../components/speakerCard'
import { Partner } from '../../components/partner'
import { DateItem, DateSwitcher } from '../../components/dateSwicher/dateSwicher'
import { EventItem, EventItem_Container } from '../../components/eventItem'
import { Schedule } from '../../components/schedule'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/dist/client/router'

const days = {
  '7': <Day7 />,
  '11': <Day11 />,
  '18': <Day18 />,
  '25': <Day25 />,
  '29': <Day29 />,
  '2': <Day2 />,
  '9': <Day9 />,
  '16': <Day16 />,
  '23': <Day23 />,
  '30': <Day30 />,
}

const isShowRegistrationButton = false

export default function GameMethodsInEducation(props) {
  const { query: {lang: lang} } = useRouter()
  const [day, setDay] = useState('7')
  return (
    <Page>
      <Helmet>
        <meta name="description" content="Участники разработают и внедрят в работу своего вуза современный образовательный продукт на основе игровых технологий" />
        <meta name="keywords" content="разработка игры, игровые механики в образовании" />
        <meta property="og:image" content="/img/appleIcon.png" />
        <meta property="og:url" content="https://scitech.ru/gameMethodsInEducation" />
        <meta property="og:title" content="Игровые методы в образовании. Принципы. Теория. Практика"/>
        <meta property="og:description" content="Участники разработают и внедрят в работу своего вуза современный образовательный продукт на основе игровых технологий" />
        <title>Игровые методы в образовании. Принципы. Теория. Практика</title>
        <link rel="canonical" href="https://scitech.ru/gameMethodsInEducation" />
      </Helmet>

      <Layout>
        <div className='show content'>
          <div className='container relative'>
            <div className='colorSpot colorSpot__red'></div>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker'>тренинг</p>
              </li>
              <li className='i3_9'>
                <div className='titleHero'>
                  <h1>Игровые методы в образовании. Принципы. Теория. Практика</h1>
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
                    {/* @todo: add Modal pop-up*/}

                    <Schedule  dataFirst={[7, 'Ноя 2020']}
                               dataSecond={[30, 'Дек 2020']}
                               place={'онлайн, zoom'}
                               isShowButton={isShowRegistrationButton}
                               eventTitle="Зарегистрироваться на мероприятие «Игровые методы в образовании. Принципы. Теория."
                               eventLinkToTable="gameMethods"
                               eventType={'gameMethodsInEducation'}
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
                <h2>
                  Приглашаем сотрудников вузов, ориентированных на внедрение современных образовательных технологий
                </h2>
                <p>
                  В партнерстве с Тюменским государственным университетом и группой Dragon-Fox приглашаем к участию в
                  интенсивном онлайн-тренинге. Данный курс проводится в этом году последний раз. Предыдущий тренинг,
                  проведенный в период с 05.05.2020 по 30.06.2020, собрал 110 участников из 7 университетов РФ, средняя
                  удовлетворенность участников результатами обучения составила 90% из 100% возможных. По итогам
                  проведенных тренингов в реальную работу внедрено более 20 новых образовательных игротехнических
                  решений.
                </p>
                <p>
                  Курс прошел апробацию в университетах и проводится с учетом специфики деятельности научных
                  образовательных организаций. Команда тренеров имеет многолетний успешный опыт работы в
                  высококонкурентной бизнес-среде, а также опыт работы по развитию компетенций преподавателей
                  университетов.
                </p>
                <p>Описание курса:</p>
                <p>
                  — Каждый участник в составе мини-команды примет участие в создании собственного игрового обучающего
                  проекта и получит презентационные и раздаточные материалы для дальнейшей самостоятельной работы.
                </p>
                <p>
                  — Образовательный процесс практико-ориентирован, построен на принципах погружения в деятельность,
                  проходит в формате необходимого изучения теории и максимального применения групповой и индивидуальной
                  проектной работы.
                </p>
                <p>
                  — Все участники тренинга, защитившие мини-проект и успешно сдавшие входное/выходное тестирование,
                  получат удостоверение о повышении квалификации установленного образца объемом 72 часа (40 часов очной
                  работы) и/или сертификат о прохождении тренинга от ТОГИРРО, группы Dragon-Fox и лаборатории кадрового
                  консалтинга ТюмГУ.
                </p>
                <p>
                  — Для каждого участника будет доступно не менее 6 часов онлайн-консультаций по дальнейшей реализации
                  разработанного игрового образовательного проекта.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className='show wrapper_about content'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker'>Основные результаты</p>
              </li>
              <li className='i3_9'>
                <p>
                  1. Участники разработают и внедрят в работу своего вуза современный образовательный продукт на основе
                  игровых технологий.
                </p>
                <p className='mb0'>2. Участники узнают:</p>
                <p className='m0'>— алгоритмы дизайна и создания игр;</p>
                <p className='m0'>— законы игровых механик;</p>
                <p className='m0'>— профессиональные инструменты игротехники.</p>
                <p className='mb0'>3. Участники научатся:</p>
                <p className='m0'>— инициировать и создавать образовательные игры;</p>
                <p className='m0'>— связывать игровые действия и образовательные результаты;</p>
                <p className='m0'>— разрабатывать игровые механики под задачи образовательного проекта; </p>
                <p className='m0'>— интегрировать оценочные инструменты в образовательный продукт;</p>
                <p className='m0'>— связывать игру с развитием целевых компетенций и/или знаний.</p>
              </li>
              <li className='i3_3'></li>
              <li className='i3_9'>
                <div className="videoContainer">
                  <iframe
                    width='560'
                    height='315'
                    frameBorder='0'
                    allowFullScreen
                    type='video/youtube'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    src='https://www.youtube.com/embed/TYCX0KjR5js'
                  />
                </div>
                <p className="raleway">Вводный вебинар от ведущего курса Романа Крылова</p>
              </li>
            </ul>
          </div>
        </div>

        <div className='show wrapper_speakers content'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker'>Организаторы</p>
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
                      logo='/img/logo_dragon.svg'
                      link="http://dragon-fox.ru/"
                      name='Dragon-Fox — группа разработчиков целевых игр'
                      alt='группа разработчиков целевых игр'
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
                  <SpeakerCard photo='/img/speaker_krylov.png' fullName='Роман Крылов'>
                    Разработчик игровых решений для бизнеса, управляющий партнер группы Dragon-Fox, ведущий тренер
                    программы
                  </SpeakerCard>
                  <SpeakerCard photo='/img/speaker_latyshev.png' fullName='Андрей Латышев'>
                    И.о. проректора по персоналу и организационному развитию Тюменского государственного университета,
                    лидер проекта Центр Развития Компетенций руководителей Западно-Сибирского НОЦ
                  </SpeakerCard>
                  <SpeakerCard photo='/img/speaker_kubareva.png' fullName='Юлия Кубарева'>
                    Ассистент программы, управляющий партнер группы Dragon-Fox, разработчик игровых решений для бизнеса,
                    эксперт по оценке персонала с помощью игр; разрабатывает игровые решения с 1998 года
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
                <p className='asideMarker'>Программа</p>
                <p className='asideMarker'>(московское время)</p>
                <p className='flex'>
                  <span>
                    <img src='/img/download.svg' alt='icon' />
                  </span>
                  <a href='/docs/program_newEvent.pdf' download>
                    Скачать в PDF
                  </a>
                </p>
              </li>
              <li className='i3_9'>
                <DateSwitcher>
                  <DateItem active={day === '7'} onClick={e => setDay('7')} date={'7'} month={'ноя'} />
                  <DateItem active={day === '11'} onClick={e => setDay('11')} date={'11'} month={'ноя'} />
                  <DateItem active={day === '18'} onClick={e => setDay('18')} date={'18'} month={'ноя'} />
                  <DateItem active={day === '25'} onClick={e => setDay('25')} date={'25'} month={'ноя'} />
                  <DateItem active={day === '29'} onClick={e => setDay('29')} date={'29'} month={'ноя'} />
                  <DateItem active={day === '2'} onClick={e => setDay('2')} date={'2'} month={'дек'} />
                  <DateItem active={day === '9'} onClick={e => setDay('9')} date={'9'} month={'дек'} />
                  <DateItem active={day === '16'} onClick={e => setDay('16')} date={'16'} month={'дек'} />
                  <DateItem active={day === '23'} onClick={e => setDay('23')} date={'23'} month={'дек'} />
                  <DateItem active={day === '30'} onClick={e => setDay('30')} date={'30'} month={'дек'} />
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
                <p className='asideMarker asideMarker_mt_half'>График дополнительной и проектной работы</p>
              </li>
              <li className='i3_9'>
                <EventItem_Container>
                  <EventItem date='10:00 – 20:00' title='Каждая пятница с 13 ноября 2020'>
                    День проектной работы в группах, встречи с модераторами групп в конференциях ZOOM (2 часа на
                    группу). Роман Крылов, Юлия Кубарева, Андрей Латышев и команда модераторов
                  </EventItem>
                  <EventItem date='10:00 – 13:00' title='Каждая суббота с 14 ноября 2020'>
                    Еженедельные стрим-конференции «Практика игр» с автором курса и приглашенными спикерами, свободное
                    посещение, участие в онлайн-играх от автора курса, запись выкладывается на YouTube-канал. Роман Крылов и приглашенные спикеры
                  </EventItem>
                </EventItem_Container>
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
                <p>Место проведения: дистанционно, онлайн на платформе Zoom.</p>
                <p>Стоимость обучения на курсе — 12 000 &#x20bd; для одного участника. </p>
                <p>Стоимость обучения для группы сотрудников вуза (от 5 до 8 человек) – 48000 &#x20bd;.</p>
                <p>Заявки принимаются через заполнение <a href={`/${lang}//gameMethodsInEducation`}>электронной формы.</a></p>
                <p>Вопросы заключения договоров и содержательные вопросы – Латышев Андрей, тел: <a href='tel:+7 (905) 089 67 47'>+7 (905) 089 67 47</a>,
                  e-mail: <a href='mailto:a.s.latyshev@utmn.ru'>a.s.latyshev@utmn.ru.</a> </p>
                <p>Бусыгина Наталья, тел: <a href='tel:+7 (904) 490 45 74'>+7 (904) 490 45 74</a> (WhatsApp, Viber),
                  e-mail: <a href='mailto:n.v.busygina@utmn.ru'>n.v.busygina@utmn.ru</a>, <a href='mailto:cdc@scitech.ru'>cdc@scitech.ru</a></p>
                <p><a href="https://scitech.ru">Scitech.ru</a> - Информация о Центре развития компетенций</p>
              </li>
            </ul>
          </div>
        </div>

        <div className='show wrapper_feedback content mb6'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'>
                <p className='asideMarker'>отзывы</p>
              </li>
              <li className='i3_9'>
                <h2 className='mt_half'>
                  За всё время проведения курса мы получили более 100 отзывов. Вот некоторые из них:
                </h2>

                <p className='feedback_name'>Хлебников Николай Александрович</p>
                <p className='feedBack_title'>
                  Уже начали внедрять игровые элементы в математику, физику и химию. Они крайне преобразились, а точнее
                  их способы преподавания.
                </p>
                <div className='feedBack_describe_container'>
                  <p className='feedBack_descript feedBack_descript_single'>
                    После курса есть четкое представление и чек-лист для внедрения игровых механик в образовательный
                    процесс.
                  </p>
                </div>

                <p className='feedback_name'>Бочарова Марина Владимировна</p>
                <p className='feedBack_title'>
                  Однозначно продолжу сама применять и разрабатывать игровые форматы и «обращать» коллег. По просьбе
                  зав. кафедрой проведу семинар для коллег.
                </p>
                <div className='feedBack_descript_container'>
                  <p className='feedBack_descript'>
                    После курса улучшились навыки разработки игр разных форматов под конкретные задачи. Умение применять
                    разные форматы вовлечения студентов (по примеру Романа). Умение видеть вариативность на пути к цели
                    (учебной, игровой...).
                  </p>
                  <p className='feedBack_descript'>
                    Систематизировала уже имевшиеся знания по учебным играм и массу новых. Ощущение, с одной стороны,
                    своей возросшей компетентности в данной сфере, а, с другой стороны, стремление учиться и работать
                    над играми дальше.
                  </p>
                </div>

                <p className='feedback_name'>Великая Ольга Александровна</p>
                <p className='feedBack_title'>Я бы внедрила игровой метод во все дисциплины, где это применимо. </p>
                <div className='feedBack_descript_container'>
                  <p className='feedBack_descript'>
                    Психологически игра свойственна человеческой натуре, усвоение материала происходит легче и
                    усваивается надолго, т.к. игра всегда подкрепляет знания или принимаемые в процессе игры решения
                    эмоциональными впечатлениями.
                  </p>
                  <p className='feedBack_descript'>
                    Посоветую курс всем преподавателям, которым интересен данный метод и кто мотивирован к его изучению
                    и применению.
                  </p>
                </div>

                <p className='feedback_name'>Анна, старший преподаватель кафедры менеджмента, маркетинга и логистики</p>
                <p className='feedBack_title'>
                  Благодаря этому курсу, я активно приступила к внедрению игровых симуляторов в учебный процесс. Тренинг
                  помог «настроить» умение работать в команде, коммуникабельность, многозадачность, креативность.
                </p>

                <p className='feedback_name'>Наталья, доцент кафедры неорганической и физической химии</p>
                <p className='feedBack_title'>
                  Планирую внедрить в учебный процесс игру, сценарий которой разработали на последнем занятии. Также
                  заинтересовала игра, предложенная другой командой. После небольших изменений возможно проведу ее на
                  занятии.
                </p>

                <p className='feedback_name'>
                  Гузель, старший преподаватель кафедры мат. методов, информационных технологий и систем управления в
                  экономике
                </p>
                <p className='feedBack_title'>
                  Очень полезно проводить междисциплинарные игры в рамках институтов и университета в целом.
                </p>
                <div className='feedBack_descript_container'>
                  <p className='feedBack_descript'>
                    Практически в каждый свой читаемый курс я могу теперь встроить игровые методы обучения. Также будет
                    очень полезно проводить междисциплинарные игры в рамках институтов и университета в целом. Одну из
                    таких игр мы с коллегами начали разрабатывать и намерены провести уже в этом учебном году.
                  </p>
                  <p className='feedBack_descript'>
                    А также было бы полезно проводить игры для всех работников университета. Это помогает сплотить
                    коллектив, во время подобных тренингов могут зародиться устойчивые группы единомышленников,
                    возникнуть идеи научных проектов.
                  </p>
                </div>

                <p className='feedback_name'>Артем, доцент кафедры картографии и геоинформационных систем</p>
                <p className='feedBack_title'>Данный курс должны пройти как можно больше людей из ППС.</p>
                <div className='feedBack_descript_container'>
                  <p className='feedBack_descript'>
                    Тренинг – отличный инструмент для того, чтобы научиться применению различных типов игр в учебном
                    процессе, в частности при усвоении новых знаний, закреплении материала, для оценки уровня знаний
                    студентов, а также для повышения степени вовлеченности студентов в учебный процесс, увеличения
                    коммуникабельности.
                  </p>
                  <p className='feedBack_descript'>
                    Данный курс должны пройти как можно больше из ППС, так как это даст возможность модифицировать
                    традиционность взглядов на процесс обучения путем добавления новых технологий, подходов, методик для
                    повышения качества образования.
                  </p>
                </div>

                <p className='feedback_name'>
                  Галина, старший преподаватель кафедры иностранных языков гуманитарного факультета
                </p>
                <p className='feedBack_title'>Мои студенты были удивлены и обрадованы такому подходу.</p>
                <div className='feedBack_descript_container'>
                  <p className='feedBack_descript'>
                    Если честно, то я думала перед началом обучения, что это будет курс типа навигатора по интерактивным
                    платформам. И я смогу прокачать конкретные навыки по составлению/работе с интерактивными заданиями в
                    форме игры. Так как я абсолютный новичок в этом вопросе, то я была сначала немного в замешательстве
                    от обилия теоретической информации в начале курса. Но когда мы поиграли в субботу и выполнили
                    некоторые задания, то информация начала медленно систематизироваться. Я получила реальные
                    инструменты для создания своей игры, поучаствовала в онлайн-играх (первый опыт), при подготовке
                    групповой игры нашла много интересных сайтов для меня для интерактивной работы с обучающимися. На
                    экзаменах и зачётах в июне я не просто показывала студентам номера билетов, а добавила фановый
                    элемент, и студенты открывали специальные интерактивные коробочки с темами и вопросами.
                  </p>
                  <p className='feedBack_descript'>
                    Не будь этого курса, я бы точно не придумала такой вариант дистанционного выбора билетов. (В апреле
                    я просто показывала студентам распечатанные билеты с цифрами на обратной стороне по Zoom и они
                    называли цифру.) Мои студенты были удивлены и обрадованы такому подходу. Я и раньше использовала на
                    своих занятиях имеющиеся технические средства, обучающие платформы, языковую платформу нашего
                    университета (с чужими и собственными разработанными курсами), а теперь пересмотрю подход подачи
                    информации. В связи с дистанционным образованием и новыми знаниями с курса планирую летом переделать
                    формат обычных моих заданий и доделать запланированную в начале курса мою индивидуальную игру.
                    Честно, вначале я не могла себе представить игру ни стратегически, ни практически. После последних
                    занятий с презентациями игр всех команд, у меня появилось чёткое представление о моей игре.
                  </p>
                </div>

                <p className='feedback_name'>Елена, доцент кафедры конституционного права</p>
                <p className='feedBack_title'>
                  Результатом игр стало развитие компетенций, которые не всегда задействованы в формате семинарского
                  занятия: работа в команде, лидерство, гибкость и быстрота мышления.
                </p>
                <div className='feedBack_descript_container'>
                  <p className='feedBack_descript'>
                    Результаты есть уже сегодня. Изученные технологии разработки игр позволили создать и провести несколько
                    целевых игр. Была создана и проведена академическая игра «Конституция России» 11 мая 2019 г. Была
                    применена игровая методичка «Жюри» для создания следующих проектов: «Процедура медиации в школе»,
                    «Процедура рассмотрения обращений граждан в школе», «Совет школы» - 10 мая, 15 мая 2019 г.
                  </p>
                  <p className='feedBack_descript'>
                    Была модернизирована игра «Конкурс по конституционному правосудию Эквитас-2019» - 16 и 17 мая 2019 г.
                    Запланирована игра брейн-ринг по теме «Конституция России» на 22 мая 2019 г. между двумя
                    студенческими группами. Обучение облегчило процесс принятия решений по поводу значимых этапов игр:
                    приглашение жюри, критерии оценки, определение победителя.
                  </p>
                </div>

                <p className='feedback_name'>Анастасия, ассистент кафедры иностранного языка</p>
                <div className='feedBack_descript_container'>
                  <p className='feedBack_descript'>
                    Главный результат по курсу: Получение фактически «новой профессии» - разработчик целевых игр.
                  </p>
                  <p className='feedBack_descript'>
                    Предложения по итогу курса: внедрение игрофикации в мероприятия для абитуриентов, внедрение
                    игрофикации в процесс погружения студентов 1 курса в жизнь университета.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </Page>
  )
}
