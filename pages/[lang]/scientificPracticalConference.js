import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Partner } from '../../components/partner'
import { EventItem, EventItem_Container, EventItem_guest, EventItem_guests } from '../../components/eventItem'
import { StrongText } from '../../components/strongText'
import { Page } from '../../components/page'
import { Layout } from '../../components/layout'
import { useRouter } from 'next/dist/client/router'
import Translator from '../../i18n/translator'
import { Button } from '../../components/button'
import ModalsContext from '../../components/modals/ModalContext'
import { DateItem, DateSwitcher } from '../../components/dateSwicher/dateSwicher'

const day18 =  (<div className="day" id="18">
  <div className="event">
    <h4>
      18 Октября, понедельник
    </h4>
    <EventItem_Container>
      <EventItem date_add='10:00 — 10:30 МСК'
                 title='Открытие конференции'>
        <p className="mb-0">Представители исполнительной власти Тюменской области</p>
        <p className="mt-0">Ректоры вузов Тюменской области</p>
      </EventItem>
      <EventItem date_add='10:30 — 11:30 МСК'
                 title='Открытая лекция «Глобальные тренды будущего - рамка для переосмысления роли университетов до и после 2050 года»'>
        <p>Спикер: Александр Чулок, кандидат экономических наук, директор Центра научно-технологического прогнозирования НИУ ВШЭ</p>
      </EventItem>
      <EventItem date_add='11:30 — 13:30 МСК'
                 title='Секция «Ценности, устойчивость, изменения климата, degrowth: согласование зеленых действий» (часть 1)'>
      </EventItem>
      <EventItem date_add='14:00 — 15:30 МСК'
                 title='Круглый стол «Интеграция России в мировую климатическую повестку. Развитие и формирование карбоновых полигонов.
          Зеленые ценности и устойчивое развитие»'>
        <p>Модераторы:</p>
        <p className="mb-0">— Евгений Сженов, научный руководитель ЭАЦ «Научно-образовательная политика», ведущий эксперт Института образования НИУ ВШЭ</p>
        <p className="m-0">— Гужеля Дмитрий Юрьевич, руководитель департамента оценки и методологии АНО «Россия – страна
          возможностей», советник Президента РАН</p>
        <p className="m-0">— Шрайбер Ирина, PhD, кандидат физико-математических наук, ученый, исследователь, лектор, ментор Школы научного лидерства</p>
        <p className="mt-0">— Латышев Андрей, проректор Тюменского государственного университета, руководитель проекта ЦРК Западно-Сибирского НОЦ</p>

        <p>Приглашены к участию:</p>
        <p className="mb-0">— Гуров Григорий Александрович, заместитель Министра науки и высшего образования РФ</p>
        <p className="m-0">— Люлин Сергей Владимирович, заместитель президента РАН, член-корреспондент РАН, профессор РАН, доктор физико-математических наук</p>
        <p className="m-0">— Дурманов Николай Дмитриевич, заместитель директора по развитию Института X-BIO ФГАОУ ВО «Тюменский государственный
          университет», специальный представитель Минобрнауки РФ по вопросам биологической и экологической безопасности</p>
        <p className="m-0">— Гужеля Дмитрий Юрьевич, руководитель департамента оценки и методологии АНО «Россия – страна возможностей»</p>
        <p className="m-0">— Николаев Анатолий Николаевич, ректор ФГАОУ ВО «Северо-Восточный федеральный университет имени М.К. Аммосова»</p>
        <p className="m-0">— Румянцев Максим Валерьевич, ректор ФГАОУ ВО «Сибирский федеральный университет»</p>
        <p className="m-0">— Федоров Александр Александрович, ректор ФГАОУ ВО «Балтийский федеральный университет имени Иммануила Канта»</p>
        <p className="m-0">— Яковлев Алексей Николаевич, ректор ФГБОУ ВО «Кузбасский государственный технический университет имени Т.Ф. Горбачева»</p>
        <p className="m-0">— Дёмин Максим Викторович, проректор по научной работе ФГАОУ ВО «Балтийский федеральный университет имени Иммануила Канта»</p>
        <p className="m-0">— Зенин Сергей Сергеевич, кандидат юридических наук, директор Института государства и права, проректор Тюменского государственного университета</p>
        <p className="mt-0">— Куричев Николай Константинович, декан факультета географии и геоинформационных технологий, доцент НИУ ВШЭ, НЦМУ ЦМИЧП</p>
      </EventItem>
      <EventItem date_add='16:00 — 18:00 МСК'
                 title='Секция «Ценности, устойчивость, изменения климата, degrowth: согласование зеленых действий» (часть 2)'>
      </EventItem>
      <EventItem date_add='18:00 — 19:00 МСК'
                 title='Открытая лекция «The power of projects to create our future!»'>
        <p>Спикер: Martina Huemann, professor, heads the Project Management Group in the Department Strategy and Innovation and is the Academic Director
          of the Professional MBA Program: Project Management (WU Vienna University of Economics and Business, Austria)</p>
      </EventItem>
    </EventItem_Container>
  </div>
</div>)

const day19 =  (<div className="day" id="19">
  <div className="event">
    <h4>
      19 Октября, вторник
    </h4>
    <EventItem_Container>
      <EventItem date_add='10:00 — 11:00 МСК'
                 title='Открытая лекция «Климатические вызовы для России: риски, возможности адаптации и миграции, роль карбоновых полигонов»'>
        <p>Спикер: Георгий Сафонов, директор Центра экономики окружающей среды и природных ресурсов НИУ ВШЭ, НЦМУ ЦМИЧП</p>
      </EventItem>
      <EventItem date_add='11:00 — 14:00 МСК'
                 title='Секция «Климат, Карбон, Проекты в этой области»'>
      </EventItem>
      <EventItem date_add='14:00 — 15:30 МСК'
                 title='Круглый стол «Научно-образовательные консорциумы: Научно-образовательные центры мирового уровня и Приоритет 2030»'>
        <p>Модератор: Евгений Сженов, научный руководитель ЭАЦ «Научно-образовательная политика», ведущий эксперт Института образования НИУ ВШЭ</p>
        <p>Приглашены к участию:</p>
        <p className="mb-0">— Гусев Денис Александрович, генеральный директор АНО «Научно-образовательный центр мирового уровня «ТулаТЕХ»</p>
        <p className="m-0">— Есеев Марат Каналбекович, доктор физико-математических наук, проректор по инновационному развитию - научный руководитель НОЦ мирового уровня «Российская Арктика»</p>
        <p className="m-0">— Загайнова Елена Вадимовна, ректор ФГАОУ ВО «Национальный исследовательский Нижегородский государственный университет им. Н.И. Лобачевского»</p>
        <p className="m-0">— Неустроев Денис Васильевич, генеральный директор АНО «Агентство развития научно-образовательных проектов»</p>
        <p className="m-0">— Омельчук Андрей Владимирович, заместитель Министра науки и высшего образования РФ</p>
        <p className="m-0">— Романчук Иван Сергеевич, ректор ФГАОУ ВО «Тюменский государственный университет»</p>
        <p className="m-0">— Рудской Андрей Иванович, ректор ФГАОУ ВО «Санкт-Петербургский политехнический университет Петра Великого», академик РАН</p>
        <p className="m-0">— Румянцев Максим Валерьевич, ректор ФГАОУ ВО «Сибирский федеральный университет»</p>
        <p className="m-0">— Федюшкин Игорь Леонидович, член-корреспондент РАН, директор ИМХ РАН, генеральный директор АНО «Нижегородский НОЦ»</p>
        <p className="mt-0">— Шевченко Владимир Игоревич, и. о. ректора ФГАОУ ВО Национальный исследовательский ядерный университет «МИФИ»</p>
      </EventItem>
      <EventItem date_add='16:00 — 18:00 МСК'
                 title='Секция «Цифровизация здравоохранения: новые решения и работающие кейсы»'>
      </EventItem>
    </EventItem_Container>
  </div>
</div>)

const day20 =  (<div className="day" id="20">
  <div className="event">
    <h4>
      20 Октября, среда
    </h4>
    <EventItem_Container>
      <EventItem date_add='9:00 — 10:00 МСК'
                 title='Открытая лекция «Future of Science and future scientists. Prospectives for 2050»'>
        <p>Спикер: HansPeter Beck, PhD, professor, senior physicist and researcher (CERN, Switzerland)</p>
      </EventItem>
      <EventItem date_add='10:00 — 13:00 МСК'
                 title='Секция «Опыт и лучшие практики центров развития компетенций НОЦ»'>
      </EventItem>
      <EventItem date_add='14:00 — 15:30 МСК'
                 title='Круглый стол «Человеческий капитал как важная составляющая трансформации и инновационного развития науки и технологий в повестке научно-образовательных центров мирового уровня»'>
        <p>Модератор: Евгений Сженов, научный руководитель ЭАЦ «Научно-образовательная политика», ведущий эксперт Института образования НИУ ВШЭ</p>
        <p>Приглашены к участию:</p>
        <p className="mb-0">— Сергеев Александр Михайлович, президент ФГБУ «Российская академия наук», академик РАН, доктор физико-математических наук</p>
        <p className="m-0">— Комиссаров Алексей Геннадиевич, генеральный директор АНО «Россия – страна возможностей», проректор РАНХиГС,
          директор Высшей школы государственного управления РАНХиГС</p>
        <p className="m-0">— Гуров Григорий Александрович, заместитель Министра науки и высшего образования РФ</p>
        <p className="m-0">— Романчук Иван Сергеевич, ректор ФГАОУ ВО «Тюменский государственный университет»</p>
        <p className="m-0">— Загайнова Елена Вадимовна, ректор ФГАОУ ВО «Национальный исследовательский Нижегородский государственный университет им. Н.И. Лобачевского»</p>
        <p className="m-0">— Кудж Станислав Алексеевич, ректор ФГБОУ ВО «МИРЭА – Российский технологический университет»</p>
        <p className="m-0">— Петрова Ольга Викторовна, Министр образования, науки и молодежной политики Нижегородской области</p>
        <p className="m-0">— Басюк Виктор Стефанович, заместитель президента Российской академии образования</p>
        <p className="m-0">— Фрумин Исак Давидович, научный руководитель, профессор Института образования НИУ ВШЭ, НЦМУ ЦМИЧП, член Международной академии образования</p>
        <p className="m-0">— Яныкина Нина Олеговна, генеральный директор, ректор АНО «Университет Национальной технологической инициативы 2035»</p>
        <p className="mt-0">— Сорокин Александр Николаевич, директор Школы исследований окружающей среды и общества (Антропошкола), ведущий научный
          сотрудник лаборатории «Междисциплинарные исследования пространства», доцент кафедры истории и мировой политики</p>
      </EventItem>
      <EventItem date_add='15:30 — 16:30 МСК'
                 title='Открытая лекция «Универсальные компетентности как составляющие человеческого капитала: когнитивные основания и подходы к формированию»'>
        <p>Спикер: Тарас Пащенко, заведующий лабораторией проектирования содержания образования Института образования НИУ ВШЭ, НЦМУ ЦМИЧП</p>
      </EventItem>
      <EventItem date_add='16:00 — 18:00 МСК'
                 title='Открытая лекция: «Космическое командообразование»'>
        <p>Спикер: Сергей Рязанский, лётчик-космонавт, Герой Российской Федерации, кандидат биологических наук, заслуженный испытатель космической техники.</p>
      </EventItem>
    </EventItem_Container>
  </div>
</div>)

const day21 =  (<div className="day" id="21">
  <div className="event">
    <h4>
      21 Октября, четверг
    </h4>
    <EventItem_Container>
      <EventItem date_add='8:00 — 9:30 МСК'
                 title='Встреча со студентами'>
        <p>Спикер: Сергей Рязанский, лётчик-космонавт, Герой Российской Федерации, кандидат биологических наук, заслуженный испытатель космической техники.</p>
      </EventItem>
      <EventItem date_add='10:00 — 12:30 МСК'
                 title='Секция «Арктика и человек в Арктике. Вызовы и контуры будущего развития циркумполярного мира. Фокус: Человек»'>
      </EventItem>
      <EventItem date_add='12:30 — 13:30 МСК'
                 title='Питч-сессия Школы руководителей научно-технических проектов ЦРК Западно-Сибирского НОЦ'>
      </EventItem>
      <EventItem date_add='14:00 — 17:00 МСК'
                 title='Финал Западно-Сибирского инновационного межрегионального акселератора научно-технических проектов (ЗИМА21)'>
      </EventItem>
      <EventItem date_add='15:30 — 16:30 МСК'
                 title='Открытая лекция «Новый этап освоения Арктики. Вызовы и возможности 2050»'>
        <p>Спикер: Bruno Andy, associate Professor and Director of Graduate Studies, PhD (University of Illinois)</p>
      </EventItem>
    </EventItem_Container>
  </div>
</div>)

const day22 =  (<div className="day" id="22">
  <div className="event">
    <h4>
      22 Октября, пятница
    </h4>
    <EventItem_Container>
      <EventItem date_add='9:00 — 10:00 МСК'
                 title='Открытая лекция «Развитие человеческого капитала и Арктические проекты НОЦ»'>
        <p>Спикер: Есеев Марат Каналбекович, доктор физико-математических наук, проректор по инновационному развитию ФГАОУ ВО
          «Северный (Арктический) федеральный университет имени М.В. Ломоносова», научный руководитель НОЦ мирового уровня «Российская Арктика»</p>
      </EventItem>
      <EventItem date_add='10:00 — 12:00 МСК'
                 title='Секция «Арктика и человек в Арктике. Вызовы и контуры будущего развития циркумполярного мира. Фокус: Среда и экология»'>
      </EventItem>
      <EventItem date_add='12:00 — 13:00 МСК'
                 title='Открытая лекция «Не только нефть и ледоколы: социогуманитарные исследования Арктики как основа развития человеческого потенциала в регионе»'>
        <p>Спикер: Андриан Влахов, научный сотрудник Научно-учебной лаборатории социогуманитарных исследований Севера и Арктики НИУ ВШЭ, НЦМУ ЦМИЧП</p>
      </EventItem>
      <EventItem date_add='14:00 — 15:30 МСК'
                 title='Круглый стол «Арктика и человек в Арктике. Вызовы и контуры будущего развития циркумполярного мира»'>
        <p>Модератор: Евгений Сженов, научный руководитель ЭАЦ «Научно-образовательная политика», ведущий эксперт Института образования НИУ ВШЭ</p>
        <p>Приглашены к участию:</p>
        <p className="mb-0">— Алашкевич Михаил Юрьевич, старший вице-президент «ВЭБ.РФ»</p>
        <p className="m-0">— Николаев Анатолий Николаевич, ректор ФГАОУ ВО «Северо-Восточный федеральный университет имени М.К. Аммосова»</p>
        <p className="m-0">— Пастухова Лариса Сергеевна, член-корреспондент РАО, научный руководитель и автор концепции конкурса «Моя страна – моя Россия», проректор по проектной деятельности ФГБОУ ВО «РГГУ»</p>
        <p className="m-0">— Сергеев Александр Михайлович, президент ФГБУ «Российская академия наук», академик РАН, доктор физико-математических наук</p>
        <p className="m-0">— Румянцев Максим Валерьевич, ректор ФГАОУ ВО «Сибирский федеральный университет»</p>
        <p className="m-0">— Широков Анатолий Иванович, член Комитета Совета Федерации по федеративному устройству, региональной политике, местному самоуправлению и делам Севера</p>
        <p className="m-0">— Пилясов Александр Николаевич, доктор географических наук, профессор ФГБОУ ВО «МГУ имени М.В. Ломоносова»,
          Председатель российской секции Европейской ассоциации региональной науки (ERSA), председатель социально-экономической секции
          Экспертного совета по Арктике и Антарктике при Председателе СФ ФС РФ</p>
        <p className="mt-0">— Железняк Михаил Николаевич, доктор геолого-минералогических наук, директор Института мерзлотоведения СО РАН</p>
      </EventItem>
      <EventItem date_add='15:30 — 16:00 МСК'
                 title='Подведение итогов конференции'>
      </EventItem>
      {/*<EventItem date_add='16:00 — 17:00 МСК'*/}
      {/*           title='Открытая лекция «Risks and Response Measures in the Arctic»'>*/}
      {/*  <p>Спикер: Lаra Jóhannsdóttir, PhD, Professor (Faculty of Business Administration, University of Iceland)</p>*/}
      {/*</EventItem>*/}
      <EventItem date_add='17:00 — 18:00 МСК'
                 title="Открытая лекция «Possibility for greater cooperation in the Arctic between the US and Russia, during Russia's chairship of the Arctic Council»">
      <p>Спикер: Dr. Thomas E. Rotnem, Ph.D., M.B.A. Associate Director & Professor of Political Science, School of Government & International Affairs, Kennesaw State University (USA)</p>
      </EventItem>
    </EventItem_Container>
  </div>
</div>)

const days = {
  '18': day18,
  '19': day19,
  '20': day20,
  '21': day21,
  '22': day22,
}

export default function ScientificPracticalConference({ current, modalForm }) {
  const { query: {lang: lang} } = useRouter()
  const {modalService, setRegModalState} = useContext(ModalsContext)
  const [day, setDay] = useState('18')

  const openModal = () => {
    modalService.openModal("reg")
    setRegModalState({
      color: "red",
      inputs: ["name", "role", "company", "phone", "email", "speaker", "confidential"],
      configName: "scientificPracticalConference",
      title: lang === 'ru'
        ? 'Зарегистрироваться на мероприятие II Международная научно-практическая конференция «Наука. Лидерство. Общество – 2050»'
        : 'Register now to the 2nd International Scientific and Practical Conference'
    })
  }
  return (
    <Page>
      <Layout modalFormText={modalForm}>
        <Helmet>
          <meta name="description" content={current["scientificPracticalConferenceTitle"]} />
          <meta name="keywords" content={current["scientificPracticalConferenceTitle"]} />
          <meta property="og:image" content="/img/appleIcon.png" />
          <meta property="og:url" content={`https://scitech.ru/scientificPracticalConference`} />
          <meta property="og:title" content={current["scientificPracticalConferenceTitle"]} />
          <meta property="og:description" content={current["scientificPracticalConferenceTitle"]} />
          <title>{current["scientificPracticalConferenceTitle"]}</title>
          <link rel="canonical" href={`https://scitech.ru/scientificPracticalConference`} />
        </Helmet>

        <div className='show'>
          <div className='container relative'>
            <div className='content pb0'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'>{current["конференция"]}</p>
                </li>
                <li className='i3_9'>
                  <h1>{current["scientificPracticalConferenceTitle"]}
                  </h1>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='show content'>
          <div className='container'>
            <ul className='g3'>
              <li className='i3_3'></li>
              <li className='i3_9 wrapper_borderTop'>
                <ul className='g3'>
                  <li className='i3_12 flex_end'>

                    <div className="schedule_box">
                      <div className="schedule_date">
                        <p className="date_day">18</p>
                        <div className="date_wrapper">
                          <span className={`date_month 'date_month__wide'`}>{current["Окт"]} 2021</span>
                        </div>
                            <div className="sting">-</div>
                            <div className="schedule_date">
                              <p className="date_day">22</p>
                              <span className={`date_month date_month__wide'}`}>{current["Окт"]} 2021</span>
                            </div>
                      </div>

                      <div className="schedule_place">
                        <div className={`place_text '}`}>
                          <div className="place_text_icon">
                            <img loading="lazy" src='/img/pin.svg' alt='icon'/>
                            <p className="schedule_time__tiny mt0">{current["онлайн"]}</p>
                          </div>
                        </div>
                      </div>

                        <div className="schedule_button">
                            <div className='registerEventForm'>
                              <Button red onClick={openModal}>{current["Зарегистрироваться"]}</Button>
                            </div>
                            <a href='https://youtu.be/YNLXEt7sK5w' className="btn btn__red mt1">
                              {current["Ссылка на трансляцию"]}
                            </a>
                        </div>
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
                <li className='i3_3'>
                  <p className='asideMarker asideMarker_mt_half'>{current["о конференции"]}</p>
                </li>
                <li className='i3_9'>
                  <p>{current["scientificPracticalConferenceA"]}</p>
                  <p>{current["scientificPracticalConferenceB"]}</p>
                  <p>{current["scientificPracticalConferenceC"]} </p>
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
                  <p className='asideMarker'>{current["ЦЕЛЬ КОНФЕРЕНЦИИ"]}</p>
                </li>
                <li className='i3_9'>
                  <p>{current["scientificPracticalConference-aim1"]} </p>
                  <p>{current["scientificPracticalConference-aim2"]}</p>
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
                  <p className='asideMarker'>{current["ПРОЕКТ СОДЕРЖАНИЯ КОНФЕРЕНЦИИ"]}</p>
                </li>
                <li className='i3_9'>
                  <p className='mb0'><StrongText>{current["4 круглых стола"]}</StrongText> {current["по следующим тематикам:"]}</p>
                  {lang === 'ru' ? (
                    <>
                      <DateSwitcher>
                        <DateItem active={day === '18'} onClick={e => setDay('18')} date={'18'} month={'окт'} />
                        <DateItem active={day === '19'} onClick={e => setDay('19')} date={'19'} month={'окт'} />
                        <DateItem active={day === '20'} onClick={e => setDay('20')} date={'20'} month={'окт'} />
                        <DateItem active={day === '21'} onClick={e => setDay('21')} date={'21'} month={'окт'} />
                        <DateItem active={day === '22'} onClick={e => setDay('22')} date={'22'} month={'окт'} />
                      </DateSwitcher>
                      <br />
                      <div className='days'>{days[day]}</div>
                    </>
                  ) : (
                    <>
                      <EventItem_guests guests=''>
                        <EventItem_guest>
                          {current["roundtable-1"]}
                        </EventItem_guest>
                        <EventItem_guest>
                          {current["roundtable-2"]}
                        </EventItem_guest>
                        <EventItem_guest>
                          {current["roundtable-3"]}
                        </EventItem_guest>
                      </EventItem_guests>
                      <p><StrongText> {current["Лекции"]}</StrongText> {current["международных и российских экспертов."]}</p>
                      <p><StrongText>{current["Мини-конференции"]}</StrongText> {current["ведущих исследовательских команд."]}</p>
                      <p><StrongText>{current["Дискуссии"]}</StrongText> {current["с привлечением широкого круга профессиональной общественности."]}</p>
                      <p><StrongText>{current["Обсуждение"]}</StrongText> {current["международного опыта и трансляция его в отечественную практику."]}</p>
                      <p><StrongText>{current["Активизация совместного поиска"]}</StrongText> {current["и разработка эффективных моделей сотрудничества науки, органов власти и бизнес-структур."]}</p>
                    </>
                  )}
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
                  <p className='asideMarker'>{current["ЦЕЛЕВАЯ АУДИТОРИЯ"]}</p>
                </li>
                <li className='i3_9'>
                  <p>— {current["Представители Министерства науки и высшего образования Российской Федерации;"]}</p>
                  <p>— {current["Представители органов власти регионов НОЦ;"]}</p>
                  <p>— {current["Представители НОЦ и ЦРК РФ;"]}</p>
                  <p>— {current["Представители научно-экспертного сообщества;"]}</p>
                  <p>— {current["Представители крупного бизнеса."]}</p>
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
                  <p className='asideMarker'>ОРГКОМИТЕТ</p>
                </li>
                <li className='i3_9'>
                  <p>— Ирина Шрайбер - Ph. D., кандидат физико-математических наук, ученый, исследователь, лектор, ментор Школы научного лидерства</p>
                  {/*<p>— Валерий Крюков - доктор экономических наук, профессор, академик РАН. Директор Института экономики и организации промышленного производства СО РАН, руководитель Центра ресурсной экономики, главный редактор всероссийского экономического журнала «ЭКО»</p>*/}
                  <p>— Андрей Латышев - руководитель ЦРК, проректор ТюмГУ</p>
                  <p>— Вениамин Кизеев - кандидат экономических наук, IPMA Level«B», член правления НП «СОВНЕТ», эксперт по управлению проектами и инновациями компании WINbd</p>
                  <p>— Евгений Сженов - научный руководитель Экспертно-аналитического центра «Научно-образовательная политика», ведущий эксперт Института образования НИУ ВШЭ</p>
                  {/*<p>— Андрей Толстиков - кандидат биологических наук, эксперт Российской Академии наук, первый проректор ТюмГУ</p>*/}
                  <p>— Денис Неустроев - генеральный директор АНО «Агентство развития научно-образовательных проектов»</p>
                  <p>— Валерия Безуевская - кандидат педагогических наук, проректор по развитию СурГУ</p>
                </li>
              </ul>
            </div>
          </div>
        </div> ): null}

        <div className='show'>
          <div className='container'>
            <div className='content'>
              <ul className='g3'>
                <li className='i3_3'>
                  <p className='asideMarker'>{current["ИНФОРМАЦИЯ О ПРЕДЫДУЩЕЙ КОНФЕРЕНЦИИ"]}</p>
                </li>
                <li className='i3_9'>
                  <p>
                    <a href={`/${lang}/events`} className="mt_low">{current["previousScienceLeadSoc"]} </a>
                  </p>
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
                <li className='i3_9'>
                  <p className="">{current["scienceLeadSocRequest"]} <a href="mailto:cdc@scitech.ru" className="raleway_bold">cdc@scitech.ru</a></p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {lang === 'ru' ? (
        <div className="wrapper_partners content mb6">
          <div className="container">
            <ul className="g3">
              <li className="i3_3">
                <p className="asideMarker">ГЕНЕРАЛЬНЫЕ Партнеры</p>
              </li>
              <li className="i3_9">
                <ul className="g3">
                  <li className="i3_3">
                    <Partner
                      logo='/img/logo_tumen_gov.svg'
                      link="https://www.utmn.ru/"
                      name='Тюменский государственный университет'
                      alt='Тюменский государственный университет'
                      wide
                    ></Partner>
                  </li>
                  <li className='i3_3'>
                    <Partner
                      logo='/img/logo_nop.svg'
                      name='Экспертно-аналитический центр «Научно-образовательная политика» '
                      alt='«Научно-образовательная политика»'
                      wide
                    ></Partner>
                  </li>
                  <li className='i3_3'>
                    <Partner
                      logo='/img/sibnoc_black.svg'
                      link="http://sibnoc.ru"
                      name='Западно-Сибирский научно-образовательный центр мирового уровня'
                      alt='Западно-Сибирский научно-образовательный центр мирового уровня'
                      wide
                    ></Partner>
                  </li>
                  <li className='i3_3' style={{ paddingLeft: '1rem' }}>
                    <Partner
                      logo='/img/hse.svg'
                      link="https://www.hse.ru/"
                      name='Высшая школа экономики'
                      alt='Высшая школа экономики'
                    ></Partner>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        ) : null}
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
